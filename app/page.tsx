import type { Metadata } from 'next'
import HomePageClient from '@/components/HomePageClient'
import fs from 'fs/promises' // Import fs
import path from 'path' // Import path

// Updated metadata based on PRD v2 focus and homepage content analysis
export const metadata: Metadata = {
  title: "Build Tomorrow's Competitive Edge | Agency/42", // Follows hero headline
  description: "We turn your AI ambitions into real-world advantage—mapping opportunities, prototyping fast, and shipping systems that compound.",
  keywords: ['AI consulting', 'AI strategy', 'AI implementation', 'AI workflows', 'AI prototyping', 'AI deployment', 'competitive edge', 'AI audit', 'AI workshop', 'systems thinking', 'generative AI', 'AI automation'],
}

// Updated interface
interface ContentItemData {
  id: number; // Changed
  tag: string; // Changed
  title: string;
  description: string;
  imageOverride: string | null; // Changed
  link: string;
  date: string;
  isFeaturedVideo: boolean;
}

async function getContentData(): Promise<ContentItemData[]> {
  const filePath = path.join(process.cwd(), 'app', 'data', 'content.json');
  try {
    const jsonData = await fs.readFile(filePath, 'utf-8');
    return JSON.parse(jsonData);
  } catch (error) {
    console.error("Error reading content data for home page:", error);
    return [];
  }
}

// Function to extract YouTube Video ID from URL
function getYouTubeId(url: string): string | null {
  // Updated regex to include /live/ links
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=|live\/)([^#&?]*).*/;
  const match = url.match(regExp);
  return (match && match[2].length === 11) ? match[2] : null;
}

// Main home page component (Server Component)
export default async function Home() {
  const allContent = await getContentData();
  
  // Find the featured video using the 'tag' field
  const featuredVideo = allContent.find(item => item.isFeaturedVideo && item.tag === 'video');
  const featuredVideoId = featuredVideo ? getYouTubeId(featuredVideo.link) : null;

  // We might still need other content for carousels etc., depending on final design
  // For now, just passing the video ID

  return <HomePageClient featuredVideoId={featuredVideoId} />
}