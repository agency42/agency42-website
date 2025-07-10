"use client"

import React, { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ArrowRight, Check, Zap, Users, Code, Star } from "lucide-react"
import { cn } from "@/lib/utils"
import Head from 'next/head'
import WorkshopQuoteModal from "@/components/WorkshopQuoteModal";

// FAQ data for JSON-LD
const faqData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What does a discovery session cover?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "It's a 30-minute session to assess your needs, map your development goals, and design a custom curriculum plan. The session fee is then credited towards any future coaching block."
      }
    },
    {
      "@type": "Question",
      "name": "How many sprint blocks will I need?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most founders ship their MVP in 2-3 blocks. Your required number of blocks depends on the project's complexity. We'll give you a precise estimate during the initial Discovery Call."
      }
    },
    {
      "@type": "Question",
      "name": "What prerequisite skills do I need?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Basic programming knowledge in any language is helpful, but not required. We've successfully worked with complete beginners who are highly motivated. The AI co-pilot setup dramatically accelerates the learning curve."
      }
    }
  ]
};

// Course data for JSON-LD
const courseData = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "itemListElement": [
    {
      "@type": "Course",
      "name": "Starter Kit",
      "description": "Strategy call plus a session to build your AI workflow.",
      "provider": {
        "@type": "Organization",
        "name": "Agency 42"
      }
    },
    {
      "@type": "Course",
      "name": "Session Block",
      "description": "Our best value package to go from idea to shipped feature.",
      "provider": {
        "@type": "Organization",
        "name": "Agency 42"
      }
    },
    {
      "@type": "Course",
      "name": "Workshops",
      "description": "For companies, schools, small teams, and community events.",
      "provider": {
        "@type": "Organization",
        "name": "Agency 42"
      }
    }
  ]
};

export default function LearnVibeCodingPageContent() {
  const pricingPlans = [
    {
      name: "1-on-1 Sessions",
      description: "A tailored curriculum to transform your workflow and ship your product faster.",
      price: "$3000",
      price_prefix: "Starting at",
      features: [
        "Custom curriculum designed for your specific goals.",
        "Async support from your mentor",
        "Weekly one-on-one pair-programming sessions.",
      ],
      cta: "Book a Discovery Call",
      ctaType: "link",
    },
    {
      name: "Team Workshops",
      description: "Onboard your entire team to AI-native workflows with a custom-designed workshop.",
      price: "Custom Quote",
      features: [
        "Hands-on training tailored to your company's stack.",
        "Async support from our team.",
        "Boost your team's productivity and innovation.",
      ],
      cta: "Request a Quote",
      ctaType: "modal",
    },
  ]

  // Define a type for the plan objects to ensure type safety
  type PricingPlan = {
    name: string;
    description: string;
    price: string;
    price_prefix?: string;
    features: string[];
    cta: string;
    ctaType: "link" | "modal";
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseData) }}
      />
      <WorkshopQuoteModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <div className="bg-background text-foreground">
        {/* Hero Section */}
        <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-primary mb-6 leading-tight tracking-tighter text-center">
              Vibe Code Coaching
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
              Ship 10× faster with an AI pair-programmer & senior mentor.
            </p>
            <div className="space-x-4">
              <Link href="https://calendly.com/ken-agency42/vibe-code-strategy-call" passHref>
                <Button size="lg">
                  Book a Discovery Call
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* What you get Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-primary text-center mb-16">
              What You Get
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-background hover:border-primary/50 transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Zap className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="font-sans font-bold">AI Co-pilot Setup</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Custom Cursor Rules, Claude Code configs, and AI-accelerated workflows tailored to your stack, coding style, and goals.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-background hover:border-primary/50 transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Code className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="font-sans font-bold">1-on-1 Vibe Coding Sessions</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Ship features in weeks, not months. We'll review your code in real-time and accelerate your progress.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-background hover:border-primary/50 transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="font-sans font-bold">Builder Community</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Access to a community of builders. Get unstuck fast with peer and expert support.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">Pricing</h2>
              <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
                Simple, transparent pricing for teams and individuals.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {(pricingPlans as PricingPlan[]).map((plan, index) => (
                <Card
                  key={index}
                  className={cn(
                    "flex flex-col",
                  )}
                >
                  <CardHeader>
                    <CardTitle className="font-sans font-bold">{plan.name}</CardTitle>
                    <CardDescription>{plan.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow space-y-4">
                    <div className="text-4xl font-bold flex items-baseline">
                      {plan.price_prefix && (
                        <span className="text-lg font-normal text-muted-foreground mr-2">{plan.price_prefix}</span>
                      )}
                      {plan.price}
                    </div>
                    <ul className="space-y-3 text-muted-foreground text-sm">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <Check className="h-5 w-5 text-muted-foreground mr-2 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <div className="p-6 pt-0 mt-auto">
                    {plan.ctaType === 'link' ? (
                      <Link href="https://calendly.com/ken-agency42/vibe-code-strategy-call" passHref>
                        <Button
                          className="w-full"
                        >
                          {plan.cta}
                        </Button>
                      </Link>
                    ) : (
                      <Button
                        className="w-full"
                        onClick={() => setIsModalOpen(true)}
                      >
                        {plan.cta}
                      </Button>
                    )}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        {/* Testimonials */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-primary text-center mb-16">
              From Our Community
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="bg-background">
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <blockquote className="text-foreground/80 mb-4 italic">
                    "Singular best training on AI that I've ever attended."
                  </blockquote>
                  <cite className="font-mono text-sm">
                    — Michael Killian, Assoc. Prof. @ Florida State University
                  </cite>
                </CardContent>
              </Card>

              <Card className="bg-background">
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <blockquote className="text-foreground/80 mb-4 italic">
                    "Managed to take my HTML from 2500 lines down to 600 and tidy things up... didn't believe I was vibe coding."
                  </blockquote>
                  <cite className="font-mono text-sm">— Meme Records</cite>
                </CardContent>
              </Card>

              <Card className="bg-background">
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <blockquote className="text-foreground/80 mb-4 italic">
                    "The crew led a virtual 3 hour vibe-coding 101 workshop and had a group of 100+ devs engaged the entire time."
                  </blockquote>
                  <cite className="font-mono text-sm">— Nick, Story Protocol</cite>
                </CardContent>
              </Card>
              
              <Card className="bg-background">
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <blockquote className="text-foreground/80 mb-4 italic">
                    "Each call nuked blockers that had us spinning. Easily worth the fee."
                  </blockquote>
                  <cite className="font-mono text-sm">— Nash, What Works Global</cite>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-primary text-center mb-16">
              Frequently Asked Questions
            </h2>
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="strategy-session-cover">
                <AccordionTrigger className="font-sans font-semibold">
                  What does a discovery session cover?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  It's a 30-minute session to assess your needs, map your development goals, and design a custom curriculum plan. The session fee is then credited towards any future coaching block.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="how-many-blocks">
                <AccordionTrigger className="font-sans font-semibold">
                  How many sprint blocks will I need?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Most founders ship their MVP in 2-3 blocks. Your required number of blocks depends on the project's complexity. We'll give you a precise estimate during the initial Discovery Call.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="prerequisites">
                <AccordionTrigger className="font-sans font-semibold">
                  What prerequisite skills do I need?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Basic programming knowledge in any language is helpful, but not required. We've successfully worked with complete beginners who are highly motivated. The AI co-pilot setup dramatically accelerates the learning curve.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>
      </div>
    </>
  )
} 