import { parseRSS } from "@/lib/rss-parser";
import { RSS_SOURCES, AI_KEYWORDS, TIER_LABELS, CACHE_TTL } from "@/lib/rss-sources";
import { INDUSTRY_KEYWORDS } from "@/lib/industry-keywords";

const FETCH_TIMEOUT = 8000;
const DEFAULT_LIMIT = 6;
const MAX_LIMIT = 20;
const MIN_INDUSTRY_RESULTS = 3;

// AI terms that must appear alongside industry keywords
const AI_TERMS = [
  "artificial intelligence",
  "\\bai\\b",
  "automation",
  "generative ai",
  "machine learning",
  "large language model",
  "chatgpt",
  "ai tool",
  "ai agent",
];

const aiPattern = new RegExp(AI_TERMS.join("|"), "i");

// General AI + workforce keyword pattern (same as homepage fallback)
const generalPattern = new RegExp(
  AI_KEYWORDS.map((k) => k.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|"),
  "i"
);

// ── Per-industry in-memory cache ─────────────────────────────
const cache = new Map();

function getCacheKey(industry) {
  return `industry-research:${industry}`;
}

function getCached(key) {
  const entry = cache.get(key);
  if (!entry) return null;
  if (Date.now() - entry.ts > CACHE_TTL * 1000) {
    cache.delete(key);
    return null;
  }
  return entry;
}

// ── URL normalization for dedup ──────────────────────────────
function normalizeUrl(url) {
  try {
    const u = new URL(url);
    return (u.origin + u.pathname).replace(/\/+$/, "").toLowerCase();
  } catch {
    return url.toLowerCase().replace(/\/+$/, "");
  }
}

// ── Fetch a single feed with timeout ─────────────────────────
async function fetchFeed(source) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), FETCH_TIMEOUT);
  try {
    const res = await fetch(source.feedUrl, {
      signal: controller.signal,
      headers: { "User-Agent": "AIisComingForYourJob/1.0 (RSS Reader)" },
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const xml = await res.text();
    const items = parseRSS(xml, source.name);
    return items.map((item) => ({
      ...item,
      tier: source.tier,
      tierLabel: TIER_LABELS[source.tier] || "Article",
      siteUrl: source.siteUrl,
    }));
  } finally {
    clearTimeout(timer);
  }
}

// ── Build regex from keyword list ────────────────────────────
function buildPattern(terms) {
  const escaped = terms.map((t) =>
    t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
  );
  return new RegExp(escaped.join("|"), "i");
}

// ── Core: fetch all feeds then filter by industry ────────────
async function fetchIndustryResearch(industry) {
  const results = await Promise.allSettled(RSS_SOURCES.map(fetchFeed));

  const allItems = results
    .filter((r) => r.status === "fulfilled")
    .flatMap((r) => r.value);

  // Build industry-specific keyword pattern
  const keywords = INDUSTRY_KEYWORDS[industry];
  const industryPattern = keywords ? buildPattern(keywords) : null;

  // Industry matches: AI term + industry keyword
  const industryMatches = [];
  // General fallback: any AI + workforce keyword (same as homepage)
  const generalMatches = [];

  for (const item of allItems) {
    const text = `${item.title} ${item.description}`;
    const hasAI = aiPattern.test(text);
    if (!hasAI) continue;

    if (industryPattern && industryPattern.test(text)) {
      industryMatches.push(item);
    } else if (generalPattern.test(text)) {
      generalMatches.push(item);
    }
  }

  // Use industry matches if we have enough, otherwise backfill with general
  let combined;
  if (industryMatches.length >= MIN_INDUSTRY_RESULTS) {
    combined = industryMatches;
  } else {
    const seen = new Set();
    combined = [];
    for (const item of [...industryMatches, ...generalMatches]) {
      const key = normalizeUrl(item.link);
      if (!seen.has(key)) {
        seen.add(key);
        combined.push(item);
      }
    }
  }

  // Deduplicate
  const seen = new Set();
  const unique = combined.filter((item) => {
    const key = normalizeUrl(item.link);
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });

  // Sort newest first; undated pushed to end
  unique.sort((a, b) => {
    if (!a.pubDate && !b.pubDate) return 0;
    if (!a.pubDate) return 1;
    if (!b.pubDate) return -1;
    return new Date(b.pubDate) - new Date(a.pubDate);
  });

  return unique;
}

// ── Route handler ────────────────────────────────────────────
export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const industry = searchParams.get("industry") || "";
  const limit = Math.min(
    parseInt(searchParams.get("limit") || DEFAULT_LIMIT, 10),
    MAX_LIMIT
  );

  if (!industry) {
    return Response.json(
      { error: "Missing required 'industry' query parameter" },
      { status: 400 }
    );
  }

  const cacheKey = getCacheKey(industry);
  const cached = getCached(cacheKey);

  if (cached) {
    return Response.json(
      {
        items: cached.items.slice(0, limit),
        totalItems: cached.items.length,
        cached: true,
        query: { industry },
      },
      {
        headers: {
          "Cache-Control": `public, s-maxage=${CACHE_TTL}, stale-while-revalidate=3600`,
        },
      }
    );
  }

  try {
    const items = await fetchIndustryResearch(industry);
    cache.set(cacheKey, { items, ts: Date.now() });

    return Response.json(
      {
        items: items.slice(0, limit),
        totalItems: items.length,
        cached: false,
        query: { industry },
      },
      {
        headers: {
          "Cache-Control": `public, s-maxage=${CACHE_TTL}, stale-while-revalidate=3600`,
        },
      }
    );
  } catch {
    // Serve stale cache as fallback
    const stale = cache.get(cacheKey);
    if (stale) {
      return Response.json(
        {
          items: stale.items.slice(0, limit),
          totalItems: stale.items.length,
          cached: true,
          stale: true,
          query: { industry },
        },
        {
          headers: { "Cache-Control": "public, s-maxage=60, stale-while-revalidate=3600" },
        }
      );
    }

    return Response.json(
      { items: [], totalItems: 0, error: "Failed to fetch feeds", query: { industry } },
      { status: 502 }
    );
  }
}
