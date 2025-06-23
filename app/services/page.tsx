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
            We identify the AI automation opportunities you can't see.
          </h1>
          <p className="text-base md:text-lg mb-8 font-sans text-gray-600 max-w-2xl mx-auto">
            Our AI implementation approach analyzes both team workflows and technology systems to find hidden automation opportunities. We focus on implementations that teams actually adopt.
          </p>
          <Link
            href="#contact"
            className="inline-block bg-black text-white font-mono text-[11px] tracking-wider uppercase px-8 py-3 hover:bg-gray-900 transition-colors duration-200"
          >
            GET YOUR AI OPPORTUNITY AUDIT →
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

      {/* Enhanced Process Section with REVEAL → RESOLVE → REALIZE */}
      <section id="process" className="py-16 md:py-24 border-b border-black px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-start">
            <div>
              <h3 className="text-2xl md:text-3xl font-heading font-light mb-4">
                Our Methodology
              </h3>
              <p className="mb-8 font-sans text-gray-600 text-base md:text-lg">
                We use a proven three-phase methodology developed from aerospace operations and industrial psychology research. Our approach identifies where AI agents and automation tools create the most operational leverage.
              </p>
            </div>
            <div>
              <ol className="list-none space-y-6 font-sans text-gray-600">
                <li className="flex items-start">
                  <span className="text-black mr-2">•</span>
                  <span><strong>Operations Mapping:</strong> Document current workflows using aerospace-grade process analysis</span>
                </li>
                <li className="flex items-start">
                  <span className="text-black mr-2">•</span>
                  <span><strong>Automation Architecture:</strong> Design AI agent systems that integrate with existing team dynamics</span>
                </li>
                <li className="flex items-start">
                  <span className="text-black mr-2">•</span>
                  <span><strong>Adoption Engineering:</strong> Implement solutions using proven change management from industrial psychology</span>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Risk Reversal Section */}
      <section className="py-16 md:py-24 px-4 bg-gray-50 border-b border-black">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-2xl md:text-3xl font-heading font-medium mb-6">
            Our Commitment
          </h2>
          <div className="bg-white border-2 border-black rounded-lg p-8 shadow-lg" style={{ boxShadow: '8px 8px 0px 0px rgba(0,0,0,1)' }}>
            <p className="text-lg md:text-xl font-sans text-gray-800 mb-4">
              We'll identify at least <strong>300 hours of time-saving opportunities</strong> in your operations, or the assessment is free.
            </p>
            <p className="text-base text-gray-600 font-sans">
              Our systematic AI audit process consistently reveals workflow automation opportunities that teams have accepted as normal manual work.
            </p>
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

          {/* What Happens Next Box - moved after form */}
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mt-8 max-w-2xl mx-auto text-left">
            <h4 className="font-mono text-[11px] tracking-wider uppercase text-black mb-4">What happens next</h4>
            <ol className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start">
                <span className="font-medium mr-2">1.</span>
                <span>You complete our qualification form (2 minutes).</span>
              </li>
              <li className="flex items-start">
                <span className="font-medium mr-2">2.</span>
                <span>We review your business profile within 24 hours.</span>
              </li>
              <li className="flex items-start">
                <span className="font-medium mr-2">3.</span>
                <span>If there's a strong fit, we'll reach out to schedule a strategy call.</span>
              </li>
              <li className="flex items-start">
                <span className="font-medium mr-2">4.</span>
                <span>No fit? We'll send you relevant resources instead.</span>
              </li>
            </ol>
          </div>
        </div>
      </section>

      {/* Additional Information Section */}
      <section className="py-16 md:py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-medium mb-8 md:mb-12 text-center">
            Additional Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
            <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Professional AI Automation Assessment</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-black mr-2">•</span>
                  <span><strong>Workflow Analysis:</strong> Systematic documentation of current operations and bottlenecks</span>
                </li>
                <li className="flex items-start">
                  <span className="text-black mr-2">•</span>
                  <span><strong>AI Agent Specifications:</strong> Technical blueprints for automation solutions tailored to your processes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-black mr-2">•</span>
                  <span><strong>Implementation Roadmap:</strong> Phased deployment plan with adoption milestones</span>
                </li>
                <li className="flex items-start">
                  <span className="text-black mr-2">•</span>
                  <span><strong>Team Integration Strategy:</strong> Change management approach based on industrial psychology principles</span>
                </li>
                <li className="flex items-start">
                  <span className="text-black mr-2">•</span>
                  <span><strong>Technical Architecture:</strong> System requirements and integration specifications</span>
                </li>
              </ul>
              
              <p className="text-sm text-gray-600 mb-6 mt-6">
                <strong>Delivery:</strong> Comprehensive documentation, stakeholder workshops, and technical specifications. Our methodology combines aerospace operations expertise with proven automation frameworks.
              </p>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Why our approach works</h3>
              <p className="text-gray-700 mb-4">
                Most AI implementations fail because they ignore the human systems. Our methodology, developed from SpaceX operations analysis and industrial psychology research, designs automation that teams actually use.
              </p>
              <p className="text-gray-700">
                We've seen this pattern repeatedly: technical solutions that don't account for workflow psychology get abandoned. Our systematic approach ensures sustainable adoption.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 