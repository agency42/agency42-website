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
    <Accordion type="single" collapsible className="w-full">
      {/* Workshops & Coaching */}
      <AccordionItem value="workshops" className="border border-black mb-4">
        <AccordionTrigger className="px-8 py-6 text-left bg-white hover:bg-gray-50 [&[data-state=open]]:bg-gray-50">
          <div className="flex flex-col items-start">
            <h3 className="text-xl md:text-2xl font-heading font-medium text-black">
              Workshops & Coaching
            </h3>
            <p className="text-sm md:text-base text-gray-600 mt-2 font-sans">
              Hands-on training for teams and individuals to use AI effectively in their work
            </p>
          </div>
        </AccordionTrigger>
        <AccordionContent className="p-8 pt-6 bg-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-start">
            <div>
              <h4 className="font-mono text-[11px] tracking-wider mb-4 uppercase text-black">What we teach</h4>
              <ul className="space-y-3 mb-6 font-sans text-gray-700">
                <li className="flex items-start">
                  <span className="text-black mr-2">•</span>
                  <span><strong>Creative professionals:</strong> AI tools for design, content creation, and client work</span>
                </li>
                <li className="flex items-start">
                  <span className="text-black mr-2">•</span>
                  <span><strong>Software engineers:</strong> AI integration in production environments</span>
                </li>
                <li className="flex items-start">
                  <span className="text-black mr-2">•</span>
                  <span><strong>Business teams:</strong> Workflow automation and process optimization</span>
                </li>
              </ul>
              
              <p className="text-sm text-gray-600 mb-6">
                <strong>Format:</strong> Interactive workshops, 1-on-1 coaching sessions, and ongoing team support to maximize adoption through proven AI implementation methods.
              </p>
              
              <Link
                href="#contact"
                className="inline-block border border-black text-black font-mono text-[11px] tracking-wider px-8 py-3 hover:bg-black hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
              >
                INQUIRE ABOUT WORKSHOPS →
              </Link>
            </div>
            <div className="w-full aspect-video border border-black overflow-hidden">
              <Image 
                src="/content/deltaspacewide.png" 
                alt="Workshops & Coaching"
                width={800}
                height={450}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>

      {/* Fractional AI Leadership */}
      <AccordionItem value="fractional" className="border border-black mb-4">
        <AccordionTrigger className="px-8 py-6 text-left bg-white hover:bg-gray-50 [&[data-state=open]]:bg-gray-50">
          <div className="flex flex-col items-start">
            <h3 className="text-xl md:text-2xl font-heading font-medium text-black">
              Fractional AI Leadership
            </h3>
            <p className="text-sm md:text-base text-gray-600 mt-2 font-sans">
              Ongoing strategic partnership to transform your operations with AI
            </p>
          </div>
        </AccordionTrigger>
        <AccordionContent className="p-8 pt-6 bg-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-start">
            <div>
              <h4 className="font-mono text-[11px] tracking-wider mb-4 uppercase text-black">What's included</h4>
              <ul className="space-y-3 mb-6 font-sans text-gray-700">
                <li className="flex items-start">
                  <span className="text-black mr-2">•</span>
                  <span><strong>AI Audits:</strong> Analyze team workflows and technology systems to find workflow automation opportunities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-black mr-2">•</span>
                  <span><strong>Strategic roadmapping:</strong> Clear implementation timeline with ROI projections</span>
                </li>
                <li className="flex items-start">
                  <span className="text-black mr-2">•</span>
                  <span><strong>Stakeholder interviews:</strong> Understand team needs and resistance points</span>
                </li>
                <li className="flex items-start">
                  <span className="text-black mr-2">•</span>
                  <span><strong>Data analysis:</strong> Identify patterns and optimization opportunities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-black mr-2">•</span>
                  <span><strong>Ongoing support:</strong> Monthly strategy sessions and team coaching</span>
                </li>
              </ul>
              
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-6">
                <p className="font-mono text-[11px] tracking-wider uppercase text-black mb-2">Real Example: Marketing Agency</p>
                <p className="text-sm text-gray-700">300+ hours of time-saving opportunities identified through systematic workflow analysis and process mapping.</p>
              </div>
              
              <p className="text-sm text-gray-600 mb-6">
                <strong>Commitment:</strong> Monthly retainer based on your needs and company size. Minimum 3-month engagement.
              </p>
              
              <Link
                href="#contact"
                className="inline-block border border-black text-black font-mono text-[11px] tracking-wider px-8 py-3 hover:bg-black hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
              >
                CHECK YOUR FIT →
              </Link>
            </div>
            <div className="w-full aspect-video border border-black overflow-hidden">
              <Image 
                src="/content/observe.png" 
                alt="Fractional AI Leadership"
                width={800}
                height={450}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>

      {/* Research & Development */}
      <AccordionItem value="research" className="border border-black">
        <AccordionTrigger className="px-8 py-6 text-left bg-white hover:bg-gray-50 [&[data-state=open]]:bg-gray-50">
          <div className="flex flex-col items-start">
            <h3 className="text-xl md:text-2xl font-heading font-medium text-black">
              Research & Development
            </h3>
            <p className="text-sm md:text-base text-gray-600 mt-2 font-sans">
              Custom AI product development and technical research
            </p>
          </div>
        </AccordionTrigger>
        <AccordionContent className="p-8 pt-6 bg-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-start">
            <div>
              <h4 className="font-mono text-[11px] tracking-wider mb-4 uppercase text-black">Our capabilities</h4>
              <ul className="space-y-3 mb-6 font-sans text-gray-700">
                <li className="flex items-start">
                  <span className="text-black mr-2">•</span>
                  <span><strong>AI product development:</strong> Custom applications and services for your business</span>
                </li>
                <li className="flex items-start">
                  <span className="text-black mr-2">•</span>
                  <span><strong>Technical research:</strong> Exploring frontier AI capabilities for competitive advantage</span>
                </li>
                <li className="flex items-start">
                  <span className="text-black mr-2">•</span>
                  <span><strong>System integration:</strong> Connecting AI solutions with existing infrastructure</span>
                </li>
                <li className="flex items-start">
                  <span className="text-black mr-2">•</span>
                  <span><strong>Performance optimization:</strong> Scaling AI systems for production environments</span>
                </li>
              </ul>
              
              <p className="text-sm text-gray-600 mb-6">
                <strong>Approach:</strong> We combine engineering expertise with research methodology to build AI solutions that work in the real world.
              </p>
              
              <Link
                href="#contact"
                className="inline-block border border-black text-black font-mono text-[11px] tracking-wider px-8 py-3 hover:bg-black hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
              >
                EXPLORE R&D POSSIBILITIES →
              </Link>
            </div>
            <div className="w-full aspect-video border border-black overflow-hidden">
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