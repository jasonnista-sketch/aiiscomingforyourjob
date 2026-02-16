import Link from "next/link";

function riskColor(r) {
  if (r >= 55) return "#ef4444";
  if (r >= 45) return "#f97316";
  if (r >= 35) return "#fbbf24";
  if (r >= 25) return "#34d399";
  return "#10b981";
}

export default function Leaderboard({ jobs }) {
  const ranked = [...jobs]
    .sort((a, b) => b.risk - a.risk)
    .slice(0, 10);

  return (
    <section className="lb-section">
      <div className="lb-header">
        <div className="lb-header-left">
          <div className="lb-tag">
            <span className="lb-tag-icon">⚡</span>
            Most at risk
          </div>
          <h2 className="lb-title">AI Disruption Leaderboard</h2>
          <p className="lb-subtitle">
            The professions facing the highest automation risk based on current
            AI capabilities, ranked by our disruption score.
          </p>
        </div>
      </div>

      <div className="lb-list">
        {ranked.map((job, i) => {
          const color = riskColor(job.risk);
          return (
            <Link
              key={job.id}
              href={`/jobs/${job.id}`}
              className="lb-row"
              style={{
                "--lb-color": color,
                animationDelay: `${0.04 * i}s`,
                textDecoration: "none",
                color: "inherit",
              }}
            >
              <div className="lb-rank" style={{ color }}>
                {String(i + 1).padStart(2, "0")}
              </div>

              <div className="lb-info">
                <div className="lb-job-title">{job.title}</div>
                <div className="lb-job-industry">{job.industry.name}</div>
              </div>

              <div className="lb-bar-wrap">
                <div
                  className="lb-bar"
                  style={{
                    width: `${job.risk}%`,
                    background: `linear-gradient(90deg, ${color}88, ${color})`,
                    animationDelay: `${0.15 + 0.06 * i}s`,
                  }}
                />
              </div>

              <div className="lb-score" style={{ color }}>
                {job.risk}%
              </div>

              <span className="lb-arrow">→</span>
            </Link>
          );
        })}
      </div>

      <div className="lb-footer-note">
        Scores based on current AI capabilities across task automation,
        cognitive replacement, and tool availability.
      </div>
    </section>
  );
}
