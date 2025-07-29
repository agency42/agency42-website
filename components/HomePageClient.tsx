"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { TestimonialCarousel } from "./TestimonialCarousel";
import { ClientLogoBar } from "./ClientLogoBar";
import { HeroSection } from "./HeroSection";

export default function HomePageClient() {
  const [showVideo, setShowVideo] = useState(false);

  // Updated client logos based on public/logos directory
  const clientLogos = [
    {
      src: "/images/logos/wiserx.png",
      alt: "WiserX",
      url: "https://www.linkedin.com/company/wise-rx/",
    },
    {
      src: "/images/logos/gameover.png",
      alt: "GameOver",
      url: "https://www.gameovermedia.io/",
    },
    {
      src: "/images/logos/storyprotocol.png",
      alt: "Story Protocol",
      url: "https://storyprotocol.xyz/",
    },
    {
      src: "/images/logos/prerichv3.webp",
      alt: "Prerich",
      url: "https://www.prerich.com/",
    },
  ];

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

  return (
    <div className="relative">
      {/* Fixed Parallax Background */}
      <div
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: "url(/images/site/hero.png)",
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

        {/* Impact Section */}
        <section className="py-20 bg-white relative">
          <div className="container mx-auto max-w-6xl px-4">
            <h2 className="text-center font-mono text-xs uppercase tracking-widest mb-16 text-gray-600">
              Impact
            </h2>
            <p className="text-center text-4xl md:text-5xl font-heading font-light text-black mb-16">
              See how we innovate
            </p>

            {/* Video Player */}
            <div className="max-w-3xl mx-auto">
              <div className="aspect-video w-full bg-gray-900 rounded-lg shadow-lg overflow-hidden relative">
                {!showVideo ? (
                  <>
                    <Image
                      src="https://img.youtube.com/vi/jWUOS_OsOPM/maxresdefault.jpg"
                      alt="Agency42 workflow diagram video thumbnail"
                      className="w-full h-full object-cover cursor-pointer transition-transform duration-300 hover:scale-105"
                      onClick={() => setShowVideo(true)}
                      width={1000}
                      height={1000}
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
              <div className="text-center mt-12">
                <Link
                  href="/projects"
                  className="inline-block bg-black text-white font-mono text-sm font-medium tracking-wide px-8 py-4 hover:bg-gray-900 transition-colors duration-200"
                >
                  Explore Case Studies
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Our Strategy Section */}
        <section
          id="strategy"
          className="py-24 bg-white/95 backdrop-blur-sm relative"
        >
          <div className="container mx-auto max-w-6xl px-4">
            <div className="text-center mb-16">
              <h2 className="font-mono text-xs uppercase tracking-widest mb-6 text-gray-600">
                Our Strategy
              </h2>
              <h3 className="text-4xl md:text-5xl font-heading font-light text-black">
                How we work
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {/* Map */}
              <div className="text-center">
                <div className="w-16 h-16 bg-black text-white flex items-center justify-center font-mono text-sm font-medium mb-6 mx-auto">
                  01
                </div>
                <h4 className="font-heading text-xl font-medium mb-4 text-black">
                  Map
                </h4>
                <p className="text-black font-sans leading-relaxed text-sm">
                  We integrate with your team to learn your business, understand
                  your market, and identify the highest-impact AI opportunities.
                </p>
              </div>

              {/* Design */}
              <div className="text-center">
                <div className="w-16 h-16 bg-black text-white flex items-center justify-center font-mono text-sm font-medium mb-6 mx-auto">
                  02
                </div>
                <h4 className="font-heading text-xl font-medium mb-4 text-black">
                  Design
                </h4>
                <p className="text-black font-sans leading-relaxed text-sm">
                  Together, we map out potential AI solutions and design a clear
                  execution plan for the most promising projects.
                </p>
              </div>

              {/* Build */}
              <div className="text-center">
                <div className="w-16 h-16 bg-black text-white flex items-center justify-center font-mono text-sm font-medium mb-6 mx-auto">
                  03
                </div>
                <h4 className="font-heading text-xl font-medium mb-4 text-black">
                  Build
                </h4>
                <p className="text-black font-sans leading-relaxed text-sm">
                  Our team gets to work, building and shipping the custom AI
                  systems that give you a competitive edge.
                </p>
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
            <ClientLogoBar logos={clientLogos} />
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
        <section className="py-20 bg-black text-white text-center relative">
          <div className="container mx-auto max-w-2xl px-4">
            <h2 className="text-3xl font-heading font-light mb-6">
              Work With Us
            </h2>
            <p className="mb-8 text-gray-300 font-sans leading-relaxed">
              Great ideas don’t wait. Neither do we
            </p>
            <Link
              href="/services#contact"
              className="inline-block bg-white text-black font-mono text-sm font-medium tracking-wide px-8 py-4 hover:bg-gray-100 transition-colors duration-200"
            >
              Get In Touch
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
