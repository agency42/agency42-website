import type { Metadata } from 'next'
import HomePageClient from './components/HomePageClient' // Import the new client component

export const metadata: Metadata = {
  title: 'Agency/42 | Generative AI Development for Creative Automation',
  description: 'Agency/42: Leading AI development studio specializing in custom AI solutions, generative AI, and creative automation tools for marketers, designers, and social media applications.',
  keywords: ['generative AI', 'AI development', 'creative automation', 'AI agency', 'AI studio', 'custom AI solutions', 'AI for marketers', 'AI for designers', 'social media AI', 'AI agent integration', 'Vibe Coding Class'],
  // You can add more metadata fields here later, like keywords or open graph tags
}

// Main home page component (Now a Server Component)
export default function Home() {
  // Data can be defined here (or fetched)
  const contentItems = [
    {
      title: "Vibe Coding Class (Community Discord)",
      image: "/content/images/AIclass1.jpeg",
      link: "https://discord.com/invite/amR4AEjqh4"
    },
    {
      title: "Digital Mind Design",
      image: "/content/images/digital-mind-design.png",
      link: "https://www.linkedin.com/pulse/digital-mind-design-from-tool-ais-agents-agency42co-lm2wc/?trackingId=p6ON9FVMTGKMm%2BhaffSlKQ%3D%3D"
    },
    {
      title: "AI & The Future of Work",
      image: "/content/images/dontpanic1.png",
      link: "https://www.linkedin.com/pulse/dont-panic-42-questions-ai-future-work-agency42co-g4mzc/?trackingId=RtDD6HqXTC3vzvFTWm%2BO9Q%3D%3D"
    },
    {
      title: "Rick & Morty Digital Twins",
      image: "/content/images/rick-1.png",
      link: "https://www.youtube.com/live/ulVeaMW6WyY"
    }
  ]

  // Render the client component, passing data as props
  return <HomePageClient contentItems={contentItems} />
}