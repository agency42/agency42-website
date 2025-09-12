"use client";

import Link from "next/link";
import React, { useState } from "react";

export default function SubscribeForm() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

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
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok && data?.success) {
        setSubmitted(true);
      } else if (response.status === 409) {
        throw new Error("You're already subscribed.");
      } else {
        throw new Error(data?.error || "Failed to subscribe to newsletter");
      }
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
          <h2 className="font-heading text-2xl mb-2">You're In!</h2>
          <p className="text-gray-700 font-sans">
            Thanks for subscribing with <strong>{email}</strong>. You'll hear
            from us when we have something worth sharing.
          </p>
        </div>
        <div className="space-y-3">
          <div className="text-sm text-gray-600 font-sans">
            <p>▲ We'll keep you posted on the good stuff!</p>
          </div>
          <div className="pt-4">
            <Link
              href="/"
              className="inline-block bg-black text-white font-mono text-[11px] tracking-wider uppercase px-8 py-3 hover:bg-gray-900 transition-colors duration-200"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-6 text-center">
        <h3 className="font-heading text-xl mb-2">Follow the Journey</h3>
        <p className="text-gray-600 font-sans text-sm">
          Stay connected with our latest work, events, and insights.
        </p>
      </div>

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

        {error && (
          <div className="p-3 bg-red-50 border-2 border-red-200 text-red-700 font-sans text-sm">
            {error}
          </div>
        )}

        <div className="space-y-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-black text-white font-mono text-[11px] tracking-wider uppercase px-8 py-3 hover:bg-gray-900 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Subscribing..." : "Subscribe Now"}
          </button>

          <div className="text-center">
            <Link
              href="/"
              className="text-gray-600 hover:text-black font-mono text-[10px] tracking-wider uppercase transition-colors"
            >
              Maybe Later
            </Link>
          </div>
        </div>

        <div className="bg-gray-50 border border-gray-200 p-4 rounded">
          <h4 className="font-mono text-[10px] tracking-wider uppercase mb-2 text-gray-700">
            What You'll Get:
          </h4>
          <ul className="text-xs text-gray-600 font-sans space-y-1">
            <li>▹ Updates on our latest work & releases</li>
            <li>▹ Workshop and event announcements</li>
            <li>▹ AI case studies and insights</li>
            <li>▹ Industry developments & trends</li>
            <li>▹ Behind-the-scenes content</li>
          </ul>
        </div>
      </form>
    </div>
  );
}
