import Link from "next/link";
import { notFound } from "next/navigation";
import { allJobs, getJob, getRelatedJobs, riskLabel } from "@/lib/data";
import Header from "@/components/Header";
import StructuredData from "@/components/StructuredData";

const SITE_URL = "https://aiiscomingforyourjob.com";
const LAST_UPDATED = "2026-02-16";

export function generateStaticParams() {
  return allJobs.map(j => ({ slug: j.id }));
}

export function generateMetadata({ params }) {
  const result = getJob(params.slug);
  if (!result) return {};
  const { job, industry } = result;
  const rl = riskLabel(job.risk);
  return {
    title: `Will AI Replace ${job.title}s? ${rl.text} Risk (${job.risk}%) | AI Is Coming For Your Job`,
    description: `${job.verdict || job.summary.slice(0, 140)} AI automation risk: ${job.risk}%. See tools, skills, and career strategies.`,
    openGraph: {
      title: `Will AI Replace ${job.title}s? — ${job.risk}% Risk Score`,
      description: job.verdict || job.summary.slice(0, 155),
      url: `${SITE_URL}/jobs/${job.id}`,
      siteName: "AI Is Coming For Your Job",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `Will AI Replace ${job.title}s? ${job.risk}% Risk`,
      description: job.verdict || job.summary.slice(0, 155),
    },
    alternates: {
      canonical: `${SITE_URL}/jobs/${job.id}`,
    },
  };
}

