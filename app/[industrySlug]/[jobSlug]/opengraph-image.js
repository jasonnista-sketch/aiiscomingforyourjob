import { ImageResponse } from "next/og";
import { INDUSTRIES, allJobs, getJob, riskLabel } from "@/lib/data";

export const alt = "AI Is Coming For Your Job";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return allJobs.map((j) => ({ industrySlug: j.industry.id, jobSlug: j.id }));
}

export default async function Image({ params }) {
  const result = getJob(params.jobSlug);
  if (!result) {
    return new ImageResponse(<div>Not Found</div>, { ...size });
  }
  const { job, industry } = result;
  const rl = riskLabel(job.risk);

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
            marginBottom: "48px",
          }}
        />

        {/* Job title */}
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
              fontSize: 22,
              color: "#8891a8",
              marginBottom: "12px",
              letterSpacing: "-0.3px",
            }}
          >
            Will AI Replace
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 64,
              fontWeight: 800,
              color: "#ffffff",
              letterSpacing: "-2px",
              lineHeight: 1.1,
              marginBottom: "44px",
            }}
          >
            {job.title}s?
          </div>

          {/* Risk score bar + label */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "20px",
              marginBottom: "40px",
            }}
          >
            {/* Risk meter track */}
            <div
              style={{
                display: "flex",
                width: "320px",
                height: "14px",
                backgroundColor: "#151a28",
                borderRadius: "7px",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  display: "flex",
                  width: `${job.risk}%`,
                  height: "100%",
                  backgroundColor: rl.color,
                  borderRadius: "7px",
                }}
              />
            </div>
            <div
              style={{
                display: "flex",
                fontSize: 28,
                fontWeight: 700,
                color: rl.color,
                letterSpacing: "-0.5px",
              }}
            >
              {job.risk}% Risk
            </div>
            <div
              style={{
                display: "flex",
                fontSize: 20,
                color: rl.color,
                opacity: 0.8,
              }}
            >
              · {rl.text}
            </div>
          </div>
        </div>

        {/* Bottom bar: industry + augment */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "14px",
            }}
          >
            <div
              style={{
                display: "flex",
                width: "16px",
                height: "16px",
                borderRadius: "50%",
                backgroundColor: industry.accent,
              }}
            />
            <div
              style={{
                display: "flex",
                fontSize: 24,
                fontWeight: 700,
                color: industry.accent,
                letterSpacing: "-0.3px",
              }}
            >
              {industry.name}
            </div>
          </div>
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
                fontSize: 18,
                letterSpacing: "2px",
                textTransform: "uppercase",
                color: "#5a6380",
              }}
            >
              CAREER BOOST
            </div>
            <div
              style={{
                display: "flex",
                fontSize: 28,
                fontWeight: 700,
                color: "#d4dae6",
              }}
            >
              {job.augment}%
            </div>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
