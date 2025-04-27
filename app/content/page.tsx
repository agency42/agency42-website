import React from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import fs from 'fs/promises' // Import Node.js filesystem module
import path from 'path' // Import Node.js path module
import { Tilt, Spotlight } from '@/components/ui/tilt' // Import Tilt and Spotlight

export const metadata: Metadata = {
  title: 'Content Hub | Agency/42',
  description: 'Explore articles, videos, community links, and resources from Agency/42 on AI, development, and creative technology.',
  keywords: ['AI content', 'AI articles', 'AI videos', 'AI community', 'generative AI resources', 'creative automation content', 'AI development blog'],
}

// Updated interface
interface ContentItemData {
  id: number; // Changed to number
  tag: string; // Renamed from type
  title: string;
  description: string;
  imageOverride: string | null; // Renamed from image, allow null
  link: string;
  date: string;
  isFeaturedVideo: boolean;
}

// Helper function to read and parse the JSON data
async function getContentData(): Promise<ContentItemData[]> {
  const filePath = path.join(process.cwd(), 'app', 'data', 'content.json');
  try {
    const jsonData = await fs.readFile(filePath, 'utf-8');
    const data: ContentItemData[] = JSON.parse(jsonData);
    // Sort data by date, newest first
    data.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    return data;
  } catch (error) {
    console.error("Error reading or parsing content data:", error);
    return []; // Return empty array on error
  }
}

export default async function ContentPage() {
  const contentItems = await getContentData();

  return (
    <div className="min-h-screen bg-background text-foreground pt-24">
      <main className="container mx-auto max-w-5xl px-4 py-16">
        <h1 className="text-4xl md:text-6xl font-heading font-medium mb-4 text-center">Stories</h1>
        <p className="text-lg text-secondary mb-16 text-center font-sans">Insights, tutorials, and resources from the forefront of applied AI.</p>

        {contentItems.length === 0 ? (
          <p className="text-center text-secondary font-sans">Could not load content items.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {contentItems.map((item) => (
              <Tilt
                key={item.id}
                className="group relative rounded-lg bg-neutral-900 border border-neutral-800 overflow-hidden"
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
                  className="flex flex-col h-full transition-all duration-300"
                >
                  <Spotlight 
                    className='z-10 from-neutral-400/50 via-neutral-500/20 to-neutral-600/10'
                    size={200} 
                  />
                  <div className="relative aspect-video w-full overflow-hidden bg-neutral-800">
                    {item.imageOverride ? (
                      <Image 
                        src={item.imageOverride} 
                        alt={item.title} 
                        fill 
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    ) : (
                      <span className="flex items-center justify-center h-full text-neutral-500 text-sm">No Image</span>
                    )}
                  </div>
                  <div className="p-5 flex flex-col flex-grow text-foreground">
                    <span className="font-mono text-[10px] tracking-widest text-neutral-400 mb-2 uppercase">{item.tag}</span>
                    <h2 className="font-heading text-lg mb-2 group-hover:text-foreground transition-colors flex-grow">{item.title}</h2>
                    <p className="font-sans text-sm text-neutral-400 mb-4 flex-grow">{item.description}</p>
                    <span className="mt-auto font-mono text-[11px] tracking-wider text-foreground group-hover:underline">
                      {item.tag === 'community' ? 'Join →' : item.tag === 'newsletter' ? 'Subscribe →' : 'View Content →'}
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