import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ClientLogoBar } from "@/components/ClientLogoBar";
import { TestimonialCarousel } from "@/components/TestimonialCarousel";
import WorkWithUsForm from "@/components/WorkWithUsForm";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const metadata: Metadata = {
  title: "Consulting | Agency/42",
  description: "Ship real AI outcomes with a team that builds.",
};

export default function ConsultingPage() {
  const logos = [
    { src: "/images/logos/wiserx.png", alt: "WiserX", url: "https://www.linkedin.com/company/wise-rx/" },
    { src: "/images/logos/gameover.png", alt: "GameOver", url: "https://www.gameovermedia.io/" },
    { src: "/images/logos/kinn.svg", alt: "Kinn" },
    { src: "/images/logos/storyprotocol.png", alt: "Story Protocol", url: "https://storyprotocol.xyz/" },
    { src: "/images/logos/prerichv3.webp", alt: "Prerich", url: "https://www.prerich.com/" },
    { src: "/images/logos/fsu.svg", alt: "FSU", url: "https://www.fsu.edu/" },
  ];

  return (
    <div>
      {/* Header + subline */}
      <section className="py-16 max-w-4xl mx-auto text-center px-4 sm:px-6">
        <h1 className="text-4xl sm:text-6xl font-medium leading-tight">Applied intelligence for organizations that build, not wait.</h1>
        <p className="text-gray-600 text-lg mt-6 max-w-2xl mx-auto">AI engineering, enablement, and innovation — wiring intelligence into how your business works.</p>
        <div className="mt-8 flex justify-center">
          <Link href="#contact" className="inline-block bg-black text-white px-6 py-3 text-sm uppercase tracking-wide hover:bg-gray-800 transition-colors">Get in touch</Link>
        </div>
      </section>

      {/* Hero image */}
      <section className="w-full mb-16 px-4 sm:px-6">
        <Image src="/images/site/hero.png" width={1600} height={900} alt="Agency/42 consulting" className="w-full h-72 sm:h-96 object-cover rounded-sm" />
      </section>

      <div className="px-4 sm:px-6">

      {/* MIT stat centered */}
      <section className="py-16 max-w-4xl mx-auto">
        <div className="text-center">
          <div className="text-2xl md:text-3xl font-medium">"95% of AI initiatives fail" — MIT</div>
          <div className="text-gray-600 text-lg mt-4">Be among the 5% that ship.</div>
        </div>
      </section>

      {/* Interfaces (grouped composite) */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <Image
            src="/images/interfaces/grouped.svg"
            width={1600}
            height={900}
            alt="Interface designs composite"
            className="w-[80%] h-auto mx-auto"
          />
          <p className="text-center text-sm text-gray-500 mt-6">Interfaces for real workflows — research, content, and operations.</p>
        </div>
      </section>

      {/* Clients marquee */}
      <section className="py-16">
        <h2 className="text-center text-xs uppercase tracking-widest text-gray-500 mb-8">Trusted by</h2>
        <ClientLogoBar logos={logos} />
      </section>

      {/* Testimonials (carousel) */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-center text-3xl font-medium mb-12">Testimonials</h2>
        <TestimonialCarousel
          testimonials={[
            {
              quote:
                "Singular best training on AI that I've ever attended.",
              attribution:
                "Michael Killian, Associate Professor @ Florida State University",
            },
            {
              quote:
                "The crew led a virtual 3 hour vibe-coding 101 workshop and had a group of 100+ devs engaged the entire time.",
              attribution: "Nick, Story Protocol",
            },
            {
              quote:
                "Excited to share that I've just learned how to use LinkedIn-MCP from the amazing @Kenneth. What's most incredible is that I was able to set this up with minimal coding skills!",
              attribution: "Camille, Landau Consulting",
            },
            {
              quote:
                "In a single session we integrated Notion, Obsidian, and Zotero into an AI-powered workflow—no technical hiccups at all. Game-changing.",
              attribution:
                "Shingai Thornton, Halcyonic Systems | Researcher @ Binghamton University",
            },
          ]}
        />
        </div>
      </section>

      {/* How we work (Develop / Enable / Innovate) */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-center text-3xl font-medium mb-12">How we work</h2>
          
          <Accordion type="single" collapsible defaultValue="engineer" className="w-full">
            <AccordionItem value="engineer" className="border-b border-gray-200">
              <AccordionTrigger className="text-left py-6 hover:no-underline">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="w-10 h-10 bg-black text-white flex items-center justify-center font-mono text-xs flex-shrink-0">01</div>
                    <span className="text-2xl font-medium uppercase tracking-wide">Engineer</span>
                  </div>
                  <p className="text-sm text-gray-600 ml-14">Custom AI systems built for production. Agents, models, and infrastructure that integrate with how you already work.</p>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pb-8 ml-14">
                <p className="text-base text-gray-700 leading-relaxed mb-6">
                  We write code that ships.
                </p>
                <div className="space-y-4 text-sm text-gray-700">
                  <div>
                    <div className="flex items-start gap-2 mb-1">
                      <span className="text-black mt-1 font-medium">→</span>
                      <span className="font-medium">Autonomous agents</span>
                    </div>
                    <p className="ml-5 text-gray-600">AI that acts, not just answers. We build systems that execute tasks across your tools—scheduling, data entry, research, document generation. The boring work becomes background work.</p>
                  </div>
                  <div>
                    <div className="flex items-start gap-2 mb-1">
                      <span className="text-black mt-1 font-medium">→</span>
                      <span className="font-medium">Domain-specific models</span>
                    </div>
                    <p className="ml-5 text-gray-600">Train AI on your data. Legal contracts, medical terminology, technical documentation—whatever language your business speaks, we teach models to speak it fluently.</p>
                  </div>
                  <div>
                    <div className="flex items-start gap-2 mb-1">
                      <span className="text-black mt-1 font-medium">→</span>
                      <span className="font-medium">Testing infrastructure</span>
                    </div>
                    <p className="ml-5 text-gray-600">Know when AI fails before your customers do. We build evaluation frameworks that continuously monitor quality, catch edge cases, and track improvement over time.</p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="enable" className="border-b border-gray-200">
              <AccordionTrigger className="text-left py-6 hover:no-underline">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="w-10 h-10 bg-black text-white flex items-center justify-center font-mono text-xs flex-shrink-0">02</div>
                    <span className="text-2xl font-medium uppercase tracking-wide">Enable</span>
                  </div>
                  <p className="text-sm text-gray-600 ml-14">Training and infrastructure that transforms how your team works. Real skills, practical tools, smart governance.</p>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pb-8 ml-14">
                <p className="text-base text-gray-700 leading-relaxed mb-6">
                  Skills that compound daily.
                </p>
                <div className="space-y-4 text-sm text-gray-700">
                  <div>
                    <div className="flex items-start gap-2 mb-1">
                      <span className="text-black mt-1 font-medium">→</span>
                      <span className="font-medium">Role-based training</span>
                    </div>
                    <p className="ml-5 text-gray-600">Marketing writes different prompts than legal. Engineers need different tools than sales. We train teams based on what they actually do—live problems, live solutions, immediate wins.</p>
                  </div>
                  <div>
                    <div className="flex items-start gap-2 mb-1">
                      <span className="text-black mt-1 font-medium">→</span>
                      <span className="font-medium">Custom AI infrastructure</span>
                    </div>
                    <p className="ml-5 text-gray-600">Build your internal AI toolkit. Prompt templates, workflow automations, custom GPTs—whatever makes your team 10x faster. We handle the setup, deployment, and ongoing management.</p>
                  </div>
                  <div>
                    <div className="flex items-start gap-2 mb-1">
                      <span className="text-black mt-1 font-medium">→</span>
                      <span className="font-medium">Smart guardrails</span>
                    </div>
                    <p className="ml-5 text-gray-600">Governance frameworks that say yes more than no. Clear policies on data security, vendor management, and acceptable use—written to enable experimentation, not block it.</p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="innovate" className="border-b border-gray-200">
              <AccordionTrigger className="text-left py-6 hover:no-underline">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="w-10 h-10 bg-black text-white flex items-center justify-center font-mono text-xs flex-shrink-0">03</div>
                    <span className="text-2xl font-medium uppercase tracking-wide">Innovate</span>
                  </div>
                  <p className="text-sm text-gray-600 ml-14">Rapid experiments and product exploration. Validate ideas with working prototypes before committing resources.</p>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pb-8 ml-14">
                <p className="text-base text-gray-700 leading-relaxed mb-6">
                  Explore the edge of possible.
                </p>
                <div className="space-y-4 text-sm text-gray-700">
                  <div>
                    <div className="flex items-start gap-2 mb-1">
                      <span className="text-black mt-1 font-medium">→</span>
                      <span className="font-medium">Proof-of-concept builds</span>
                    </div>
                    <p className="ml-5 text-gray-600">Answer "what if?" with working prototypes. We ship MVPs in days to validate ideas, test market fit, and prove technical feasibility before you invest serious resources.</p>
                  </div>
                  <div>
                    <div className="flex items-start gap-2 mb-1">
                      <span className="text-black mt-1 font-medium">→</span>
                      <span className="font-medium">Product exploration</span>
                    </div>
                    <p className="ml-5 text-gray-600">Find the AI features your customers didn't know they needed. We collaborate on new product directions, rethinking existing workflows through an AI-native lens.</p>
                  </div>
                  <div>
                    <div className="flex items-start gap-2 mb-1">
                      <span className="text-black mt-1 font-medium">→</span>
                      <span className="font-medium">Compounding capabilities</span>
                    </div>
                    <p className="ml-5 text-gray-600">Stack wins on wins. We map how AI investments connect across your business—where one capability unlocks three more, where small changes create outsized leverage.</p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      

      {/* Contact form */}
      <section id="contact" className="py-20 max-w-3xl mx-auto">
        <h2 className="text-3xl font-medium mb-8 text-center">Let's build something together</h2>
        <WorkWithUsForm />
        <div className="text-center mt-8 text-sm text-gray-500">
          <Link href="https://www.figma.com/deck/zSMHYvwDky0MuNF7XvHBO0" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-900 transition-colors">capabilities deck →</Link>
        </div>
      </section>
      </div>
    </div>
  );
}


