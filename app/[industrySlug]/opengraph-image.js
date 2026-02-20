import { ImageResponse } from "next/og";
import { INDUSTRIES, getIndustry } from "@/lib/data";

export const alt = "AI Is Coming For Your Job";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return INDUSTRIES.map((ind) => ({ industrySlug: ind.id }));
}

export default async function Image({ params }) {
  const industry = getIndustry(params.industrySlug);
  if (!industry) {
    return new ImageResponse(<div>Not Found</div>, { ...size });
  }

  const jobCount = industry.jobs.length;
  const avgRisk =
    jobCount > 0
      ? Math.round(industry.jobs.reduce((s, j) => s + j.risk, 0) / jobCount)
      : 0;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#060918",
          padding: "60px 72px",
          fontFamily: "sans-serif",
        }}
      >
        {/* Top bar: site name + logo mark */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "20px",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 18,
              letterSpacing: "3px",
              textTransform: "uppercase",
              color: "#5a6380",
            }}
          >
            AI IS COMING FOR YOUR JOB
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 42,
              fontWeight: 800,
              color: "#FF3E55",
              lineHeight: 1,
            }}
          >
            X
          </div>
        </div>

        {/* Divider */}
        <div
          style={{
            display: "flex",
            width: "100%",
            height: "1px",
            backgroundColor: "#151a28",
            marginBottom: "60px",
          }}
        />

        {/* Industry icon + name */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "24px",
              marginBottom: "24px",
            }}
          >
            <div
              style={{
                display: "flex",
                width: "56px",
                height: "56px",
                borderRadius: "50%",
                backgroundColor: industry.accent,
              }}
            />
            <div
              style={{
                display: "flex",
                fontSize: 72,
                fontWeight: 800,
                color: "#ffffff",
                letterSpacing: "-2.5px",
                lineHeight: 1.1,
              }}
            >
              {industry.name}
            </div>
          </div>

          {/* Stats row */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "32px",
              marginBottom: "32px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  fontSize: 32,
                  fontWeight: 700,
                  color: industry.accent,
                }}
              >
                {jobCount}
              </div>
              <div
                style={{
                  display: "flex",
                  fontSize: 22,
                  color: "#8891a8",
                }}
              >
                roles analyzed
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
                gap: "8px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  fontSize: 22,
                  color: "#8891a8",
                }}
              >
                Avg risk
              </div>
              <div
                style={{
                  display: "flex",
                  fontSize: 32,
                  fontWeight: 700,
                  color: "#d4dae6",
                }}
              >
                {avgRisk}%
              </div>
            </div>
          </div>

          {/* Description */}
          <div
            style={{
              display: "flex",
              fontSize: 24,
              color: "#5a6380",
              lineHeight: 1.6,
              maxWidth: "900px",
            }}
          >
            {industry.desc}
          </div>
        </div>

        {/* Bottom accent bar */}
        <div
          style={{
            display: "flex",
            width: "100%",
            height: "4px",
            backgroundColor: "#151a28",
            borderRadius: "2px",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              display: "flex",
              width: "30%",
              height: "100%",
              backgroundColor: industry.accent,
              borderRadius: "2px",
            }}
          />
        </div>
      </div>
    ),
    { ...size }
  );
}
