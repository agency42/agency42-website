import React from 'react'
import Image from 'next/image'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Company | Agency42 - AI Implementation That Actually Works',
  description: 'Meet the team behind Agency42: We help scaling companies identify workflow automation opportunities through proven AI implementation methods.',
  keywords: [
    // Core positioning
    'AI innovation studio',
    'AI adoption psychology',
    'operational efficiency',
    'industrial psychology AI',
    'AI consulting',
    // Specific expertise
    'hidden value discovery',
    'AI implementation',
    'change management',
    'team adoption rates',
    'process optimization',
    // Target market
    '$6M-$15M companies',
    'scaling businesses',
    'manual work elimination',
    'AI systems integration',
  ],
  openGraph: {
    images: ['/content/images/42-logo-wide.png'],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/content/images/42-logo-wide.png'],
  }
}

// Updated Team Data - removed since we're hardcoding the team now

export default function CompanyPage() {
  return (
    <div className="min-h-screen bg-white text-black pt-24">
      <main className="container mx-auto max-w-6xl px-4 py-16">
        {/* Hero Section */}
        <section className="mb-24 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-normal mb-6 text-black tracking-tight leading-[1.05]">
            AI Implementation That Actually Works
          </h1>
          <p className="text-lg md:text-xl font-sans text-gray-600 max-w-3xl mx-auto mb-8">
            We help scaling companies identify workflow automation opportunities by analyzing both team processes and technology systems—then build AI solutions that teams actually adopt.
          </p>
          <Link
            href="/services#contact"
            className="inline-block bg-black text-white font-mono text-[11px] tracking-wider uppercase px-8 py-3 hover:bg-gray-900 transition-colors duration-200"
          >
            ANALYZE MY NEEDS →
          </Link>
        </section>

        {/* Why Companies Choose Agency42 */}
        <section className="mb-24">
          <h2 className="text-2xl md:text-3xl font-heading font-medium mb-12 text-center">
            Why Companies Choose Agency42
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 border border-gray-200 rounded-lg">
              <h3 className="font-mono text-[11px] tracking-wider uppercase text-black mb-4">Proven AI Implementation</h3>
              <p className="font-sans text-gray-700">
                Our approach achieves higher adoption rates by understanding both human workflows and technical systems. We map where people and technology intersect to find real automation opportunities.
              </p>
            </div>
            <div className="p-6 border border-gray-200 rounded-lg">
              <h3 className="font-mono text-[11px] tracking-wider uppercase text-black mb-4">Hidden Value Discovery</h3>
              <p className="font-sans text-gray-700">
                We consistently find operational inefficiencies that companies don't know exist. Our systematic approach reveals manual coordination work, broken integrations, and workarounds teams have accepted as "normal."
              </p>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-24">
          <h2 className="text-center font-heading text-3xl md:text-4xl font-medium mb-12 text-black">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Ken Cavanagh */}
            <div className="p-8 bg-white border border-black flex flex-col text-center rounded-md">
              <Link
                href="https://www.linkedin.com/in/k3nneth/"
                target="_blank"
                rel="noopener noreferrer"
                className="group mx-auto mb-6 relative w-32 h-32 rounded-full overflow-hidden border-2 border-black block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                aria-label="Link to Ken Cavanagh's profile"
              >
                <Image
                  src="/content/images/ken-ghibli.png"
                  alt="Ghibli-style headshot of Ken Cavanagh"
                  fill
                  className="object-cover transition-opacity duration-300 ease-in-out opacity-100 group-hover:opacity-0 object-top"
                  sizes="128px"
                  priority
                />
                <Image
                  src="/content/images/ken.png"
                  alt="Headshot of Ken Cavanagh"
                  fill
                  className="object-cover transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100 object-top"
                  sizes="128px"
                />
              </Link>
              <h3 className="font-heading text-xl mb-1 text-black">Ken Cavanagh</h3>
              <p className="font-mono text-[11px] tracking-wider text-gray-700 mb-2 uppercase">Strategy & Operations</p>
              <p className="font-mono text-[11px] tracking-wider text-black mb-4 italic">AI Implementation + Workflow Analysis</p>
              <div className="font-sans text-sm leading-relaxed flex-grow text-gray-700 text-left">
                <p className="mb-3"><strong>Background:</strong> Operations analysis and industrial psychology, specializing in technology integration</p>
                <p className="mb-3"><strong>Expertise:</strong> AI implementation strategy, workflow automation, operational efficiency analysis</p>
                <p className="mb-3"><strong>Philosophy:</strong> "Agency and empowerment, not just speed" - builds capabilities, not dependencies</p>
                <p><strong>Approach:</strong> Systematic assessment methods to map team workflows and technology systems</p>
              </div>
            </div>

            {/* Rob Renn */}
            <div className="p-8 bg-white border border-black flex flex-col text-center rounded-md">
              <Link
                href="https://www.linkedin.com/in/future-rob/"
                target="_blank"
                rel="noopener noreferrer"
                className="group mx-auto mb-6 relative w-32 h-32 rounded-full overflow-hidden border-2 border-black block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                aria-label="Link to Rob Renn's profile"
              >
                <Image
                  src="/content/images/rob-ghibli.png"
                  alt="Ghibli-style headshot of Rob Renn"
                  fill
                  className="object-cover transition-opacity duration-300 ease-in-out opacity-100 group-hover:opacity-0 object-[center_20%]"
                  sizes="128px"
                  priority
                />
                <Image
                  src="/content/images/rob.jpeg"
                  alt="Headshot of Rob Renn"
                  fill
                  className="object-cover transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100 object-center"
                  sizes="128px"
                />
              </Link>
              <h3 className="font-heading text-xl mb-1 text-black">Rob Renn</h3>
              <p className="font-mono text-[11px] tracking-wider text-gray-700 mb-2 uppercase">Engineering & Systems</p>
              <p className="font-mono text-[11px] tracking-wider text-black mb-4 italic">AI Engineering + System Integration</p>
              <div className="font-sans text-sm leading-relaxed flex-grow text-gray-700 text-left">
                <p className="mb-3"><strong>Background:</strong> AI R&D, industrial design, startup building, innovation labs</p>
                <p className="mb-3"><strong>Expertise:</strong> Production AI system design, enterprise integration, technical architecture</p>
                <p className="mb-3"><strong>Focus:</strong> Building AI systems that work with existing infrastructure and feel intuitive to teams</p>
                <p><strong>Approach:</strong> "AI as engineering discipline" - systematic, measurable, scalable solutions that people actually want to use</p>
              </div>
            </div>

            {/* Saint Martin */}
            <div className="p-8 bg-white border border-black flex flex-col text-center rounded-md">
              <Link
                href="https://www.bootosh.ai/"
                target="_blank"
                rel="noopener noreferrer"
                className="group mx-auto mb-6 relative w-32 h-32 rounded-full overflow-hidden border-2 border-black block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                aria-label="Link to Saint Martin's profile"
              >
                <Image
                  src="/content/images/saint-ghibli.png"
                  alt="Ghibli-style headshot of Saint Martin"
                  fill
                  className="object-cover transition-opacity duration-300 ease-in-out opacity-100 group-hover:opacity-0 object-[center_25%]"
                  sizes="128px"
                  priority
                />
                <Image
                  src="/content/images/saint.jpeg"
                  alt="Headshot of Saint Martin"
                  fill
                  className="object-cover transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100 object-center"
                  sizes="128px"
                />
              </Link>
              <h3 className="font-heading text-xl mb-1 text-black">Saint Martin</h3>
              <p className="font-mono text-[11px] tracking-wider text-gray-700 mb-2 uppercase">Content & Education</p>
              <p className="font-mono text-[11px] tracking-wider text-black mb-4 italic">Vibe Coding + AI Marketing</p>
              <div className="font-sans text-sm leading-relaxed flex-grow text-gray-700 text-left">
                <p className="mb-3"><strong>Background:</strong> Community building, AI agent projects, viral adoption strategies</p>
                <p className="mb-3"><strong>Expertise:</strong> Vibe coding, AI marketing, content creation, educational program design</p>
                <p className="mb-3"><strong>Role:</strong> Making AI implementations accessible and engaging for teams</p>
                <p><strong>Method:</strong> "Cultural fit first" - AI adoption that enhances team dynamics rather than disrupts them</p>
              </div>
            </div>
          </div>
        </section>

        {/* Client Results Validation */}
        <section className="text-center">
          <div className="bg-white border-2 border-black rounded-lg p-8 shadow-lg max-w-4xl mx-auto" style={{ boxShadow: '8px 8px 0px 0px rgba(0,0,0,1)' }}>
            <h3 className="font-mono text-[11px] tracking-wider uppercase text-black mb-4">Our Track Record</h3>
            <p className="font-sans text-lg text-gray-800 mb-6">
              Our methodology has been validated across marketing agencies, design studios, and creative companies. We focus on implementations that create lasting operational improvements.
            </p>
            <Link
              href="/services#contact"
              className="inline-block bg-black text-white font-mono text-[11px] tracking-wider uppercase px-8 py-3 hover:bg-gray-900 transition-colors duration-200"
            >
              ANALYZE MY NEEDS →
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
} 