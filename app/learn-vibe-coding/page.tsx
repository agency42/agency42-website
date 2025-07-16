import type { Metadata } from "next";
import LearnVibeCodingPageContent from "./page-content";

export const metadata: Metadata = {
  title: "Vibe Coding: Learn to Build 10x Faster with an AI Mentor",
  description:
    "Level up your coding with 1-on-1 AI-assisted pair programming. We provide custom-tailored coaching to help you master AI-native workflows and ship your MVP faster.",
  openGraph: {
    title: "Vibe Coding: Learn to Build 10x Faster with an AI Mentor",
    description:
      "Level up your coding with 1-on-1 AI-assisted pair programming. We provide custom-tailored coaching to help you master AI-native workflows and ship your MVP faster.",
    images: [
      {
        url: "/images/media/vibe-code-coaching.png",
        width: 1200,
        height: 630,
        alt: "Vibe Coding - AI-Assisted Programming",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vibe Coding: Learn to Build 10x Faster with an AI Mentor",
    description:
      "Level up your coding with 1-on-1 AI-assisted pair programming. We provide custom-tailored coaching to help you master AI-native workflows and ship your MVP faster.",
    images: ["/images/media/vibe-code-coaching.png"],
  },
};

export default function LearnVibeCodingPage() {
  return <LearnVibeCodingPageContent />;
}
