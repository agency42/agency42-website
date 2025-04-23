'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Thesis from './Thesis'
import ContentCarousel from './ContentCarousel'
import { WorkWithUsModal } from './WorkWithUsModal'

interface ContentItem {
  title: string;
  image: string;
  link: string;
}

interface HomePageClientProps {
  contentItems: ContentItem[];
}

export default function HomePageClient({ contentItems }: HomePageClientProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)

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
                Human-first
                <br />
                <span className="font-normal">Generative AI Systems</span>
              </h1>
              <p className="font-mono text-[13px] tracking-wider leading-relaxed max-w-md mx-auto">
                AI development studio specializing in custom generative AI solutions for social and creative applications.
              </p>
              <button
                onClick={() => setIsModalOpen(true)}
                className="inline-block bg-black text-white font-mono text-[11px] tracking-wider px-6 py-3 hover:bg-orange-500 transition-colors"
              >
                WORK WITH US →
              </button>
            </div>
          </div>

          {/* Desktop: Side by side */}
          <div className="hidden md:grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h1 className="text-[64px] font-light leading-[1.1]">
                Unlock Creative
                <br />
                <span className="font-normal">AI Automation</span>
              </h1>
              <p className="font-mono text-[13px] tracking-wider leading-relaxed max-w-md">
                Leading AI innovation studio building next-gen generative AI tools for marketers, designers, and creative technologists.
              </p>
              <button
                onClick={() => setIsModalOpen(true)}
                className="inline-block bg-black text-white font-mono text-[11px] tracking-wider px-6 py-3 hover:bg-orange-500 transition-colors"
              >
                WORK WITH US →
              </button>
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
          <h2 className="text-center font-mono text-[11px] tracking-wider mb-12 uppercase">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-white border border-neutral-200">
              <h3 className="font-mono text-[11px] tracking-wider mb-4">01 / GENERATIVE AI STRATEGY</h3>
              <p className="font-light text-[13px] leading-relaxed">
                Navigate the evolving landscape of generative AI. We design your strategy and roadmap for integrating custom AI solutions into your business workflow.
              </p>
            </div>
            <div className="p-8 bg-white border border-neutral-200">
              <h3 className="font-mono text-[11px] tracking-wider mb-4">02 / AI AGENT DEVELOPMENT</h3>
              <p className="font-light text-[13px] leading-relaxed">
                Deploy sophisticated custom AI agents using our robust infrastructure. Create intelligent digital personalities and AI workflows for your brand.
              </p>
            </div>
            <div className="p-8 bg-white border border-neutral-200">
              <h3 className="font-mono text-[11px] tracking-wider mb-4">03 / CUSTOM AI SOLUTIONS</h3>
              <p className="font-light text-[13px] leading-relaxed">
                Build specialized generative AI solutions tailored to your specific requirements. Full-service AI development for unique use cases and custom implementations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Thesis Section */}
      {/* <Thesis /> */}

      {/* Content Carousel */}
      <section className="py-20">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className="font-mono text-[11px] tracking-wider mb-8 text-center uppercase">Our Work</h2>
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
              <Link 
                href="https://calendly.com/ken-agency42/discovery" 
                className="font-mono text-[11px] tracking-wider hover:text-orange-500 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
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

      {/* The Modal */}
      <WorkWithUsModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  )
} 