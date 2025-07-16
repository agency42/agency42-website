import type { Metadata } from "next";
import HomePageClient from "@/components/HomePageClient";
import { getFeaturedVideo, getYouTubeId } from "@/lib/content";

// Updated metadata based on PRD v2 focus and homepage content analysis
export const metadata: Metadata = {
  title: "Build Tomorrow's Competitive Edge | Agency/42", // Follows hero headline
  description:
    "We turn your AI ambitions into real world advantage by mapping opportunities, prototyping fast, and shipping systems that compound.",
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
    title: "Build Tomorrow's Competitive Edge | Agency/42",
    description:
      "We turn your AI ambitions into real-world advantage—mapping opportunities, prototyping fast, and shipping systems that compound.",
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
    title: "Build Tomorrow's Competitive Edge | Agency/42",
    description:
      "We turn your AI ambitions into real-world advantage—mapping opportunities, prototyping fast, and shipping systems that compound.",
    images: ["/content/hero-crop.png"],
  },
};

// Main home page component (Server Component)

export default async function Home() {
  const featuredVideo = await getFeaturedVideo();
  const featuredVideoId = featuredVideo
    ? getYouTubeId(featuredVideo.link)
    : null;

  return <HomePageClient featuredVideoId={featuredVideoId} />;
}
