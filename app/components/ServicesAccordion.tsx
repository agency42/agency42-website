'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function ServicesAccordion() {
  return (
    <Accordion type="single" collapsible className="space-y-6">
      {/* AI Opportunity Audit */}
      <AccordionItem value="audit" className="border border-black p-0 rounded-none">
        <AccordionTrigger className="p-8 hover:no-underline data-[state=open]:border-b border-black bg-white hover:bg-gray-50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500">
          <div className="flex flex-col sm:flex-row w-full items-start sm:items-center justify-between text-left pr-4">
            <div>
              <h3 className="font-heading text-xl md:text-2xl text-black text-left mb-2 sm:mb-0">AI Opportunity Audit</h3>
            </div>
            <span className="font-mono text-[11px] tracking-wider uppercase border border-black px-3 py-1">
              Learn More
            </span>
          </div>
        </AccordionTrigger>
        <AccordionContent className="p-8 pt-6 bg-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-start">
            <div>
              <p className="text-base md:text-lg mb-4 font-sans text-gray-700">
                A 4-6-week diagnostic that reveals where AI delivers the highest return for your organization.
              </p>
              <h4 className="font-mono text-[11px] tracking-wider mt-6 md:mt-8 mb-4 uppercase text-black">You'll typically see</h4>
              <ul className="space-y-3 mb-6 font-sans text-gray-700">
                <li className="flex items-start">
                  <span className="text-black mr-2">✓</span>
                  <span>Maps of technology use and information flows through the org</span>
                </li>
                <li className="flex items-start">
                  <span className="text-black mr-2">✓</span>
                  <span>Ranked list of high-impact AI use-cases (scored on tech fit × human fit)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-black mr-2">✓</span>
                  <span>Compact action roadmap with quick-win options and next-step recommendations</span>
                </li>
              </ul>
              <Link
                href="#contact"
                className="inline-block border border-black text-black font-mono text-[11px] tracking-wider px-8 py-3 hover:bg-black hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
              >
                SCHEDULE AN AUDIT →
              </Link>
            </div>
            <div className="w-full aspect-video border border-black overflow-hidden">
              <Image 
                src="/content/observe.png" 
                alt="AI Opportunity Audit" 
                width={800} 
                height={450} 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>

      {/* Hands-on Workshop */}
      <AccordionItem value="workshop" className="border border-black p-0 rounded-none">
        <AccordionTrigger className="p-8 hover:no-underline data-[state=open]:border-b border-black bg-white hover:bg-gray-50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500">
          <div className="flex flex-col sm:flex-row w-full items-start sm:items-center justify-between text-left pr-4">
            <div>
              <h3 className="font-heading text-xl md:text-2xl text-black text-left mb-2 sm:mb-0">Hands-on Workshops</h3>
            </div>
            <span className="font-mono text-[11px] tracking-wider uppercase border border-black px-3 py-1">
              Learn More
            </span>
          </div>
        </AccordionTrigger>
        <AccordionContent className="p-8 pt-6 bg-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-start">
            <div className="order-2 md:order-1">
              <p className="text-base md:text-lg mb-4 font-sans text-gray-700">
                Live, practical sessions that turn audit insights into real capability.
              </p>
              <h4 className="font-mono text-[11px] tracking-wider mt-6 md:mt-8 mb-4 uppercase text-black">Common elements</h4>
              <ul className="space-y-3 mb-8 font-sans text-gray-700">
                <li className="flex items-start">
                  <span className="text-black mr-2">✓</span>
                  <span>Custom curriculum built from your top opportunities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-black mr-2">✓</span>
                  <span>Guided exercises on prompt design, workflow automation, or agent basics</span>
                </li>
                <li className="flex items-start">
                  <span className="text-black mr-2">✓</span>
                  <span>Take-home cheatsheets & recordings for repeat learning</span>
                </li>
                <li className="flex items-start">
                  <span className="text-black mr-2">✓</span>
                  <span>Follow-up Q&A window to lock in adoption</span>
                </li>
              </ul>
              <Link
                href="#contact"
                className="inline-block border border-black text-black font-mono text-[11px] tracking-wider px-8 py-3 hover:bg-black hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
              >
                INQUIRE ABOUT WORKSHOPS →
              </Link>
            </div>
            <div className="w-full aspect-video border border-black overflow-hidden order-1 md:order-2">
              <Image 
                src="/content/deltaspacewide.png" 
                alt="Hands-on Workshop" 
                width={800} 
                height={450} 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>

      {/* Fractional AI Leadership */}
      <AccordionItem value="retainer" className="border border-black p-0 rounded-none">
        <AccordionTrigger className="p-8 hover:no-underline data-[state=open]:border-b border-black bg-white hover:bg-gray-50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500">
          <div className="flex flex-col sm:flex-row w-full items-start sm:items-center justify-between text-left pr-4">
            <div>
              <h3 className="font-heading text-xl md:text-2xl text-black text-left mb-2 sm:mb-0">Fractional AI Leadership</h3>
            </div>
            <span className="font-mono text-[11px] tracking-wider uppercase border border-black px-3 py-1">
              Learn More
            </span>
          </div>
        </AccordionTrigger>
        <AccordionContent className="p-8 pt-6 bg-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-start">
            <div>
              <p className="text-base md:text-lg mb-4 font-sans text-gray-700">
                Ongoing strategic and technical guidance without the full-time hire.
              </p>
              <h4 className="font-mono text-[11px] tracking-wider mt-6 md:mt-8 mb-4 uppercase text-black">Typical support</h4>
              <ul className="space-y-3 mb-8 font-sans text-gray-700">
                <li className="flex items-start">
                  <span className="text-black mr-2">✓</span>
                  <span>Monthly/weekly strategy huddles & roadmap refresh</span>
                </li>
                <li className="flex items-start">
                  <span className="text-black mr-2">✓</span>
                  <span>Oversight on builds, vendors, and data strategy</span>
                </li>
                <li className="flex items-start">
                  <span className="text-black mr-2">✓</span>
                  <span>Lightweight coaching & upskilling for internal champions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-black mr-2">✓</span>
                  <span>Continuous scanning for new AI plays that fit your context</span>
                </li>
              </ul>
              <Link
                href="#contact"
                className="inline-block border border-black text-black font-mono text-[11px] tracking-wider px-8 py-3 hover:bg-black hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
              >
                DISCUSS A RETAINER →
              </Link>
            </div>
            <div className="w-full aspect-video border border-black overflow-hidden">
              <Image 
                src="/content/delta-long.png" 
                alt="Fractional AI Leadership Services" 
                width={800} 
                height={450} 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>

      {/* Research & Development */}
      <AccordionItem value="randd" className="border border-black p-0 rounded-none">
        <AccordionTrigger className="p-8 hover:no-underline data-[state=open]:border-b border-black bg-white hover:bg-gray-50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500">
          <div className="flex flex-col sm:flex-row w-full items-start sm:items-center justify-between text-left pr-4">
            <div>
              <h3 className="font-heading text-xl md:text-2xl text-black text-left mb-2 sm:mb-0">Research & Development</h3>
            </div>
            <span className="font-mono text-[11px] tracking-wider uppercase border border-black px-3 py-1">
              Learn More
            </span>
          </div>
        </AccordionTrigger>
        <AccordionContent className="p-8 pt-6 bg-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-start">
            <div className="order-2 md:order-1">
              <p className="text-base md:text-lg mb-4 font-sans text-gray-700">
                Bespoke R&D sprints for teams pushing the frontier of AI, media, and digital culture.
              </p>
              <h4 className="font-mono text-[11px] tracking-wider mt-6 md:mt-8 mb-4 uppercase text-black">Sample capabilities</h4>
              <ul className="space-y-3 mb-8 font-sans text-gray-700">
                <li className="flex items-start">
                  <span className="text-black mr-2">✓</span>
                  <span>Prototype agent systems & custom LLM workflows</span>
                </li>
                <li className="flex items-start">
                  <span className="text-black mr-2">✓</span>
                  <span>Exploratory studies in memetics, creative AI, or decentralized media</span>
                </li>
                <li className="flex items-start">
                  <span className="text-black mr-2">✓</span>
                  <span>Proof-of-concept builds that stress-test "next-gen" ideas before full investment</span>
                </li>
              </ul>
              <Link
                href="#contact"
                className="inline-block border border-black text-black font-mono text-[11px] tracking-wider px-8 py-3 hover:bg-black hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
              >
                EXPLORE R&D POSSIBILITIES →
              </Link>
            </div>
            <div className="w-full aspect-video border border-black overflow-hidden order-1 md:order-2">
              <Image 
                src="/content/stairway.png" 
                alt="Research and Development" 
                width={800} 
                height={450} 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
} 