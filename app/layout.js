import "./globals.css";
import StructuredData from "@/components/StructuredData";

export const metadata = {
  title: "AI Is Coming For Your Job – The AI Disruption Directory",
  description:
    "Find your profession. See how AI is changing it. Get the tools, skills, and resources you need to stay ahead.",
  openGraph: {
    title: "AI Is Coming For Your Job",
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
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "AI Is Coming For Your Job",
  url: "https://aiiscomingforyourjob.com",
  sameAs: [
    // Add your X/Twitter URL here when ready, e.g.:
    // "https://x.com/aicomingforyou",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400&family=Outfit:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <StructuredData data={organizationSchema} />
      </head>
      <body>
        <div
          style={{
            minHeight: "100vh",
            background: "#06080f",
            color: "#d4dae6",
            fontFamily: "'DM Sans', system-ui, sans-serif",
          }}
        >
          {/* ambient bg */}
          <div
            style={{
              position: "fixed",
              inset: 0,
              pointerEvents: "none",
              zIndex: 0,
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "-15%",
                right: "-8%",
                width: 550,
                height: 550,
                background:
                  "radial-gradient(circle,rgba(255,62,85,.06) 0%,transparent 70%)",
                animation: "subtlePulse 7s ease-in-out infinite",
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: "-10%",
                left: "-5%",
                width: 450,
                height: 450,
                background:
                  "radial-gradient(circle,rgba(0,210,255,.04) 0%,transparent 70%)",
                animation: "subtlePulse 9s ease-in-out infinite 3s",
              }}
            />
          </div>

          <div
            style={{
              position: "relative",
              zIndex: 1,
              maxWidth: 1080,
              margin: "0 auto",
              padding: "0 28px",
            }}
          >
            {children}

            <footer
              style={{
                borderTop: "1px solid #151a28",
                padding: "28px 0",
                marginTop: 20,
                textAlign: "center",
                fontFamily: "'DM Mono',monospace",
                fontSize: 11,
                color: "#4a5270",
              }}
            >
              AIiscomingforyourjob.com · Built to help you stay ahead, not fall
              behind.
            </footer>
          </div>
        </div>
      </body>
    </html>
  );
}
