"use client";

import { useState, useEffect } from "react";

const PAGE_SIZE = 6;

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

// Skeleton shimmer card
function SkeletonCard({ delay }) {
  return (
    <div
      style={{
        padding: "24px",
        borderRadius: "16px",
        background: "#0b0f1a",
        border: "1px solid #151a28",
        display: "flex",
        flexDirection: "column",
        gap: "14px",
        animation: `fadeUp .4s ease ${delay}s both`,
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div
          style={{
            width: "72px",
            height: "22px",
            borderRadius: "6px",
            background: "linear-gradient(90deg, #151a28 25%, #1e2436 50%, #151a28 75%)",
            backgroundSize: "200% 100%",
            animation: "shimmer 1.5s infinite",
          }}
        />
        <div
          style={{
            width: "36px",
            height: "16px",
            borderRadius: "4px",
            background: "linear-gradient(90deg, #151a28 25%, #1e2436 50%, #151a28 75%)",
            backgroundSize: "200% 100%",
            animation: "shimmer 1.5s infinite",
          }}
        />
      </div>
      <div
        style={{
          width: "100%",
          height: "18px",
          borderRadius: "4px",
          background: "linear-gradient(90deg, #151a28 25%, #1e2436 50%, #151a28 75%)",
          backgroundSize: "200% 100%",
          animation: "shimmer 1.5s infinite",
        }}
      />
      <div
        style={{
          width: "75%",
          height: "18px",
          borderRadius: "4px",
          background: "linear-gradient(90deg, #151a28 25%, #1e2436 50%, #151a28 75%)",
          backgroundSize: "200% 100%",
          animation: "shimmer 1.5s infinite",
        }}
      />
      <div
        style={{
          width: "120px",
          height: "14px",
          borderRadius: "4px",
          marginTop: "auto",
          background: "linear-gradient(90deg, #151a28 25%, #1e2436 50%, #151a28 75%)",
          backgroundSize: "200% 100%",
          animation: "shimmer 1.5s infinite",
        }}
      />
    </div>
  );
}

export default function ResearchFeed({ limit = 6 }) {
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [sources, setSources] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [visible, setVisible] = useState(limit);

  useEffect(() => {
    let cancelled = false;
    async function load() {
      try {
        const res = await fetch("/api/research-feed?limit=50");
        if (!res.ok) throw new Error("Feed fetch failed");
        const data = await res.json();
        if (!cancelled) {
          setItems(data.items || []);
          setTotal(data.total || 0);
          setSources(data.sources || 0);
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
  }, []);

  const displayedItems = items.slice(0, visible);
  const hasMore = visible < items.length;

  return (
    <section style={{ padding: "48px 0 0", borderTop: "1px solid #151a28" }}>
      <style>{`
        @keyframes shimmer {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
        @keyframes pulse-dot {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
        .rf-card:hover {
          border-color: #2a3048 !important;
          transform: translateY(-3px);
          box-shadow: 0 12px 32px #00000030;
        }
        .rf-card:hover .rf-title { color: #fff !important; }
        .rf-card:hover .rf-arrow {
          color: #ef4444 !important;
          opacity: 1 !important;
          transform: translateX(0) !important;
        }
        .rf-load-btn:hover {
          background: #151a28 !important;
          border-color: #2a3048 !important;
          color: #fff !important;
        }
      `}</style>

      {/* Header */}
      <div style={{ marginBottom: "32px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "8px" }}>
          <h2
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: "22px",
              fontWeight: 700,
              letterSpacing: "-0.5px",
              color: "#fff",
              margin: 0,
            }}
          >
            The bigger picture
          </h2>
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              fontFamily: "'DM Mono', monospace",
              fontSize: "10px",
              letterSpacing: "1.5px",
              textTransform: "uppercase",
              color: "#ef4444",
              padding: "3px 10px",
              borderRadius: "6px",
              background: "#ef444410",
              border: "1px solid #ef444420",
            }}
          >
            <span
              style={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                background: "#ef4444",
                animation: "pulse-dot 2s ease-in-out infinite",
              }}
            />
            Live feed
          </span>
        </div>
        <p
          style={{
            fontFamily: "system-ui, -apple-system, sans-serif",
            fontSize: "15px",
            color: "#8891a8",
            margin: 0,
            lineHeight: 1.5,
          }}
        >
          {loading
            ? "Loading research from top institutions..."
            : `Curated from ${sources}+ sources · AI and workforce research, updated daily`}
        </p>
      </div>

      {/* Loading state */}
      {loading && (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
            gap: "14px",
          }}
        >
          {Array.from({ length: limit }).map((_, i) => (
            <SkeletonCard key={i} delay={0.04 * i} />
          ))}
        </div>
      )}

      {/* Error state */}
      {error && !loading && (
        <div
          style={{
            padding: "40px 24px",
            textAlign: "center",
            borderRadius: "16px",
            background: "#0b0f1a",
            border: "1px solid #151a28",
          }}
        >
          <p style={{ color: "#8891a8", margin: 0, fontSize: "15px" }}>
            Unable to load live research feed. Check back shortly — we pull from
            IMF, McKinsey, Brookings, MIT Technology Review, and other top sources daily.
          </p>
        </div>
      )}

      {/* Feed grid */}
      {!loading && !error && items.length > 0 && (
        <>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
              gap: "1px",
              background: "#151a28",
              borderRadius: "16px",
              overflow: "hidden",
              border: "1px solid #151a28",
            }}
          >
            {displayedItems.map((item, i) => (
              <a
                key={item.link + i}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="rf-card"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  padding: "24px",
                  background: "#0b0f1a",
                  textDecoration: "none",
                  color: "inherit",
                  transition: "all .3s cubic-bezier(.22,1,.36,1)",
                  animation: `fadeUp .4s ease ${0.04 * i}s both`,
                }}
              >
                {/* Top row: tier + year */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: "14px",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'DM Mono', monospace",
                      fontSize: "10px",
                      letterSpacing: "1px",
                      textTransform: "uppercase",
                      color: "#ef4444",
                      padding: "3px 10px",
                      borderRadius: "6px",
                      border: "1px solid #ef444430",
                      background: "#ef444410",
                    }}
                  >
                    {item.tierLabel}
                  </span>
                  <span
                    style={{
                      fontFamily: "'DM Mono', monospace",
                      fontSize: "11px",
                      color: "#6b7490",
                    }}
                  >
                    {yearFromDate(item.pubDate)}
                  </span>
                </div>

                {/* Title — 3 line clamp */}
                <h3
                  className="rf-title"
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: "15px",
                    fontWeight: 600,
                    lineHeight: 1.45,
                    color: "#e2e6ef",
                    margin: "0 0 14px",
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

                {/* Bottom: source + date + arrow */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "'DM Mono', monospace",
                      fontSize: "11px",
                      color: "#7a839b",
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    <span>{item.source}</span>
                    {item.pubDate && (
                      <>
                        <span style={{ color: "#2a3048" }}>·</span>
                        <span style={{ color: "#5a6380" }}>
                          {relativeDate(item.pubDate)}
                        </span>
                      </>
                    )}
                  </div>
                  <span
                    className="rf-arrow"
                    style={{
                      fontSize: "14px",
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

          {/* Load more */}
          {hasMore && (
            <div style={{ textAlign: "center", marginTop: "24px" }}>
              <button
                className="rf-load-btn"
                onClick={() => setVisible((v) => v + PAGE_SIZE)}
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "12px",
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                  color: "#8891a8",
                  background: "#0b0f1a",
                  border: "1px solid #151a28",
                  borderRadius: "10px",
                  padding: "12px 32px",
                  cursor: "pointer",
                  transition: "all .2s",
                }}
              >
                Load more ({items.length - visible} remaining)
              </button>
            </div>
          )}
        </>
      )}

      {/* Empty state (loaded but no items) */}
      {!loading && !error && items.length === 0 && (
        <div
          style={{
            padding: "40px 24px",
            textAlign: "center",
            borderRadius: "16px",
            background: "#0b0f1a",
            border: "1px solid #151a28",
          }}
        >
          <p style={{ color: "#8891a8", margin: 0, fontSize: "15px" }}>
            No matching articles found right now. The feed refreshes daily with
            the latest AI and workforce research from top institutions.
          </p>
        </div>
      )}
    </section>
  );
}
