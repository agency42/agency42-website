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
        <AccordionTrigger className="px-8 py-6 text-left bg-white hover:bg-gray-50 [&[data-state=open]]:bg-gray-50 group">
          <div className="flex flex-col items-start w-full">
            <div className="flex items-center justify-between w-full">
              <h3 className="text-xl md:text-2xl lg:text-3xl font-heading font-extrabold text-black">
                Workshops & Coaching
              </h3>
              <div className="flex items-center ml-4">
                <span className="text-black font-mono text-lg group-data-[state=open]:rotate-90 transition-transform duration-200">
                  →
                </span>
              </div>
            </div>
            <p className="text-sm md:text-base text-gray-600 mt-2 font-sans">
              Hands-on training for teams and individuals to use AI effectively in their work
            </p>
          </div>
        </AccordionTrigger>
        <AccordionContent className="p-8 pt-6 bg-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-start">
            <div>
              <h4 className="font-mono text-[11px] tracking-wider mb-4 uppercase text-black">Training for</h4>
              <ul className="space-y-3 mb-6 font-sans text-gray-700">
                <li className="flex items-start">
                  <span className="text-black mr-2">•</span>
                  <span><strong>Creatives:</strong> AI-powered design and content creation to accelerate client work.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-black mr-2">•</span>
                  <span><strong>Developers:</strong> Deploying and scaling AI-assisted code in production environments.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-black mr-2">•</span>
                  <span><strong>Businesses:</strong> Building an AI-native culture that turns strategy into a strategic advantage.</span>
                </li>
              </ul>
              
              <p className="text-sm text-gray-600 mb-6">
                <strong>Format:</strong> Interactive workshops and 1-on-1 coaching sessions to maximize adoption through proven AI implementation methods.
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
        <AccordionTrigger className="px-8 py-6 text-left bg-white hover:bg-gray-50 [&[data-state=open]]:bg-gray-50 group">
          <div className="flex flex-col items-start w-full">
            <div className="flex items-center justify-between w-full">
              <h3 className="text-xl md:text-2xl lg:text-3xl font-heading font-extrabold text-black">
                Fractional AI Leadership
              </h3>
              <div className="flex items-center ml-4">
                <span className="text-black font-mono text-lg group-data-[state=open]:rotate-90 transition-transform duration-200">
                  →
                </span>
              </div>
            </div>
            <p className="text-sm md:text-base text-gray-600 mt-2 font-sans">
              Your dedicated AI partner from strategy to innovation.
            </p>
          </div>
        </AccordionTrigger>
        <AccordionContent className="p-8 pt-6 bg-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-start">
            <div>
              <h4 className="font-mono text-[11px] tracking-wider mb-4 uppercase text-black">What you get</h4>
              <ul className="space-y-3 mb-6 font-sans text-gray-700">
                <li className="flex items-start">
                  <span className="text-black mr-2">•</span>
                  <span><strong>Executive AI Strategy:</strong> Ongoing guidance and coaching to align your business goals with the AI landscape.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-black mr-2">•</span>
                  <span><strong>Continuous Innovation Roadmap:</strong> Proactively identifying and mapping new opportunities for your team to pursue.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-black mr-2">•</span>
                  <span><strong>Technical Project Leadership:</strong> Guiding your internal developers to successfully design, build, and ship critical AI projects.</span>
                </li>
              </ul>
              
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
        <AccordionTrigger className="px-8 py-6 text-left bg-white hover:bg-gray-50 [&[data-state=open]]:bg-gray-50 group">
          <div className="flex flex-col items-start w-full">
            <div className="flex items-center justify-between w-full">
              <h3 className="text-xl md:text-2xl lg:text-3xl font-heading font-extrabold text-black">
                Research & Development
              </h3>
              <div className="flex items-center ml-4">
                <span className="text-black font-mono text-lg group-data-[state=open]:rotate-90 transition-transform duration-200">
                  →
                </span>
              </div>
            </div>
            <p className="text-sm md:text-base text-gray-600 mt-2 font-sans">
              Building your custom AI vision into reality.
            </p>
          </div>
        </AccordionTrigger>
        <AccordionContent className="p-8 pt-6 bg-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-start">
            <div>
              <h4 className="font-mono text-[11px] tracking-wider mb-4 uppercase text-black">Where we excel</h4>
              <ul className="space-y-3 mb-6 font-sans text-gray-700">
                <li className="flex items-start">
                  <span className="text-black mr-2">•</span>
                  <span><strong>Intelligent Agents & Automation:</strong> We design and build autonomous systems for customer support, social media, and lead generation.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-black mr-2">•</span>
                  <span><strong>Content & Asset Generation:</strong> We create custom models and engines for generating unique marketing copy, digital assets, and more.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-black mr-2">•</span>
                  <span><strong>Digital Twins & Personas:</strong> We develop AI-powered digital twins and influencers that engage audiences and embody your brand.</span>
                </li>
              </ul>
              
              <p className="text-sm text-gray-600 mb-6">
                <strong>Approach:</strong> We apply our deep expertise in AI agents and marketing to build practical, high-impact solutions that connect with your audience.
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