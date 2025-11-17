import type { Metadata } from "next";
import Home from "@/components/Home";

export const metadata: Metadata = {
  title: "Agency/42",
  description: "Applied intelligence studio based in Los Angeles, California. We work with select clients to integrate AI into business and social applications.",
  keywords: [
    "AI consulting",
    "AI strategy",
    "AI implementation",
    "AI workflows",
    "AI prototyping",
    "AI deployment",
    "applied intelligence",
    "AI integration",
    "AI automation",
    "generative AI",
    "digital minds",
    "cybernetic systems",
  ],
  openGraph: {
    title: "Agency/42 | Applied Intelligence Studio",
    description: "Applied intelligence studio based in Los Angeles, California. We work with select clients to integrate AI into business and social applications.",
    images: [
      {
        url: "/images/content/cybernet.jpeg",
        width: 1200,
        height: 630,
        alt: "Agency/42 - Applied Intelligence Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Agency/42 | Applied Intelligence Studio",
    description: "Applied intelligence studio based in Los Angeles, California. We work with select clients to integrate AI into business and social applications.",
    images: ["/images/content/cybernet.jpeg"],
  },
};

// Main home page component (Server Component)

export default function Page() {
  return <Home />;
}
