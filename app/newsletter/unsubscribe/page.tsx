import React from "react";
import type { Metadata } from "next";
import { redirect } from "next/navigation";

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
export default function NewsletterUnsubscribePage({ searchParams }: { searchParams?: { confirmed?: string } }) {
  // Only show confirmation if accessed via API redirect
  if (searchParams?.confirmed !== "1") {
    redirect("/");
  }

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
            <h1 className="text-3xl sm:text-4xl font-medium mb-2">unsubscribed</h1>
          </div>
          <div className="mt-8 space-y-4">
            <p className="text-base text-gray-700 leading-relaxed">
              You're unsubscribed. You won't receive marketing emails from Agency/42.
            </p>
            <p className="text-sm text-gray-600">
              Questions? Email{" "}
              <a
                href="mailto:hello@agency42.co"
                className="underline hover:text-gray-900 transition-colors"
              >
                hello@agency42.co
              </a>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
