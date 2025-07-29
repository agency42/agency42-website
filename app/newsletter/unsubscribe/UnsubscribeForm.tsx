"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

export default function UnsubscribeForm() {
  const searchParams = useSearchParams();
  const [email, setEmail] = useState("");
  const [reason, setReason] = useState("");
  const [feedback, setFeedback] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    // Extract email from URL parameters
    const emailParam = searchParams.get("email") || searchParams.get("e");
    if (emailParam) {
      setEmail(decodeURIComponent(emailParam));
    }
  }, [searchParams]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    // Basic email validation
    if (!email || !email.includes("@")) {
      setError("Please enter a valid email address.");
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch("/api/newsletter/unsubscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          reason,
          feedback,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to process unsubscribe request");
      }

      setSubmitted(true);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "An unexpected error occurred"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="text-center">
        <div className="mb-6">
          <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
            <svg
              className="w-8 h-8 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h2 className="font-heading text-2xl mb-2">
            Unsubscribe Request Received
          </h2>
          <p className="text-gray-700 font-sans">
            We've received your unsubscribe request for <strong>{email}</strong>
            . You'll be removed from our newsletter within 24 hours.
          </p>
        </div>
        <div className="text-sm text-gray-600 font-sans">
          <p>Thank you for being part of our community.</p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label
          htmlFor="email"
          className="block font-mono text-[11px] tracking-wider uppercase mb-2"
        >
          Email Address *
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 border-2 border-black font-sans text-base focus:outline-none focus:ring-2 focus:ring-gray-400"
          placeholder="your.email@example.com"
          required
        />
      </div>

      <div>
        <label
          htmlFor="reason"
          className="block font-mono text-[11px] tracking-wider uppercase mb-2"
        >
          Reason for Unsubscribing (Optional)
        </label>
        <select
          id="reason"
          value={reason}
          onChange={(e) => setReason(e.target.value)}
          className="w-full p-3 border-2 border-black font-sans text-base focus:outline-none focus:ring-2 focus:ring-gray-400"
        >
          <option value="">Select a reason...</option>
          <option value="too-frequent">Too many emails</option>
          <option value="not-relevant">Content not relevant</option>
          <option value="never-signed-up">Never signed up</option>
          <option value="changed-interests">Changed interests</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="feedback"
          className="block font-mono text-[11px] tracking-wider uppercase mb-2"
        >
          Additional Feedback (Optional)
        </label>
        <textarea
          id="feedback"
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          rows={4}
          className="w-full p-3 border-2 border-black font-sans text-base focus:outline-none focus:ring-2 focus:ring-gray-400"
          placeholder="Help us improve by sharing any additional thoughts..."
        />
      </div>

      {error && (
        <div className="p-3 bg-red-50 border-2 border-red-200 text-red-700 font-sans text-sm">
          {error}
        </div>
      )}

      <div className="flex flex-col sm:flex-row gap-4 pt-4">
        <button
          type="submit"
          disabled={isSubmitting}
          className="flex-1 bg-black text-white font-mono text-[11px] tracking-wider uppercase px-8 py-3 hover:bg-gray-900 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "Processing..." : "Confirm Unsubscribe"}
        </button>
        <Link
          href="/"
          className="flex-1 text-center bg-white text-black border-2 border-black font-mono text-[11px] tracking-wider uppercase px-8 py-3 hover:bg-gray-50 transition-colors duration-200"
        >
          Cancel
        </Link>
      </div>

      <div className="text-xs text-gray-600 font-sans text-center">
        By confirming, you'll be removed from all Agency/42 marketing emails.
      </div>
    </form>
  );
}