export default function JobPage({ params }) {
  const result = getJob(params.slug);
  if (!result) notFound();
  const { job, industry } = result;
  const rl = riskLabel(job.risk);
  const relatedJobs = getRelatedJobs(job.id, 4);

  // --- Structured Data ---
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: industry.name, item: `${SITE_URL}/industries/${industry.id}` },
      { "@type": "ListItem", position: 3, name: job.title },
    ],
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `Will AI Replace ${job.title}s? ${rl.text} Risk Analysis`,
    description: job.verdict || job.summary,
    datePublished: "2025-06-01",
    dateModified: LAST_UPDATED,
    url: `${SITE_URL}/jobs/${job.id}`,
    publisher: {
      "@type": "Organization",
      name: "AI Is Coming For Your Job",
      url: SITE_URL,
    },
    about: {
      "@type": "Occupation",
      name: job.title,
      occupationalCategory: industry.name,
      skills: job.skills?.map(s => typeof s === "string" ? s : s.text).join(", "),
      ...(job.blsData ? {
        estimatedSalary: {
          "@type": "MonetaryAmountDistribution",
          name: "Median Annual Salary",
          currency: "USD",
          median: parseFloat(job.blsData.salary.replace(/[$,]/g, "")),
        },
      } : {}),
    },
  };

  const faqSchema = job.faqs?.length ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: job.faqs.map(f => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  } : null;

  // Table of contents entries — only include sections that have data
  const hasTiers = job.aiMastered && job.aiImproving && job.humanEssential;
  const tocItems = [
    { id: "verdict", label: "Quick Verdict" },
    { id: "ai-changing", label: `How AI Is Changing This Role` },
    ...(hasTiers ? [{ id: "ai-capability", label: "AI Capability Breakdown" }] : []),
    { id: "tools-skills", label: "Tools & Skills" },
    ...(job.faqs?.length ? [{ id: "faq", label: "FAQ" }] : []),
    { id: "resources", label: "Resources" },
    ...(relatedJobs.length ? [{ id: "related", label: "Related Careers" }] : []),
  ];

  return (
    <>
      <StructuredData data={breadcrumbSchema} />
      <StructuredData data={articleSchema} />
      {faqSchema && <StructuredData data={faqSchema} />}

      <Header industry={industry} job={job} />

      <article className="job-page-wrap" style={{ padding: "40px 0 80px", "--page-accent": industry.accent }}>
        <div className="job-page-glow" />
        <Link href={`/industries/${industry.id}`} className="back-btn" style={{ textDecoration: "none" }}>← {industry.name}</Link>

        {/* ═══ HERO: Industry Tag + H1 + Verdict ═══ */}
        <div style={{ marginTop: 28, marginBottom: 32, animation: "fadeUp .5s ease both" }}>
          <div style={{ fontFamily: "'DM Mono',monospace", fontSize: 11, letterSpacing: 2, textTransform: "uppercase", color: industry.accent, marginBottom: 12 }}>{industry.name}</div>
          <h1 style={{ fontFamily: "'Outfit',sans-serif", fontSize: "clamp(26px,4vw,40px)", fontWeight: 800, letterSpacing: -1.5, lineHeight: 1.15, marginBottom: 16 }}>
            Will AI Replace {job.title}s?
          </h1>
          {/* Verdict — optimized for AI Overview extraction */}
          <p id="verdict" className="job-verdict" style={{ fontSize: 17, color: "#c0c7d8", lineHeight: 1.8, maxWidth: 640 }}>
            {job.verdict || job.summary}
          </p>
        </div>

        {/* ═══ RISK METERS ═══ */}
        <div className="job-meters" style={{ animation: "fadeUp .5s ease .08s both" }}>
          <div className="job-meter-card">
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 12, fontFamily: "'DM Mono',monospace", fontSize: 12 }}>
              <span style={{ color: "#5a6380", letterSpacing: 1, textTransform: "uppercase" }}>AI Replacement Risk</span>
              <span style={{ color: rl.color, fontWeight: 700 }}>{job.risk}% · {rl.text}</span>
            </div>
            <div style={{ height: 6, background: "#151a28", borderRadius: 3, overflow: "hidden" }}>
              <div className="meter-bar" style={{ width: `${job.risk}%`, background: `linear-gradient(90deg,#fbbf24,${rl.color})` }} />
            </div>
            <p style={{ fontSize: 12, color: "#5a6380", marginTop: 8, lineHeight: 1.5 }}>How likely AI is to fully automate core tasks in this job within 5 years.</p>
          </div>
          <div className="job-meter-card">
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 12, fontFamily: "'DM Mono',monospace", fontSize: 12 }}>
              <span style={{ color: "#5a6380", letterSpacing: 1, textTransform: "uppercase" }}>AI Career Boost Potential</span>
              <span style={{ color: industry.accent, fontWeight: 700 }}>{job.augment}%</span>
            </div>
            <div style={{ height: 6, background: "#151a28", borderRadius: 3, overflow: "hidden" }}>
              <div className="meter-bar" style={{ width: `${job.augment}%`, background: `linear-gradient(90deg,${industry.accent}88,${industry.accent})` }} />
            </div>
            <p style={{ fontSize: 12, color: "#5a6380", marginTop: 8, lineHeight: 1.5 }}>How much you can level up by learning the AI tools and skills below.</p>
          </div>
        </div>

        {/* ═══ BLS SNAPSHOT ═══ */}
        {job.blsData && (
          <div className="bls-snapshot" style={{ animation: "fadeUp .5s ease .12s both" }}>
            <div className="bls-item">
              <span className="bls-value">{job.blsData.salary}</span>
              <span className="bls-label">Median Salary</span>
            </div>
            <div className="bls-divider" />
            <div className="bls-item">
              <span className="bls-value">{job.blsData.employment}</span>
              <span className="bls-label">U.S. Jobs</span>
            </div>
            <div className="bls-divider" />
            <div className="bls-item">
              <span className="bls-value">{job.blsData.growth}</span>
              <span className="bls-label">{job.blsData.growthLabel}</span>
            </div>
            <div className="bls-source">{job.blsData.source}</div>
          </div>
        )}

        {/* ═══ TABLE OF CONTENTS ═══ */}
        <nav className="job-toc" style={{ animation: "fadeUp .5s ease .15s both" }}>
          <div className="job-toc-label">On this page</div>
          <div className="job-toc-links">
            {tocItems.map(item => (
              <a key={item.id} href={`#${item.id}`} className="job-toc-link">{item.label}</a>
            ))}
          </div>
        </nav>

        {/* ═══ HOW AI IS CHANGING THIS ROLE ═══ */}
        <section id="ai-changing" style={{ marginBottom: 40, animation: "fadeUp .5s ease .18s both" }}>
          <h2 className="job-section-heading">How Is AI Changing the {job.title} Role?</h2>
          <p style={{ fontSize: 16, color: "#8891a8", lineHeight: 1.85, maxWidth: 680, marginBottom: 24 }}>{job.summary}</p>

          {/* Key Insight */}
          <div className="job-insight" style={{ borderLeftColor: industry.accent }}>
            <div style={{ fontFamily: "'DM Mono',monospace", fontSize: 11, letterSpacing: 2, textTransform: "uppercase", color: industry.accent, marginBottom: 10 }}>Key Insight</div>
            <p style={{ fontSize: 15, lineHeight: 1.8, color: "#8891a8", fontStyle: "italic" }}>{job.keyInsight}</p>
          </div>
        </section>

        {/* ═══ AI CAPABILITY BREAKDOWN ═══ */}
        {hasTiers && (
          <section id="ai-capability" style={{ marginBottom: 40, animation: "fadeUp .5s ease .22s both" }}>
            <h2 className="job-section-heading">AI Capability Breakdown for {job.title}s</h2>
            <p className="job-section-sub">Where AI stands today — and where humans remain essential.</p>
            <div className="ai-tiers-grid">
              <div className="ai-tier-col tier-mastered">
                <div className="ai-tier-header">
                  <span className="ai-tier-header-icon">⚡</span> What AI Has Mastered
                </div>
                {job.aiMastered.map((item, i) => (
                  <div key={i} className="ai-tier-item">
                    <div className="ai-tier-item-title">{item.title}</div>
                    <div className="ai-tier-item-desc">{item.desc}</div>
                  </div>
                ))}
              </div>
              <div className="ai-tier-col tier-improving">
                <div className="ai-tier-header">
                  <span className="ai-tier-header-icon">🔄</span> What AI Is Improving On
                </div>
                {job.aiImproving.map((item, i) => (
                  <div key={i} className="ai-tier-item">
                    <div className="ai-tier-item-title">{item.title}</div>
                    <div className="ai-tier-item-desc">{item.desc}</div>
                  </div>
                ))}
              </div>
              <div className="ai-tier-col tier-human">
                <div className="ai-tier-header">
                  <span className="ai-tier-header-icon">🧠</span> What {job.title}s Will Always Do
                </div>
                {job.humanEssential.map((item, i) => (
                  <div key={i} className="ai-tier-item">
                    <div className="ai-tier-item-title">{item.title}</div>
                    <div className="ai-tier-item-desc">{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ═══ TOOLS & SKILLS ═══ */}
        <section id="tools-skills" style={{ marginBottom: 40, animation: "fadeUp .5s ease .26s both" }}>
          <h2 className="job-section-heading">How {job.title}s Can Harness AI</h2>
          <p className="job-section-sub">The tools to learn and the skills to build — starting now.</p>

          <h3 style={{ fontFamily: "'Outfit',sans-serif", fontSize: 18, fontWeight: 700, letterSpacing: -.3, marginBottom: 14, color: "#d4dae6" }}>AI Tools to Learn</h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(240px,1fr))", gap: 12, marginBottom: 28 }}>
            {job.tools.map(t => (
              <a key={t.name} href={t.url} target="_blank" rel="noopener noreferrer" className="tool-link" style={{ "--ac": industry.accent }}>
                <div style={{ fontFamily: "'Outfit',sans-serif", fontSize: 15, fontWeight: 700, marginBottom: 6, color: "#d4dae6" }}>{t.name}</div>
                <div style={{ fontSize: 13, color: "#8891a8", lineHeight: 1.55 }}>{t.desc}</div>
                <div style={{ fontFamily: "'DM Mono',monospace", fontSize: 11, color: industry.accent, marginTop: 10 }}>Learn more →</div>
              </a>
            ))}
          </div>

          <h3 style={{ fontFamily: "'Outfit',sans-serif", fontSize: 18, fontWeight: 700, letterSpacing: -.3, marginBottom: 14, color: "#d4dae6" }}>Your AI-Ready Skill Checklist</h3>
          {typeof job.skills[0] === "object" ? (
            <div className="skill-checklist" style={{ "--ac": industry.accent }}>
              {job.skills.map((s, i) => (
                <div key={i} className="skill-check-item">
                  <div className="skill-check-box" />
                  <div className="skill-check-text">
                    {s.text}
                    {s.linked && <span className="skill-check-link">↳ {s.linked}</span>}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
              {job.skills.map(s => (
                <span key={s} className="pill" style={{ color: "#8891a8" }}>{s}</span>
              ))}
            </div>
          )}
        </section>

        {/* ═══ FAQ ═══ */}
        {job.faqs?.length > 0 && (
          <section id="faq" style={{ marginBottom: 40, animation: "fadeUp .5s ease .30s both" }}>
            <h2 className="job-section-heading">Frequently Asked Questions</h2>
            <div className="faq-list">
              {job.faqs.map((f, i) => (
                <div key={i} className="faq-item">
                  <h3 className="faq-question">{f.q}</h3>
                  <p className="faq-answer">{f.a}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ═══ RESOURCES ═══ */}
        <section id="resources" style={{ marginBottom: 40, animation: "fadeUp .5s ease .34s both" }}>
          <h2 className="job-section-heading">Sources & Further Reading</h2>
          <p className="job-section-sub">Deep dives from trusted industry sources.</p>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {job.resources.map(r => (
              <a key={r.title} href={r.url} target="_blank" rel="noopener noreferrer" className="res-link" style={{ "--ac": industry.accent }}>
                <div style={{ fontSize: 14, fontWeight: 600, color: "#d4dae6" }}>{r.title}</div>
                <div style={{ fontFamily: "'DM Mono',monospace", fontSize: 11, color: industry.accent, marginTop: 6 }}>{r.url} →</div>
              </a>
            ))}
          </div>
        </section>

        {/* ═══ RELATED CAREERS ═══ */}
        {relatedJobs.length > 0 && (
          <section id="related" style={{ marginBottom: 40, animation: "fadeUp .5s ease .38s both" }}>
            <h2 className="job-section-heading">Compare With Related Careers</h2>
            <p className="job-section-sub">See how AI impacts similar roles across industries.</p>
            <div className="related-grid">
              {relatedJobs.map(rj => {
                const rjLabel = riskLabel(rj.risk);
                return (
                  <Link key={rj.id} href={`/jobs/${rj.id}`} className="related-card" style={{ "--ac": rj.industry.accent, textDecoration: "none", color: "inherit" }}>
                    <div className="related-card-industry">{rj.industry.icon} {rj.industry.name}</div>
                    <div className="related-card-title">{rj.title}</div>
                    <div className="related-card-stats">
                      <span style={{ color: rjLabel.color }}>{rj.risk}% risk</span>
                      <span style={{ color: "#3d4663" }}>·</span>
                      <span style={{ color: rj.industry.accent }}>{rj.augment}% career boost</span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </section>
        )}

        {/* ═══ LAST UPDATED + METHODOLOGY ═══ */}
        <div className="job-footer-meta">
          <span>Last updated: {LAST_UPDATED}</span>
          <span>·</span>
          <span>Risk scores based on task automation analysis, industry reports, and BLS occupational data</span>
        </div>
      </article>
    </>
  );
}
