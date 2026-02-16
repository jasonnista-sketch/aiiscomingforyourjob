# AI Is Coming For Your Job

## Project Overview
The AI Disruption Directory — a Next.js 14 site that shows how AI is transforming every profession. Users explore by industry, view job-level AI risk scores, discover tools to learn, skills to develop, and resources to stay ahead.

## Tech Stack
- **Framework:** Next.js 14 (App Router)
- **Hosting:** Vercel (auto-deploys from GitHub `main` branch)
- **Styling:** CSS in `app/globals.css` (no Tailwind, no CSS modules)
- **Fonts:** Outfit, DM Sans, DM Mono (via Google Fonts)
- **Domain:** https://aiiscomingforyourjob.com

## Project Structure
```
app/                  → Pages and layouts
  page.js             → Homepage (hero, search, leaderboard, industry grid, feed, email capture)
  layout.js           → Root layout (fonts, footer, ambient background)
  globals.css         → All styles
  industries/[slug]/  → Industry detail pages
  jobs/[slug]/        → Job detail pages
  sitemap.js          → SEO sitemap
  not-found.js        → 404 page
components/           → Reusable UI components
lib/data.js           → All industry and job data (single source of truth)
```

## Key Data
- 8 industries, ~20 job roles
- Each job has: risk score, augmentation %, summary, key insight, AI tools, skills, resources
- All data lives in `lib/data.js`

## Git Workflow
- Push to `main` triggers Vercel deployment
- Claude Code pushes to `claude/*` branches → merge via PR on GitHub
