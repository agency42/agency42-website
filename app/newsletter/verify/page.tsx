import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "You're Subscribed | Agency/42",
  description:
    "Thanks for subscribing to the Agency/42 newsletter. You're all set.",
  openGraph: {
    title: "You're Subscribed | Agency/42",
    description:
      "Thanks for subscribing to the Agency/42 newsletter. You're all set.",
    images: [
      {
        url: "/content/hero-crop.png",
        width: 1200,
        height: 630,
        alt: "Agency/42 Newsletter Subscription",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "You're Subscribed | Agency/42",
    description:
      "Thanks for subscribing to the Agency/42 newsletter. You're all set.",
    images: ["/content/hero-crop.png"],
  },
};

export default function NewsletterVerifyPage() {
  return (
    <div className="min-h-screen bg-white text-black pt-24">
      <main className="container mx-auto max-w-2xl px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-heading font-medium mb-4">
            You're Subscribed
          </h1>
        </div>

        <div
          className="bg-white border-2 border-black rounded-lg p-8 shadow-lg"
          style={{ boxShadow: "8px 8px 0px 0px rgba(0,0,0,1)" }}
        >
          <div className="text-center">
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
            <p className="font-sans">
              Thanks for subscribing. You're all set.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}


