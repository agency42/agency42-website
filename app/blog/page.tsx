import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getContentData } from "@/lib/content";

export const metadata: Metadata = {
  title: "Blog | Agency/42",
  description: "Essays and newsletter posts from Agency/42.",
};

export default async function BlogIndex() {
  const items = (await getContentData()).filter((i) => !/vibe coding/i.test(i.title));
  const hero = {
    href: "https://www.linkedin.com/pulse/cybernetic-organization-agency42co-4mrgc/cyb",
    title: "The Cybernetic Organization",
    description: "On feedback loops, digital minds, and the future of work.",
    image: "/images/content/cybernetic-org-img.png",
  };

  return (
    <div className="px-4 sm:px-6 py-10">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-medium mb-6 text-center">Blog</h1>

        <Link href={hero.href} target="_blank" rel="noopener noreferrer" className="block group mb-10">
          <div className="border border-gray-200 overflow-hidden">
            <Image
              src={hero.image}
              alt={hero.title}
              width={1200}
              height={675}
              sizes="(max-width: 768px) 100vw, 900px"
              className="w-full h-auto group-hover:opacity-90 transition"
            />
            <div className="p-5 text-center">
              <h2 className="text-xl sm:text-2xl font-medium group-hover:underline">{hero.title}</h2>
              <p className="text-sm text-gray-600 mt-1">{hero.description}</p>
            </div>
          </div>
        </Link>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
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
    </div>
  );
}


