'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import useSWR from 'swr'

// Define props interface
interface HomePageClientProps {
  featuredVideoId: string | null;
  // Add other props if needed (e.g., clientLogos, testimonials)
}

// Fetcher function for SWR
const fetcher = (url: string) => fetch(url).then(res => res.json())

export default function HomePageClient({ featuredVideoId }: HomePageClientProps) {
  // Fetch GitHub lines of code data
  const { data: locData, error: locError } = useSWR('/api/oss-loc', fetcher)
  
  // Format number with commas
  const formatNumber = (num: number | undefined): string => {
    return num ? num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : "...";
  }
  
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
      {/* 1. Hero Section - Apply dark background and light text */}
      <section className="py-32 md:py-40 px-4 bg-background text-foreground border-b border-neutral-800">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading-pixel font-medium mb-8 pixel-heading text-center">
            A versatile AI consulting lab designing 0 → 1✦ outcomes
          </h1>
          <p className="text-lg md:text-xl mb-10 max-w-xl mx-auto font-sans">
            We partner with teams to map, prototype, and deploy high-impact AI workflows.
          </p>
          {/* Update button style to outline */}
          <Link
            href="/services#contact"
            className="inline-block border border-foreground text-foreground font-mono text-[11px] tracking-wider px-8 py-3 hover:bg-foreground hover:text-background transition-colors"
          >
            GET YOUR AI AUDIT →
          </Link>
        </div>
      </section>

      {/* 2. Client Logos Section - MOVED UP */}
      <section className="py-16 bg-background text-foreground border-b border-neutral-800">
        <div className="container mx-auto max-w-5xl px-4 text-center">
          <h2 className="font-mono text-sm uppercase tracking-wider text-neutral-400 mb-10">
            Trusted by leading teams
          </h2>
          {/* Changed to grid layout */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-10 gap-y-8 justify-items-center">
            {clientLogos.map((logo, index) => (
              /* Adjusted logo container size */
              <div key={index} className="relative h-14 w-40 md:h-16 md:w-48 opacity-70 hover:opacity-100 transition-opacity">
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
      </section>

      {/* 2.1 Proof Bar (Stats Only) - MOVED DOWN */}
      <section className="py-16 bg-background text-foreground"> {/* Border removed here */}
        <div className="container mx-auto max-w-4xl px-4">
          <div className="grid grid-cols-3 gap-8 items-start text-center">
            <div>
              <p className="text-2xl md:text-3xl font-heading font-semibold text-foreground">300+</p>
              <p className="font-mono text-xs uppercase tracking-wider text-neutral-400">Vibe Coders Trained</p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-heading font-semibold text-foreground">10+</p>
              <p className="font-mono text-xs uppercase tracking-wider text-neutral-400">Agents Deployed</p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-heading font-semibold text-foreground">
                {locData ? formatNumber(locData.lines) : "..."}
              </p>
              <p className="font-mono text-xs uppercase tracking-wider text-neutral-400">Lines of Code Open-sourced</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Problem Block */}
      <section className="py-24 md:py-32 px-4 border-b border-neutral-800">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-medium mb-8">
            You don't know what you don't know.
          </h2>
          <p className="text-lg md:text-xl text-neutral-400 font-sans">
            That's fatal in 2025. The AI landscape shifts daily. Relying on generic tools or guesswork leads to wasted resources and missed opportunities. Identify your specific leverage points before your competitors do.
          </p>
        </div>
      </section>

      {/* 4. Our Strategy */}
      <section id="strategy" className="py-24">
        <div className="container">
          <h2 className="text-center font-heading text-3xl md:text-4xl font-medium mb-12">Our Strategy</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Identify */}
            <div className="p-8 bg-background border border-neutral-800 rounded-md flex flex-col">
              <h3 className="font-heading text-xl mb-4">Identify</h3>
              <p className="text-neutral-400 mb-6">
                Through our AI Opportunity Audit, we deeply analyze your workflows, systems, and data to pinpoint the highest-impact AI initiatives tailored to your business.
              </p>
              <Link href="/services#audit" className="mt-auto inline-block text-foreground font-mono text-[11px] tracking-wider border border-foreground px-4 py-2 hover:bg-foreground hover:text-background transition">
                Learn More
              </Link>
            </div>
            {/* Educate */}
            <div className="p-8 bg-background border border-neutral-800 rounded-md flex flex-col">
              <h3 className="font-heading text-xl mb-4">Educate</h3>
              <p className="text-neutral-400 mb-6">
                Our hands-on workshops equip your team with practical skills and real-world exercises to effectively implement the AI strategies identified.
              </p>
              <Link href="/services#workshop" className="mt-auto inline-block text-foreground font-mono text-[11px] tracking-wider border border-foreground px-4 py-2 hover:bg-foreground hover:text-background transition">
                Learn More
              </Link>
            </div>
            {/* Develop */}
            <div className="p-8 bg-background border border-neutral-800 rounded-md flex flex-col">
              <h3 className="font-heading text-xl mb-4">Develop</h3>
              <p className="text-neutral-400 mb-6">
                Engage with our fractional AI CTO service or dedicated development services to build and scale your AI solutions with expert leadership and support.
              </p>
              <Link href="/services#retainer" className="mt-auto inline-block text-foreground font-mono text-[11px] tracking-wider border border-foreground px-4 py-2 hover:bg-foreground hover:text-background transition">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Pricing Teaser */}
      <section className="py-20 px-4 border-b border-neutral-800">
        <div className="container mx-auto max-w-3xl text-center">
          <p className="font-mono text-sm md:text-base tracking-wider text-neutral-400">
            Transparent Pricing: Audits from $4k • Retainers from $8k/mo
          </p>
          <Link href="/services#pricing" className="mt-6 inline-block font-mono text-[11px] tracking-wider text-foreground hover:text-neutral-400 transition-colors">See Full Service Details →</Link>
        </div>
      </section>

      {/* 6. Featured Video Section (Renamed from Bootoshi Video) */}
      <section className="py-24 md:py-32 px-4 bg-background text-foreground border-b border-neutral-800">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-medium mb-12">Featured Video</h2>
          <div className="aspect-video bg-neutral-900 border border-neutral-800 mb-8 relative overflow-hidden">
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
          <p className="text-neutral-400 max-w-xl mx-auto font-sans">Insights from the forefront of applied AI development and community building.</p>
        </div>
      </section>

      {/* 7. Case Snippets / Testimonials */}
      <section className="py-24 md:py-32 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-center font-heading text-3xl md:text-4xl font-medium mb-16">Real Results</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="p-6 bg-background border border-neutral-800">
                <blockquote className="italic text-neutral-400 mb-4 font-sans">
                  "{testimonial.quote}" 
                </blockquote>
                <p className="font-mono text-xs tracking-wider text-neutral-400">- {testimonial.attribution}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-16">
             <Link href="/research" className="inline-block font-mono text-[11px] tracking-wider text-foreground hover:text-neutral-400 transition-colors">Explore Case Studies →</Link>
          </div>
        </div>
      </section>
    </div>
  )
} 