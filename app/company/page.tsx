import React from 'react'
import Image from 'next/image'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Company | Agency/42 - Pioneers in AI, Experts in Humanity',
  description: 'Meet Agency/42: An AI innovation studio blending industrial psychology, systems design, and community building to craft human-centric AI solutions.',
  keywords: [
    // Core
    'AI innovation studio',
    'human-centric AI',
    'AI consulting',
    'applied AI',
    'AI agency',
    'creative technology',
    // Expertise
    'AI human factors',
    'AI systems design',
    'AI community building',
    'autonomous agents',
    'bespoke AI solutions',
    'generative AI strategy',
    // Optional/Niche
    'industrial psychology AI',
    'memetics engineering',
  ],
  openGraph: {
    images: ['/content/images/42-logo-wide.png'],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/content/images/42-logo-wide.png'],
  }
}

// Updated Team Data
const teamMembers = [
  {
    name: 'Ken Cavanagh',
    role: 'Human Factors',
    image: '/content/images/ken.png',
    ghibliImage: '/content/images/ken-ghibli.png',
    bio: 'Industrial psychologist & developer engineering human experience into AI. Built people analytics @ SpaceX, researched community health & AI agents @ talentDAO.',
    social: {
      url: 'https://www.linkedin.com/in/k3nneth/',
      label: 'LinkedIn' // Simpler label
    }
  },
  {
    name: 'Rob Renn',
    role: 'Systems Engineering',
    image: '/content/images/rob.jpeg',
    ghibliImage: '/content/images/rob-ghibli.png',
    bio: 'Industrial designer & systems engineer with a decade building production-grade ML & crypto platforms within innovation labs like Stanford & Skunkworks.',
    social: {
      url: 'https://www.linkedin.com/in/future-rob/',
      label: 'LinkedIn'
    }
  },
  {
    name: 'Bootoshi (Saint Louis)',
    role: 'Memetics Engineering',
    image: '/content/images/saint.jpeg',
    ghibliImage: '/content/images/saint-ghibli.png',
    bio: 'Entrepreneur & AI community builder. Pioneer in Bitcoin NFTs, launched viral AI agent projects, hackathon winner. Ask him about the Ghost of Satoshi.',
    social: {
      url: 'https://www.bootosh.ai/',
      label: 'Web'
    }
  },
]

export default function CompanyPage() {
  return (
    <div className="min-h-screen bg-white text-black pt-24">
      <main className="container mx-auto max-w-6xl px-4 py-16">
        {/* About Section */}
        <section className="mb-24">
          <h1 className="text-4xl md:text-6xl font-heading font-medium mb-8">
            Pioneers in AI, Experts in Humanity
          </h1>
          {/* Refined Intro */}
          <div className="max-w-2xl mb-8 text-lg font-sans text-gray-900">
            <p>
              Agency/42 isn't your standard AI consultancy. We're a dynamic fusion of deep tech expertise and a profound understanding of human behavior. We don't just build AI that functions - we craft AI that connects, resonates, and truly serves people.
            </p>
          </div>
          <Link
            href="/services#contact"
            className="inline-block border-2 border-black text-black font-mono text-sm tracking-wider px-10 py-4 hover:bg-black hover:text-white transition-colors duration-300"
          >
            Work With Us →
          </Link>
        </section>

        {/* Rewritten Why Us Section */}
        <section className="mb-16">
          <h3 className="text-2xl font-heading mb-4 text-black">Why Agency/42?</h3>
          <p className="text-md text-gray-800 max-w-3xl">
            Because AI thrives at the intersection of people, culture, and technology. Our unique strength lies in blending rigorous academic methodology with creative, boundary-pushing engineering. We unite perspectives from industrial psychology, high-stakes systems design, and the emergent culture of autonomous agent communities. This allows us to move beyond generic models and deliver bespoke AI solutions with real-world impact.
          </p>
        </section>

        {/* Team Section - No structural changes needed, just uses updated bios */}
        <section>
          <h2 className="text-center font-heading text-3xl md:text-4xl font-medium mb-12 text-black">Meet the Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div key={member.name} className="p-8 bg-white border border-black flex flex-col text-center rounded-md">
                {/* Image Link and Hover Effect */}
                <Link
                  href={member.social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mx-auto mb-6 relative w-32 h-32 rounded-full overflow-hidden border-2 border-black block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                  aria-label={`Link to ${member.name}'s profile`}
                >
                  {/* Ghibli Image */}
                  <Image
                    src={member.ghibliImage}
                    alt={`Ghibli-style headshot of ${member.name}`}
                    fill
                    className={`object-cover transition-opacity duration-300 ease-in-out opacity-100 group-hover:opacity-0 ${
                      member.name === 'Ken Cavanagh' ? 'object-top' :
                      member.name === 'Rob Renn' ? 'object-[center_20%]' :
                      member.name === 'Bootoshi (Saint Louis)' ? 'object-[center_25%]' :
                      'object-center'
                    }`}
                    sizes="128px"
                    priority
                  />
                  {/* Real Headshot */}
                  <Image
                    src={member.image}
                    alt={`Headshot of ${member.name}`}
                    fill
                    className={`object-cover transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100 ${
                      member.name === 'Ken Cavanagh' ? 'object-top' :
                      member.name === 'Bootoshi (Saint Louis)' ? 'object-center' : 'object-center'
                    }`}
                    sizes="128px"
                  />
                </Link>
                {/* Text Content */}
                <h3 className="font-heading text-xl mb-1 text-black">{member.name}</h3>
                <p className="font-mono text-[11px] tracking-wider text-gray-700 mb-4 uppercase">{member.role}</p>
                {/* Updated Bio Rendered Here */} 
                <p className="font-sans text-sm leading-relaxed flex-grow mb-6 text-gray-900">{member.bio}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
} 