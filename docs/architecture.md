# Architecture Reference

## Framework
Next.js 14 with App Router. Deployed on Vercel. No database — all data is in `lib/data.js`.

## Routing

### Three page types:
```
/                           → Homepage (app/page.js)
/[industry]                 → Industry page (app/[industry]/page.js)
/[industry]/[slug]          → Job detail page (app/[industry]/[slug]/page.js)
```

### URL Convention
- Industry slugs: lowercase, hyphenated → `healthcare`, `finance`, `hr-admin`
- Job slugs: lowercase, hyphenated → `pharmacist`, `primary-care-doctor`, `auto-mechanic`
- Full job URL: `/{industry.id}/{job.id}` → `/healthcare/pharmacist`
- The industry `id` and job `id` fields in data.js ARE the URL slugs

## Static Generation
Both industry and job pages use `generateStaticParams()` to pre-render at build time.

```js
// In app/[industry]/[slug]/page.js
export function generateStaticParams() {
  return INDUSTRIES.flatMap(ind =>
    ind.jobs.map(j => ({ industry: ind.id, slug: j.id }))
  );
}
```

This means:
- Every job in `lib/data.js` gets a static HTML page at build time
- Adding a new job = adding to data.js + rebuilding
- No API routes, no server-side rendering, no dynamic pages
- `npm run build` must succeed for deploy

## Data Flow
```
lib/data.js
  └── INDUSTRIES array
       └── Each industry has jobs array
            └── Each job has all content fields
                 
app/page.js (homepage)
  ├── Imports INDUSTRIES, allJobs
  ├── Computes stats (total jobs, avg risk, etc.)
  ├── Renders leaderboard (top 10 by risk)
  └── Renders industry grid with job counts

app/[industry]/page.js
  ├── Imports getIndustry()
  ├── Gets industry by slug
  └── Renders all jobs in that industry as cards

app/[industry]/[slug]/page.js
  ├── Imports getJob()
  ├── Gets job + parent industry by slug
  └── Renders full job page with all sections
```

## Metadata / SEO
Each page generates its own metadata:

```js
export function generateMetadata({ params }) {
  const result = getJob(params.slug);
  const { job, industry } = result;
  return {
    title: `Will AI Replace ${job.title}s? — ${job.risk}% Risk Score`,
    description: job.summary.slice(0, 155),
    openGraph: { ... },
  };
}
```

## Build & Deploy
```bash
npm run dev      # Local development (localhost:3000)
npm run build    # Production build (must pass for Vercel deploy)
npm run start    # Serve production build locally
```

Vercel auto-deploys from GitHub on push to main branch.

## Common Build Errors
- **Missing job ID in related careers:** If a job's `related` array references an ID that doesn't exist in data.js, the related careers section will break. Always verify related IDs exist.
- **Duplicate job IDs:** Two jobs with the same `id` will cause routing conflicts. IDs must be unique across ALL industries.
- **Special characters in strings:** Use escaped quotes (`\"`) inside strings. Template literals with backticks are safer for content with apostrophes.

## Performance Notes
- All pages are static HTML — near-instant load
- No client-side data fetching
- Images (if any) should use Next.js Image component
- Fonts loaded via Google Fonts in layout.js
