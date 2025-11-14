import type { Metadata } from "next";
import Home from "@/components/Home";

// Updated metadata based on PRD v2 focus and homepage content analysis
export const metadata: Metadata = {
  title: "Agency/42",
  description:
    "Agency/42",
  keywords: [
    "AI consulting",
    "AI strategy",
    "AI implementation",
    "AI workflows",
    "AI prototyping",
    "AI deployment",
    "competitive edge",
    "AI audit",
    "AI workshop",
    "systems thinking",
    "generative AI",
    "AI automation",
  ],
  openGraph: {
    title: "Agency/42",
    description: "Agency/42",
    images: [
      {
        url: "/content/hero-crop.png",
        width: 1200,
        height: 630,
        alt: "Agency 42 - Build Tomorrow's Competitive Edge",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Agency/42",
    description: "Agency/42",
    images: ["/content/hero-crop.png"],
  },
};

// Main home page component (Server Component)

export default function Page() {
  return <Home />;
}
