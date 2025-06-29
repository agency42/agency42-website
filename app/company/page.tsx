import React from 'react'
import Image from 'next/image'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Company | Agency42 - Define What\'s Next for Your Industry',
  description: 'Meet the Agency42 co-founders: We partner with companies to turn AI ambitions into real-world advantages that define industry standards.',
  keywords: [
    // Core positioning
    'AI innovation studio',
    'AI strategic partnership',
    'competitive advantage AI',
    'industry transformation',
    'AI consulting',
    // Team expertise
    'AI development team',
    'AI strategy consulting',
    'custom AI systems',
    'AI implementation',
    'AI leadership',
    // Target market
    'scaling businesses',
    'AI competitive edge',
    'industry innovation',
    'AI vision execution',
  ],
  openGraph: {
    images: ['/content/images/42-logo-wide.png'],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/content/images/42-logo-wide.png'],
  }
}

export default function CompanyPage() {
  return (
    <div className="min-h-screen bg-white text-black pt-24">
      <main className="container mx-auto max-w-6xl px-4 py-16">
        {/* Hero Section */}
        <section className="mb-24 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-normal text-black tracking-tight leading-[1.05]">
            Meet your AI innovation partners.
          </h1>
        </section>

        {/* Team Section */}
        <section className="mb-24">
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
              <p className="font-mono text-[11px] tracking-wider text-black mb-4 uppercase">CEO & Co-Founder</p>
              <div className="font-sans text-sm leading-relaxed flex-grow text-gray-700 text-left">
                <p className="mb-3">A strategist specializing in the human side of AI, Ken uses his background in industrial psychology to build systems people actually want to use.</p>
                <p className="mb-3"><strong>Philosophy:</strong> "Agency, not just automation." Believes in building capabilities, not dependencies.</p>
                <p><strong>Expertise:</strong> AI Strategy, Workflow Automation, AI Agents, AI Education & Adoption.</p>
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
              <p className="font-mono text-[11px] tracking-wider text-black mb-4 uppercase">CTO & Co-Founder</p>
              <div className="font-sans text-sm leading-relaxed flex-grow text-gray-700 text-left">
                <p className="mb-3">An architect of scalable AI platforms, Rob brings a decade of senior engineering experience to build robust, production-grade systems.</p>
                <p className="mb-3"><strong>Approach:</strong> "Principled innovation, scalable engineering." Turns structured experiments into robust, production-grade systems.</p>
                <p><strong>Expertise:</strong> Scalable Architecture, Platform Engineering, Enterprise Integration, Technical Leadership.</p>
              </div>
            </div>

            {/* Saint Louis */}
            <div className="p-8 bg-white border border-black flex flex-col text-center rounded-md">
              <Link
                href="https://www.bootosh.ai/"
                target="_blank"
                rel="noopener noreferrer"
                className="group mx-auto mb-6 relative w-32 h-32 rounded-full overflow-hidden border-2 border-black block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                aria-label="Link to Saint Louis's profile"
              >
                <Image
                  src="/content/images/saint-ghibli.png"
                  alt="Ghibli-style headshot of Saint Louis"
                  fill
                  className="object-cover transition-opacity duration-300 ease-in-out opacity-100 group-hover:opacity-0 object-[center_25%]"
                  sizes="128px"
                  priority
                />
                <Image
                  src="/content/images/saint.jpeg"
                  alt="Headshot of Saint Louis"
                  fill
                  className="object-cover transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100 object-center"
                  sizes="128px"
                />
              </Link>
              <h3 className="font-heading text-xl mb-1 text-black">Saint Louis</h3>
              <p className="font-mono text-[11px] tracking-wider text-black mb-4 uppercase">Lead AI Developer & Co-Founder</p>
              <div className="font-sans text-sm leading-relaxed flex-grow text-gray-700 text-left">
                <p className="mb-3">A developer and content creator, Saint <Link href="https://www.youtube.com/@bootoshi" target="_blank" rel="noopener noreferrer" className="underline hover:text-black">shares his notes</Link> on vibe coding and building AI marketing automation, merging deep technical skill with strategies for cultural impact.</p>
                <p className="mb-3"><strong>Method:</strong> "Learn by building." Focuses on hands-on creation and sharing the process to teach and inspire.</p>
                <p><strong>Expertise:</strong> AI Development, Content Engineering, Viral Marketing, Agent-Based Systems.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Simple CTA Section */}
        <section className="text-center">
          <div className="bg-white border-2 border-black rounded-lg p-8 shadow-lg max-w-4xl mx-auto" style={{ boxShadow: '8px 8px 0px 0px rgba(0,0,0,1)' }}>
            <h3 className="font-heading text-2xl md:text-3xl font-medium mb-4 text-black">Ready to partner with us?</h3>
            <p className="font-sans text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
              Let's discuss how our team can help you bring your AI vision to life.
            </p>
            <Link
              href="/services#contact"
              className="inline-block bg-black text-white font-mono text-[11px] tracking-wider uppercase px-8 py-3 hover:bg-gray-900 transition-colors duration-200"
            >
              Let's Build
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
} 