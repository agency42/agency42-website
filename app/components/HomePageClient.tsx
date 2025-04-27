'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

// Define props interface
interface HomePageClientProps {
  featuredVideoId: string | null;
  // Add other props if needed (e.g., clientLogos, testimonials)
}

export default function HomePageClient({ featuredVideoId }: HomePageClientProps) {
  // Replace placeholder logos with actual files
  const clientLogos = [
    { src: '/logos/gameoverlogo.png', alt: 'GameOver Logo' },
    { src: '/logos/prerichlogo.png', alt: 'Prerich Logo' },
    { src: '/logos/wiserxlogo-t.png', alt: 'WiserX Logo' },
    // Add more if needed, or remove this comment
  ]

  const testimonials = [
    {
      quote: "Placeholder for a compelling client quote about the impact of an audit or workshop. ≤50 words.",
      attribution: "Client Name, Title @ Company (Industry)"
    },
    {
      quote: "Another placeholder quote highlighting a measurable result, e.g., time saved, efficiency gained, etc.",
      attribution: "Client Name, Title @ Company (Industry)"
    }
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* 1. Hero Section */}
      <section className="py-24 md:py-32 px-4 bg-neutral-50">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-6xl font-heading font-medium mb-6">
            Stop Guessing. Start Operating at AI Speed.
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto font-sans">
            Turn Unknown-Unknowns into 10× Outcomes. We help you find and implement the highest-impact AI opportunities.
          </p>
          <Link
            href="/services#contact"
            className="inline-block bg-primary text-background font-mono text-[11px] tracking-wider px-8 py-4 hover:bg-accent transition-colors"
          >
            GET YOUR AI AUDIT →
          </Link>
        </div>
      </section>

      {/* 2. Proof Bar */}
      <section className="py-12 bg-foreground text-background">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center text-center">
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
            {/* Client Logos Section */}
            <div className="md:col-span-2 flex flex-wrap justify-center items-center gap-x-8 gap-y-4 md:justify-end">
              <span className="w-full md:w-auto text-center md:text-right font-mono text-xs uppercase tracking-wider text-neutral-400 mb-2 md:mb-0">Trusted By:</span>
              {clientLogos.map((logo, index) => (
                <div key={index} className="relative h-16 w-48 opacity-70 filter brightness-0 invert hover:opacity-100 transition-opacity">
                  {/* Use modern Next/Image props */}
                  <Image 
                    src={logo.src} 
                    alt={logo.alt} 
                    fill
                    className="object-contain"
                    unoptimized
                  />
                </div>
              ))}
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
          <p className="text-lg md:text-xl text-secondary font-sans">
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
            <div className="p-8 bg-background border border-neutral-200">
              <h3 className="font-mono text-[11px] tracking-wider mb-4 text-foreground">01 / AI OPPORTUNITY AUDIT</h3>
              <p className="font-sans text-[13px] leading-relaxed mb-4 text-secondary">
                A rapid, intensive analysis of your business to identify the top 1-3 highest ROI AI applications tailored to your specific goals and resources. We deliver a concrete action plan.
              </p>
              <Link href="/services#audit" className="font-mono text-[11px] tracking-wider text-accent hover:text-accent-secondary transition-colors">Learn More →</Link>
            </div>
            {/* Hands-on Workshop */}
            <div className="p-8 bg-background border border-neutral-200">
              <h3 className="font-mono text-[11px] tracking-wider mb-4 text-foreground">02 / HANDS-ON WORKSHOP</h3>
              <p className="font-sans text-[13px] leading-relaxed mb-4 text-secondary">
                Targeted training for your team on the specific AI tools and workflows identified in the audit. Go from zero to productive implementation in days, not months.
              </p>
              <Link href="/services#workshop" className="font-mono text-[11px] tracking-wider text-accent hover:text-accent-secondary transition-colors">Learn More →</Link>
            </div>
            {/* Fractional AI CTO Retainer */}
            <div className="p-8 bg-background border border-neutral-200">
              <h3 className="font-mono text-[11px] tracking-wider mb-4 text-foreground">03 / FRACTIONAL AI CTO RETAINER</h3>
              <p className="font-sans text-[13px] leading-relaxed mb-4 text-secondary">
                Ongoing strategic guidance, implementation support, and team upskilling. We act as your dedicated AI leadership to ensure continuous adaptation and value generation.
              </p>
              <Link href="/services#retainer" className="font-mono text-[11px] tracking-wider text-accent hover:text-accent-secondary transition-colors">Learn More →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Pricing Teaser */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-3xl text-center">
          <p className="font-mono text-sm md:text-base tracking-wider text-secondary">
            Transparent Pricing: Audits from $4k • Retainers from $8k/mo
          </p>
          <Link href="/services#pricing" className="mt-4 inline-block font-mono text-[11px] tracking-wider text-accent hover:text-accent-secondary transition-colors">See Full Service Details →</Link>
        </div>
      </section>

      {/* 6. Featured Video Section (Renamed from Bootoshi Video) */}
      <section className="py-20 px-4 bg-foreground text-background">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-medium mb-8">Featured Video</h2>
          <div className="aspect-video bg-neutral-800 border border-neutral-700 mb-6 relative overflow-hidden">
            {featuredVideoId ? (
              <iframe 
                className="absolute top-0 left-0 w-full h-full"
                src={`https://www.youtube.com/embed/${featuredVideoId}`} 
                title="Featured YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen
              ></iframe>
            ) : (
              <p className="flex items-center justify-center h-full text-neutral-400 font-mono">[Featured Video Not Found]</p>
            )}
          </div>
          <p className="text-neutral-300 max-w-xl mx-auto font-sans">Insights from the forefront of applied AI development and community building.</p>
        </div>
      </section>

      {/* 7. Case Snippets / Testimonials */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-center font-heading text-3xl md:text-4xl font-medium mb-12">Real Results</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="p-6 bg-neutral-50 border border-neutral-200">
                <blockquote className="italic text-secondary mb-4 font-sans">
                  "{testimonial.quote}" 
                </blockquote>
                <p className="font-mono text-xs tracking-wider text-secondary">- {testimonial.attribution}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
             <Link href="/research" className="inline-block font-mono text-[11px] tracking-wider text-accent hover:text-accent-secondary transition-colors">Explore Case Studies →</Link>
          </div>
        </div>
      </section>
    </div>
  )
} 