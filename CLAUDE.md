AIiscomingforyourjob.com — CLAUDE.md
What This Project Is
A Next.js directory site showing how AI impacts every profession. 243 jobs across 15 industries. Each job gets its own page with risk scores, AI capability breakdowns, tools, skills, and resources.
Live at: https://www.aiiscomingforyourjob.com
Tech Stack

Framework: Next.js 14 (App Router)
Hosting: Vercel
Styling: Inline styles + globals.css (no Tailwind, no CSS modules)
Fonts: Outfit (headings), DM Mono (labels/data), system sans-serif (body)
Data: Static JS file at lib/data.js — all job content lives here
Rendering: Static generation via generateStaticParams()

Project Structure
app/
  layout.js              — Root layout, metadata, font imports
  page.js                — Homepage (search, leaderboard, industry grid)
  globals.css            — All styles
  [industry]/
    page.js              — Industry listing page (e.g. /healthcare)
    [slug]/
      page.js            — Individual job page (e.g. /healthcare/pharmacist)
components/
  Header.js              — Breadcrumb nav header
lib/
  data.js                — ALL content data (industries + jobs)
docs/                    — Reference docs (read on demand, not every session)
Critical Rules
Data Structure
All content lives in lib/data.js. See docs/data-format.md for the exact object shape.
DO NOT create separate data files per industry. Everything stays in one INDUSTRIES array.
Adding New Jobs
When adding jobs to lib/data.js:

Read docs/data-format.md for the CURRENT job object shape (it has evolved)
Read docs/content-guidelines.md for tone, scoring criteria, and content rules
Add jobs to the correct industry's jobs array in lib/data.js
The job URL is /{industry.id}/{job.id} — e.g. /healthcare/pharmacist
Test that generateStaticParams() picks up the new job
Keep each job's content self-contained — no external references

Styling

Dark theme: #060918 (page bg), #0b0f1a (card bg), #151a28 (borders)
Text: #ffffff (headings), #d4dae6 (body), #8891a8 (secondary), #5a6380 (muted)
All styling is inline React style={{}} objects — do NOT create CSS classes for new components
See docs/design-system.md for full color palette and component patterns

Industry Accent Colors
Healthcare:          #00e5a0
Legal:               #ffb800
Finance:             #8b5cf6
Creative:            #ff6b6b
Technology:          #00d2ff
Education:           #e056a0
Construction:        #f97316
Real Estate:         #10b981
Transportation:      #06b6d4
Government:          #6366f1
Hospitality:         #f59e0b
Retail:              #ec4899
Manufacturing:       #a3a3a3
Science:             #22d3ee
HR & Admin:          #a78bfa
Risk Score Labels
≤15  → Very Low  (#10b981)
≤30  → Low       (#34d399)
≤45  → Moderate  (#fbbf24)
≤60  → High      (#f97316)
>60  → Very High (#ef4444)
Session Workflow

Start focused: One task per session (e.g., "add Healthcare jobs" or "fix mobile layout")
Read docs first: Before adding content, read docs/data-format.md and docs/content-guidelines.md
Batch small: Add 3-5 jobs per session max to avoid context window exhaustion
Verify after adding: Run npm run build to confirm static generation works
Commit often: Git commit after each batch of jobs is added and verified

Common Tasks
"Add jobs for [industry]"
→ Read docs/data-format.md + docs/content-guidelines.md
→ Add jobs to the industry's array in lib/data.js
→ Run npm run build to verify
"Fix styling on [page]"
→ Read docs/design-system.md
→ All styles are inline in the page component — edit app/jobs/[slug]/page.js etc.
"Update the homepage"
→ Homepage is app/page.js
→ Stats (role count, industry count, avg risk) are computed from the data
→ Leaderboard pulls top 10 by risk score
Reference Docs (read on demand)

docs/data-format.md — Exact shape of job objects with all fields
docs/design-system.md — Colors, fonts, spacing, component patterns
docs/content-guidelines.md — Tone, scoring criteria, content rules
docs/architecture.md — Routing, static generation, file organization
docs/master-job-list.md — Full list of 243 jobs to build (with BLS codes and priorities)
