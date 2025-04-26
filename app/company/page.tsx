import React from 'react'
import Image from 'next/image'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Company | Agency/42',
  description: 'Learn about Agency/42, our mission, our team, and our approach to building human-centric AI solutions.',
  keywords: ['AI innovation studio', 'AI agency', 'AI team', 'AI mission', 'human-centric AI', 'AI consulting', 'Kenneth Cavanagh', 'Rob Renn', 'Bootoshi'],
  openGraph: {
    images: ['/logos/placeholder-logo.svg'], // TODO: Replace with actual company logo/image
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/logos/placeholder-logo.svg'], // TODO: Replace with actual company logo/image
  }
}

// Team data (can be moved to a separate file/CMS later)
const teamMembers = [
  {
    name: 'Ken Cavanagh',
    role: 'Human Factors',
    image: '/team/ken-headshot.png', // TODO: Verify path and add image
    bio: 'Industrial psychologist and developer building AI for social applications. Previously ops engineering and people science at SpaceX.',
    social: {
      url: 'https://www.linkedin.com/in/k3nneth/',
      label: 'LinkedIn →'
    }
  },
  {
    name: 'Rob Renn',
    role: 'System Engineering',
    image: '/team/rob-headshot.png', // TODO: Verify path and add image
    bio: 'Industrial designer and engineer with a decade of building startups. Previously AI R&D at Stanford and Skunkworks.',
    social: {
      url: 'https://www.linkedin.com/in/future-rob/',
      label: 'LinkedIn →'
    }
  },
  {
    name: 'Bootoshi (Saint Louis)',
    role: 'Memetics Engineering',
    image: '/team/bootoshi-headshot.png', // TODO: Verify path and add image
    bio: 'AI developer, content creator, hackathon winner, pioneer in building autonomous agent communities.',
    social: {
      url: 'https://www.bootosh.ai/',
      label: 'Web →'
    }
  },
]

export default function CompanyPage() {
  return (
    <div className="min-h-screen bg-background text-foreground pt-24">
      <main className="container mx-auto max-w-6xl px-4 py-16">
        {/* About Section */}
        <section className="mb-24">
          <h2 className="font-mono text-[11px] tracking-wider mb-6 uppercase text-secondary">Our Company</h2>
          <h1 className="text-4xl md:text-6xl font-heading font-medium mb-8">
            Building the Future of <span className="text-accent">Human-AI Interaction</span>
          </h1>
          
          <div className="md:grid md:grid-cols-2 gap-12 text-lg font-sans">
            <div className="space-y-6 mb-8 md:mb-0">
              <p>
                Agency/42 is an AI innovation studio focused on the intersection of technology and human experience. 
                Our expertise lies in integrating intelligent systems into the creative and social fabric of businesses.
              </p>
              <p>
                We believe the most powerful AI systems emerge when we think beyond algorithms, focusing on 
                human interaction, customer behavior, and real business dynamics.
              </p>
            </div>
            <div className="space-y-6">
              <p>
                We partner with organizations to build AI capabilities that align with their strategic vision, 
                creating new possibilities in the human-AI relationship that drive tangible value.
              </p>
              <p>
                Need help navigating the AI landscape? 
                Contact us at <Link href="mailto:hello@agency42.co" className="text-accent hover:underline">hello@agency42.co</Link>.
              </p>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section>
          <h2 className="text-center font-heading text-3xl md:text-4xl font-medium mb-12">Meet the Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div key={member.name} className="p-8 bg-neutral-50 border border-neutral-200 flex flex-col text-center rounded-md">
                <div className="mx-auto mb-6 relative w-32 h-32 rounded-full overflow-hidden border-2 border-neutral-200">
                  <Image
                    src={member.image}
                    alt={`Headshot of ${member.name}`}
                    fill
                    className="object-cover grayscale"
                    sizes="128px"
                  />
                </div>
                <h3 className="font-heading text-xl mb-1">{member.name}</h3>
                <p className="font-mono text-[11px] tracking-wider text-secondary mb-4 uppercase">{member.role}</p>
                <p className="font-sans text-sm leading-relaxed flex-grow mb-6">{member.bio}</p>
                {member.social && (
                  <Link
                    href={member.social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto inline-block font-mono text-[11px] tracking-wider text-accent hover:text-accent-secondary transition-colors"
                  >
                    {member.social.label}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
} 