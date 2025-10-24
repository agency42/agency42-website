"use client";

import React from "react";

type Subject = "Development" | "Consulting" | "Other";

export default function WorkWithUsForm() {
  const [subject, setSubject] = React.useState<Subject>("Development");
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [company, setCompany] = React.useState("");
  const [budget, setBudget] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [submitting, setSubmitting] = React.useState(false);
  const [done, setDone] = React.useState(false);
  const [error, setError] = React.useState<string>("");

  const placeholder = React.useMemo(() => {
    switch (subject) {
      case "Development":
        return "What do you want to build?";
      case "Consulting":
        return "What challenge could we help you solve?";
      default:
        return "What should we explore together?";
    }
  }, [subject]);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setError("");
    try {
      const res = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          company,
          budget,
          message,
          subject,
          form_type: "services_inquiry",
        }),
      });
      if (!res.ok) throw new Error("Failed to send inquiry");
      setDone(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unexpected error");
    } finally {
      setSubmitting(false);
    }
  }

  if (done) {
    return (
      <div className="rounded-sm border border-gray-200 p-4 text-sm text-gray-700">
        Thanks! We'll get back to you shortly.
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      {/* Subject */}
      <fieldset className="space-y-2">
        <legend className="text-xs uppercase tracking-wider text-gray-600">I'm interested in</legend>
        <div className="flex flex-wrap gap-4 text-sm">
          {(["Development", "Consulting", "Other"] as Subject[]).map((s) => (
            <label key={s} className="flex items-center gap-2">
              <input
                type="radio"
                name="subject"
                value={s}
                checked={subject === s}
                onChange={() => setSubject(s)}
              />
              {s}
            </label>
          ))}
        </div>
      </fieldset>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <input
          type="text"
          required
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border border-gray-300 p-2 text-sm"
        />
        <input
          type="email"
          required
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border border-gray-300 p-2 text-sm"
        />
        <input
          type="text"
          placeholder="Company"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          className="w-full border border-gray-300 p-2 text-sm"
        />
        <input
          type="text"
          value={budget}
          onChange={(e) => setBudget(e.target.value)}
          placeholder="Budget — e.g. $10k–$100k"
          className="w-full border border-gray-300 p-2 text-sm"
        />
      </div>

      <textarea
        required
        rows={5}
        placeholder={placeholder}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="w-full border border-gray-300 p-2 text-sm"
      />

      {error && <div className="text-xs text-red-600">{error}</div>}

      <button
        type="submit"
        disabled={submitting}
        className="bg-black text-white px-5 py-2 text-xs uppercase tracking-wide disabled:opacity-60"
      >
        {submitting ? "Sending..." : "Send"}
      </button>
    </form>
  );
}


