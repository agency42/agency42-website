"use client";

import React from "react";

export default function EmailSubscribe() {
  const [email, setEmail] = React.useState("");
  const [submitting, setSubmitting] = React.useState(false);
  const [done, setDone] = React.useState<null | "new" | "already">(null);
  const [error, setError] = React.useState("");
  // Honeypot
  const [website, setWebsite] = React.useState("");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setError("");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, website }),
      });
      if (res.ok) {
        // 200 new subscription
        setDone("new");
        return;
      }
      if (res.status === 207) {
        // email send failed but recorded/accepted
        setDone("new");
        return;
      }
      if (res.status === 409) {
        // already subscribed
        setDone("already");
        return;
      }
      if (res.status === 204) {
        // honeypot
        setDone("new");
        return;
      }
      const data = await res.json().catch(() => ({}));
      throw new Error(data?.error || "Failed to subscribe");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unexpected error");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="max-w-lg text-left">
      <h3 className="text-3xl font-light mb-2 text-white">follow our progress</h3>
      <p className="text-sm text-gray-400 mb-4">insights, essays, events and other cool stuff</p>
      {done ? (
        <div className="text-sm text-gray-300">
          {done === "already" ? "You're already subscribed." : "Thanks! Check your email to confirm."}
        </div>
      ) : (
        <form onSubmit={onSubmit} className="flex items-center gap-2">
          {/* Honeypot field */}
          <input
            type="text"
            name="website"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
            tabIndex={-1}
            aria-hidden="true"
            className="hidden"
            autoComplete="off"
          />
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@company.com"
            className="w-full max-w-md p-2 border border-gray-600 bg-gray-900 text-white text-sm placeholder:text-gray-500"
          />
          <button
            type="submit"
            disabled={submitting}
            className="bg-white text-black px-3 py-2 text-xs uppercase tracking-wider hover:bg-gray-200 disabled:opacity-60"
          >
            {submitting ? "..." : "Subscribe"}
          </button>
        </form>
      )}
      {error && <div className="mt-2 text-xs text-red-400">{error}</div>}
      <div className="mt-2 text-[11px] text-gray-500">we only send updates every couple of months</div>
      <div className="mt-1 text-[11px] text-gray-600">By subscribing, you agree to receive marketing emails. Unsubscribe anytime.</div>
    </div>
  );
}


