'use client'

import React, { useState, FormEvent } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import useSWR from 'swr'
import { TestimonialCarousel } from './TestimonialCarousel'
import { ClientLogoBar } from './ClientLogoBar'
import { cn } from '@/lib/utils'

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
  
  // State for newsletter form
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false);
  
  // Format number with commas
  const formatNumber = (num: number | undefined): string => {
    return num ? num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : "...";
  }
  
  // Updated client logos based on public/logos directory
  const clientLogos = [
    { src: '/content/images/logos/wiserx.png', alt: 'WiserX', url: 'https://home.wiserx.co/' },
    { src: '/content/images/logos/gameover.png', alt: 'GameOver', url: 'https://www.gameovermedia.io/' },
    { src: '/content/images/logos/storyprotocol.png', alt: 'Story Protocol', url: 'https://www.story.foundation/' },
    { src: '/content/images/logos/prerich.png', alt: 'Prerich', invert: true, url: 'https://www.prerich.com/' },
  ]

  // Filter out Prerich logo before passing to the component
  const filteredLogos = clientLogos.filter(logo => logo.alt !== 'Prerich');

  const testimonials = [
    {
      quote: "The crew led a virtual 3 hour vibe-coding 101 workshop and had a group of 100+ devs engaged the entire time. It was a great mix of people from our existing community and the audience that Agency42 attracts from their network. A+ all around!",
      attribution: "Nick, Story Protocol"
    },
    {
      quote: "Excited to share that I've just learned how to use LinkedIn-MCP from the amazing @Kenneth. What's most incredible is that I was able to set this up with minimal coding skills!",
      attribution: "Camille, Landau Consulting"
    },
    {
      quote: "You broke things down in a way that actually made sense. Our calls cleared up a lot for us and probably saved the team 2 weeks of R&D",
      attribution: "Nash, What Works Global"
    },
    {
      quote: "Managed to take my HTML from 2500 lines down to 600 and tidy things up to the point where a proper coder took a look at it and didn't believe I was vibe coding.",
      attribution: "Meme Records"
    }
  ]

  // Handle newsletter subscription
  const handleSubscribe = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    setMessage('');
    setIsError(false);

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Subscription failed. Please try again.');
      }

      // Success
      setMessage(result.message || 'Successfully subscribed!');
      setEmail(''); // Clear input on success
      setIsError(false);

    } catch (error: any) {
      console.error('Subscription error:', error);
      setMessage(error.message || 'An unexpected error occurred.');
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen font-mono bg-white text-black">
      {/* Hero Section */}
      <section className="w-full relative overflow-hidden bg-gradient-to-b from-white via-white to-gray-50">
        <div className="pt-32 pb-16 px-4 text-center relative z-10">
          {/* Logo - small version */}
          <div className="flex justify-center mb-8">
            <Image src="/content/images/logos/agency42.png" alt="Agency 42 logo" width={800} height={400} className="h-64 md:h-80 w-auto object-contain" />
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-medium mb-6 text-black tracking-tight">
            Versatile AI consulting ✦
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-gray-800 font-light">
            We partner with teams to map, prototype, and scale AI innovation.
          </p>
          <Link
            href="/services#contact"
            className="inline-block border-2 border-black text-black font-mono text-sm tracking-wider px-10 py-4 hover:bg-black hover:text-white transition-colors duration-300"
          >
            GET STARTED →
          </Link>
        </div>
        
        {/* --- HERO IMAGE BAR: Top slice, just below hero text --- */}
        <div 
          className="w-full h-64 relative overflow-hidden" 
          aria-hidden="true"
        >
          <Image 
            src="/content/hero.png" 
            alt="Stylized view between buildings looking at moon and stars"
            fill
            className="object-cover object-top md:object-[center_8%] scale-[1.0] md:scale-100"
            priority // Preload hero image
          />
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16 border-t border-black">
        <h2 className="text-center font-heading text-2xl mb-12 uppercase tracking-wider">Impact</h2>
        <div className="container mx-auto max-w-4xl px-4">
          <div className="grid grid-cols-3 gap-8 items-start text-center">
            <div>
              <p className="text-4xl md:text-5xl font-heading font-semibold text-black">1k+</p>
              <p className="text-sm uppercase tracking-wider text-gray-600 mt-2">Professionals Trained</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-heading font-semibold text-black">10+</p>
              <p className="text-sm uppercase tracking-wider text-gray-600 mt-2">Agents Deployed</p>
            </div>
            <div>
              {/* Format lines of code as Xk+ */}
              <p className="text-4xl md:text-5xl font-heading font-semibold text-black">
                {locData && locData.lines > 0 ? `${Math.floor(locData.lines / 1000)}k+` : locData ? '0' : "..."}
              </p>
              <p className="text-sm uppercase tracking-wider text-gray-600 mt-2">Lines of Open Source Code</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- MIDDLE SLICE: After Impact section --- */}
      <section className="border-t border-black">
        <div className="w-full h-96 relative overflow-hidden" aria-hidden="true">
          <Image 
            src="/content/hero.png" 
            alt="" 
            fill 
            className="object-cover object-[center_40%] md:object-center scale-[2.0] md:scale-100" 
            quality={100} 
          />
        </div>
      </section>

      {/* Our Strategy Section */}
      <section id="strategy" className="py-24 border-t border-black">
        <div className="container mx-auto px-4">
          <h2 className="text-center font-heading text-3xl md:text-4xl font-medium mb-12">Our Strategy</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Map */}
            <div className="p-8 border border-black flex flex-col">
              <h3 className="font-heading text-xl mb-4">Map</h3>
              <p className="text-gray-700 mb-6">
                We map your operational landscape—analyzing workflows, capabilities, culture, and brand to reveal where AI can unlock real leverage for your business.
              </p>
              <Link href="/services#audit" className="mt-auto inline-block border border-black px-4 py-2 font-mono text-[11px] tracking-wider hover:bg-black hover:text-white transition">
                Learn More
              </Link>
            </div>
            {/* Design */}
            <div className="p-8 border border-black flex flex-col">
              <h3 className="font-heading text-xl mb-4">Design</h3>
              <p className="text-gray-700 mb-6">
                Through hands-on collaboration, we co-create tools, processes, and prototypes—rapidly shaping solutions your team can see, test, and own.
              </p>
              <Link href="/services#workshop" className="mt-auto inline-block border border-black px-4 py-2 font-mono text-[11px] tracking-wider hover:bg-black hover:text-white transition">
                Learn More
              </Link>
            </div>
            {/* Scale */}
            <div className="p-8 border border-black flex flex-col">
              <h3 className="font-heading text-xl mb-4">Scale</h3>
              <p className="text-gray-700 mb-6">
                We help your AI systems scale and evolve—learning from real-world use, adapting to new challenges, and compounding value as your business grows.
              </p>
              <Link href="/services#retainer" className="mt-auto inline-block border border-black px-4 py-2 font-mono text-[11px] tracking-wider hover:bg-black hover:text-white transition">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 border-t border-black">
        <h3 className="text-center font-heading text-xl mb-8 uppercase">Partners</h3>
        
        {/* Pass the filtered list to ClientLogoBar */}
        <ClientLogoBar logos={filteredLogos} />
      </section>

      {/* --- BOTTOM SLICE: After Partners section --- */}
      <section className="border-t border-black">
        <div className="w-full h-96 relative overflow-hidden" aria-hidden="true">
          <Image 
            src="/content/hero.png" 
            alt="" 
            fill 
            className="object-cover object-bottom origin-bottom scale-[1.0] md:scale-100 md:origin-center md:object-bottom"
            quality={100} 
          />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 border-t border-black">
        <h3 className="text-center font-heading text-xl mb-8 uppercase">Testimonials</h3>
        
        {/* Testimonials carousel with fade effect */}
        <div className="max-w-6xl mx-auto relative">
          {/* Left fade gradient */}
          <div className="absolute left-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
          
          <TestimonialCarousel testimonials={testimonials} />
          
          {/* Right fade gradient */}
          <div className="absolute right-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
        </div>
      </section>

      {/* Subscribe Section */}
      <section className="py-16 bg-black text-white text-center font-mono">
        <h2 className="text-2xl mb-6">Stay in the loop</h2>
        <p className="mb-8 text-gray-300">Subscribe to our newsletter for monthly updates on AI strategy &amp; tech.</p>
        <form 
          onSubmit={handleSubscribe} 
          className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-md mx-auto"
        >
          <label htmlFor="newsletter-email" className="sr-only">Email</label>
          <input 
            id="newsletter-email"
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com" 
            className="flex-1 h-12 px-4 border border-white bg-transparent placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-white disabled:opacity-50"
            required 
            disabled={isLoading}
          />
          <button 
            type="submit" 
            className="h-12 px-6 border border-white hover:bg-white hover:text-black transition disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={isLoading}
          >
            {isLoading ? 'Subscribing...' : 'Subscribe'}
          </button>
        </form>
        {message && (
          <p className={cn(
            "mt-4 text-sm",
            isError ? 'text-red-400' : 'text-green-400'
          )}>
            {message}
          </p>
        )}
      </section>

    </div>
  )
} 