"use client";

import { useState, useEffect } from "react";

const DEFAULT_VISIBLE = 4;

function relativeDate(iso) {
  if (!iso) return "";
  const diff = Date.now() - new Date(iso).getTime();
  const mins = Math.floor(diff / 60000);
  if (mins < 60) return `${mins}m ago`;
  const hrs = Math.floor(mins / 60);
  if (hrs < 24) return `${hrs}h ago`;
  const days = Math.floor(hrs / 24);
  if (days < 30) return `${days}d ago`;
  const months = Math.floor(days / 30);
  if (months < 12) return `${months}mo ago`;
  return `${Math.floor(months / 12)}y ago`;
}

function yearFromDate(iso) {
  if (!iso) return "";
  return new Date(iso).getFullYear().toString();
}

function SkeletonCard({ delay }) {
  return (
    <div
      style={{
        padding: "20px",
        background: "#0b0f1a",
        display: "flex",
        flexDirection: "column",
        gap: "12px",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ width: 64, height: 20, borderRadius: 4, background: "linear-gradient(90deg,#151a28 25%,#1e2436 50%,#151a28 75%)", backgroundSize: "200% 100%", animation: "jrf-shimmer 1.5s infinite" }} />
        <div style={{ width: 32, height: 14, borderRadius: 4, background: "linear-gradient(90deg,#151a28 25%,#1e2436 50%,#151a28 75%)", backgroundSize: "200% 100%", animation: "jrf-shimmer 1.5s infinite" }} />
      </div>
      <div style={{ width: "100%", height: 16, borderRadius: 4, background: "linear-gradient(90deg,#151a28 25%,#1e2436 50%,#151a28 75%)", backgroundSize: "200% 100%", animation: "jrf-shimmer 1.5s infinite" }} />
      <div style={{ width: "70%", height: 16, borderRadius: 4, background: "linear-gradient(90deg,#151a28 25%,#1e2436 50%,#151a28 75%)", backgroundSize: "200% 100%", animation: "jrf-shimmer 1.5s infinite" }} />
      <div style={{ width: 100, height: 12, borderRadius: 4, marginTop: "auto", background: "linear-gradient(90deg,#151a28 25%,#1e2436 50%,#151a28 75%)", backgroundSize: "200% 100%", animation: "jrf-shimmer 1.5s infinite" }} />
    </div>
  );
}

