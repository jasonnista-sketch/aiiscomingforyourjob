import { INDUSTRIES, allJobs } from "@/lib/data";

const BASE = "https://aiiscomingforyourjob.com";

export default function sitemap() {
  const now = new Date().toISOString();

  // Static pages
  const staticPages = [
    { url: BASE, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
  ];

  // Industry pages
  const industryPages = INDUSTRIES.map((ind) => ({
    url: `${BASE}/industries/${ind.id}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  // Job pages
  const jobPages = allJobs.map((job) => ({
    url: `${BASE}/jobs/${job.id}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticPages, ...industryPages, ...jobPages];
}
