import React from 'react'
import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About - Agency42',
  description: 'We build AI agents that understand your brand.',
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
    name: 'Kenneth F. Cavanagh',
    role: 'Founder & Principal',
    image: '/content/images/HEADSHOT1.png',
    bio: 'Industrial Psychologist and former SpaceX analytics leader applying psychology and first principles engineering to AI systems. A near decade of experience building and teaching about enterprise data and automation systems before founding Agency42.',
    social: {
      url: 'https://www.linkedin.com/in/k3nneth/',
      label: 'LinkedIn →'
    }
  },
  {
    name: 'St. Louis Reynolds',
    role: 'Research & Content',
    image: '/content/images/St_HEADSHOT.jpeg',
    bio: 'AI developer pioneering character development and social agents. Creator of the Boo Kingdom, a groundbreaking AI-powered RPG with a thriving community.',
    social: {
      url: 'https://www.bootosh.ai/',
      label: 'Web →'
    }
  },
  {
    name: 'Rob Renn',
    role: 'Design Engineering',
    image: '/content/images/ROB_HEADSHOT.jpeg',
    bio: 'Industrial designer and full-stack innovator. Built cutting edge products across AI, crypto, medicine, at organizations like Stanford and Skunkworks.',
    social: {
      url: 'https://www.linkedin.com/in/future-rob/',
      label: 'LinkedIn →'
    }
  },
]

export default function About() {
  // Create a reordered array for desktop view (Ken in middle)
  const desktopTeamMembers = [
    teamMembers[1], // St
    teamMembers[0], // Ken
    teamMembers[2], // Rob
  ]

  return (
    <div className="min-h-screen bg-white">
      <main className="pt-32 pb-20">
        <div className="container mx-auto max-w-6xl px-4">
          {/* About Section */}
          <section className="mb-20">
            <h1 className="text-[42px] font-light leading-[1.1] mb-8">About</h1>
            <div className="prose prose-neutral max-w-none">
              <p className="text-[13px] font-light leading-relaxed mb-6">
                We're an AI innovation studio working at the bleeding edge of technology. Our network of creative technologists builds solutions that matter.
              </p>
              <p className="text-[13px] font-light leading-relaxed mb-6">
                Born in Silicon Beach, we believe in open source, community, and raw talent. Agency42 helps startups and SMBs navigate their transformation into the AI-era, empowering founders to build tomorrow's companies.
              </p>
              <p className="text-[13px] font-light leading-relaxed mb-6">
                From prototyping AI products to reimagining operations, we guide clients through every stage of transformation. Our work spans strategy, development, and team building - helping organizations build the internal capability to innovate continuously.
              </p>
              <p className="text-[13px] font-light leading-relaxed">
                We specialize in developing social agents and character models that push the boundaries of AI interaction. Our clients use these systems to create meaningful connections with their users, transforming how people experience and engage with technology.
              </p>
            </div>
          </section>

          {/* Team Section */}
          <section>
            <h2 className="font-mono text-[11px] tracking-wider mb-12">Our Team</h2>
            {/* Mobile View - Ken First */}
            <div className="grid grid-cols-1 gap-12 md:hidden">
              {teamMembers.map((member) => (
                <div key={member.name} className="space-y-4">
                  <div className="relative w-48 h-48 mx-auto">
                    <div className="absolute inset-0 rounded-full overflow-hidden">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover grayscale hover:grayscale-0 transition-all duration-300"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>
                  </div>
                  <div className="text-center">
                    <h3 className="font-mono text-[11px] tracking-wider">{member.name}</h3>
                    <p className="text-[11px] text-neutral-500 mb-2">{member.role}</p>
                    <p className="text-[13px] font-light leading-relaxed">{member.bio}</p>
                    {member.social && (
                      <a
                        href={member.social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-2 font-mono text-[11px] tracking-wider text-orange-500 hover:text-orange-600 transition-colors"
                      >
                        {member.social.label}
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
            {/* Desktop View - Ken in Middle */}
            <div className="hidden md:grid md:grid-cols-3 gap-12">
              {desktopTeamMembers.map((member) => (
                <div key={member.name} className="space-y-4">
                  <div className="relative w-48 h-48 mx-auto">
                    <div className="absolute inset-0 rounded-full overflow-hidden">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover grayscale hover:grayscale-0 transition-all duration-300"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>
                  </div>
                  <div className="text-center">
                    <h3 className="font-mono text-[11px] tracking-wider">{member.name}</h3>
                    <p className="text-[11px] text-neutral-500 mb-2">{member.role}</p>
                    <p className="text-[13px] font-light leading-relaxed">{member.bio}</p>
                    {member.social && (
                      <a
                        href={member.social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-2 font-mono text-[11px] tracking-wider text-orange-500 hover:text-orange-600 transition-colors"
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