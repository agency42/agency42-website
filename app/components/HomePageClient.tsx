"use client";

import React, { useState, FormEvent } from "react";
import Link from "next/link";
import useSWR from "swr";
import { TestimonialCarousel } from "./TestimonialCarousel";
import { ClientLogoBar } from "./ClientLogoBar";
import { HeroSection } from "./HeroSection";
import { cn } from "@/lib/utils";
import { InfiniteSlider } from './InfiniteSlider'
import Image from 'next/image'

// Define props interface
interface HomePageClientProps {
  featuredVideoId: string | null;
  // Add other props if needed (e.g., clientLogos, testimonials)
}

// Fetcher function for SWR
const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function HomePageClient({
  featuredVideoId,
}: HomePageClientProps) {
  // Fetch GitHub lines of code data
  const { data: locData, error: locError } = useSWR("/api/oss-loc", fetcher);

  // State for newsletter form
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);
  const [showVideo, setShowVideo] = useState(false)

  // Format number with commas
  const formatNumber = (num: number | undefined): string => {
    return num ? num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : "...";
  };

  // Updated client logos based on public/logos directory
  const clientLogos = [
    {
      src: "/content/images/logos/wiserx.png",
      alt: "WiserX",
      url: "https://home.wiserx.co/",
    },
    {
      src: "/content/images/logos/gameover.png",
      alt: "GameOver",
      url: "https://www.gameovermedia.io/",
    },
    {
      src: "/content/images/logos/storyprotocol.png",
      alt: "Story Protocol",
      url: "https://www.story.foundation/",
    },
    {
      src: "/content/images/logos/prerich.png",
      alt: "Prerich",
      invert: true,
      url: "https://www.prerich.com/",
    },
  ];

  // Filter out Prerich logo before passing to the component
  const filteredLogos = clientLogos.filter((logo) => logo.alt !== "Prerich");

  const testimonials = [
    {
      quote:
        "The crew led a virtual 3 hour vibe-coding 101 workshop and had a group of 100+ devs engaged the entire time. It was a great mix of people from our existing community and the audience that Agency42 attracts from their network. A+ all around!",
      attribution: "Nick, Story Protocol",
    },
    {
      quote:
        "Excited to share that I've just learned how to use LinkedIn-MCP from the amazing @Kenneth. What's most incredible is that I was able to set this up with minimal coding skills!",
      attribution: "Camille, Landau Consulting",
    },
    {
      quote:
        "You broke things down in a way that actually made sense. Our calls cleared up a lot for us and probably saved the team 2 weeks of R&D",
      attribution: "Nash, What Works Global",
    },
    {
      quote:
        "Managed to take my HTML from 2500 lines down to 600 and tidy things up to the point where a proper coder took a look at it and didn't believe I was vibe coding.",
      attribution: "Meme Records",
    },
  ];

  // Handle newsletter subscription
  const handleSubscribe = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    setMessage("");
    setIsError(false);

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.error || "Subscription failed. Please try again."
        );
      }

      // Success
      setMessage(result.message || "Successfully subscribed!");
      setEmail(""); // Clear input on success
      setIsError(false);
    } catch (error: any) {
      console.error("Subscription error:", error);
      setMessage(error.message || "An unexpected error occurred.");
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative">
      {/* Fixed Parallax Background */}
      <div
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: "url(/content/hero.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          filter: "grayscale(100%)",
        }}
      />

      {/* Scrollable Content */}
      <div className="relative z-10 pt-20">
        {/* Hero Section */}
        <HeroSection />

        {/* Proof of Capability Section */}
        <section className="py-12 md:py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-sm font-semibold text-indigo-600 tracking-wide uppercase">
                Proof of Capability
              </h2>
              <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
                Where our partners are taking command
              </p>
            </div>

            {/* Video Player */}
            <div className="mt-12 max-w-4xl mx-auto">
              <div className="aspect-video w-full bg-gray-900 rounded-lg shadow-lg overflow-hidden relative">
                {!showVideo ? (
                  <>
                    <Image
                      src="https://img.youtube.com/vi/jWUOS_OsOPM/maxresdefault.jpg"
                      alt="Agency42 workflow diagram video thumbnail"
                      layout="fill"
                      objectFit="cover"
                      className="cursor-pointer transition-transform duration-300 hover:scale-105"
                      onClick={() => setShowVideo(true)}
                      unoptimized
                    />
                    <div 
                      className="absolute inset-0 flex items-center justify-center cursor-pointer" 
                      onClick={() => setShowVideo(true)}
                    >
                      <button
                        aria-label="Play video"
                        className="bg-white/20 backdrop-blur-sm rounded-full w-20 h-20 flex items-center justify-center transition-transform hover:scale-110"
                      >
                        <svg
                          className="w-12 h-12 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"></path>
                        </svg>
                      </button>
                    </div>
                  </>
                ) : (
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/jWUOS_OsOPM?si=2Rh0IIkbfUi-LCgk&autoplay=1"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                )}
              </div>
              <div className="mt-8 text-center">
                <Link
                  href="/projects"
                  className="inline-block bg-black text-white font-mono text-sm font-medium tracking-wide px-10 py-4 hover:bg-gray-900 transition-colors duration-200"
                >
                  Explore Case Studies
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Your AI Journey Section */}
        <section id="strategy" className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-sm font-semibold text-indigo-600 tracking-wide uppercase">
                The Path to Mastery
              </h2>
              <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
                From clarity to command
              </p>
            </div>
            <div className="mt-12 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-8">
              <div className="relative p-8 bg-white border border-gray-200 rounded-2xl shadow-sm flex flex-col">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900">1. Find Your Leverage Point</h3>
                  <p className="mt-4 text-base text-gray-600">
                    True progress starts with focus. We help you identify the precise point in your work where AI can deliver the most significant and immediate advantage.
                  </p>
                </div>
                <a href="/services#contact" className="mt-6 inline-block text-indigo-600 hover:text-indigo-500 font-semibold">
                  Find Your Focus &rarr;
                </a>
              </div>

              <div className="relative p-8 bg-white border border-gray-200 rounded-2xl shadow-sm flex flex-col">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900">2. Build Your Core Capability</h3>
                  <p className="mt-4 text-base text-gray-600">
                    Together, we build a foundational AI tool or workflow. This isn't just a prototype; it's your first step in building lasting in-house AI competence.
                  </p>
                </div>
                <a href="/services#contact" className="mt-6 inline-block text-indigo-600 hover:text-indigo-500 font-semibold">
                  Build Your Engine &rarr;
                </a>
              </div>

              <div className="relative p-8 bg-white border border-gray-200 rounded-2xl shadow-sm flex flex-col">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900">3. Scale Your Advantage</h3>
                  <p className="mt-4 text-base text-gray-600">
                    We help you expand that core capability across your organization, creating a compounding effect that solidifies your competitive edge.
                  </p>
                </div>
                <a href="/services#contact" className="mt-6 inline-block text-indigo-600 hover:text-indigo-500 font-semibold">
                  Own Your Edge &rarr;
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Partners Section */}
        <section className="py-16 bg-gray-50/95 backdrop-blur-sm relative">
          <div className="container mx-auto max-w-6xl px-4">
            <h3 className="text-center font-mono text-xs uppercase tracking-widest mb-12 text-gray-600">
              Partners
            </h3>
            <ClientLogoBar logos={filteredLogos} />
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-white/95 backdrop-blur-sm relative">
          <div className="container mx-auto max-w-6xl px-4">
            <h3 className="text-center font-mono text-xs uppercase tracking-widest mb-16 text-gray-600">
              Testimonials
            </h3>
            <TestimonialCarousel testimonials={testimonials} />
          </div>
        </section>

        {/* Subscribe Section */}
        <section className="py-20 text-center bg-white">
          <div className="container mx-auto max-w-4xl px-4">
            <h2 className="text-3xl md:text-4xl font-heading mb-6">
              Ready to discover your hidden operational value?
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Let's find out if we're a good fit. The first step is a simple needs analysis so we can understand your specific situation.
            </p>
            <Link
              href="/services#contact"
              className="inline-block bg-black text-white font-mono text-sm font-medium tracking-wide px-10 py-4 hover:bg-gray-900 transition-colors duration-200"
            >
              Analyze My Needs
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
