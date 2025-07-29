import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Tilt, Spotlight } from "@/components/ui/tilt";
import { getContentData } from "@/lib/content";

export const metadata: Metadata = {
  title: "Stories & Resources | Agency/42",
  description:
    "Explore articles, videos, community links, and resources from Agency/42 on AI, development, and creative technology.",
  keywords: [
    "AI content",
    "AI articles",
    "AI videos",
    "AI community",
    "generative AI resources",
    "creative automation content",
    "AI development blog",
    "AI insights",
    "AI tutorials",
    "applied AI blog",
    "human-centric AI",
  ],
  openGraph: {
    title: "Stories & Resources | Agency/42",
    description:
      "Explore articles, videos, community links, and resources from Agency/42 on AI, development, and creative technology.",
    images: [
      {
        url: "/content/hero-crop.png",
        width: 1200,
        height: 630,
        alt: "Agency/42 Stories & Resources",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Stories & Resources | Agency/42",
    description:
      "Explore articles, videos, community links, and resources from Agency/42 on AI, development, and creative technology.",
    images: ["/content/hero-crop.png"],
  },
};

// Stories page component
export default async function StoriesPage() {
  const contentItems = await getContentData();

  return (
    <div className="min-h-screen bg-white text-black pt-24">
      <main className="container mx-auto max-w-5xl px-4 py-16">
        <h1 className="text-4xl md:text-6xl font-heading font-medium mb-4 text-center">
          Stories
        </h1>
        <p className="text-lg text-gray-700 mb-6 text-center font-sans">
          Insights, tutorials, and resources from the forefront of applied AI.
        </p>

        {contentItems.length === 0 ? (
          <p className="text-center text-gray-700 font-sans">
            Could not load content items.
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {contentItems.map((item) => (
              <Tilt
                key={item.id}
                className="group relative rounded-lg bg-gray-100 border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                rotationFactor={6}
                springOptions={{
                  stiffness: 26.7,
                  damping: 4.1,
                  mass: 0.2,
                }}
              >
                <Link
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col h-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-lg"
                >
                  <Spotlight
                    className="z-10 from-gray-400/30 via-gray-300/20 to-gray-200/10"
                    size={200}
                  />
                  <div className="relative aspect-video w-full overflow-hidden bg-gray-200">
                    {item.imageOverride ? (
                      <Image
                        src={item.imageOverride}
                        alt={item.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    ) : (
                      <span className="flex items-center justify-center h-full text-gray-500 text-sm">
                        No Image
                      </span>
                    )}
                  </div>
                  <div className="p-5 flex flex-col flex-grow">
                    <span className="font-mono text-[10px] tracking-widest text-gray-700 mb-2 uppercase">
                      {item.tag}
                    </span>
                    <h2 className="font-heading text-lg mb-2 text-black group-hover:text-gray-800 transition-colors">
                      {item.title}
                    </h2>
                    <p className="font-sans text-sm text-gray-700 mb-4">
                      {item.description}
                    </p>
                    <span className="mt-auto font-mono text-[11px] tracking-wider text-black group-hover:underline">
                      {item.tag === "community"
                        ? "Join →"
                        : item.tag === "newsletter" || item.tag === "article"
                          ? "Read →"
                          : item.tag === "workshop" || item.tag === "video"
                            ? "Watch →"
                            : "View Content →"}
                    </span>
                  </div>
                </Link>
              </Tilt>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
