import Link from "next/link";
import { notFound } from "next/navigation";
import { allJobs, getJob, riskLabel } from "@/lib/data";
import Header from "@/components/Header";

export function generateStaticParams() {
  return allJobs.map(j => ({ slug: j.id }));
}

export function generateMetadata({ params }) {
  const result = getJob(params.slug);
  if (!result) return {};
  const { job, industry } = result;
  return {
    title: `${job.title} — How AI Is Changing This Role | AI Is Coming For Your Job`,
    description: `${job.summary.slice(0, 155)}...`,
    openGraph: {
      title: `${job.title} — AI Is Coming For Your Job`,
      description: job.summary.slice(0, 155),
    },
  };
}

export default function JobPage({ params }) {
  const result = getJob(params.slug);
  if (!result) notFound();
  const { job, industry } = result;
  const rl = riskLabel(job.risk);

  return (
    <>
      <Header industry={industry} job={job} />

      <div style={{ padding: "40px 0 80px" }}>
        <Link href={`/industries/${industry.id}`} className="back-btn" style={{ textDecoration: "none" }}>← {industry.name}</Link>

        {/* Hero */}
        <div style={{ marginTop: 28, marginBottom: 40, animation: "fadeUp .5s ease both" }}>
          <div style={{ fontFamily: "'DM Mono',monospace", fontSize: 11, letterSpacing: 2, textTransform: "uppercase", color: industry.accent, marginBottom: 12 }}>{industry.name}</div>
          <h1 style={{ fontFamily: "'Outfit',sans-serif", fontSize: "clamp(28px,4vw,42px)", fontWeight: 800, letterSpacing: -1.5, lineHeight: 1.15, marginBottom: 16 }}>{job.title}</h1>
          <p style={{ fontSize: 17, color: "#8891a8", lineHeight: 1.8, maxWidth: 640 }}>{job.summary}</p>
        </div>

        {/* Risk meters */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 28, marginBottom: 40, animation: "fadeUp .5s ease .08s both" }}>
          <div style={{ background: "#0b0f1a", borderRadius: 16, padding: "24px 28px", border: "1px solid #151a28" }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 12, fontFamily: "'DM Mono',monospace", fontSize: 12 }}>
              <span style={{ color: "#5a6380", letterSpacing: 1, textTransform: "uppercase" }}>Automation Risk</span>
              <span style={{ color: rl.color, fontWeight: 700 }}>{job.risk}% · {rl.text}</span>
            </div>
            <div style={{ height: 6, background: "#151a28", borderRadius: 3, overflow: "hidden" }}>
              <div className="meter-bar" style={{ width: `${job.risk}%`, background: `linear-gradient(90deg,#fbbf24,${rl.color})` }} />
            </div>
          </div>
          <div style={{ background: "#0b0f1a", borderRadius: 16, padding: "24px 28px", border: "1px solid #151a28" }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 12, fontFamily: "'DM Mono',monospace", fontSize: 12 }}>
              <span style={{ color: "#5a6380", letterSpacing: 1, textTransform: "uppercase" }}>AI Augmentation Potential</span>
              <span style={{ color: industry.accent, fontWeight: 700 }}>{job.augment}%</span>
            </div>
            <div style={{ height: 6, background: "#151a28", borderRadius: 3, overflow: "hidden" }}>
              <div className="meter-bar" style={{ width: `${job.augment}%`, background: `linear-gradient(90deg,${industry.accent}88,${industry.accent})` }} />
            </div>
          </div>
        </div>

        {/* Key insight */}
        <div style={{ background: "linear-gradient(135deg,#0d111e,#111628)", border: "1px solid #1e2436", borderRadius: 16, padding: "24px 28px", marginBottom: 40, borderLeft: `3px solid ${industry.accent}`, animation: "fadeUp .5s ease .15s both" }}>
          <div style={{ fontFamily: "'DM Mono',monospace", fontSize: 11, letterSpacing: 2, textTransform: "uppercase", color: industry.accent, marginBottom: 10 }}>Key Insight</div>
          <p style={{ fontSize: 15, lineHeight: 1.8, color: "#8891a8", fontStyle: "italic" }}>{job.keyInsight}</p>
        </div>

        {/* AI Tools */}
        <section style={{ marginBottom: 40, animation: "fadeUp .5s ease .22s both" }}>
          <h2 style={{ fontFamily: "'Outfit',sans-serif", fontSize: 22, fontWeight: 700, letterSpacing: -.5, marginBottom: 6 }}>AI Tools to Learn</h2>
          <p style={{ fontSize: 14, color: "#5a6380", marginBottom: 20, lineHeight: 1.6 }}>The most impactful AI tools transforming this role right now.</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(240px,1fr))", gap: 12 }}>
            {job.tools.map(t => (
              <a key={t.name} href={t.url} target="_blank" rel="noopener noreferrer" className="tool-link" style={{ "--ac": industry.accent }}>
                <div style={{ fontFamily: "'Outfit',sans-serif", fontSize: 15, fontWeight: 700, marginBottom: 6, color: "#d4dae6" }}>{t.name}</div>
                <div style={{ fontSize: 13, color: "#5a6380", lineHeight: 1.5 }}>{t.desc}</div>
                <div style={{ fontFamily: "'DM Mono',monospace", fontSize: 11, color: industry.accent, marginTop: 10 }}>Visit →</div>
              </a>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section style={{ marginBottom: 40, animation: "fadeUp .5s ease .28s both" }}>
          <h2 style={{ fontFamily: "'Outfit',sans-serif", fontSize: 22, fontWeight: 700, letterSpacing: -.5, marginBottom: 6 }}>Skills to Develop</h2>
          <p style={{ fontSize: 14, color: "#5a6380", marginBottom: 20, lineHeight: 1.6 }}>Focus on these to stay ahead of AI disruption in your field.</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
            {job.skills.map(s => (
              <span key={s} className="pill" style={{ color: "#8891a8" }}>{s}</span>
            ))}
          </div>
        </section>

        {/* Resources */}
        <section style={{ animation: "fadeUp .5s ease .34s both" }}>
          <h2 style={{ fontFamily: "'Outfit',sans-serif", fontSize: 22, fontWeight: 700, letterSpacing: -.5, marginBottom: 6 }}>Further Reading & Resources</h2>
          <p style={{ fontSize: 14, color: "#5a6380", marginBottom: 20, lineHeight: 1.6 }}>Deep dives from trusted industry sources.</p>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {job.resources.map(r => (
              <a key={r.title} href={r.url} target="_blank" rel="noopener noreferrer" className="res-link" style={{ "--ac": industry.accent }}>
                <div style={{ fontSize: 14, fontWeight: 600, color: "#d4dae6" }}>{r.title}</div>
                <div style={{ fontFamily: "'DM Mono',monospace", fontSize: 11, color: industry.accent, marginTop: 6 }}>{r.url} →</div>
              </a>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
