import { ImageResponse } from "next/og";
import { INDUSTRIES, allJobs } from "@/lib/data";

export const alt = "AI Is Coming For Your Job — The AI Disruption Directory";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const totalJobs = allJobs.length;
  const totalIndustries = INDUSTRIES.length;
  const avgRisk = Math.round(
    allJobs.reduce((s, j) => s + j.risk, 0) / totalJobs
  );

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#060918",
          padding: "60px 72px",
          fontFamily: "sans-serif",
        }}
      >
        {/* Logo mark */}
        <div
          style={{
            display: "flex",
            fontSize: 64,
            fontWeight: 800,
            color: "#FF3E55",
            marginBottom: "24px",
            lineHeight: 1,
          }}
        >
          X
        </div>

        {/* Title */}
        <div
          style={{
            display: "flex",
            fontSize: 62,
            fontWeight: 800,
            color: "#ffffff",
            letterSpacing: "-2px",
            lineHeight: 1.15,
            textAlign: "center",
            marginBottom: "8px",
          }}
        >
          AI IS COMING
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 62,
            fontWeight: 800,
            color: "#ffffff",
            letterSpacing: "-2px",
            lineHeight: 1.15,
            textAlign: "center",
            marginBottom: "40px",
          }}
        >
          FOR YOUR JOB
        </div>

        {/* Stats row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "32px",
            marginBottom: "36px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <div
              style={{
                display: "flex",
                fontSize: 34,
                fontWeight: 700,
                color: "#FF3E55",
              }}
            >
              {totalJobs}
            </div>
            <div
              style={{
                display: "flex",
                fontSize: 20,
                color: "#8891a8",
                letterSpacing: "1px",
              }}
            >
              jobs
            </div>
          </div>
          <div
            style={{
              display: "flex",
              width: "2px",
              height: "28px",
              backgroundColor: "#151a28",
            }}
          />
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <div
              style={{
                display: "flex",
                fontSize: 34,
                fontWeight: 700,
                color: "#FF3E55",
              }}
            >
              {totalIndustries}
            </div>
            <div
              style={{
                display: "flex",
                fontSize: 20,
                color: "#8891a8",
                letterSpacing: "1px",
              }}
            >
              industries
            </div>
          </div>
          <div
            style={{
              display: "flex",
              width: "2px",
              height: "28px",
              backgroundColor: "#151a28",
            }}
          />
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <div
              style={{
                display: "flex",
                fontSize: 34,
                fontWeight: 700,
                color: "#FF3E55",
              }}
            >
              {avgRisk}%
            </div>
            <div
              style={{
                display: "flex",
                fontSize: 20,
                color: "#8891a8",
                letterSpacing: "1px",
              }}
            >
              avg risk
            </div>
          </div>
        </div>

        {/* Tagline */}
        <div
          style={{
            display: "flex",
            fontSize: 22,
            color: "#5a6380",
            letterSpacing: "0.5px",
          }}
        >
          See how AI is changing your career. Stay ahead, not behind.
        </div>
      </div>
    ),
    { ...size }
  );
}
