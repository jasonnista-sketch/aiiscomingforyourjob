import { INDUSTRIES, allJobs } from "@/lib/data";

const BASE = "https://www.aiiscomingforyourjob.com";
const CONTENT_LAST_UPDATED = "2026-02-26";

export default function sitemap() {
  // Static pages — homepage changes with every deploy (new jobs, stats)
  const staticPages = [
    { url: BASE, lastModified: CONTENT_LAST_UPDATED, changeFrequency: "daily", priority: 1.0 },
  ];

  // Industry pages — job counts and listings change frequently
  const industryPages = INDUSTRIES.map((ind) => ({
    url: `${BASE}/${ind.id}`,
    lastModified: CONTENT_LAST_UPDATED,
    changeFrequency: "daily",
    priority: 0.8,
  }));

  // Job pages — individual job content changes less often
  const jobPages = allJobs.map((job) => ({
    url: `${BASE}/${job.industry.id}/${job.id}`,
    lastModified: CONTENT_LAST_UPDATED,
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  return [...staticPages, ...industryPages, ...jobPages];
}
