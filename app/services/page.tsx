import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import QualForm from '../components/QualForm'
import { ConwaySim } from '@/app/components/ConwaySim'
import { FlickeringGrid } from '@/app/components/FlickeringGrid'
import ServicesAccordion from '../components/ServicesAccordion'

export const metadata: Metadata = {
  title: 'AI Services: Audits, Workshops, Retainers | Agency/42',
  description: 'Agency/42 offers AI Opportunity Audits, Hands-on Workshops, and Fractional AI CTO services to implement effective AI solutions and drive business results.',
  keywords: [
    'AI audit',
    'AI workshop',
    'fractional AI CTO',
    'AI consulting services',
    'AI implementation services',
    'AI strategy development',
    'applied AI services',
    'AI roadmap',
    'AI prototyping',
    'AI workflow automation',
    'AI process optimization',
    'human-centric AI implementation',
  ],
}

export default function ServicesPage() {
  return (
    <div className="bg-white text-black pt-16 md:pt-24">
      {/* Simplified Hero section */}
      <section className="pt-8 md:pt-14 pb-16 md:pb-20 px-4 border-b border-black">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-normal mb-6 text-black tracking-tight leading-[1.05]">
            Most companies waste 1000 hours annually on tasks that could be automated in a few weeks.
          </h1>
          <p className="text-base md:text-lg mb-8 font-sans text-gray-600 max-w-2xl mx-auto">
            We map every workflow in your business to find the manual work hiding in plain sight. Then we build AI agents and automation systems that teams actually adopt.
          </p>
          <Link
            href="#contact"
            className="inline-block bg-black text-white font-mono text-[11px] tracking-wider uppercase px-8 py-3 hover:bg-gray-900 transition-colors duration-200"
          >
            ANALYZE MY NEEDS →
          </Link>
        </div>
      </section>

      {/* Services Section - Now the main focus */}
      <section id="services" className="py-16 md:py-24 px-4 border-b border-black">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-medium mb-8 md:mb-12 text-center">
            How We Help
          </h2>
          <ServicesAccordion />
        </div>
      </section>

      {/* Our Approach Section */}
      <section id="process" className="py-16 md:py-24 border-b border-black px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-start">
            <div>
              <h3 className="text-2xl md:text-3xl font-heading font-light mb-4">
                Our Approach
              </h3>
              <p className="mb-8 font-sans text-gray-600 text-base md:text-lg">
                Most companies can't see their own inefficiencies. We make the invisible visible.
              </p>
            </div>
            <div>
              <ol className="list-none space-y-6 font-sans text-gray-600">
                <li className="flex items-start">
                  <span className="text-black mr-2">•</span>
                  <span><strong>Survey & Shadow</strong> → See how work really gets done</span>
                </li>
                <li className="flex items-start">
                  <span className="text-black mr-2">•</span>
                  <span><strong>Map & Identify</strong> → Find the hidden manual work</span>
                </li>
                <li className="flex items-start">
                  <span className="text-black mr-2">•</span>
                  <span><strong>Design & Integrate</strong> → Build AI-ready systems</span>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Why Companies Choose Our Approach */}
      <section className="py-16 md:py-24 px-4 bg-gray-50 border-b border-black">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-2xl md:text-3xl font-heading font-medium mb-6">
            Why Companies Choose Our Approach
          </h2>
          <div className="bg-white border-2 border-black rounded-lg p-8 shadow-lg" style={{ boxShadow: '8px 8px 0px 0px rgba(0,0,0,1)' }}>
            <p className="text-lg md:text-xl font-sans text-gray-800 mb-4">
              We've never found a company that couldn't save <strong>1000+ hours annually.</strong>
            </p>
            <p className="text-base text-gray-600 font-sans mb-8">
              The manual work is always there. Most companies just can't see it.
            </p>
            
            <div className="text-left max-w-2xl mx-auto">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">What You Get:</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-black mr-2">•</span>
                  <span>Complete workflow analysis and automation roadmap</span>
                </li>
                <li className="flex items-start">
                  <span className="text-black mr-2">•</span>
                  <span>Technical specifications for AI integration</span>
                </li>
                <li className="flex items-start">
                  <span className="text-black mr-2">•</span>
                  <span>Team adoption strategy that actually works</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-16 md:py-24 px-4">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-medium mb-4 md:mb-6">
            Ready to discover your hidden operational value?
          </h2>
          <p className="text-base md:text-lg mb-8 max-w-2xl mx-auto font-sans text-gray-600">
            Complete the form below so we can analyze your specific situation and identify potential AI opportunities.
          </p>
          
          <QualForm className="text-left" />
        </div>
      </section>
    </div>
  )
} 