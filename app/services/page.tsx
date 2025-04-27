import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import QualForm from '../components/QualForm'
import { ConwaySim } from '@/app/components/ConwaySim'
import { FlickeringGrid } from '@/app/components/FlickeringGrid'

export const metadata: Metadata = {
  title: 'Services | Agency/42',
  description: 'AI Opportunity Audits, Hands-on Workshops, and Fractional AI CTO Retainers to help your business leverage AI effectively.',
  keywords: ['AI audit', 'AI workshop', 'fractional AI CTO', 'AI consulting services', 'AI implementation', 'AI strategy'],
}

export default function ServicesPage() {
  return (
    <div className="bg-background text-foreground pt-24">
      {/* Hero */}
      <section className="py-24 md:py-32 px-4 border-b border-neutral-800">
        <div className="container mx-auto max-w-6xl">
          <div className="md:grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-heading font-medium mb-6">
                AI Solutions That Deliver Real Results
              </h1>
              <p className="text-lg mb-8 font-sans text-neutral-400">
                We take a systematic approach to help businesses identify, implement, and benefit from AI. Our services are designed to maximize ROI while minimizing risk.
              </p>
              <Link
                href="#contact"
                className="inline-block border border-foreground text-foreground font-mono text-[11px] tracking-wider px-8 py-3 hover:bg-foreground hover:text-background transition-colors"
              >
                GET STARTED →
              </Link>
            </div>
            <div className="relative w-full aspect-square mt-8 md:mt-0 flex items-center justify-center">
              <ConwaySim />
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-24 border-b border-neutral-800">
        <div className="container">
          <h2 className="flex items-center space-x-2 font-mono text-[11px] tracking-wider uppercase text-foreground mb-6">
            <span>●</span>
            <span>Process</span>
          </h2>
          <div className="mb-12">
            <div className="w-full h-64 rounded-md overflow-hidden border border-neutral-800">
              <FlickeringGrid 
                rows={40}
                columns={40}
                speed={150}
                probability={0.05}
                activeColor="hsl(var(--accent))"
                inactiveColor="hsl(var(--muted-foreground)/0.2)"
                className="h-full w-full"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <h3 className="text-3xl md:text-4xl font-heading font-light">Big vibes, small core.</h3>
            <ol className="list-none space-y-6 font-sans text-neutral-400">
              <li>
                <span className="font-mono text-[11px] tracking-wider uppercase text-foreground">1 Planning</span>
                <p className="mt-2">During the pre-project planning phase, we take the time to learn all about a prospective client and to prepare a detailed workback schedule which lays out a complete roadmap of our project.</p>
              </li>
              <li>
                <span className="font-mono text-[11px] tracking-wider uppercase text-foreground">2 Discovery</span>
                <p className="mt-2">In this first phase of the project, we perform a visual audit of the client's current and past visual design work, and reflect on how these elements connect.</p>
              </li>
              <li>
                <span className="font-mono text-[11px] tracking-wider uppercase text-foreground">3 Moodboarding</span>
                <p className="mt-2">Next, we research external visual design references and pull together a moodboard to better explain our vision for the project, and to align with stakeholders on style preferences.</p>
              </li>
              <li>
                <span className="font-mono text-[11px] tracking-wider uppercase text-foreground">4 Design + Refine</span>
                <p className="mt-2">After style approval (or consolidation of several style references), we get to work. In this phase, we design with your brand in mind, pulling from our years of experience in design and create work that is fresh, exciting and brand new. This phase includes 3 distinct sketch options and 2 rounds of revisions.</p>
              </li>
              <li>
                <span className="font-mono text-[11px] tracking-wider uppercase text-foreground">5 Handoff</span>
                <p className="mt-2">Once the final style is approved and work begins to wrap up, we prepare the final deliverables for delivery. All files are handed over in the manner as described in client's customized SOW, and we also offer a detailed offboarding document if requested.</p>
              </li>
              <li>
                <span className="font-mono text-[11px] tracking-wider uppercase text-foreground">6 Support</span>
                <p className="mt-2">We are always happy to offer retainer services, if ongoing design support is needed. Rates for this work are flexible, and we're happy to create a plan that works for all parties, and is highly competitive with the big agencies.</p>
              </li>
            </ol>
          </div>
        </div>
      </section>

      {/* Strategy Section */}
      <section id="strategy" className="py-24 border-b border-neutral-800">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-heading font-medium mb-12 text-center">
            Our Strategy
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Identify */}
            <div className="p-8 bg-background border border-neutral-800 rounded-md flex flex-col">
              <h3 className="font-heading text-xl mb-4">Identify</h3>
              <p className="text-neutral-400 mb-6">
                Through our AI Opportunity Audit, we deeply analyze your workflows, systems, and data to pinpoint the highest-impact AI initiatives tailored to your business.
              </p>
              <Link href="#audit" className="mt-auto inline-block text-foreground font-mono text-[11px] tracking-wider border border-foreground px-4 py-2 hover:bg-foreground hover:text-background transition">
                Learn More
              </Link>
            </div>
            {/* Educate */}
            <div className="p-8 bg-background border border-neutral-800 rounded-md flex flex-col">
              <h3 className="font-heading text-xl mb-4">Educate</h3>
              <p className="text-neutral-400 mb-6">
                Our hands-on workshops equip your team with practical skills and real-world exercises to effectively implement the AI strategies identified.
              </p>
              <Link href="#workshop" className="mt-auto inline-block text-foreground font-mono text-[11px] tracking-wider border border-foreground px-4 py-2 hover:bg-foreground hover:text-background transition">
                Learn More
              </Link>
            </div>
            {/* Develop */}
            <div className="p-8 bg-background border border-neutral-800 rounded-md flex flex-col">
              <h3 className="font-heading text-xl mb-4">Develop</h3>
              <p className="text-neutral-400 mb-6">
                Engage with our fractional AI CTO service or dedicated development services to build and scale your AI solutions with expert leadership and support.
              </p>
              <Link href="#retainer" className="mt-auto inline-block text-foreground font-mono text-[11px] tracking-wider border border-foreground px-4 py-2 hover:bg-foreground hover:text-background transition">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* AI Opportunity Audit */}
      <section id="audit" className="py-24 px-4 border-b border-neutral-800">
        <div className="container mx-auto max-w-6xl">
          <div className="md:grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl md:text-4xl font-heading font-medium mb-6">
                AI Opportunity Audit
              </h2>
              <div className="mb-6">
                <p className="font-mono text-sm text-neutral-400 mb-2">STARTING AT $4K</p>
              </div>
              <p className="mb-4 font-sans text-neutral-400">
                A comprehensive analysis to identify the highest-impact AI applications for your specific business. We evaluate your workflows, data, and goals to create a tailored action plan.
              </p>
              <h3 className="font-mono text-[11px] tracking-wider mt-8 mb-4 uppercase text-foreground">What You Get</h3>
              <ul className="space-y-3 mb-8 font-sans text-neutral-400">
                <li className="flex items-start">
                  <span className="text-foreground mr-2">✓</span>
                  <span>Analysis of your current tech stack and workflows</span>
                </li>
                <li className="flex items-start">
                  <span className="text-foreground mr-2">✓</span>
                  <span>Identification of your top 1-3 highest ROI AI applications</span>
                </li>
                <li className="flex items-start">
                  <span className="text-foreground mr-2">✓</span>
                  <span>Cost-benefit analysis of implementation options</span>
                </li>
                <li className="flex items-start">
                  <span className="text-foreground mr-2">✓</span>
                  <span>Detailed action plan with timeline and resource requirements</span>
                </li>
                <li className="flex items-start">
                  <span className="text-foreground mr-2">✓</span>
                  <span>Presentation and Q&A session with your team</span>
                </li>
              </ul>
              <Link
                href="#contact"
                className="inline-block border border-foreground text-foreground font-mono text-[11px] tracking-wider px-8 py-3 hover:bg-foreground hover:text-background transition-colors"
              >
                SCHEDULE AN AUDIT →
              </Link>
            </div>
            <div className="order-1 md:order-2 mb-8 md:mb-0">
              <div className="w-full aspect-video bg-neutral-900 border border-neutral-800 flex items-center justify-center rounded-md">
                <p className="text-neutral-500 font-mono">[Audit Process Image]</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hands-on Workshop */}
      <section id="workshop" className="py-24 px-4 border-b border-neutral-800">
        <div className="container mx-auto max-w-6xl">
          <div className="md:grid md:grid-cols-2 gap-16 items-center">
            <div className="mb-8 md:mb-0">
              <div className="w-full aspect-video bg-neutral-900 border border-neutral-800 flex items-center justify-center rounded-md">
                <p className="text-neutral-500 font-mono">[Workshop Image]</p>
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-medium mb-6">
                Hands-on Workshops
              </h2>
              <div className="mb-6">
                <p className="font-mono text-sm text-neutral-400 mb-2">CUSTOM PRICING</p>
              </div>
              <p className="mb-4 font-sans text-neutral-400">
                Targeted training sessions designed to get your team proficient with AI tools and workflows. We focus on practical implementation of the opportunities identified in your audit.
              </p>
              <h3 className="font-mono text-[11px] tracking-wider mt-8 mb-4 uppercase text-foreground">What's Included</h3>
              <ul className="space-y-3 mb-8 font-sans text-neutral-400">
                <li className="flex items-start">
                  <span className="text-foreground mr-2">✓</span>
                  <span>Customized curriculum based on your specific needs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-foreground mr-2">✓</span>
                  <span>Hands-on exercises with real-world applications</span>
                </li>
                <li className="flex items-start">
                  <span className="text-foreground mr-2">✓</span>
                  <span>Implementation guidance for your specific use cases</span>
                </li>
                <li className="flex items-start">
                  <span className="text-foreground mr-2">✓</span>
                  <span>Documentation and resources for continued learning</span>
                </li>
                <li className="flex items-start">
                  <span className="text-foreground mr-2">✓</span>
                  <span>Follow-up support to ensure successful adoption</span>
                </li>
              </ul>
              <Link
                href="#contact"
                className="inline-block border border-foreground text-foreground font-mono text-[11px] tracking-wider px-8 py-3 hover:bg-foreground hover:text-background transition-colors"
              >
                INQUIRE ABOUT WORKSHOPS →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Fractional AI CTO Retainer */}
      <section id="retainer" className="py-24 px-4 border-b border-neutral-800">
        <div className="container mx-auto max-w-6xl">
          <div className="md:grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl md:text-4xl font-heading font-medium mb-6">
                Fractional AI CTO Retainer
              </h2>
              <div className="mb-6">
                <p className="font-mono text-sm text-neutral-400 mb-2">FROM $8K/MONTH</p>
              </div>
              <p className="mb-4 font-sans text-neutral-400">
                Ongoing strategic guidance and implementation support. We become your dedicated AI leadership team, ensuring continuous adaptation and optimization of your AI capabilities.
              </p>
              <h3 className="font-mono text-[11px] tracking-wider mt-8 mb-4 uppercase text-foreground">Services Provided</h3>
              <ul className="space-y-3 mb-8 font-sans text-neutral-400">
                <li className="flex items-start">
                  <span className="text-foreground mr-2">✓</span>
                  <span>Regular strategy sessions and roadmap updates</span>
                </li>
                <li className="flex items-start">
                  <span className="text-foreground mr-2">✓</span>
                  <span>Technical guidance on implementation challenges</span>
                </li>
                <li className="flex items-start">
                  <span className="text-foreground mr-2">✓</span>
                  <span>Vendor selection and management support</span>
                </li>
                <li className="flex items-start">
                  <span className="text-foreground mr-2">✓</span>
                  <span>AI landscape monitoring and opportunity identification</span>
                </li>
                <li className="flex items-start">
                  <span className="text-foreground mr-2">✓</span>
                  <span>Continuous team upskilling and knowledge transfer</span>
                </li>
              </ul>
              <Link
                href="#contact"
                className="inline-block border border-foreground text-foreground font-mono text-[11px] tracking-wider px-8 py-3 hover:bg-foreground hover:text-background transition-colors"
              >
                DISCUSS A RETAINER →
              </Link>
            </div>
            <div className="order-1 md:order-2 mb-8 md:mb-0">
              <div className="w-full aspect-video bg-neutral-900 border border-neutral-800 flex items-center justify-center rounded-md">
                <p className="text-neutral-500 font-mono">[Retainer Service Image]</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 px-4 border-b border-neutral-800">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-heading font-medium mb-12 text-center">
            Transparent Pricing
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-background border border-neutral-800 flex flex-col rounded-md">
              <h3 className="font-heading text-2xl mb-2">AI Opportunity Audit</h3>
              <p className="text-3xl font-heading font-medium text-foreground mb-6">$4,000 - $8,000</p>
              <p className="font-sans text-neutral-400 mb-6 flex-grow">
                Comprehensive analysis and action plan tailored to your business. Price varies based on company size and complexity.
              </p>
              <p className="font-mono text-[11px] tracking-wider mb-4 text-neutral-400">TIMELINE: 2-3 WEEKS</p>
              <Link
                href="#contact"
                className="inline-block w-full text-center border border-foreground text-foreground font-mono text-[11px] tracking-wider py-3 hover:bg-foreground hover:text-background transition-colors rounded-sm mt-auto"
              >
                GET STARTED
              </Link>
            </div>
            <div className="p-8 bg-background border border-neutral-800 flex flex-col rounded-md">
              <h3 className="font-heading text-2xl mb-2">Hands-on Workshop</h3>
              <p className="text-3xl font-heading font-medium text-foreground mb-6">Custom Pricing</p>
              <p className="font-sans text-neutral-400 mb-6 flex-grow">
                Tailored training sessions based on your specific needs. Pricing depends on workshop duration, team size, and content requirements.
              </p>
              <p className="font-mono text-[11px] tracking-wider mb-4 text-neutral-400">TIMELINE: 1-3 DAYS</p>
              <Link
                href="#contact"
                className="inline-block w-full text-center border border-foreground text-foreground font-mono text-[11px] tracking-wider py-3 hover:bg-foreground hover:text-background transition-colors rounded-sm mt-auto"
              >
                REQUEST QUOTE
              </Link>
            </div>
            <div className="p-8 bg-background border border-neutral-800 flex flex-col rounded-md">
              <h3 className="font-heading text-2xl mb-2">AI CTO Retainer</h3>
              <p className="text-3xl font-heading font-medium text-foreground mb-6">From $8,000/mo</p>
              <p className="font-sans text-neutral-400 mb-6 flex-grow">
                Ongoing strategic guidance and implementation support. Flexible engagement models to match your organization's needs.
              </p>
              <p className="font-mono text-[11px] tracking-wider mb-4 text-neutral-400">MIN. COMMITMENT: 3 MONTHS</p>
              <Link
                href="#contact"
                className="inline-block w-full text-center border border-foreground text-foreground font-mono text-[11px] tracking-wider py-3 hover:bg-foreground hover:text-background transition-colors rounded-sm mt-auto"
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
          <p className="text-lg mb-12 max-w-2xl mx-auto font-sans text-neutral-400">
            Fill out the form below, and we'll schedule a discovery call to discuss your needs and how we can help.
          </p>
          
          <QualForm className="text-left" />
        </div>
      </section>
    </div>
  )
} 