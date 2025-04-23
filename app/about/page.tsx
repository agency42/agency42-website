import React from 'react'
import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Agency/42 | Social AI, Creative Automation & AI Characters',
  description: 'Learn about Agency/42, an AI innovation studio specializing in social agents, AI characters, digital twins, and creative automation for human-centric AI integration.',
  keywords: ['AI innovation studio', 'social AI', 'AI agents', 'AI characters', 'digital twins', 'creative automation', 'generative AI', 'human-centric AI', 'AI strategy', 'AI development', 'Kenneth F. Cavanagh'],
  openGraph: {
    images: ['/content/images/42-logo.png'],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/content/images/42-logo.png'],
  }
}

const teamMembers = [
  {
    name: 'Ken Cavanagh',
    role: 'Human Factors',
    image: '/content/images/HEADSHOT1.png',
    bio: 'Industrial psychologist and developer building AI for social applications. Previously ops engineering and people science at SpaceX.',
    social: {
      url: 'https://www.linkedin.com/in/k3nneth/',
      label: 'LinkedIn →'
    }
  },
  {
    name: 'Rob Renn',
    role: 'System Engineering',
    image: '/content/images/ROB_HEADSHOT.jpeg',
    bio: 'Industrial designer and engineer with a decade of building startups. Previously AI R&D at Stanford and Skunkworks.',
    social: {
      url: 'https://www.linkedin.com/in/future-rob/',
      label: 'LinkedIn →'
    }
  },
  {
    name: 'Bootoshi (Saint Louis)',
    role: 'Memetics Engineering',
    image: '/content/images/St_HEADSHOT.jpeg',
    bio: 'AI developer, content creator, hackathon winner, pioneer in building autonomous agent communities.',
    social: {
      url: 'https://www.bootosh.ai/',
      label: 'Web →'
    }
  },
]

export default function About() {
  // Use the same order for both mobile and desktop
  return (
    <div className="min-h-screen bg-white">
      <main className="pt-36 pb-24">
        <div className="container mx-auto max-w-6xl px-8 md:px-12">
          {/* About Section */}
          <section className="mb-28">
            <h2 className="font-mono text-[11px] tracking-wider mb-10 uppercase">About</h2>
            <h1 className="text-[64px] font-light leading-[1.1] mb-16">
              Agency/42: Pioneering<br />
              <span className="font-normal">Human-Centric AI</span>
            </h1>
            
            <div className="md:grid md:grid-cols-2 gap-20">
              <div className="pr-0 md:pr-6 mb-8 md:mb-0">
                <p className="font-light text-[13px] leading-relaxed mb-8">
                  We are an AI innovation studio focused on the intersection of technology and human experience. 
                  We don't just build AI; we integrate intelligent systems into the creative and social fabric of businesses. 
                  Our network of creative technologists, designers, and AI specialists develops solutions that drive 
                  meaningful engagement and unlock new possibilities.
                </p>
                <p className="font-light text-[13px] leading-relaxed mb-8">
                  Born from a belief in open source, community, and raw talent, Agency/42 guides startups and 
                  established companies through the AI transformation. We understand that thriving in this new era 
                  requires more than algorithms - it demands a deep understanding of human behavior and social dynamics.
                </p>
              </div>
              <div className="pl-0 md:pl-6">
                <p className="font-light text-[13px] leading-relaxed mb-8">
                  Our expertise lies in crafting <strong>social agents</strong>, <strong>AI characters</strong>, and <strong>digital twins</strong> 
                  that push the boundaries of interaction and create authentic connections. We also specialize in <strong>creative automation</strong>, 
                  building generative AI tools that empower marketers, designers, and content creators.
                </p>
                <p className="font-light text-[13px] leading-relaxed">
                  From initial prototyping to full-scale deployment, we guide clients through every stage. Our process 
                  combines rapid iteration with rigorous testing, ensuring AI solutions are not only technically sound 
                  but also strategically aligned with your goals. We help organizations build internal AI capabilities 
                  or provide ongoing support, offering flexible pathways to innovate continuously and lead the future of AI integration.
                </p>
              </div>
            </div>
          </section>

          {/* Team Section */}
          <section>
            <h2 className="font-mono text-[11px] tracking-wider mb-16 uppercase">Our Team</h2>
            {/* Mobile View - Same order as desktop */}
            <div className="grid grid-cols-1 gap-12 md:hidden">
              {teamMembers.map((member) => (
                <div key={member.name} className="p-10 bg-white border border-neutral-200 flex flex-col h-full">
                  <div>
                    <div className="flex justify-center mb-6">
                      <div className="relative w-32 h-32 rounded-full overflow-hidden border border-neutral-100">
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          className="object-cover grayscale hover:grayscale-0 transition-all duration-300"
                          sizes="(max-width: 768px) 100vw, 33vw"
                        />
                      </div>
                    </div>
                    <h3 className="font-mono text-[11px] tracking-wider mb-2">{member.name}</h3>
                    <p className="font-mono text-[11px] tracking-wider text-neutral-500 mb-5">{member.role}</p>
                    <p className="font-light text-[13px] leading-relaxed">{member.bio}</p>
                  </div>
                  <div className="mt-auto pt-5">
                    {member.social && (
                      <a
                        href={member.social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block font-mono text-[11px] tracking-wider hover:text-orange-500 transition-colors"
                      >
                        {member.social.label}
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
            {/* Desktop View - Same order as mobile */}
            <div className="hidden md:grid md:grid-cols-3 gap-8">
              {teamMembers.map((member) => (
                <div key={member.name} className="p-10 bg-white border border-neutral-200 flex flex-col h-full">
                  <div>
                    <div className="flex justify-center mb-6">
                      <div className="relative w-32 h-32 rounded-full overflow-hidden border border-neutral-100">
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          className="object-cover grayscale hover:grayscale-0 transition-all duration-300"
                          sizes="(max-width: 768px) 100vw, 33vw"
                        />
                      </div>
                    </div>
                    <h3 className="font-mono text-[11px] tracking-wider mb-2">{member.name}</h3>
                    <p className="font-mono text-[11px] tracking-wider text-neutral-500 mb-5">{member.role}</p>
                    <p className="font-light text-[13px] leading-relaxed">{member.bio}</p>
                  </div>
                  <div className="mt-auto pt-5">
                    {member.social && (
                      <a
                        href={member.social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block font-mono text-[11px] tracking-wider hover:text-orange-500 transition-colors"
                      >
                        {member.social.label}
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  )
} 