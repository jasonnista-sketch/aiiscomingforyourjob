/**
 * RSS feed sources and keyword filter configuration.
 * Each source has a tier label used for card display.
 */

export const RSS_SOURCES = [
  {
    name: "IMF Blog",
    feedUrl: "https://www.imf.org/en/Blogs/rss",
    siteUrl: "https://www.imf.org/en/Blogs",
    tier: "institutional",
  },
  {
    name: "McKinsey Insights",
    feedUrl: "https://www.mckinsey.com/insights/rss",
    siteUrl: "https://www.mckinsey.com/insights",
    tier: "consulting",
  },
  {
    name: "World Economic Forum",
    feedUrl: "https://www.weforum.org/feed",
    siteUrl: "https://www.weforum.org",
    tier: "institutional",
  },
  {
    name: "Brookings Institution",
    feedUrl: "https://www.brookings.edu/feed/",
    siteUrl: "https://www.brookings.edu",
    tier: "research",
  },
  {
    name: "Pew Research Center",
    feedUrl: "https://www.pewresearch.org/feed/",
    siteUrl: "https://www.pewresearch.org",
    tier: "research",
  },
  {
    name: "MIT Technology Review",
    feedUrl: "https://www.technologyreview.com/feed/",
    siteUrl: "https://www.technologyreview.com",
    tier: "media",
  },
  {
    name: "Harvard Business Review",
    feedUrl: "https://hbr.org/resources/xml/rss/",
    siteUrl: "https://hbr.org",
    tier: "media",
  },
  {
    name: "OECD AI Policy Observatory",
    feedUrl: "https://oecd.ai/en/feed",
    siteUrl: "https://oecd.ai",
    tier: "institutional",
  },
];

/**
 * Keywords for filtering AI + workforce relevance.
 * Matched case-insensitively against title and description.
 */
export const AI_KEYWORDS = [
  "artificial intelligence",
  "automation",
  "future of work",
  "job displacement",
  "workforce",
  "generative ai",
  "productivity",
  "ai regulation",
  "machine learning",
  "labor market",
  "ai jobs",
  "ai workers",
  "ai workforce",
  "ai adoption",
  "ai impact",
  "ai transformation",
  "chatgpt",
  "large language model",
  "ai policy",
  "ai economy",
  "robots",
  "robotics",
  "autonomous",
  "ai skills",
  "reskilling",
  "upskilling",
  "ai ethics",
  "ai safety",
  "technological unemployment",
  "human capital",
  "digital transformation",
];

/** Tier display labels for feed cards */
export const TIER_LABELS = {
  institutional: "Report",
  research: "Research",
  consulting: "Analysis",
  media: "Article",
};

/** Max items returned by the API */
export const FEED_LIMIT = 12;

/** Cache time-to-live in seconds (24 hours) */
export const CACHE_TTL = 86400;
