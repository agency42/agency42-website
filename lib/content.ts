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
}

/**
 * Fetches content data from the public directory
 * Works both server-side and client-side
 */
export async function getContentData(): Promise<ContentItemData[]> {
  try {
    // Use absolute URL for server-side, relative for client-side
    const baseUrl =
      typeof window === "undefined"
        ? process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"
        : "";

    const response = await fetch(`${baseUrl}/data/content.json`, {
      // Cache for 1 hour in production, no cache in development
      next: { revalidate: process.env.NODE_ENV === "production" ? 3600 : 0 },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch content data: ${response.status}`);
    }

    const data: ContentItemData[] = await response.json();

    // Sort by date, newest first
    data.sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );

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
