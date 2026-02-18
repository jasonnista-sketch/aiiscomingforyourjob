import Link from "next/link";
import { notFound } from "next/navigation";
import { INDUSTRIES, getIndustry, riskLabel } from "@/lib/data";
import Header from "@/components/Header";

export function generateStaticParams() {
  return INDUSTRIES.map(ind => ({ industrySlug: ind.id }));
}

export function generateMetadata({ params }) {
  const industry = getIndustry(params.industrySlug);
  if (!industry) return {};
  return {
    title: `${industry.name} — AI Impact on ${industry.name} Jobs | AI Is Coming For Your Job`,
    description: `${industry.desc} See how AI is transforming ${industry.jobs.length} roles in ${industry.name}.`,
    openGraph: {
      title: `${industry.name} — AI Is Coming For Your Job`,
      description: industry.desc,
    },
  };
}

export default function IndustryPage({ params }) {
  const industry = getIndustry(params.industrySlug);
  if (!industry) notFound();

  return (
    <>
      <Header industry={industry} />

      <div style={{ padding: "40px 0 80px" }}>
        <Link href="/" className="back-btn" style={{ textDecoration: "none" }}>← All Industries</Link>

        <div style={{ marginTop: 28, marginBottom: 36 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 18, marginBottom: 10 }}>
            <span style={{ fontSize: 44 }}>{industry.icon}</span>
            <div>
              <h1 style={{ fontFamily: "'Outfit',sans-serif", fontSize: 34, fontWeight: 800, letterSpacing: -1 }}>{industry.name}</h1>
              <p style={{ fontFamily: "'DM Mono',monospace", fontSize: 12, color: industry.accent, marginTop: 4 }}>{industry.jobs.length} roles analyzed</p>
            </div>
          </div>
          <p style={{ fontSize: 16, color: "#5a6380", lineHeight: 1.7, maxWidth: 580, marginTop: 8 }}>{industry.desc} Select a role to see detailed AI impact analysis.</p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {industry.jobs.map((j, i) => {
            const r = riskLabel(j.risk);
            return (
              <Link
                key={j.id}
                href={`/${industry.id}/${j.id}`}
                className="job-item"
                style={{ "--ac": industry.accent, animation: `fadeUp .4s ease ${.05 * i}s both`, textDecoration: "none", color: "inherit" }}
              >
                <div style={{ flex: 1 }}>
                  <h3 style={{ fontFamily: "'Outfit',sans-serif", fontSize: 16, fontWeight: 700, letterSpacing: -.2, marginBottom: 6 }}>{j.title}</h3>
                  <div style={{ display: "flex", gap: 20, fontFamily: "'DM Mono',monospace", fontSize: 12 }}>
                    <span style={{ color: r.color }}>{j.risk}% risk · {r.text}</span>
                    <span style={{ color: industry.accent }}>{j.augment}% career boost</span>
                  </div>
                </div>
                <span style={{ color: "#3d4663", fontSize: 20, flexShrink: 0, marginLeft: 16 }}>→</span>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}
