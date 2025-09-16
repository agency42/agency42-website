"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Zap,
  Code,
  SlidersHorizontal,
  Keyboard,
  Rocket,
  GraduationCap,
} from "lucide-react";
import { TestimonialCarousel } from "@/components/TestimonialCarousel";



export default function LearnVibeCodingPageContent() {

  // Testimonials data for the carousel
  const testimonials = [
    {
      quote: "Singular best training on AI that I've ever attended.",
      attribution:
        "Michael Killian, Associate Professor @ Florida State University",
    },
    {
      quote:
        "In a single session we integrated Notion, Obsidian, and Zotero into an AI-powered workflow—no technical hiccups at all. Game-changing.",
      attribution:
        "Shingai Thornton, Halcyonic Systems | Researcher @ Binghamton University",
    },
    {
      quote:
        "The crew led a virtual 3 hour vibe-coding 101 workshop and had a group of 100+ devs engaged the entire time.",
      attribution: "Nick George, Story Protocol",
    },
    {
      quote:
        "Managed to take my HTML from 2500 lines down to 600 and tidy things up... didn't believe I was vibe coding.",
      attribution: "Meme Records",
    },
  ];


  return (
    <>
      <div className="bg-background text-foreground">
        {/* Hero Section */}
        <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-primary mb-6 leading-tight tracking-tighter text-center">
              Code is for everyone now.
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              We help augment your development flows and ship high-quality code with AI.
            </p>
            
            {/* Community Stats */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-12">
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">1.5k+</p>
                <p className="text-sm text-muted-foreground">Discord Members</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">$125k+</p>
                <p className="text-sm text-muted-foreground">Raised by Alumni</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">3x</p>
                <p className="text-sm text-muted-foreground">Hackathon Winners</p>
              </div>
            </div>

            <div className="relative mx-auto mt-8 w-full max-w-3xl">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="https://discord.gg/8AWegh9H" passHref>
                  <Button size="lg" variant="outline">
                    <GraduationCap className="mr-2 h-5 w-5" />
                    Join Vibe Code University
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* What is Vibe Coding? Section */}
        <section
          id="what-is-vibe-coding"
          className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary"
        >
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Video */}
            <div className="space-y-6">
              <div className="aspect-video rounded-lg overflow-hidden border">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/6poldoGRsjY"
                  title="How to use Cursor Rules to write better code with AI"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            {/* Right: What & Why */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-primary">
                Learn AI-Powered Development
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p className="text-lg">
                  Use AI to turn your ideas into working products 10x faster.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Zap className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-1" />
                    <span>Build MVPs in days, not months</span>
                  </li>
                  <li className="flex items-start">
                    <Code className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-1" />
                    <span>Master Cursor + Claude Code for rapid development</span>
                  </li>
                  <li className="flex items-start">
                    <Rocket className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-1" />
                    <span>Join founders who've raised capital from their builds</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Social Proof Highlight with Carousel */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <TestimonialCarousel
              testimonials={testimonials}
              className="text-center"
              showStars={true}
              largeText={true}
            />
          </div>
        </section>

        {/* How We Help Section */}
        <section
          id="how-we-help"
          className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary"
        >
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-primary mb-4">
                How We Help You Build
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <SlidersHorizontal className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-bold mb-2">Custom AI Setup</h3>
                <p className="text-sm text-muted-foreground">
                  Get your Cursor + Claude Code / Obsidian workflows optimized for your project
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <Keyboard className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-bold mb-2">Live Workshops</h3>
                <p className="text-sm text-muted-foreground">
                  Hands-on sessions building real features together
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <Rocket className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-bold mb-2">Builder Community</h3>
                <p className="text-sm text-muted-foreground">
                  AI builders helping AI builders. Share your projects and get feedback and get feedback from the community.
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center mt-12">
              <Link href="/services#contact" passHref>
                <Button size="lg">
                  Start Building Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}
