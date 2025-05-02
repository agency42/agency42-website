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
    <div className="bg-white text-black pt-24">
      {/* Hero section with increased bottom padding */}
      <section className="pt-14 pb-28 md:pt-18 md:pb-32 px-4 border-b border-black relative overflow-hidden">
        <div className="container mx-auto max-w-6xl">
          <div className="md:grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-heading font-medium mb-6">
                Operate at the speed of AI
              </h1>
              <p className="text-lg mb-8 font-sans text-gray-600">
                We take a systematic approach to designing intelligent systems, automating workflows, and exploring frontier AI use cases—bridging strategy and execution at every step.
              </p>
              <Link
                href="#contact"
                className="inline-block border border-black text-black font-mono text-[11px] tracking-wider px-8 py-3 hover:bg-black hover:text-white transition-colors"
              >
                GET STARTED →
              </Link>
            </div>
            <div className="relative w-full h-72 md:h-96 mt-8 md:mt-0 flex items-center justify-center bg-black">
              <ConwaySim 
                speed={0.033} 
                initialDensity={0.3} 
                preWarmSteps={50}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Process Section - moved to second position */}
      <section id="process" className="py-24 border-b border-black">
        <div className="container">
          <div className="mb-12">
            <div 
              className="w-full overflow-hidden border border-black"
              style={{ height: '255px' }}
            >
              <FlickeringGrid 
                rows={40}
                columns={40}
                speed={6000}
                probability={0.033}
                activeColor="#000000"
                inactiveColor="rgba(0,0,0,0.1)"
                className="h-full w-full"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <div>
              <h3 className="text-3xl md:text-4xl font-heading font-light mb-4">Creative Engineering, <br /> Beyond Automation</h3>
              <p className="mb-8 font-sans text-gray-600">
                We blend imaginative engineering with deep research to help teams move fast, build trust, and turn learning into lasting advantage.
              </p>
            </div>
            <div>
              <ol className="list-none space-y-6 font-sans text-gray-600">
                <li>
                  <span className="font-mono text-[11px] tracking-wider uppercase text-black">Map</span>
                  <p className="mt-2">We immerse ourselves in your culture, workflows, and data—mapping both the human and technical landscape to reveal where inventive AI can unlock real leverage.</p>
                </li>
                <li>
                  <span className="font-mono text-[11px] tracking-wider uppercase text-black">Discover</span>
                  <p className="mt-2">Through systems thinking and diagnostic tools, we surface bottlenecks, quick wins, and bold opportunities that matter most to your people and your mission.</p>
                </li>
                <li>
                  <span className="font-mono text-[11px] tracking-wider uppercase text-black">Design</span>
                  <p className="mt-2">In hands-on workshops, we co-create new tools, processes, and capabilities—rapidly prototyping ideas so teams can see, shape, and own the future.</p>
                </li>
                <li>
                  <span className="font-mono text-[11px] tracking-wider uppercase text-black">Scale</span>
                  <p className="mt-2">Once new systems are in place, we help you scale them—ensuring your solutions grow seamlessly with your business and deliver impact at every level.</p>
                </li>
                <li>
                  <span className="font-mono text-[11px] tracking-wider uppercase text-black">Evolve</span>
                  <p className="mt-2">As your business grows, we continuously adapt your AI solutions—ensuring they stay effective, relevant, and aligned with your evolving goals.</p>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section with Accordion */}
      <section id="services" className="py-24 px-4 border-b border-black">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-heading font-medium mb-12 text-center">
            Our Services
          </h2>
          <ServicesAccordion />
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-24 px-4">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-medium mb-6">
            Ready to Start Your AI Journey?
          </h2>
          <p className="text-lg mb-12 max-w-2xl mx-auto font-sans text-gray-600">
            Fill out the form below, and we'll schedule a discovery call to discuss your needs and how we can help.
          </p>
          
          <QualForm className="text-left" />
        </div>
      </section>
    </div>
  )
} 