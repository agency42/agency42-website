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
      {/* Hero section with improved mobile layout */}
      <section className="pt-8 md:pt-14 pb-20 md:pb-28 px-4 border-b border-black relative overflow-hidden">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:grid md:grid-cols-2 gap-12 items-start md:items-center">
            <div className="w-full aspect-video md:h-96 flex items-center justify-center bg-black order-first">
              <ConwaySim 
                speed={0.033} 
                initialDensity={0.3} 
                preWarmSteps={50}
              />
            </div>
            <div className="w-full">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-medium mb-6">
                Operate at the speed of AI
              </h1>
              <p className="text-base md:text-lg mb-8 font-sans text-gray-600 max-w-xl">
                We take a systematic approach to designing intelligent systems, automating workflows, and exploring frontier AI use cases—bridging strategy and execution at every step.
              </p>
              <Link
                href="#contact"
                className="inline-block border border-black text-black font-mono text-[11px] tracking-wider px-6 md:px-8 py-3 hover:bg-black hover:text-white transition-colors"
              >
                GET STARTED →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section - improved mobile layout */}
      <section id="process" className="py-16 md:py-24 border-b border-black px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-8 md:mb-12">
            <div 
              className="w-full overflow-hidden border border-black"
              style={{ 
                height: 'min(64vh, 255px)',
                maxHeight: '255px',
                aspectRatio: '16/9'
              }}
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-start">
            <div>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-heading font-light mb-4">
                Creative Engineering, <br className="hidden md:block" /> Beyond Automation
              </h3>
              <p className="mb-8 font-sans text-gray-600 text-base md:text-lg">
                We blend imaginative engineering with deep research to help teams move fast, build trust, and turn learning into lasting advantage.
              </p>
            </div>
            <div>
              <ol className="list-none space-y-6 md:space-y-8 font-sans text-gray-600">
                <li>
                  <span className="font-mono text-[11px] tracking-wider uppercase text-black">Map</span>
                  <p className="mt-2 text-base md:text-lg">We immerse ourselves in your culture, workflows, and data—mapping both the human and technical landscape to reveal where inventive AI can unlock real leverage.</p>
                </li>
                <li>
                  <span className="font-mono text-[11px] tracking-wider uppercase text-black">Discover</span>
                  <p className="mt-2 text-base md:text-lg">Through systems thinking and diagnostic tools, we surface bottlenecks, quick wins, and bold opportunities that matter most to your people and your mission.</p>
                </li>
                <li>
                  <span className="font-mono text-[11px] tracking-wider uppercase text-black">Design</span>
                  <p className="mt-2 text-base md:text-lg">In hands-on workshops, we co-create new tools, processes, and capabilities—rapidly prototyping ideas so teams can see, shape, and own the future.</p>
                </li>
                <li>
                  <span className="font-mono text-[11px] tracking-wider uppercase text-black">Scale</span>
                  <p className="mt-2 text-base md:text-lg">Once new systems are in place, we help you scale them—ensuring your solutions grow seamlessly with your business and deliver impact at every level.</p>
                </li>
                <li>
                  <span className="font-mono text-[11px] tracking-wider uppercase text-black">Evolve</span>
                  <p className="mt-2 text-base md:text-lg">As your business grows, we continuously adapt your AI solutions—ensuring they stay effective, relevant, and aligned with your evolving goals.</p>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section with Accordion */}
      <section id="services" className="py-16 md:py-24 px-4 border-b border-black">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-medium mb-8 md:mb-12 text-center">
            Our Services
          </h2>
          <ServicesAccordion />
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-16 md:py-24 px-4">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-medium mb-4 md:mb-6">
            Ready to Start Your AI Journey?
          </h2>
          <p className="text-base md:text-lg mb-8 md:mb-12 max-w-2xl mx-auto font-sans text-gray-600">
            Fill out the form below, and we'll schedule a discovery call to discuss your needs and how we can help.
          </p>
          
          <QualForm className="text-left" />
        </div>
      </section>
    </div>
  )
} 