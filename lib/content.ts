/**
 * Content utilities for Agency42 website
 * Handles fetching and processing of content data
 */

export interface ContentItemData {
  id: number;
  tag: string;
  title: string;
  description: string;
  imageOverride: string | null;
  link: string;
  date: string;
  isFeaturedVideo: boolean;
  weight?: number; // optional manual ordering; lower comes first
}

/**
 * Fetches content data from the public directory
 * Works both server-side and client-side
 */
export async function getContentData(): Promise<ContentItemData[]> {
  try {
    // Server: read JSON directly from filesystem to avoid base URL issues
    if (typeof window === "undefined") {
      const { readFile } = await import("fs/promises");
      const { join } = await import("path");
      const filePath = join(process.cwd(), "public", "data", "content.json");
      const raw = await readFile(filePath, "utf8");
      const data: ContentItemData[] = JSON.parse(raw);
      data.sort((a, b) => {
        const aw = typeof a.weight === 'number' ? a.weight : Number.POSITIVE_INFINITY;
        const bw = typeof b.weight === 'number' ? b.weight : Number.POSITIVE_INFINITY;
        if (aw !== bw) return aw - bw;
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      });
      return data;
    }

    // Client: fetch from public path
    const response = await fetch(`/data/content.json`, { cache: "no-store" });
    if (!response.ok) throw new Error(`Failed to fetch content data: ${response.status}`);
    const data: ContentItemData[] = await response.json();
    data.sort((a, b) => {
      const aw = typeof a.weight === 'number' ? a.weight : Number.POSITIVE_INFINITY;
      const bw = typeof b.weight === 'number' ? b.weight : Number.POSITIVE_INFINITY;
      if (aw !== bw) return aw - bw;
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
    return data;
  } catch (error) {
    console.error("Error fetching content data:", error);
    return [];
  }
}

/**
 * Get the featured video from content data
 */
export async function getFeaturedVideo(): Promise<ContentItemData | null> {
  const allContent = await getContentData();
  return (
    allContent.find((item) => item.isFeaturedVideo && item.tag === "video") ||
    null
  );
}

/**
 * Extract YouTube Video ID from URL
 */
export function getYouTubeId(url: string): string | null {
  const regExp =
    /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=|live\/)([^#&?]*).*/;
  const match = url.match(regExp);
  return match && match[2].length === 11 ? match[2] : null;
}
