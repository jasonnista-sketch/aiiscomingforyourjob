/**
 * Zero-dependency RSS/Atom parser using regex.
 * Handles CDATA, HTML entities, RSS 2.0 and Atom formats.
 * Returns normalized items: { title, link, description, pubDate, source }
 */

const ENTITIES = {
  "&amp;": "&",
  "&lt;": "<",
  "&gt;": ">",
  "&quot;": '"',
  "&apos;": "'",
  "&#39;": "'",
};

function decodeEntities(str) {
  if (!str) return "";
  return str
    .replace(/&(?:amp|lt|gt|quot|apos|#39);/g, (m) => ENTITIES[m] || m)
    .replace(/&#(\d+);/g, (_, n) => String.fromCharCode(Number(n)))
    .replace(/&#x([0-9a-fA-F]+);/g, (_, h) =>
      String.fromCharCode(parseInt(h, 16))
    );
}

function stripCDATA(str) {
  if (!str) return "";
  return str.replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1");
}

function stripHTML(str) {
  if (!str) return "";
  return str.replace(/<[^>]*>/g, "").trim();
}

function extractTag(xml, tag) {
  // Try self-closing first, then content tags
  const re = new RegExp(
    `<${tag}(?:\\s[^>]*)?>([\\s\\S]*?)</${tag}>`,
    "i"
  );
  const match = xml.match(re);
  if (!match) return "";
  return decodeEntities(stripCDATA(match[1].trim()));
}

function extractAttr(xml, tag, attr) {
  const re = new RegExp(`<${tag}[^>]*?${attr}=["']([^"']*)["']`, "i");
  const match = xml.match(re);
  return match ? decodeEntities(match[1]) : "";
}

function parseDate(str) {
  if (!str) return null;
  const d = new Date(str);
  return isNaN(d.getTime()) ? null : d.toISOString();
}

function isAtomFeed(xml) {
  return /<feed[\s>]/i.test(xml);
}

function parseRSSItems(xml) {
  const items = [];
  const itemRegex = /<item[\s>]([\s\S]*?)<\/item>/gi;
  let match;

  while ((match = itemRegex.exec(xml)) !== null) {
    const block = match[1];
    items.push({
      title: stripHTML(extractTag(block, "title")),
      link: extractTag(block, "link") || extractAttr(block, "link", "href"),
      description: stripHTML(extractTag(block, "description") || extractTag(block, "content:encoded")),
      pubDate: parseDate(extractTag(block, "pubDate") || extractTag(block, "dc:date")),
    });
  }

  return items;
}

function parseAtomItems(xml) {
  const items = [];
  const entryRegex = /<entry[\s>]([\s\S]*?)<\/entry>/gi;
  let match;

  while ((match = entryRegex.exec(xml)) !== null) {
    const block = match[1];
    items.push({
      title: stripHTML(extractTag(block, "title")),
      link:
        extractAttr(block, 'link[rel="alternate"]', "href") ||
        extractAttr(block, "link", "href"),
      description: stripHTML(
        extractTag(block, "summary") || extractTag(block, "content")
      ),
      pubDate: parseDate(
        extractTag(block, "published") || extractTag(block, "updated")
      ),
    });
  }

  return items;
}

/**
 * Parse an RSS or Atom XML string into normalized items.
 * @param {string} xml - Raw XML string
 * @param {string} sourceName - Name of the source for attribution
 * @returns {{ title, link, description, pubDate, source }[]}
 */
export function parseRSS(xml, sourceName) {
  if (!xml || typeof xml !== "string") return [];

  const items = isAtomFeed(xml) ? parseAtomItems(xml) : parseRSSItems(xml);

  return items
    .filter((item) => item.title && item.link)
    .map((item) => ({
      title: item.title,
      link: item.link,
      description: item.description ? item.description.slice(0, 300) : "",
      pubDate: item.pubDate,
      source: sourceName,
    }));
}
