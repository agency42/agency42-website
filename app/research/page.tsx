import React from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
// import Image from 'next/image' // Import if using images

export const metadata: Metadata = {
  title: 'Research | Agency/42',
  description: 'Explore insights, articles, and case studies from Agency/42 on AI, human factors, and creative automation.',
  keywords: ['AI research', 'AI articles', 'AI case studies', 'generative AI insights', 'creative automation research', 'AI future of work', 'digital mind design'],
}

// Placeholder for research items - could eventually come from a CMS or MDX files
const researchItems = [
  {
    title: "Don't Panic: 42 Questions on AI & The Future of Work",
    description: "Exploring the critical questions businesses and individuals should ask as AI transforms the workplace.",
    link: "https://www.linkedin.com/pulse/dont-panic-42-questions-ai-future-work-agency42co-g4mzc/",
    image: "/content/images/dontpanic1.png" // TODO: Verify path and add image
  },
  {
    title: "Digital Mind Design: From Tool AIs to Agents",
    description: "Discussing the evolution from basic AI tools to sophisticated autonomous agents and their implications.",
    link: "https://www.linkedin.com/pulse/digital-mind-design-from-tool-ais-agents-agency42co-lm2wc/",
    image: "/content/images/digital-mind-design.png" // TODO: Verify path and add image
  },
  // Add more research items here
]

export default function ResearchPage() {
  return (
    // Use semantic background and text color
    <div className="min-h-screen bg-background text-foreground pt-24">
      <main className="container mx-auto max-w-4xl px-4 py-16">
        {/* Use heading font, secondary color for subtitle */}
        <h1 className="text-4xl md:text-6xl font-heading font-medium mb-4 text-center">Research & Insights</h1>
        <p className="text-lg text-secondary mb-16 text-center font-sans">Exploring the frontier of applied AI.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {researchItems.map((item, index) => (
            <Link 
              key={index} 
              href={item.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              // Use neutral bg/border
              className="group block bg-neutral-50 p-6 border border-neutral-200 hover:shadow-md transition-shadow duration-300 rounded-md"
            >
              {/* Optional Image Placeholder */}
              {/* Use heading font, accent on hover */}
              <h2 className="font-heading text-xl mb-2 group-hover:text-accent transition-colors">{item.title}</h2>
              {/* Use sans font, secondary color */}
              <p className="font-sans text-sm text-secondary mb-4">{item.description}</p>
              {/* Use accent color for link */}
              <span className="font-mono text-[11px] tracking-wider text-accent group-hover:underline">
                Read Article →
              </span>
            </Link>
          ))}
        </div>

        {/* Use secondary color */}
        <div className="text-center mt-16">
          <p className="text-secondary font-sans">More research coming soon.</p>
        </div>

      </main>
    </div>
  );
} 