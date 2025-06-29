import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Metadata } from 'next'

import QualForm from '@/components/QualForm'
import { ConwaySim } from '@/components/ConwaySim'
import { FlickeringGrid } from '@/components/FlickeringGrid'
import ServicesAccordion from '@/components/ServicesAccordion'

export const metadata: Metadata = {
  title: 'AI Services: Audits, Workshops, Retainers | Agency/42',
  description: 'Agency/42 offers AI Opportunity Audits, Hands-on Workshops, and Fractional AI CTO services to implement effective AI solutions and drive business results.',
  keywords: [
    'AI audit',
    'AI workshop',
    'fractional AI CTO',
    'AI consulting services',
    'AI implementation services',
    'AI strategy development',
    'applied AI services',
    'AI roadmap',
    'AI prototyping',
    'AI workflow automation',
    'AI process optimization',
    'human-centric AI implementation',
  ],
}

export default function ServicesPage() {
  return (
    <div className="bg-white text-black pt-16 md:pt-24">
      {/* Simplified Hero section */}
      <section className="pt-8 md:pt-14 pb-16 md:pb-20 px-4 border-b border-black">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-normal mb-6 text-black tracking-tight leading-[1.05]">
            Define what's next for your industry.
          </h1>
          <p className="text-base md:text-lg mb-8 font-sans text-gray-600 max-w-2xl mx-auto">
            From strategy to implementation, we partner with you to build the custom AI systems that define your future.
          </p>
          <Link
            href="#contact"
            className="inline-block bg-black text-white font-mono text-[11px] tracking-wider uppercase px-8 py-3 hover:bg-gray-900 transition-colors duration-200"
          >
            Let's Build
          </Link>
        </div>
      </section>

      {/* Services Section - Now the main focus */}
      <section id="services" className="py-16 md:py-24 px-4 border-b border-black">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-medium mb-8 md:mb-12 text-center">
            How We Help
          </h2>
          <ServicesAccordion />
        </div>
      </section>

      {/* Our Approach Section */}
      <section id="process" className="py-16 md:py-24 border-b border-black px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-start">
            <div>
              <h3 className="text-2xl md:text-3xl font-heading font-light mb-4">
                Our Approach
              </h3>
              <p className="mb-8 font-sans text-gray-600 text-base md:text-lg">
                Most companies think AI is about efficiency. We think it's about advantage. Our process is designed to find and build that advantage with you.
              </p>
            </div>
            <div>
              <ol className="list-none space-y-8 font-sans text-gray-800">
                <li className="flex items-start">
                  <span className="font-mono text-sm text-black mr-4 mt-1">01</span>
                  <div>
                    <h4 className="font-bold text-black mb-1">Map</h4>
                    <p className="text-gray-600">We integrate with your team to learn your business, understand your market, and identify the highest-impact AI opportunities.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="font-mono text-sm text-black mr-4 mt-1">02</span>
                  <div>
                    <h4 className="font-bold text-black mb-1">Design</h4>
                    <p className="text-gray-600">Together, we map out potential AI solutions and design a clear execution plan for the most promising projects.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="font-mono text-sm text-black mr-4 mt-1">03</span>
                  <div>
                    <h4 className="font-bold text-black mb-1">Build</h4>
                    <p className="text-gray-600">Our team gets to work, building and shipping the custom AI systems that transform your market position.</p>
                  </div>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Why Companies Choose Our Approach - TEMPORARILY HIDDEN
      <section className="py-16 md:py-24 px-4 bg-gray-50 border-b border-black">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-extrabold mb-12">
            Why Companies Choose Our Approach
          </h2>
          <div className="bg-white border-2 border-black p-8 text-left" style={{ boxShadow: '8px 8px 0px 0px rgba(0,0,0,1)' }}>
            <p className="text-lg md:text-xl font-sans text-gray-800 mb-4 text-center">
              Every business has <strong>unique advantages</strong> waiting to be amplified by AI.
            </p>
            <p className="text-base text-gray-600 font-sans mb-8 text-center">
              The question isn't whether they exist. It's whether you can see them.
            </p>
            
            <div className="max-w-2xl mx-auto">
              <h3 className="font-mono text-sm uppercase tracking-wider text-gray-700 mb-4">What You Get:</h3>
              <ul className="space-y-3 font-sans text-gray-700 text-base">
                <li className="flex items-start">
                  <span className="text-black mr-3 mt-1">→</span>
                  <span><strong>Revenue generation roadmap</strong> with competitive advantage opportunities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-black mr-3 mt-1">→</span>
                  <span><strong>Custom AI architecture</strong> that understands your business DNA</span>
                </li>
                <li className="flex items-start">
                  <span className="text-black mr-3 mt-1">→</span>
                  <span><strong>Strategic deployment plan</strong> that builds capabilities competitors can't match</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      */}

      {/* Contact Form Section */}
      <section id="contact" className="py-16 md:py-24 px-4">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-extrabold mb-4 md:mb-6">
            Ready to build your competitive edge?
          </h2>
          <p className="text-base md:text-lg mb-8 max-w-2xl mx-auto font-sans text-gray-600">
            Tell us about your business and we'll show you how AI can transform your industry position.
          </p>
          
          <QualForm className="text-left" />
        </div>
      </section>
    </div>
  )
} 