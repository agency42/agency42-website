'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { WorkWithUsModal } from './WorkWithUsModal'

export default function HomePageClient(/* No props expected for now */) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleWorkWithUsClick = () => {
    // TODO: Replace with logic to show the new Resend form component 
    // For now, it might still open the modal, or do nothing.
    setIsModalOpen(true); 
  }

  return (
    <div className="min-h-screen bg-base-light text-base-dark">
      {/* 1. Hero Section */}
      <section className="py-24 md:py-32 px-4 bg-neutral-50">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-6xl font-heading font-medium mb-6">
            Stop Guessing. Start Operating at AI Speed.
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Turn Unknown-Unknowns into 10× Outcomes. We help you find and implement the highest-impact AI opportunities.
          </p>
          <button
            onClick={handleWorkWithUsClick}
            className="inline-block bg-black text-white font-mono text-[11px] tracking-wider px-8 py-4 hover:bg-accent-start transition-colors"
          >
            GET YOUR AI AUDIT →
          </button>
        </div>
      </section>

      {/* 2. Proof Bar */}
      <section className="py-12 bg-base-dark text-base-light">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-2xl md:text-3xl font-heading font-semibold">3,000+</p>
              <p className="font-mono text-xs uppercase tracking-wider">Professionals Trained</p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-heading font-semibold">25k+</p>
              <p className="font-mono text-xs uppercase tracking-wider">YouTube Subscribers</p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-heading font-semibold">1.8M+</p>
              <p className="font-mono text-xs uppercase tracking-wider">Views</p>
            </div>
            <div>
              <p className="text-lg md:text-xl font-heading font-semibold">[Client Logos]</p>
              <p className="font-mono text-xs uppercase tracking-wider">Placeholder</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Problem Block */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-medium mb-6">
            You don't know what you don't know.
          </h2>
          <p className="text-lg md:text-xl text-neutral-600">
            That's fatal in 2025. The AI landscape shifts daily. Relying on generic tools or guesswork leads to wasted resources and missed opportunities. Identify your specific leverage points before your competitors do.
          </p>
        </div>
      </section>

      {/* 4. Solution Trio */}
      <section className="py-20 px-4 bg-neutral-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-center font-heading text-3xl md:text-4xl font-medium mb-12">How We Help You Win</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* AI Opportunity Audit */}
            <div className="p-8 bg-white border border-neutral-200">
              <h3 className="font-mono text-[11px] tracking-wider mb-4">01 / AI OPPORTUNITY AUDIT</h3>
              <p className="font-light text-[13px] leading-relaxed mb-4">
                A rapid, intensive analysis of your business to identify the top 1-3 highest ROI AI applications tailored to your specific goals and resources. We deliver a concrete action plan.
              </p>
              <Link href="/services#audit" className="font-mono text-[11px] tracking-wider text-accent-start hover:text-accent-end transition-colors">Learn More →</Link>
            </div>
            {/* Hands-on Workshop */}
            <div className="p-8 bg-white border border-neutral-200">
              <h3 className="font-mono text-[11px] tracking-wider mb-4">02 / HANDS-ON WORKSHOP</h3>
              <p className="font-light text-[13px] leading-relaxed mb-4">
                Targeted training for your team on the specific AI tools and workflows identified in the audit. Go from zero to productive implementation in days, not months.
              </p>
              <Link href="/services#workshop" className="font-mono text-[11px] tracking-wider text-accent-start hover:text-accent-end transition-colors">Learn More →</Link>
            </div>
            {/* Fractional AI CTO Retainer */}
            <div className="p-8 bg-white border border-neutral-200">
              <h3 className="font-mono text-[11px] tracking-wider mb-4">03 / FRACTIONAL AI CTO RETAINER</h3>
              <p className="font-light text-[13px] leading-relaxed mb-4">
                Ongoing strategic guidance, implementation support, and team upskilling. We act as your dedicated AI leadership to ensure continuous adaptation and value generation.
              </p>
              <Link href="/services#retainer" className="font-mono text-[11px] tracking-wider text-accent-start hover:text-accent-end transition-colors">Learn More →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Pricing Teaser */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-3xl text-center">
          <p className="font-mono text-sm md:text-base tracking-wider text-neutral-700">
            Transparent Pricing: Audits from $4k • Retainers from $8k/mo
          </p>
          <Link href="/services#pricing" className="mt-4 inline-block font-mono text-[11px] tracking-wider text-accent-start hover:text-accent-end transition-colors">See Full Service Details →</Link>
        </div>
      </section>

      {/* 6. Bootoshi Video */}
      <section className="py-20 px-4 bg-base-dark text-base-light">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-medium mb-8">Meet Bootoshi</h2>
          <div className="aspect-video bg-neutral-800 border border-neutral-700 mb-6">
            {/* Placeholder for 90-sec keynote highlight reel embed */}
            <p className="flex items-center justify-center h-full text-neutral-400 font-mono">[Video Embed Placeholder]</p>
          </div>
          <p className="text-neutral-300 max-w-xl mx-auto">Insights from the forefront of applied AI development and community building.</p>
        </div>
      </section>

      {/* 7. Case Snippets */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-center font-heading text-3xl md:text-4xl font-medium mb-12">Real Results (Client Stories Coming Soon)</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Snippet 1 Placeholder */}
            <div className="p-6 bg-neutral-50 border border-neutral-200">
              <blockquote className="italic text-neutral-700 mb-4">
                "Placeholder for a compelling client quote about the impact of an audit or workshop. ≤50 words." 
              </blockquote>
              <p className="font-mono text-xs tracking-wider text-neutral-500">- Client Name, Title @ Company (Industry)</p>
            </div>
            {/* Snippet 2 Placeholder */}
            <div className="p-6 bg-neutral-50 border border-neutral-200">
              <blockquote className="italic text-neutral-700 mb-4">
                "Another placeholder quote highlighting a measurable result, e.g., time saved, efficiency gained, etc." 
              </blockquote>
              <p className="font-mono text-xs tracking-wider text-neutral-500">- Client Name, Title @ Company (Industry)</p>
            </div>
            {/* Add more placeholders as needed */}
          </div>
          <div className="text-center mt-12">
             <Link href="/research" className="inline-block font-mono text-[11px] tracking-wider text-accent-start hover:text-accent-end transition-colors">Explore Case Studies (Coming Soon) →</Link>
          </div>
        </div>
      </section>

      {/* Keep modal instance, though its trigger might change */}
      <WorkWithUsModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  )
} 