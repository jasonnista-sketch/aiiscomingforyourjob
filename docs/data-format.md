# Data Format Reference

## Overview
All content lives in `lib/data.js` as a single exported `INDUSTRIES` array. Each industry contains a `jobs` array. The job page component reads from this data to render everything.

## Industry Object
```js
{
  id: "healthcare",              // URL slug: /{id} (also parent path for jobs)
  name: "Healthcare",            // Display name
  icon: "🏥",                    // Emoji for cards
  accent: "#00e5a0",             // Industry accent color (used throughout)
  desc: "From diagnostics to...", // One-line description for industry cards
  jobs: [ /* job objects */ ]
}
```

## Job Object (Current Format)
The job page has evolved. Here is the COMPLETE current shape:

```js
{
  // ─── CORE IDENTITY ───
  id: "pharmacist",                    // URL slug: /{industry.id}/{id}
  title: "Pharmacist",                 // Page display title (SEO-optimized)
  
  // ─── SCORES ───
  risk: 52,                            // 0-100, automation risk percentage
  augment: 80,                         // 0-100, AI career boost potential
  
  // ─── OVERVIEW TEXT ───
  summary: "Partially — the traditional count-and-dispense...",
  // 2-3 sentences. Opens with the verdict. Used in meta description too.
  
  keyInsight: "Pharmacy robots can fill 300 prescriptions per hour...",
  // One punchy, quotable insight. Shows in callout box.
  
  // ─── BLS STATS ───
  blsStats: {
    medianSalary: "$136,030",          // Formatted string with $
    totalJobs: "322,200",              // Formatted string with commas
    growth: "-2%",                     // Include + or - sign
    growthLabel: "Declining",          // "Growing", "Stable", "Declining"
  },
  
  // ─── AI CAPABILITY BREAKDOWN ───
  // Three tiers showing where AI stands today
  aiCapability: {
    mastered: [
      // Things AI has already conquered in this role
      {
        title: "Prescription dispensing",
        desc: "Robotic dispensing systems count, label, and package medications with near-perfect accuracy..."
      },
      {
        title: "Drug interaction screening",
        desc: "AI instantly checks every prescription against a patient's full medication list..."
      }
    ],
    improving: [
      // Things AI is getting better at but humans still lead
      {
        title: "Medication therapy optimization",
        desc: "AI is learning to suggest medication adjustments based on patient outcomes data..."
      }
    ],
    humanOnly: [
      // Things humans will always do
      {
        title: "Patient medication counseling",
        desc: "Explaining how to take medications, managing patient concerns about side effects..."
      }
    ]
  },
  
  // ─── HOW AI IS CHANGING THIS ROLE ───
  aiChanging: "Automated dispensing systems and AI drug interaction checking are reducing...",
  // 2-3 sentences describing the shift. Shows under "How Is AI Changing the [Role] Role?" heading.
  
  // ─── TOOLS ───
  tools: [
    {
      name: "Omnicell",
      url: "https://www.omnicell.com",
      desc: "AI-powered automated dispensing and pharmacy inventory management"
    }
    // 3-4 tools per job, with real URLs
  ],
  
  // ─── SKILLS ───
  // Each skill now maps to a tool where applicable
  skills: [
    {
      text: "Oversee and troubleshoot automated dispensing systems while focusing on clinical oversight",
      tool: "Omnicell"  // Optional: links to a tool above
    },
    {
      text: "Provide direct patient care services — immunizations, health screenings, MTM",
      tool: null  // No tool mapping, standalone skill
    }
  ],
  
  // ─── FAQ ───
  faq: [
    {
      q: "Will pharmacy robots replace pharmacists?",
      a: "They're already replacing the dispensing function — robots fill prescriptions faster..."
    }
    // 2-3 FAQs per job. Good for SEO.
  ],
  
  // ─── RESOURCES ───
  resources: [
    {
      title: "APhA — American Pharmacists Association",
      url: "https://www.pharmacist.com"
    }
    // 2-4 resources from trusted industry sources
  ],
  
  // ─── RELATED CAREERS ───
  // References to other job IDs in the same or adjacent industries
  related: ["nurse", "radiologist", "home-health-aide", "nursing-assistant"]
  // 3-4 related job IDs. Must exist in data.js.
}
```

## Helper Functions in data.js
```js
// Get all jobs as flat array with industry reference
export const allJobs = INDUSTRIES.flatMap(ind => 
  ind.jobs.map(j => ({ ...j, industry: ind }))
);

// Risk score → label + color
export function riskLabel(r) {
  if (r <= 15) return { text: "Very Low", color: "#10b981" };
  if (r <= 30) return { text: "Low", color: "#34d399" };
  if (r <= 45) return { text: "Moderate", color: "#fbbf24" };
  if (r <= 60) return { text: "High", color: "#f97316" };
  return { text: "Very High", color: "#ef4444" };
}

// Lookup by slug
export function getIndustry(slug) { ... }
export function getJob(slug) { ... }
```

## Important Notes
- **Old vs new format:** The original data.js had a simpler shape (no blsStats, no aiCapability, no faq, skills were plain strings). The job page component has been updated to render the new fields. When adding jobs, use the NEW format above.
- **Backward compatibility:** If a field is missing, the page component should handle it gracefully (conditional rendering). But always include all fields for new jobs.
- **Tool URLs must be real.** Verify that tool URLs actually resolve before adding them.
- **BLS data source:** Employment stats from BLS OES May 2024 and Employment Projections 2024-34.
