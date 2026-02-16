import Link from "next/link";
import Header from "@/components/Header";

export default function NotFound() {
  return (
    <>
      <Header />
      <div style={{ padding: "120px 0", textAlign: "center" }}>
        <div style={{ fontFamily: "'DM Mono',monospace", fontSize: 11, letterSpacing: 3, textTransform: "uppercase", color: "#ff3e55", marginBottom: 18 }}>
          404 — Not Found
        </div>
        <h1 style={{ fontFamily: "'Outfit',sans-serif", fontSize: 36, fontWeight: 800, letterSpacing: -1.5, marginBottom: 16 }}>
          This job doesn't exist yet.
        </h1>
        <p style={{ fontSize: 17, color: "#5a6380", marginBottom: 40, lineHeight: 1.75 }}>
          Maybe AI already took it. Or maybe we just haven't added it yet.
        </p>
        <Link href="/" style={{ background: "#ff3e55", color: "#fff", fontFamily: "'DM Mono',monospace", fontSize: 13, fontWeight: 500, padding: "14px 32px", borderRadius: 10, textDecoration: "none", transition: "all 0.25s ease" }}>
          ← Back to all industries
        </Link>
      </div>
    </>
  );
}
