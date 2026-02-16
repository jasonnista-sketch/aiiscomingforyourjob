"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { allJobs } from "@/lib/data";

export default function SearchBar() {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const searchHits = search.length > 1
    ? allJobs.filter(j => j.title.toLowerCase().includes(search.toLowerCase())).slice(0, 8)
    : [];

  return (
    <div style={{ position: "relative", maxWidth: 440, margin: "0 auto", animation: "fadeUp .5s ease .22s both" }}>
      <span style={{ position: "absolute", left: 18, top: "50%", transform: "translateY(-50%)", fontSize: 16, color: "#3d4663" }}>⌕</span>
      <input
        className="search-box"
        placeholder="Search any job title..."
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      {searchHits.length > 0 && (
        <div style={{ position: "absolute", top: "calc(100% + 8px)", left: 0, right: 0, background: "#0d111e", border: "1px solid #1e2436", borderRadius: 14, overflow: "hidden", zIndex: 50, boxShadow: "0 16px 48px #000a" }}>
          {searchHits.map(j => (
            <div
              key={j.id + j.industry.id}
              onClick={() => {
                setSearch("");
                router.push(`/jobs/${j.id}`);
              }}
              style={{ padding: "13px 20px", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid #151a28", transition: "background .15s" }}
              onMouseEnter={e => e.currentTarget.style.background = "#151a28"}
              onMouseLeave={e => e.currentTarget.style.background = "transparent"}
            >
              <div>
                <div style={{ fontSize: 14, fontWeight: 600, color: "#d4dae6" }}>{j.title}</div>
                <div style={{ fontSize: 11, color: j.industry.accent, fontFamily: "'DM Mono',monospace", marginTop: 2 }}>{j.industry.name}</div>
              </div>
              <span style={{ color: "#3d4663" }}>→</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
