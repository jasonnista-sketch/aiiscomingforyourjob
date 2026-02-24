"use client";

import { useState } from "react";

export default function JobNewsletterCTA({ jobTitle, industry }) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    if (!email || submitting) return;
    setSubmitting(true);
    try {
      await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, jobTitle, industry }),
      });
    } catch {
      // Still show success — we don't want to block the UX
    }
    setSubmitted(true);
    setSubmitting(false);
  }

  if (submitted) {
    return (
      <div style={{
        marginBottom: 40,
        padding: "24px 28px",
        borderRadius: 12,
        background: "#0b0f1a",
        border: "1px solid #151a28",
        display: "flex",
        alignItems: "center",
        gap: 10,
      }}>
        <span style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          width: 24,
          height: 24,
          borderRadius: "50%",
          background: "#10b98120",
          color: "#10b981",
          fontSize: 13,
          fontWeight: 700,
          flexShrink: 0,
        }}>✓</span>
        <span style={{
          fontFamily: "system-ui,-apple-system,sans-serif",
          fontSize: 14,
          color: "#8891a8",
        }}>
          You&apos;re in. We&apos;ll keep you posted.
        </span>
      </div>
    );
  }

  return (
    <div style={{
      marginBottom: 40,
      padding: "28px",
      borderRadius: 12,
      background: "#0b0f1a",
      border: "1px solid #151a28",
    }}>
      <style>{`
        .jnl-input:focus {
          outline: none;
          border-color: #2a3048 !important;
        }
        .jnl-input::placeholder {
          color: #3d4663;
        }
        .jnl-btn:hover {
          background: #dc2626 !important;
        }
        .jnl-btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }
      `}</style>

      <h3 style={{
        fontFamily: "'Outfit',sans-serif",
        fontSize: 17,
        fontWeight: 700,
        letterSpacing: -0.3,
        color: "#d4dae6",
        margin: "0 0 6px",
        lineHeight: 1.4,
      }}>
        Get daily updates on how AI is changing{" "}
        <span style={{ color: "#ef4444" }}>your job</span>
      </h3>
      <p style={{
        fontFamily: "system-ui,-apple-system,sans-serif",
        fontSize: 13,
        color: "#5a6380",
        margin: "0 0 18px",
        lineHeight: 1.5,
      }}>
        One AI-disrupted profession in your inbox every day. No spam. No fluff.
      </p>

      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          gap: 10,
          flexWrap: "wrap",
        }}
      >
        <input
          type="email"
          className="jnl-input"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{
            flex: "1 1 220px",
            minWidth: 0,
            fontFamily: "system-ui,-apple-system,sans-serif",
            fontSize: 14,
            color: "#d4dae6",
            background: "#060918",
            border: "1px solid #151a28",
            borderRadius: 8,
            padding: "10px 14px",
            transition: "border-color .2s",
          }}
        />
        <button
          type="submit"
          className="jnl-btn"
          disabled={submitting}
          style={{
            fontFamily: "'DM Mono',monospace",
            fontSize: 12,
            letterSpacing: 0.5,
            fontWeight: 600,
            color: "#fff",
            background: "#ef4444",
            border: "none",
            borderRadius: 8,
            padding: "10px 22px",
            cursor: "pointer",
            transition: "background .2s",
            whiteSpace: "nowrap",
          }}
        >
          {submitting ? "..." : "Subscribe"}
        </button>
      </form>
    </div>
  );
}
