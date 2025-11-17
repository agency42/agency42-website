import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getContentData } from "@/lib/content";

export const metadata: Metadata = {
  title: "Blog",
  description: "Essays and insights on AI, cybernetics, digital minds, and the future of work from Agency/42.",
  keywords: [
    "AI blog",
    "cybernetics",
    "digital minds",
    "future of work",
    "AI essays",
    "organizational design",
    "AI systems",
    "cybernetic organizations",
    "applied intelligence",
  ],
  openGraph: {
    title: "Blog | Agency/42",
    description: "Essays and insights on AI, cybernetics, digital minds, and the future of work from Agency/42.",
    type: "website",
    images: [
      {
        url: "/images/content/cybernet.jpeg",
        width: 1200,
        height: 630,
        alt: "Agency/42 Blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | Agency/42",
    description: "Essays and insights on AI, cybernetics, digital minds, and the future of work from Agency/42.",
    images: ["/images/content/cybernet.jpeg"],
  },
};

export default async function BlogIndex() {
  const items = (await getContentData()).filter((i) => !/vibe coding/i.test(i.title));
  const hero = {
    href: "/blog/the-cybernetic-organization",
    title: "The Cybernetic Organization",
    description: "On feedback loops, digital minds, and the future of work.",
    image: "/images/content/cybernet.jpeg",
  };

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
            <h1 className="text-4xl sm:text-5xl md:text-5xl font-medium leading-tight mb-8">blog</h1>
          </div>

        <Link href={hero.href} className="block group mb-10">
          <Image
            src={hero.image}
            alt={hero.title}
            width={800}
            height={450}
            sizes="(max-width: 768px) 100vw, 800px"
            className="w-full h-auto group-hover:opacity-90 transition object-cover max-h-[200px]"
          />
          <div className="pt-4">
            <h2 className="text-lg font-medium group-hover:underline">{hero.title}</h2>
            <p className="text-sm text-gray-600 mt-1">{hero.description}</p>
          </div>
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
          {items.map((item) => (
            item.link.startsWith('/') ? (
              <Link key={`${item.title}-${item.date}`} href={item.link} className="block group h-full">
                <div className="border border-gray-200 overflow-hidden flex flex-col h-full">
                  <Image
                    src={item.imageOverride || "/images/content/hero-crop.png"}
                    alt={item.title}
                    width={1200}
                    height={675}
                    sizes="(max-width: 768px) 100vw, 700px"
                    className="w-full h-auto group-hover:opacity-90 transition"
                  />
                  <div className="p-4 text-center flex-1 flex flex-col justify-center">
                    <h3 className="text-base font-medium group-hover:underline">{item.title}</h3>
                    {item.description && <p className="text-sm text-gray-600 mt-1">{item.description}</p>}
                  </div>
                </div>
              </Link>
            ) : (
              <a key={`${item.title}-${item.date}`} href={item.link} target="_blank" rel="noopener noreferrer" className="block group h-full">
                <div className="border border-gray-200 overflow-hidden flex flex-col h-full">
                  <Image
                    src={item.imageOverride || "/images/content/hero-crop.png"}
                    alt={item.title}
                    width={1200}
                    height={675}
                    sizes="(max-width: 768px) 100vw, 700px"
                    className="w-full h-auto group-hover:opacity-90 transition"
                  />
                  <div className="p-4 text-center flex-1 flex flex-col justify-center">
                    <h3 className="text-base font-medium group-hover:underline">{item.title}</h3>
                    {item.description && <p className="text-sm text-gray-600 mt-1">{item.description}</p>}
                  </div>
                </div>
              </a>
            )
          ))}
        </div>
        </div>
      </main>
    </div>
  );
}


