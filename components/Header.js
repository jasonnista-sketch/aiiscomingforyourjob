"use client";

import Link from "next/link";

export default function Header({ industry, job }) {
  return (
    <header style={{ padding: "22px 0", display: "flex", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #111520" }}>
      <Link href="/" style={{ cursor: "pointer", display: "flex", alignItems: "center", gap: 12, textDecoration: "none" }}>
        <div style={{ width: 30, height: 30, borderRadius: 7, background: "linear-gradient(135deg,#ff3e55,#ff6b3d)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'DM Mono',monospace", fontSize: 11, fontWeight: 700, color: "#fff", letterSpacing: -.5 }}>AI</div>
        <span style={{ fontFamily: "'DM Mono',monospace", fontSize: 13, fontWeight: 500, color: "#5a6380" }}>
          AIiscomingforyourjob<span style={{ color: "#2a3048" }}>.com</span>
        </span>
      </Link>
      {(industry || job) && (
        <nav style={{ display: "flex", gap: 6, alignItems: "center", fontFamily: "'DM Mono',monospace", fontSize: 12 }}>
          <Link href="/" className="hdr-link" style={{ color: "#5a6380", textDecoration: "none" }}>Industries</Link>
          {industry && <>
            <span style={{ color: "#2a3048" }}>/</span>
            <Link href={`/${industry.id}`} className="hdr-link" style={{ color: job ? "#5a6380" : industry.accent, textDecoration: "none" }}>{industry.name}</Link>
          </>}
          {job && <>
            <span style={{ color: "#2a3048" }}>/</span>
            <span style={{ color: industry.accent }}>{job.title}</span>
          </>}
        </nav>
      )}
    </header>
  );
}