export default function JobResearchFeed({ jobSlug, jobTitle, industry, industryName }) {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    let cancelled = false;
    async function load() {
      try {
        const res = await fetch(
          `/api/job-research?job=${encodeURIComponent(jobSlug)}&industry=${encodeURIComponent(industry)}&limit=8`
        );
        if (!res.ok) throw new Error("Fetch failed");
        const data = await res.json();
        if (!cancelled) {
          setItems(data.items || []);
          setLoading(false);
        }
      } catch {
        if (!cancelled) {
          setError(true);
          setLoading(false);
        }
      }
    }
    load();
    return () => { cancelled = true; };
  }, [jobSlug, industry]);

  const displayed = expanded ? items : items.slice(0, DEFAULT_VISIBLE);
  const hasMore = !expanded && items.length > DEFAULT_VISIBLE;

  return (
    <section id="job-research" style={{ marginBottom: 40 }}>
      <style>{`
        @keyframes jrf-shimmer {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
        .jrf-card:hover {
          background: #0f1322 !important;
        }
        .jrf-card:hover .jrf-title { color: #fff !important; }
        .jrf-card:hover .jrf-arrow {
          color: #ef4444 !important;
          opacity: 1 !important;
          transform: translateX(0) !important;
        }
        .jrf-more:hover {
          background: #151a28 !important;
          border-color: #2a3048 !important;
          color: #fff !important;
        }
      `}</style>

      <h2 style={{
        fontFamily: "'Outfit',sans-serif",
        fontSize: 20,
        fontWeight: 700,
        letterSpacing: -0.5,
        color: "#fff",
        marginBottom: 6,
      }}>
        What they&apos;re saying about AI + {jobTitle}
      </h2>
      <p style={{
        fontFamily: "system-ui,-apple-system,sans-serif",
        fontSize: 14,
        color: "#5a6380",
        marginBottom: 20,
        lineHeight: 1.5,
      }}>
        Recent research and reporting on AI&apos;s impact on this role.
      </p>

      {/* Loading */}
      {loading && (
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          gap: "1px",
          background: "#151a28",
          borderRadius: 12,
          overflow: "hidden",
          border: "1px solid #151a28",
        }}>
          {Array.from({ length: DEFAULT_VISIBLE }).map((_, i) => (
            <SkeletonCard key={i} delay={0.04 * i} />
          ))}
        </div>
      )}

      {/* Error */}
      {error && !loading && (
        <div style={{
          padding: "32px 20px",
          textAlign: "center",
          borderRadius: 12,
          background: "#0b0f1a",
          border: "1px solid #151a28",
        }}>
          <p style={{ color: "#5a6380", margin: 0, fontSize: 14 }}>
            Unable to load research feed. Check back shortly.
          </p>
        </div>
      )}

      {/* Empty */}
      {!loading && !error && items.length === 0 && (
        <div style={{
          padding: "32px 20px",
          textAlign: "center",
          borderRadius: 12,
          background: "#0b0f1a",
          border: "1px solid #151a28",
        }}>
          <p style={{ color: "#5a6380", margin: 0, fontSize: 14, lineHeight: 1.6 }}>
            No recent articles found for {jobTitle}. Check back soon — or{" "}
            <a href="/#research-feed" style={{ color: "#ef4444", textDecoration: "none" }}>
              explore the bigger picture
            </a>.
          </p>
        </div>
      )}

      {/* Feed grid */}
      {!loading && !error && items.length > 0 && (
        <>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: "1px",
            background: "#151a28",
            borderRadius: 12,
            overflow: "hidden",
            border: "1px solid #151a28",
          }}>
            {displayed.map((item, i) => (
              <a
                key={item.link + i}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="jrf-card"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  padding: "20px",
                  background: "#0b0f1a",
                  textDecoration: "none",
                  color: "inherit",
                  transition: "background .2s",
                }}
              >
                <div style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: 12,
                }}>
                  <span style={{
                    fontFamily: "'DM Mono',monospace",
                    fontSize: 10,
                    letterSpacing: 1,
                    textTransform: "uppercase",
                    color: "#ef4444",
                    padding: "2px 8px",
                    borderRadius: 5,
                    border: "1px solid #ef444430",
                    background: "#ef444410",
                  }}>
                    {item.tierLabel}
                  </span>
                  <span style={{
                    fontFamily: "'DM Mono',monospace",
                    fontSize: 10,
                    color: "#5a6380",
                  }}>
                    {yearFromDate(item.pubDate)}
                  </span>
                </div>

                <h3
                  className="jrf-title"
                  style={{
                    fontFamily: "'Outfit',sans-serif",
                    fontSize: 14,
                    fontWeight: 600,
                    lineHeight: 1.45,
                    color: "#d4dae6",
                    margin: "0 0 12px",
                    flex: 1,
                    display: "-webkit-box",
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                    transition: "color .2s",
                  }}
                >
                  {item.title}
                </h3>

                <div style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}>
                  <div style={{
                    fontFamily: "'DM Mono',monospace",
                    fontSize: 10,
                    color: "#5a6380",
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                  }}>
                    <span>{item.source}</span>
                    {item.pubDate && (
                      <>
                        <span style={{ color: "#1e2436" }}>·</span>
                        <span>{relativeDate(item.pubDate)}</span>
                      </>
                    )}
                  </div>
                  <span
                    className="jrf-arrow"
                    style={{
                      fontSize: 13,
                      color: "#5a6380",
                      opacity: 0,
                      transform: "translateX(-4px)",
                      transition: "all .2s",
                    }}
                  >
                    ↗
                  </span>
                </div>
              </a>
            ))}
          </div>

          {hasMore && (
            <div style={{ textAlign: "center", marginTop: 16 }}>
              <button
                className="jrf-more"
                onClick={() => setExpanded(true)}
                style={{
                  fontFamily: "'DM Mono',monospace",
                  fontSize: 11,
                  letterSpacing: 1,
                  textTransform: "uppercase",
                  color: "#5a6380",
                  background: "#0b0f1a",
                  border: "1px solid #151a28",
                  borderRadius: 8,
                  padding: "10px 24px",
                  cursor: "pointer",
                  transition: "all .2s",
                }}
              >
                Show more
              </button>
            </div>
          )}
        </>
      )}
    </section>
  );
}
