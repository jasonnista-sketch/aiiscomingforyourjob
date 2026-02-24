import { parseRSS } from "@/lib/rss-parser";
import {
  RSS_SOURCES,
  AI_KEYWORDS,
  TIER_LABELS,
  FEED_LIMIT,
  CACHE_TTL,
} from "@/lib/rss-sources";

const FETCH_TIMEOUT = 8000;

// ── In-memory cache ──────────────────────────────────────────
let cache = { items: null, ts: 0 };

function isCacheFresh() {
  return cache.items && Date.now() - cache.ts < CACHE_TTL * 1000;
}

// ── Keyword matching ─────────────────────────────────────────
const keywordPattern = new RegExp(
  AI_KEYWORDS.map((k) => k.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|"),
  "i"
);

function matchesKeywords(item) {
  return (
    keywordPattern.test(item.title) || keywordPattern.test(item.description)
  );
}

// ── URL normalization for dedup ──────────────────────────────
function normalizeUrl(url) {
  try {
    const u = new URL(url);
    // Strip trailing slash, query params, and fragment
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

// ── Fetch, filter, dedupe, sort ──────────────────────────────
async function fetchAllFeeds() {
  const results = await Promise.allSettled(RSS_SOURCES.map(fetchFeed));

  const allItems = results
    .filter((r) => r.status === "fulfilled")
    .flatMap((r) => r.value);

  // Filter for AI/workforce relevance
  const relevant = allItems.filter(matchesKeywords);

  // Deduplicate by normalized URL
  const seen = new Set();
  const unique = relevant.filter((item) => {
    const key = normalizeUrl(item.link);
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });

  // Sort newest first; undated items go to end
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
  const limit = Math.min(parseInt(searchParams.get("limit") || FEED_LIMIT, 10), 50);
  const forceRefresh = searchParams.get("refresh") === "true";

  // Serve from cache if fresh and not forcing refresh
  if (!forceRefresh && isCacheFresh()) {
    return Response.json(
      {
        items: cache.items.slice(0, limit),
        total: cache.items.length,
        cached: true,
        sources: RSS_SOURCES.length,
      },
      {
        headers: {
          "Cache-Control": `public, s-maxage=${CACHE_TTL}, stale-while-revalidate=3600`,
        },
      }
    );
  }

  try {
    const items = await fetchAllFeeds();
    cache = { items, ts: Date.now() };

    return Response.json(
      {
        items: items.slice(0, limit),
        total: items.length,
        cached: false,
        sources: RSS_SOURCES.length,
      },
      {
        headers: {
          "Cache-Control": `public, s-maxage=${CACHE_TTL}, stale-while-revalidate=3600`,
        },
      }
    );
  } catch (err) {
    // Serve stale cache as fallback
    if (cache.items) {
      return Response.json(
        {
          items: cache.items.slice(0, limit),
          total: cache.items.length,
          cached: true,
          stale: true,
          sources: RSS_SOURCES.length,
        },
        {
          headers: {
            "Cache-Control": `public, s-maxage=60, stale-while-revalidate=3600`,
          },
        }
      );
    }

    return Response.json(
      { items: [], total: 0, error: "Failed to fetch feeds", sources: 0 },
      { status: 502 }
    );
  }
}
