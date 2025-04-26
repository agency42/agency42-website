import React from 'react'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | Agency/42',
  description: 'Privacy policy and data protection information for Agency/42.',
  robots: 'noindex, nofollow' // Discourage search engines from indexing legal pages
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-base-light text-base-dark pt-24">
      <main className="container mx-auto max-w-4xl px-4 py-16">
        <div className="prose prose-neutral max-w-none">
          <h1 className="text-4xl font-light mb-2">Privacy Policy</h1>
          <p className="text-sm text-neutral-500 mb-8">Last updated: {new Date().toLocaleDateString()}</p>

          <section className="mb-8">
            <h2 className="text-2xl font-light mb-4">1. Introduction</h2>
            <p className="mb-4">
              Agency/42 LLC ("we," "our," or "us") respects your privacy and is committed to protecting your personal data. 
              This privacy policy explains how we collect, use, and protect your information when you visit our website (agency42.co) 
              or use our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-light mb-4">2. Information We Collect</h2>
            <p className="mb-2">We may collect the following types of information:</p>
            <ul className="list-disc pl-6 mb-4 space-y-1">
              <li><strong>Personal Information:</strong> Name, email address, company name, job title, phone number, and any other information you provide when filling out forms or contacting us.</li>
              <li><strong>Usage Data:</strong> Information about how you access and use the website, such as IP address, browser type, pages visited, time spent on pages, collected via analytics tools like Plausible and PostHog.</li>
              <li><strong>Cookies:</strong> We may use cookies to enhance user experience and analyze site traffic. (See our Cookie Policy if applicable).</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-light mb-4">3. How We Use Your Information</h2>
            <p className="mb-2">We use the information we collect for purposes including:</p>
            <ul className="list-disc pl-6 mb-4 space-y-1">
              <li>Providing and improving our services.</li>
              <li>Responding to your inquiries and requests.</li>
              <li>Sending relevant communications (e.g., confirmation emails, newsletters if subscribed).</li>
              <li>Analyzing website usage to improve user experience (via Plausible/PostHog).</li>
              <li>Complying with legal obligations.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-light mb-4">4. Data Sharing and Disclosure</h2>
            <p className="mb-2">We do not sell your personal information. We may share your information with:</p>
            <ul className="list-disc pl-6 mb-4 space-y-1">
              <li><strong>Service Providers:</strong> Third-party vendors who assist us in operating our website and services (e.g., Resend for email delivery, hosting providers).</li>
              <li><strong>Analytics Providers:</strong> Plausible and PostHog for website analytics.</li>
              <li><strong>Legal Requirements:</strong> If required by law or in response to valid requests by public authorities.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-light mb-4">5. Data Security</h2>
            <p className="mb-4">
              We implement reasonable security measures to protect your personal information from unauthorized access, use, or disclosure. 
              However, no internet transmission is completely secure.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-light mb-4">6. Your Rights</h2>
            <p className="mb-2">Depending on your location, you may have rights regarding your personal data, including:</p>
            <ul className="list-disc pl-6 mb-4 space-y-1">
              <li>The right to access, update, or delete your information.</li>
              <li>The right to object to or restrict processing.</li>
              <li>The right to data portability.</li>
              <li>The right to withdraw consent (e.g., for marketing emails).</li>
            </ul>
            <p>To exercise these rights, please contact us using the information below.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-light mb-4">7. Third-Party Links</h2>
            <p className="mb-4">
              Our website may contain links to other websites not operated by us. We have no control over and assume no 
              responsibility for the content, privacy policies, or practices of any third-party sites or services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-light mb-4">8. Changes to This Policy</h2>
            <p className="mb-4">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy 
              on this page and updating the "Last updated" date.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-light mb-4">9. Contact Us</h2>
            <p className="mb-2">If you have any questions about this Privacy Policy, please contact us:</p>
            <p>
              Email: <Link href="mailto:hello@agency42.co" className="text-accent-start hover:underline">hello@agency42.co</Link>
            </p>
          </section>
        </div>
      </main>
    </div>
  );
} 