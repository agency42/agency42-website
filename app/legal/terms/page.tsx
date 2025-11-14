import React from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service | Agency/42',
  description: 'Terms and conditions for using the Agency/42 website and services.',
  robots: 'noindex, nofollow' // Discourage search engines from indexing legal pages
}

export default function TermsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-white via-gray-50 to-white">
      {/* Grid background */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.02]" style={{
        backgroundImage: `linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)`,
        backgroundSize: '32px 32px'
      }} />
      <main className="flex-1 px-4 sm:px-6 pb-16 relative z-10">
        <div className="max-w-2xl mx-auto">
          <div className="pt-8 sm:pt-12 pb-4">
            <h1 className="text-3xl sm:text-4xl font-medium mb-2">terms of service</h1>
            <p className="text-sm text-gray-500 mb-8">Last updated: {new Date().toLocaleDateString()}</p>
          </div>

          <section className="mb-8">
            <h2 className="text-xl font-medium mb-4">1. Acceptance of Terms</h2>
            <p className="mb-4">
              By accessing or using the Agency/42 website ("Site") or any services provided by Agency/42 LLC ("Services"), 
              you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, 
              do not use the Site or Services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-medium mb-4">2. Use of Services</h2>
            <p className="mb-4">
              You agree to use the Site and Services only for lawful purposes and in accordance with these Terms. In connection with your use of the Site and Services, you will not:
              <ul className="list-disc list-inside my-4">
                <li>Copy, modify, or distribute any part of the Site or Services without prior written consent;</li>
                <li>Attempt to reverse engineer, decompile, or disassemble any software or systems provided by Agency/42;</li>
                <li>Use the Site or Services to violate any applicable laws or regulations;</li>
                <li>Introduce malicious software or interfere with the security or integrity of the Site or Services;</li>
                <li>Harvest or collect personally identifiable information without authorization.</li>
              </ul>
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-medium mb-4">3. Intellectual Property</h2>
            <p className="mb-4">
              The Site and its original content, features, and functionality are owned by Agency/42 LLC and are 
              protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-medium mb-4">4. Disclaimers</h2>
            <p className="mb-4">
              The Services are provided "as is" and "as available" without any warranties of any kind, express or implied. 
              We do not warrant that the Services will be error-free or uninterrupted.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-xl font-medium mb-4">5. Limitation of Liability</h2>
            <p className="mb-4">
              In no event shall Agency/42 LLC, nor its directors, employees, partners, agents, suppliers, or affiliates, 
              be liable for any indirect, incidental, special, consequential or punitive damages arising out of or related to your use of the Site or Services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-medium mb-4">6. Governing Law</h2>
            <p className="mb-4">
              These Terms shall be governed and construed in accordance with the laws of the State of California, 
              without regard to its conflict of law provisions.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-medium mb-4">7. Changes to Terms</h2>
            <p className="mb-4">
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. 
              We will provide notice of any changes by posting the new Terms on the Site.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-medium mb-4">8. Contact Us</h2>
            <p className="mb-4">
              If you have any questions about these Terms, please contact us at hello@agency42.co.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
} 