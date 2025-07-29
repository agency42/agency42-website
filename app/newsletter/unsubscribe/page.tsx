import React from "react";
import type { Metadata } from "next";
import UnsubscribeForm from "./UnsubscribeForm";

export const metadata: Metadata = {
  title: "Newsletter Unsubscribe | Agency/42",
  description:
    "Unsubscribe from the Agency/42 newsletter. We'll process your request quickly and respect your preferences.",
  keywords: [
    "unsubscribe",
    "newsletter",
    "email preferences",
    "Agency42 newsletter",
    "email unsubscribe",
  ],
  openGraph: {
    title: "Newsletter Unsubscribe | Agency/42",
    description:
      "Unsubscribe from the Agency/42 newsletter. We'll process your request quickly and respect your preferences.",
    images: [
      {
        url: "/content/hero-crop.png",
        width: 1200,
        height: 630,
        alt: "Agency/42 Newsletter Unsubscribe",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Newsletter Unsubscribe | Agency/42",
    description:
      "Unsubscribe from the Agency/42 newsletter. We'll process your request quickly and respect your preferences.",
    images: ["/content/hero-crop.png"],
  },
};

// Newsletter unsubscribe page component
export default function NewsletterUnsubscribePage() {
  return (
    <div className="min-h-screen bg-white text-black pt-24">
      <main className="container mx-auto max-w-2xl px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-heading font-medium mb-4">
            Unsubscribe
          </h1>
          <p className="text-lg text-gray-700 font-sans">
            We're sorry to see you go. Please confirm your unsubscribe request
            below.
          </p>
        </div>

        <div
          className="bg-white border-2 border-black rounded-lg p-8 shadow-lg"
          style={{ boxShadow: "8px 8px 0px 0px rgba(0,0,0,1)" }}
        >
          <UnsubscribeForm />
        </div>

        <div className="text-center mt-8">
          <p className="text-sm text-gray-600 font-sans">
            Having trouble? Email us directly at{" "}
            <a
              href="mailto:hello@agency42.co"
              className="underline hover:text-black transition-colors"
            >
              hello@agency42.co
            </a>
          </p>
        </div>
      </main>
    </div>
  );
}
