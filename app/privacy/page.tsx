import React from 'react'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy - Agency42',
  description: 'Privacy policy and data protection information for Agency42',
}

export default function Privacy() {
  return (
    <div className="min-h-screen bg-white">
      <main className="pt-32 pb-20">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="prose prose-neutral max-w-none">
            <h1 className="text-4xl font-light mb-2">Privacy Policy</h1>
            <p className="text-sm text-neutral-500 mb-8">Last updated: December 8, 2024</p>

            <section className="mb-8">
              <h2 className="text-2xl font-light mb-4">1. Introduction</h2>
              <p className="mb-4">
                Agency42 LLC ("we," "our," or "us") respects your privacy and is committed to protecting your personal data. 
                This privacy policy explains how we collect, use, and protect your information when you visit our website (agency42.co).
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-light mb-4">2. Information We Collect</h2>
              <p className="mb-2">We collect information that you provide directly to us, including:</p>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>Contact information (name, email address)</li>
                <li>Communication preferences</li>
                <li>Information you provide when contacting us</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-light mb-4">3. How We Use Your Information</h2>
              <p className="mb-2">We use the information we collect to:</p>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>Respond to your inquiries</li>
                <li>Provide our services</li>
                <li>Send you updates and marketing communications (with your consent)</li>
                <li>Improve our website and services</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-light mb-4">4. Data Security</h2>
              <p className="mb-4">
                We implement appropriate security measures to protect your personal information 
                from unauthorized access, alteration, or disclosure.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-light mb-4">5. Your Rights</h2>
              <p className="mb-2">You have the right to:</p>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>Access your personal data</li>
                <li>Correct inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Withdraw consent for marketing communications</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-light mb-4">6. Contact Us</h2>
              <p className="mb-2">For any questions about this privacy policy or our practices, please contact us at:</p>
              <p className="mb-2">
                Email:{' '}
                <Link 
                  href="mailto:hello@agency42.co" 
                  className="text-orange-500 hover:text-orange-600 transition-colors"
                >
                  hello@agency42.co
                </Link>
              </p>
              <p>
                Schedule a meeting:{' '}
                <Link 
                  href="https://calendly.com/ken-agency42/discovery" 
                  className="text-orange-500 hover:text-orange-600 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book a discovery call
                </Link>
              </p>
            </section>
          </div>
        </div>
      </main>
    </div>
  )
} 