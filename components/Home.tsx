"use client";

// Purpose: Scrollable homepage (team, works, contact)

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-white via-gray-50 to-white">
      {/* Grid background */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.02]" style={{
        backgroundImage: `linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)`,
        backgroundSize: '32px 32px'
      }} />
      <main className="flex-1 px-4 sm:px-6 pb-16 relative z-10">
        <div className="max-w-2xl mx-auto space-y-12">
          <section className="pt-8 sm:pt-12 pb-4">
            <h1 className="text-4xl sm:text-5xl md:text-5xl font-medium leading-tight mb-6">
              applied<br />
              <span className="text-gray-500">intelligence</span> studio
            </h1>
            <div className="space-y-4">
              <p className="text-sm text-gray-500">Based in Los Angeles, California</p>
              <p className="text-base leading-relaxed text-gray-900">We work with select clients to integrate AI into business and social applications.</p>
            </div>
          </section>

          <section>
            <div className="space-y-16">
              {/* Work Section */}
              <div>
                <h2 className="text-xl font-medium mb-8">our work</h2>
                <ul className="space-y-5 text-sm">
                  <li className="flex items-center gap-3">
                    <div className="w-[56px] h-[56px] flex items-center justify-center flex-shrink-0">
                      <Image src="/images/logos/bw-daybloom-icon.png" alt="Daybloom" width={56} height={56} className="max-w-[42px] max-h-[42px] object-contain" />
                    </div>
                    <div>
                      <a className="underline" href="https://daybloom.ai" target="_blank" rel="noopener noreferrer">Daybloom</a>
                      <div className="text-gray-600">social agents that post, chat, and remember</div>
                    </div>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-[56px] h-[56px] flex items-center justify-center flex-shrink-0">
                      <Image src="/images/logos/miniverse-42.png" alt="Miniverse" width={168} height={168} className="max-w-[150px] max-h-[150px] object-contain" />
                    </div>
                    <div>
                      <a className="underline" href="https://github.com/miniverse-ai/miniverse" target="_blank" rel="noopener noreferrer">Miniverse</a>
                      <div className="text-gray-600">python library for building generative agent simulations</div>
                    </div>
                  </li>
                </ul>
                <div className="mt-8 text-right">
                  <a href="/projects" className="text-xs text-gray-500 hover:text-gray-900 underline">archives →</a>
                </div>
              </div>

              {/* Latest Blog Post Section */}
              <div>
                <h2 className="text-xl font-medium mb-8">latest from <Link href="/blog" className="hover:underline">the blog</Link></h2>
                <Link href="/blog/the-cybernetic-organization" className="block group">
                  <Image
                    src="/images/content/cybernet.jpeg"
                    alt="The Cybernetic Organization"
                    width={800}
                    height={450}
                    sizes="(max-width: 768px) 100vw, 800px"
                    className="w-full h-auto group-hover:opacity-90 transition object-cover max-h-[200px]"
                  />
                  <div className="pt-4">
                    <h3 className="text-lg font-medium group-hover:underline">The Cybernetic Organization</h3>
                    <p className="text-sm text-gray-600 mt-1">On feedback loops, digital minds, and the future of work.</p>
                  </div>
                </Link>
              </div>

              {/* Team & Work With Us Section - Accordion */}
              <div>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="team">
                    <AccordionTrigger className="text-xl font-medium">team</AccordionTrigger>
                    <AccordionContent>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                        <a href="https://www.linkedin.com/in/k3nneth/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
                          <Image src="/images/team/ken-ghibli.png" alt="Kenneth" width={56} height={56} className="rounded" />
                          <div>
                            <div className="font-medium">Kenneth</div>
                            <div className="text-sm text-gray-600">research + operations</div>
                          </div>
                        </a>
                        <a href="https://www.linkedin.com/in/future-rob/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
                          <Image src="/images/team/rob-ghibli.png" alt="Rob" width={56} height={56} className="rounded" />
                          <div>
                            <div className="font-medium">Rob</div>
                            <div className="text-sm text-gray-600">engineering + design</div>
                          </div>
                        </a>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="work-with-us">
                    <AccordionTrigger className="text-xl font-medium">work with us</AccordionTrigger>
                    <AccordionContent>
                      <div className="pt-2">
                        <p className="text-sm text-gray-700 leading-relaxed mb-4">
                          Send us a brief email about who you are and what you want to build with us. If we feel it's a fit, we'll be in touch.
                        </p>
                        <a href="mailto:hello@agency42.co" className="text-sm underline hover:text-gray-900 transition-colors">
                          hello@agency42.co
                        </a>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}


