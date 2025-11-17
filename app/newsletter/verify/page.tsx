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
        url: "/images/content/cybernet.jpeg",
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
    images: ["/images/content/cybernet.jpeg"],
  },
};

export default function NewsletterVerifyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-white via-gray-50 to-white">
      {/* Grid background */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.02]" style={{
        backgroundImage: `linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)`,
        backgroundSize: '32px 32px'
      }} />
      <main className="flex-1 px-4 sm:px-6 pb-16 relative z-10">
        <div className="max-w-2xl mx-auto">
          <div className="pt-8 sm:pt-12 pb-4">
            <h1 className="text-3xl sm:text-4xl font-medium mb-2">you're subscribed</h1>
          </div>
          <div className="mt-8">
            <p className="text-base text-gray-700 leading-relaxed">
              Thanks for subscribing. You're all set.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}


