import { parseRSS } from "@/lib/rss-parser";
import { RSS_SOURCES, TIER_LABELS, CACHE_TTL } from "@/lib/rss-sources";
import { getJobSearchTerms } from "@/lib/job-synonyms";

const FETCH_TIMEOUT = 8000;
const DEFAULT_LIMIT = 4;
const MAX_LIMIT = 20;
const MIN_STRICT_RESULTS = 3;

// AI terms that must appear alongside job/industry terms
const AI_TERMS = [
  "artificial intelligence",
  "\\bai\\b",
  "automation",
  "generative ai",
  "machine learning",
  "robot",
  "chatgpt",
  "large language model",
  "llm",
  "automate",
  "automated",
];

const aiPattern = new RegExp(AI_TERMS.join("|"), "i");

// ── Per-job in-memory cache ──────────────────────────────────
const cache = new Map();

function getCacheKey(job, industry) {
  return `job-research:${job}:${industry || ""}`;
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

// ── Build regex for job/industry terms ───────────────────────
function buildJobPattern(terms) {
  const escaped = terms.map((t) =>
    t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
  );
  return new RegExp(escaped.join("|"), "i");
}

// ── Core: fetch all feeds then filter ────────────────────────
async function fetchJobResearch(jobSlug, industry) {
  const results = await Promise.allSettled(RSS_SOURCES.map(fetchFeed));

  const allItems = results
    .filter((r) => r.status === "fulfilled")
    .flatMap((r) => r.value);

  // Build job-specific terms
  const jobTerms = getJobSearchTerms(jobSlug);
  const jobPattern = buildJobPattern(jobTerms);

  // Build broader industry terms
  const industryTerms = industry
    ? [industry.replace(/-/g, " ")]
    : [];
  const industryPattern = industryTerms.length
    ? buildJobPattern(industryTerms)
    : null;

  // Strict match: AI term + job term in title or description
  const strictMatches = [];
  // Broad match: AI term + industry term
  const broadMatches = [];

  for (const item of allItems) {
    const text = `${item.title} ${item.description}`;
    const hasAI = aiPattern.test(text);
    if (!hasAI) continue;

    if (jobPattern.test(text)) {
      strictMatches.push(item);
    } else if (industryPattern && industryPattern.test(text)) {
      broadMatches.push(item);
    }
  }

  // Use strict if we have enough, otherwise backfill with broad
  let combined;
  if (strictMatches.length >= MIN_STRICT_RESULTS) {
    combined = strictMatches;
  } else {
    // Merge, strict first, then broad, deduplicated
    const seen = new Set();
    combined = [];
    for (const item of [...strictMatches, ...broadMatches]) {
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
  const job = searchParams.get("job");
  const industry = searchParams.get("industry") || "";
  const limit = Math.min(
    parseInt(searchParams.get("limit") || DEFAULT_LIMIT, 10),
    MAX_LIMIT
  );

  if (!job) {
    return Response.json(
      { error: "Missing required 'job' query parameter" },
      { status: 400 }
    );
  }

  const cacheKey = getCacheKey(job, industry);
  const cached = getCached(cacheKey);

  if (cached) {
    return Response.json(
      {
        items: cached.items.slice(0, limit),
        totalItems: cached.items.length,
        cached: true,
        query: { job, industry },
      },
      {
        headers: {
          "Cache-Control": `public, s-maxage=${CACHE_TTL}, stale-while-revalidate=3600`,
        },
      }
    );
  }

  try {
    const items = await fetchJobResearch(job, industry);
    cache.set(cacheKey, { items, ts: Date.now() });

    return Response.json(
      {
        items: items.slice(0, limit),
        totalItems: items.length,
        cached: false,
        query: { job, industry },
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
          query: { job, industry },
        },
        {
          headers: { "Cache-Control": "public, s-maxage=60, stale-while-revalidate=3600" },
        }
      );
    }

    return Response.json(
      { items: [], totalItems: 0, error: "Failed to fetch feeds", query: { job, industry } },
      { status: 502 }
    );
  }
}
