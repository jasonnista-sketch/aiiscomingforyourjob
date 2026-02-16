"use client";

import { useState } from "react";

export default function EmailCapture() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (!email) return;
    // TODO: wire up to your email service (ConvertKit, Mailchimp, etc.)
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="email-success">
        <span className="email-success-icon">✓</span>
        You&apos;re in. Watch your inbox.
      </div>
    );
  }

  return (
    <div className="email-form-wrap">
      <input
        type="email"
        className="email-input"
        placeholder="you@example.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSubmit(e)}
      />
      <button className="email-btn" onClick={handleSubmit}>
        Subscribe
      </button>
    </div>
  );
}
