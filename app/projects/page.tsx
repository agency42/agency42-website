import { getSortedCaseStudiesData } from "@/lib/case-studies";
import CaseStudyCard from "@/components/CaseStudyCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Agency/42",
  description:
    "Selected projects and case studies from Agency/42, showcasing our work in AI consulting and implementation.",
  keywords: [
    "AI portfolio",
    "AI case studies",
    "AI projects",
    "client work",
    "AI implementation examples",
    "generative AI projects",
    "AI agent development",
  ],
  // We can remove noindex, nofollow later when the content is ready
  robots: "noindex, nofollow",
  openGraph: {
    title: "Projects | Agency/42",
    description:
      "Selected projects and case studies from Agency/42, showcasing our work in AI consulting and implementation.",
    images: [
      {
        url: "/content/hero-crop.png",
        width: 1200,
        height: 630,
        alt: "Agency/42 Projects and Case Studies",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects | Agency/42",
    description:
      "Selected projects and case studies from Agency/42, showcasing our work in AI consulting and implementation.",
    images: ["/content/hero-crop.png"],
  },
};

export default function OurWorkPage() {
  const allCaseStudiesData = getSortedCaseStudiesData();

  return (
    <div className="min-h-screen bg-background text-foreground pt-24">
      <main className="container mx-auto max-w-5xl px-4 py-16">
        <h1 className="text-4xl md:text-6xl font-heading font-extrabold mb-4 text-center">
          Our Work
        </h1>
        <p className="text-lg text-gray-700 mb-10 text-center font-sans">
          Selected projects showcasing applied AI.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {allCaseStudiesData.map(({ id, title, hero, stats, description }) => (
            <CaseStudyCard
              key={id}
              title={title}
              image={hero || ""}
              link={`/projects/${id}`}
              stats={stats || {}}
              description={description}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
