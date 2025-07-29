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
    <div className="min-h-screen bg-white text-black pt-24">
      <main className="container mx-auto max-w-2xl px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-heading font-medium mb-4">
            Stay Connected
          </h1>
          <p className="text-lg text-gray-700 font-sans">
            Get updates on our latest work, events, workshops, and AI insights.
            Plus case studies, industry developments, and behind-the-scenes
            content.
          </p>
        </div>

        <div
          className="bg-white border-2 border-black rounded-lg p-8 shadow-lg"
          style={{ boxShadow: "8px 8px 0px 0px rgba(0,0,0,1)" }}
        >
          <SubscribeForm />
        </div>

        <div className="text-center mt-8">
          <div className="space-y-2">
            <p className="text-sm text-gray-600 font-sans">
              △ Signal over noise ▸ No spam ◦ Unsubscribe anytime
            </p>
            <p className="text-xs text-gray-500 font-sans">
              By subscribing, you agree to receive marketing emails from
              Agency/42. See our{" "}
              <a
                href="/legal/privacy"
                className="underline hover:text-black transition-colors"
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
