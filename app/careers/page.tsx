import React from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Careers - Agency42',
  description: 'Join the premier AI innovation studio in Los Angeles',
}

export default function Careers() {
  return (
    <div className="min-h-screen bg-white">
      <main className="pt-32 pb-20">
        <div className="container mx-auto max-w-4xl px-4">
          <section>
            <h1 className="text-4xl font-light mb-8">Build agents that matter</h1>
            
            <div className="prose prose-neutral max-w-none">
              <p className="text-lg font-light leading-relaxed mb-16">
                We're a small team of engineers and researchers pushing the boundaries of AI agent development. We work with clients to develop agent systems that understand their brand and company mission. We are growing quickly and are looking for developers to help us build and maintain our agent infrastructure (and potentially help productize it).
              </p>

              <div>
                <p className="font-mono text-sm tracking-wider text-neutral-500 mb-4">CURRENT OPENINGS_</p>
                <h2 className="text-2xl font-light mb-8">AI Engineer (Contract)</h2>
              </div>

              <div className="space-y-4">
                <p className="text-lg font-light leading-relaxed">
                  We're looking for scrappy developers who can get started quickly. This role will help with everything from internal DevOps to building out AI Agents for clients. You should be comfortable with Python, TypeScript/Node.js, and using LLMs to augment your development workflow. You should have working knowledge of popular AI frameworks (including comfortability building from the base AI APIs like OpenAI, Anthropic or possibly even Hugging Face), rapid prototyping, and full-stack software development. Previous experience with scraping operations and building social agents is a big plus.
                </p>
                
                <p className="text-lg font-light leading-relaxed">
                  Our work spans social agents, character development, and business automation.
                </p>

                <p className="text-lg font-light leading-relaxed">
                  If you're excited about:
                </p>

                <ul className="list-none space-y-2 pl-0">
                  <li className="text-lg font-light leading-relaxed">→ Developing cutting-edge AI agents</li>
                  <li className="text-lg font-light leading-relaxed">→ Working with major entertainment brands</li>
                  <li className="text-lg font-light leading-relaxed">→ Building technology that shapes culture and the future of the internet</li>
                </ul>
              </div>

              <div className="mt-12">
                <p className="text-lg font-light leading-relaxed">
                  Send us your story at <a href="mailto:careers@agency42.co" className="text-orange-500 hover:text-orange-600 no-underline">careers@agency42.co</a>
                </p>
              </div>

              <div className="mt-16 pt-8 border-t border-neutral-200">
                <div className="flex justify-between items-center">
                  <p className="font-mono text-sm tracking-wider text-neutral-500">
                    AGENCY42 / LOS ANGELES / 2024_
                  </p>
                  <div className="space-x-4">
                    <a href="https://www.linkedin.com/company/agency42co" target="_blank" rel="noopener noreferrer" className="font-mono text-xs text-neutral-500 hover:text-orange-500 transition-colors">
                      LINKEDIN
                    </a>
                    <a href="https://x.com/agency42co" target="_blank" rel="noopener noreferrer" className="font-mono text-xs text-neutral-500 hover:text-orange-500 transition-colors">
                      TWITTER
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
} 