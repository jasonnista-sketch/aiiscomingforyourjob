import Link from "next/link";
import { INDUSTRIES, allJobs } from "@/lib/data";
import Header from "@/components/Header";
import SearchBar from "@/components/SearchBar";
import EmailCapture from "@/components/EmailCapture";
import Leaderboard from "@/components/Leaderboard";
import ContentFeed from "@/components/ContentFeed";
import StructuredData from "@/components/StructuredData";

export const metadata = {
  title: "AI Is Coming For Your Job — See How AI Is Disrupting Every Career",
  description:
    "Discover how artificial intelligence is transforming your profession. Explore AI automation risk scores, tools to learn, skills to develop, and resources for 20+ careers across 8 industries.",
  openGraph: {
    title: "AI Is Coming For Your Job — The AI Disruption Directory",
    description:
      "Find your profession. See how AI is changing it. Get the tools, skills, and resources you need to stay ahead.",
    url: "https://aiiscomingforyourjob.com",
    siteName: "AI Is Coming For Your Job",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Is Coming For Your Job",
    description:
      "Find your profession. See how AI is changing it. Get the tools, skills, and resources you need to stay ahead.",
  },
  alternates: {
    canonical: "https://aiiscomingforyourjob.com",
  },
};

export default function Home() {
  // Website + SearchAction schema
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "AI Is Coming For Your Job",
    url: "https://aiiscomingforyourjob.com",
    description:
      "A directory covering every profession, educating people on how AI is integrating into their role.",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate:
          "https://aiiscomingforyourjob.com/search?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };

  // ItemList schema for industries
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Industries Disrupted by AI",
    numberOfItems: INDUSTRIES.length,
    itemListElement: INDUSTRIES.map((ind, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: ind.name,
      url: `https://aiiscomingforyourjob.com/industries/${ind.id}`,
    })),
  };

  return (
    <>
      <StructuredData data={websiteSchema} />
      <StructuredData data={itemListSchema} />
      <Header />

      {/* ═══ HERO ═══ */}
      <section className="hero-section">
        <div className="hero-grid-bg" aria-hidden="true" />
        <div className="hero-glow" aria-hidden="true" />

        <div className="hero-inner">
          <div className="hero-tag" style={{ animation: "fadeUp .5s ease both" }}>
            <span className="hero-tag-dot" />
            The AI Disruption Directory
          </div>

          <h1
            className="hero-heading"
            style={{ animation: "fadeUp .5s ease .08s both" }}
          >
            AI is coming for
            <br />
            <span className="gradient-text">your job.</span>
          </h1>

          <p
            className="hero-subhead"
            style={{ animation: "fadeUp .5s ease .15s both" }}
          >
            See exactly how AI is reshaping your career — with automation risk
            scores, the tools already replacing tasks, and what to learn next.
          </p>

          <SearchBar />

          <div
            className="hero-stats"
            style={{ animation: "fadeUp .5s ease .3s both" }}
          >
            <div className="hero-stat">
              <span className="hero-stat-num">{allJobs.length}</span>
              <span className="hero-stat-label">roles profiled</span>
            </div>
            <div className="hero-stat-divider" />
            <div className="hero-stat">
              <span className="hero-stat-num">{INDUSTRIES.length}</span>
              <span className="hero-stat-label">industries</span>
            </div>
            <div className="hero-stat-divider" />
            <div className="hero-stat">
              <span className="hero-stat-num">
                {Math.round(
                  allJobs.reduce((s, j) => s + j.risk, 0) / allJobs.length
                )}
                %
              </span>
              <span className="hero-stat-label">avg. risk score</span>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ DISRUPTION LEADERBOARD ═══ */}
      <Leaderboard jobs={allJobs} industries={INDUSTRIES} />

      {/* ═══ INDUSTRY GRID ═══ */}
      <section className="industries-section">
        <div className="section-header">
          <h2 className="section-title">Explore by industry</h2>
          <p className="section-subtitle">
            Choose an industry to see how AI is reshaping every role within it.
          </p>
        </div>

        <div className="industry-grid">
          {INDUSTRIES.map((ind, i) => (
            <Link
              key={ind.id}
              href={`/industries/${ind.id}`}
              className="ind-card"
              style={{
                "--ac": ind.accent,
                "--glow": ind.accent + "18",
                "--ac-dim": ind.accent + "10",
                animation: `fadeUp .45s ease ${0.04 * i}s both`,
                textDecoration: "none",
                color: "inherit",
              }}
            >
              <div className="ind-card-accent" />
              <div className="ind-card-icon">{ind.icon}</div>
              <h3 className="ind-card-name">{ind.name}</h3>
              <p className="ind-card-desc">{ind.desc}</p>
              <div className="ind-card-footer">
                <span className="ind-card-count">
                  {ind.jobs.length} role{ind.jobs.length !== 1 ? "s" : ""} →
                </span>
                <span className="ind-card-arrow">→</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ═══ CONTENT FEED ═══ */}
      <ContentFeed />

      {/* ═══ EMAIL CAPTURE ═══ */}
      <section className="email-section">
        <div className="email-inner">
          <div className="email-text">
            <h3 className="email-heading">Stay ahead of the curve</h3>
            <p className="email-subhead">
              One AI-disrupted profession, delivered to your inbox every day.
            </p>
          </div>
          <EmailCapture />
        </div>
      </section>
    </>
  );
}
