import type { Metadata } from "next";
import LearnVibeCodingPageContent from "./page-content";

export const metadata: Metadata = {
  title: "Learn Vibe Coding - Build Your Dream Product With AI",
  description:
    "Join 1.5k+ developers learning AI-powered development. Our community has won hackathons and raised $125k+ for their startups. Master Cursor + Claude to ship 10x faster.",
  openGraph: {
    title: "Learn Vibe Coding - Build Your Dream Product With AI",
    description:
      "Join 1.5k+ developers learning AI-powered development. Our community has won hackathons and raised $125k+ for their startups. Master Cursor + Claude to ship 10x faster.",
    images: [
      {
        url: "/images/media/vibe-code-poster3.png",
        width: 1200,
        height: 630,
        alt: "Vibe Coding – Penrose triangle illustration",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Learn Vibe Coding - Build Your Dream Product With AI",
    description:
      "Join 1.5k+ developers learning AI-powered development. Our community has won hackathons and raised $125k+ for their startups.",
    images: ["/images/media/vibe-code-poster3.png"],
  },
};

export default function LearnVibeCodingPage() {
  return <LearnVibeCodingPageContent />;
}
