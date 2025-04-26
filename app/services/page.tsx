import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import QualForm from '../components/QualForm'

export const metadata: Metadata = {
  title: 'Services | Agency/42',
  description: 'AI Opportunity Audits, Hands-on Workshops, and Fractional AI CTO Retainers to help your business leverage AI effectively.',
  keywords: ['AI audit', 'AI workshop', 'fractional AI CTO', 'AI consulting services', 'AI implementation', 'AI strategy'],
}

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground pt-24">
      {/* Hero */}
      <section className="py-16 md:py-24 px-4 bg-neutral-50">
        <div className="container mx-auto max-w-6xl">
          <div className="md:grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-heading font-medium mb-6">
                AI Solutions That <span className="text-accent">Deliver</span> Real Results
              </h1>
              <p className="text-lg mb-8 font-sans">
                We take a systematic approach to help businesses identify, implement, and benefit from AI. Our services are designed to maximize ROI while minimizing risk.
              </p>
              <Link
                href="#contact"
                className="inline-block bg-primary text-background font-mono text-[11px] tracking-wider px-8 py-4 hover:bg-accent transition-colors"
              >
                GET STARTED →
              </Link>
            </div>
            <div className="relative w-full aspect-square mt-8 md:mt-0">
              <div className="w-full h-full bg-neutral-200 flex items-center justify-center rounded-md">
                <p className="text-neutral-500 font-mono">[Service Illustration]</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Opportunity Audit */}
      <section id="audit" className="py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="md:grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl md:text-4xl font-heading font-medium mb-6">
                AI Opportunity Audit
              </h2>
              <div className="mb-6">
                <p className="font-mono text-sm text-accent mb-2">STARTING AT $4K</p>
              </div>
              <p className="mb-4 font-sans">
                A comprehensive analysis to identify the highest-impact AI applications for your specific business. We evaluate your workflows, data, and goals to create a tailored action plan.
              </p>
              <h3 className="font-mono text-[11px] tracking-wider mt-8 mb-4 uppercase text-foreground">What You Get</h3>
              <ul className="space-y-3 mb-8 font-sans">
                <li className="flex items-start">
                  <span className="text-accent mr-2">✓</span>
                  <span>Analysis of your current tech stack and workflows</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">✓</span>
                  <span>Identification of your top 1-3 highest ROI AI applications</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">✓</span>
                  <span>Cost-benefit analysis of implementation options</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">✓</span>
                  <span>Detailed action plan with timeline and resource requirements</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">✓</span>
                  <span>Presentation and Q&A session with your team</span>
                </li>
              </ul>
              <Link
                href="#contact"
                className="inline-block bg-primary text-background font-mono text-[11px] tracking-wider px-8 py-4 hover:bg-accent transition-colors"
              >
                SCHEDULE AN AUDIT →
              </Link>
            </div>
            <div className="order-1 md:order-2 mb-8 md:mb-0">
              <div className="w-full aspect-video bg-neutral-200 flex items-center justify-center rounded-md">
                <p className="text-neutral-500 font-mono">[Audit Process Image]</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hands-on Workshop */}
      <section id="workshop" className="py-24 px-4 bg-neutral-50">
        <div className="container mx-auto max-w-6xl">
          <div className="md:grid md:grid-cols-2 gap-16 items-center">
            <div className="mb-8 md:mb-0">
              <div className="w-full aspect-video bg-neutral-200 flex items-center justify-center rounded-md">
                <p className="text-neutral-500 font-mono">[Workshop Image]</p>
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-medium mb-6">
                Hands-on Workshops
              </h2>
              <div className="mb-6">
                <p className="font-mono text-sm text-accent mb-2">CUSTOM PRICING</p>
              </div>
              <p className="mb-4 font-sans">
                Targeted training sessions designed to get your team proficient with AI tools and workflows. We focus on practical implementation of the opportunities identified in your audit.
              </p>
              <h3 className="font-mono text-[11px] tracking-wider mt-8 mb-4 uppercase text-foreground">What's Included</h3>
              <ul className="space-y-3 mb-8 font-sans">
                <li className="flex items-start">
                  <span className="text-accent mr-2">✓</span>
                  <span>Customized curriculum based on your specific needs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">✓</span>
                  <span>Hands-on exercises with real-world applications</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">✓</span>
                  <span>Implementation guidance for your specific use cases</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">✓</span>
                  <span>Documentation and resources for continued learning</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">✓</span>
                  <span>Follow-up support to ensure successful adoption</span>
                </li>
              </ul>
              <Link
                href="#contact"
                className="inline-block bg-primary text-background font-mono text-[11px] tracking-wider px-8 py-4 hover:bg-accent transition-colors"
              >
                INQUIRE ABOUT WORKSHOPS →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Fractional AI CTO Retainer */}
      <section id="retainer" className="py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="md:grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl md:text-4xl font-heading font-medium mb-6">
                Fractional AI CTO Retainer
              </h2>
              <div className="mb-6">
                <p className="font-mono text-sm text-accent mb-2">FROM $8K/MONTH</p>
              </div>
              <p className="mb-4 font-sans">
                Ongoing strategic guidance and implementation support. We become your dedicated AI leadership team, ensuring continuous adaptation and optimization of your AI capabilities.
              </p>
              <h3 className="font-mono text-[11px] tracking-wider mt-8 mb-4 uppercase text-foreground">Services Provided</h3>
              <ul className="space-y-3 mb-8 font-sans">
                <li className="flex items-start">
                  <span className="text-accent mr-2">✓</span>
                  <span>Regular strategy sessions and roadmap updates</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">✓</span>
                  <span>Technical guidance on implementation challenges</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">✓</span>
                  <span>Vendor selection and management support</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">✓</span>
                  <span>AI landscape monitoring and opportunity identification</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">✓</span>
                  <span>Continuous team upskilling and knowledge transfer</span>
                </li>
              </ul>
              <Link
                href="#contact"
                className="inline-block bg-primary text-background font-mono text-[11px] tracking-wider px-8 py-4 hover:bg-accent transition-colors"
              >
                DISCUSS A RETAINER →
              </Link>
            </div>
            <div className="order-1 md:order-2 mb-8 md:mb-0">
              <div className="w-full aspect-video bg-neutral-200 flex items-center justify-center rounded-md">
                <p className="text-neutral-500 font-mono">[Retainer Service Image]</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 px-4 bg-neutral-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-heading font-medium mb-12 text-center">
            Transparent Pricing
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-background border border-neutral-200 flex flex-col rounded-md">
              <h3 className="font-heading text-2xl mb-2">AI Opportunity Audit</h3>
              <p className="text-3xl font-heading font-medium text-accent mb-6">$4,000 - $8,000</p>
              <p className="font-sans text-secondary mb-6 flex-grow">
                Comprehensive analysis and action plan tailored to your business. Price varies based on company size and complexity.
              </p>
              <p className="font-mono text-[11px] tracking-wider mb-4 text-secondary">TIMELINE: 2-3 WEEKS</p>
              <Link
                href="#contact"
                className="inline-block w-full text-center bg-primary text-background font-mono text-[11px] tracking-wider py-3 hover:bg-accent transition-colors rounded-sm"
              >
                GET STARTED
              </Link>
            </div>
            <div className="p-8 bg-background border border-neutral-200 flex flex-col rounded-md">
              <h3 className="font-heading text-2xl mb-2">Hands-on Workshop</h3>
              <p className="text-3xl font-heading font-medium text-accent mb-6">Custom Pricing</p>
              <p className="font-sans text-secondary mb-6 flex-grow">
                Tailored training sessions based on your specific needs. Pricing depends on workshop duration, team size, and content requirements.
              </p>
              <p className="font-mono text-[11px] tracking-wider mb-4 text-secondary">TIMELINE: 1-3 DAYS</p>
              <Link
                href="#contact"
                className="inline-block w-full text-center bg-primary text-background font-mono text-[11px] tracking-wider py-3 hover:bg-accent transition-colors rounded-sm"
              >
                REQUEST QUOTE
              </Link>
            </div>
            <div className="p-8 bg-background border border-neutral-200 flex flex-col rounded-md">
              <h3 className="font-heading text-2xl mb-2">AI CTO Retainer</h3>
              <p className="text-3xl font-heading font-medium text-accent mb-6">From $8,000/mo</p>
              <p className="font-sans text-secondary mb-6 flex-grow">
                Ongoing strategic guidance and implementation support. Flexible engagement models to match your organization's needs.
              </p>
              <p className="font-mono text-[11px] tracking-wider mb-4 text-secondary">MIN. COMMITMENT: 3 MONTHS</p>
              <Link
                href="#contact"
                className="inline-block w-full text-center bg-primary text-background font-mono text-[11px] tracking-wider py-3 hover:bg-accent transition-colors rounded-sm"
              >
                DISCUSS OPTIONS
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-24 px-4">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-medium mb-6">
            Ready to Start Your AI Journey?
          </h2>
          <p className="text-lg mb-12 max-w-2xl mx-auto font-sans">
            Fill out the form below, and we'll schedule a discovery call to discuss your needs and how we can help.
          </p>
          
          <QualForm className="text-left" />
        </div>
      </section>
    </div>
  )
} 