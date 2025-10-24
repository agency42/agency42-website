"use client";

// Purpose: Simple accordion homepage (team, works, contact)

import React from "react";
import Image from "next/image";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import WorkWithUsForm from "@/components/WorkWithUsForm";

export default function SimpleHome() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 px-4 sm:px-6 space-y-8 pb-16">
        <section className="py-10 sm:py-12">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-medium leading-tight max-w-3xl">
            built for the age of intelligence
          </h1>
        </section>

        <section className="max-w-3xl">
          <div className="flex flex-col gap-10">
          <Accordion type="single" collapsible defaultValue="products" className="w-full">
            <AccordionItem value="products">
              <AccordionTrigger>products</AccordionTrigger>
              <AccordionContent>
                <ul className="space-y-5 text-sm pt-3">
                  <li className="flex items-center gap-3">
                    <div className="w-[56px] h-[56px] flex items-center justify-center flex-shrink-0">
                      <Image src="/images/logos/bw-daybloom-icon.png" alt="Daybloom" width={56} height={56} className="max-w-[34px] max-h-[34px] object-contain" />
                    </div>
                    <div>
                      <a className="underline" href="https://daybloom.ai" target="_blank" rel="noopener noreferrer">Daybloom</a>
                      <div className="text-gray-600">Platform for building AI characters that run your socials</div>
                    </div>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-[56px] h-[56px] flex items-center justify-center flex-shrink-0">
                      <Image src="/images/logos/bw-miniverse-icon.svg" alt="Miniverse" width={56} height={56} className="max-w-[56px] max-h-[56px] object-contain" />
                    </div>
                    <div>
                      <a className="underline" href="https://github.com/miniverse-ai/miniverse" target="_blank" rel="noopener noreferrer">Miniverse</a>
                      <div className="text-gray-600">Python library for building generative agent simulations</div>
                    </div>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-[56px] h-[56px] flex items-center justify-center flex-shrink-0">
                      <Image src="/images/logos/bw-mcp-icon.svg" alt="LinkedIn MCP" width={56} height={56} className="max-w-[52px] max-h-[52px] object-contain" />
                    </div>
                    <div>
                      <a className="underline" href="https://www.linkedin.com/feed/update/urn:li:activity:7321201508933390337/" target="_blank" rel="noopener noreferrer">LinkedIn MCP</a>
                      <div className="text-gray-600">Model Context Protocol for posting on LinkedIn with AI</div>
                    </div>
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="team">
              <AccordionTrigger>team</AccordionTrigger>
              <AccordionContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                  <a href={process.env.NEXT_PUBLIC_LINKEDIN_KENNETH || "https://linkedin.com/company/agency42co"} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
                    <Image src="/images/team/ken.png" alt="Kenneth" width={56} height={56} className="rounded" />
                    <div>
                      <div className="font-medium">Kenneth</div>
                      <div className="text-sm text-gray-600">co-founder, product + systems</div>
                    </div>
                  </a>
                  <a href={process.env.NEXT_PUBLIC_LINKEDIN_ROB || "https://linkedin.com/company/agency42co"} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
                    <Image src="/images/team/rob.jpeg" alt="Rob" width={56} height={56} className="rounded" />
                    <div>
                      <div className="font-medium">Rob</div>
                      <div className="text-sm text-gray-600">co-founder, engineering + ai</div>
                    </div>
                  </a>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="contact">
              <AccordionTrigger>work with us</AccordionTrigger>
              <AccordionContent>
                <div className="max-w-xl pt-3 space-y-4">
                  <p className="text-sm text-gray-700 leading-relaxed">
                    We build AI systems that ship, train teams to use them effectively, and help organizations move fast on new ideas. Whether you need custom engineering, hands-on enablement, or rapid prototyping — we work the way you work.{" "}
                    <a href="/consulting" className="underline hover:text-black">Learn more about how we work →</a>
                  </p>
                  <WorkWithUsForm />
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          </div>
        </section>
      </main>
    </div>
  );
}


