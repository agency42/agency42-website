import React from "react";
import type { Metadata } from "next";
import SubscribeForm from "./SubscribeForm";

export const metadata: Metadata = {
  title: "Subscribe to Newsletter | Agency/42",
  description:
    "Stay connected with Agency/42's latest work, events, workshops, and AI insights. Get updates on new releases, case studies, and industry developments.",
  keywords: [
    "AI newsletter",
    "AI insights",
    "newsletter signup",
    "Agency42 newsletter",
    "AI strategy",
    "AI implementation",
    "AI workshops",
    "AI events",
    "AI case studies",
    "AI consulting insights",
  ],
  openGraph: {
    title: "Subscribe to Newsletter | Agency/42",
    description:
      "Stay connected with Agency/42's latest work, events, workshops, and AI insights. Get updates on new releases, case studies, and industry developments.",
    images: [
      {
        url: "/content/hero-crop.png",
        width: 1200,
        height: 630,
        alt: "Agency/42 Newsletter Subscribe",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Subscribe to Newsletter | Agency/42",
    description:
      "Stay connected with Agency/42's latest work, events, workshops, and AI insights. Get updates on new releases, case studies, and industry developments.",
    images: ["/content/hero-crop.png"],
  },
};

// Newsletter subscribe page component
export default function NewsletterSubscribePage() {
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
            <h1 className="text-3xl sm:text-4xl font-medium mb-2">get updates</h1>
            <p className="text-base text-gray-700 leading-relaxed mt-4">
              Get updates on our latest work, events, workshops, and AI insights.
              Plus case studies, industry developments, and behind-the-scenes content.
            </p>
          </div>

          <div className="mt-8">
            <SubscribeForm />
          </div>

          <div className="mt-8 space-y-2">
            <p className="text-xs text-gray-600">
              Unsubscribe anytime. See our{" "}
              <a
                href="/legal/privacy"
                className="underline hover:text-gray-900 transition-colors"
              >
                privacy policy
              </a>
              .
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
