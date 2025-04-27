import React from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Our Work | Agency/42',
  description: 'Selected projects and case studies from Agency/42, showcasing our work in AI consulting and implementation.',
  keywords: ['AI portfolio', 'AI case studies', 'AI projects', 'client work', 'AI implementation examples'],
}

// Placeholder data for portfolio items
// Structure inspired by the table-like reference, but simplified for a list
const portfolioItems = [
  {
    title: 'AI Agent Community Platform',
    tags: ['Discord Bot', 'Community Building', 'Vector DB'],
    description: 'Developed a custom Discord bot integrating multiple AI models and vector search for automated moderation and knowledge management.',
    link: '#', // Replace with actual link or case study page
  },
  {
    title: 'Generative Brand Asset Pipeline',
    tags: ['Stable Diffusion', 'Brand Identity', 'Workflow Automation'],
    description: 'Built an automated pipeline for generating on-brand visual assets using fine-tuned diffusion models.',
    link: '#',
  },
  {
    title: 'AI-Powered Content Strategy Tool',
    tags: ['LLM Integration', 'Content Analysis', 'SEO'],
    description: 'Created a tool using LLMs to analyze market trends and generate data-driven content strategy recommendations.',
    link: '#',
  },
  {
    title: 'Internal Knowledge Base Search',
    tags: ['RAG', 'Semantic Search', 'Internal Tools'],
    description: 'Implemented a Retrieval-Augmented Generation system for semantic search across internal company documentation.',
    link: '#',
  },
  // Add more items here
]

export default function OurWorkPage() {
  return (
    <div className="min-h-screen bg-background text-foreground pt-24">
      <main className="container mx-auto max-w-5xl px-4 py-16">
        <h1 className="text-4xl md:text-6xl font-heading-pixel font-medium mb-4 text-center pixel-heading">Our Work</h1>
        <p className="text-lg text-neutral-400 mb-16 text-center font-sans">Selected projects showcasing applied AI.</p>

        <div className="space-y-12"> {/* Increased spacing between items */}
          {portfolioItems.map((item, index) => (
            <div key={index} className="py-8 border-b border-neutral-800 group"> {/* Added padding and border */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                <div className="md:col-span-4">
                  <h2 className="font-heading text-2xl mb-2 text-foreground group-hover:text-neutral-300 transition-colors">
                    {item.link !== '#' ? (
                      <Link href={item.link} target="_blank" rel="noopener noreferrer">{item.title}</Link>
                    ) : (
                      item.title
                    )}
                  </h2>
                  <div className="flex flex-wrap gap-2 mb-4 md:mb-0">
                    {item.tags.map((tag) => (
                      <span key={tag} className="inline-block border border-neutral-700 text-neutral-400 font-mono text-[10px] uppercase tracking-wider px-2 py-0.5">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="md:col-span-7">
                  <p className="font-sans text-neutral-400 leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>
                <div className="md:col-span-1 md:text-right">
                  {item.link !== '#' && (
                    <Link 
                      href={item.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-block font-mono text-[11px] tracking-wider text-foreground hover:text-neutral-400 transition-colors whitespace-nowrap"
                    >
                      Visit Site →
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
} 