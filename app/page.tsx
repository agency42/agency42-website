import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Thesis from './components/Thesis'
import ContentCarousel from './components/ContentCarousel'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Agency42 - AI Innovation Studio',
  description: 'We help build AI-first ventures. An AI innovation studio that believes in the power of open source, community, and talent.',
  openGraph: {
    images: ['/content/images/42-logo.png'],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/content/images/42-logo.png'],
  }
}

export default function Home() {
  const contentItems = [
    {
      title: "AI Class Every Wednesday at 9am PST",
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

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="pt-16 md:pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Mobile: Logo on top, then content */}
          <div className="md:hidden flex flex-col items-center">
            <div className="w-[280px] h-[280px] relative mb-16">
              <Image
                src="/content/images/42-logo-t.svg"
                alt="Agency42 Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="text-center space-y-8">
              <h1 className="text-[42px] sm:text-[42px] font-light leading-[1.1]">
                We help build
                <br />
                <span className="font-normal">AI-first ventures</span>
              </h1>
              <p className="font-mono text-[13px] tracking-wider leading-relaxed max-w-md mx-auto">
                We are an AI innovation studio that believes in the power of open source,
                community, and talent.
              </p>
              <Link 
                href="mailto:hello@agency42.co"
                className="inline-block bg-black text-white font-mono text-[11px] tracking-wider px-6 py-3 hover:bg-orange-500 transition-colors"
              >
                WORK WITH US →
              </Link>
            </div>
          </div>

          {/* Desktop: Side by side */}
          <div className="hidden md:grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h1 className="text-[64px] font-light leading-[1.1]">
                We help build
                <br />
                <span className="font-normal">AI-first ventures</span>
              </h1>
              <p className="font-mono text-[13px] tracking-wider leading-relaxed max-w-md">
                We are an AI innovation studio that believes in the power of open source,
                community, and talent.
              </p>
              <Link 
                href="mailto:hello@agency42.co"
                className="inline-block bg-black text-white font-mono text-[11px] tracking-wider px-6 py-3 hover:bg-orange-500 transition-colors"
              >
                WORK WITH US →
              </Link>
            </div>
            <div className="relative w-full aspect-square">
              <Image
                src="/content/images/42-logo-t.svg"
                alt="Agency42 Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-neutral-50">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 bg-white border border-neutral-200">
              <h3 className="font-mono text-[11px] tracking-wider mb-4">01 / STRATEGIC CONSULTING</h3>
              <p className="font-light text-[13px] leading-relaxed">
                Navigate the evolving landscape of generative AI. We help you design a
                comprehensive strategy and roadmap for integrating AI into your business.
              </p>
            </div>
            <div className="p-8 bg-white border border-neutral-200">
              <h3 className="font-mono text-[11px] tracking-wider mb-4">02 / AI DEVELOPMENT</h3>
              <p className="font-light text-[13px] leading-relaxed">
                Rapidly prototype and develop AI applications with experience in LLMs,
                RAG, Agents, and more. Our team can build custom AI solutions tailored
                to your specific needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Thesis Section */}
      <Thesis />

      {/* Content Carousel */}
      <section className="py-20">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className="font-mono text-[11px] tracking-wider mb-8">OUR WORK</h2>
          <ContentCarousel items={contentItems} />
          <div className="mt-12 text-center">
            <Link
              href="https://improbable.beehiiv.com/"
              className="inline-block bg-black text-white font-mono text-[11px] tracking-wider px-6 py-3 hover:bg-orange-500 transition-colors"
            >
              READ OUR NEWSLETTER →
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-neutral-200">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="font-mono text-[11px] tracking-wider">
              © 2024 AGENCY/42 LLC
            </div>
            <div className="flex gap-8">
              <Link href="/privacy" className="font-mono text-[11px] tracking-wider hover:text-orange-500 transition-colors">
                PRIVACY
              </Link>
              <Link href="mailto:hello@agency42.co" className="font-mono text-[11px] tracking-wider hover:text-orange-500 transition-colors">
                CONTACT
              </Link>
              <Link href="https://www.linkedin.com/company/agency42co" className="font-mono text-[11px] tracking-wider hover:text-orange-500 transition-colors">
                LINKEDIN
              </Link>
              <Link href="https://x.com/agency42co" className="font-mono text-[11px] tracking-wider hover:text-orange-500 transition-colors">
                TWITTER
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}