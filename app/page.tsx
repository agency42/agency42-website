import type { Metadata } from 'next'
import HomePageClient from './components/HomePageClient'

// Updated metadata based on PRD v2 focus
export const metadata: Metadata = {
  title: 'Agency/42 | AI Consulting & Implementation',
  description: 'Agency/42: Stop Guessing. Start Operating at AI Speed. We turn Unknown-Unknowns into 10× Outcomes through AI audits, workshops, and retainers.',
  keywords: ['AI consulting', 'AI strategy', 'AI implementation', 'AI audit', 'AI workshop', 'fractional AI CTO', 'generative AI', 'AI automation', 'human efficiency'],
}

// Main home page component (Server Component)
export default function Home() {
  // Keep it simple, render the client component
  // Data fetching or definition for specific sections can be handled within HomePageClient or passed down if needed
  return <HomePageClient />
}