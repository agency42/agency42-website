'use client'

import React from 'react'
import Link from 'next/link'
import { CenterUnderline, ComesInGoesOutUnderline, GoesOutComesInUnderline } from '@/components/ui/underline-animation' // Assuming path

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-background text-black py-16 border-t border-black">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Column 1: Branding/Logo (Optional) */}
        <div>
          <h3 className="font-heading text-lg mb-4 text-black">△42</h3>
          {/* You could add a logo here if desired */}
          <p className="text-gray-600 text-sm font-sans">
            AI Strategy & Development
          </p>
        </div>

        {/* Column 2: Navigation */}
        <div>
          <h4 className="font-mono text-sm uppercase tracking-wider text-black mb-4">Navigate</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/"><CenterUnderline label="Home" className="text-gray-700 hover:text-black font-sans focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-sm" /></Link></li>
            <li><Link href="/services"><CenterUnderline label="Services" className="text-gray-700 hover:text-black font-sans focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-sm" /></Link></li>
            <li><Link href="/content"><CenterUnderline label="Content" className="text-gray-700 hover:text-black font-sans focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-sm" /></Link></li>
            <li><Link href="/research"><CenterUnderline label="Research" className="text-gray-700 hover:text-black font-sans focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-sm" /></Link></li>
            <li><Link href="/company"><CenterUnderline label="Company" className="text-gray-700 hover:text-black font-sans focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-sm" /></Link></li>
          </ul>
        </div>

        {/* Column 3: Contact/Social */}
        <div>
          <h4 className="font-mono text-sm uppercase tracking-wider text-black mb-4">Connect</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="mailto:hello@agency42.co"><GoesOutComesInUnderline label="hello@agency42.co" direction="left" className="text-gray-700 hover:text-black font-sans focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-sm" /></a></li>
            {/* Add social links here using underline components */}
            <li><a href="https://linkedin.com/company/agency42co" target="_blank" rel="noopener noreferrer"><ComesInGoesOutUnderline label="LinkedIn" direction="right" className="text-gray-700 hover:text-black font-sans focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-sm" /></a></li>
            <li><a href="https://x.com/agency42co" target="_blank" rel="noopener noreferrer"><ComesInGoesOutUnderline label="Twitter/X" direction="left" className="text-gray-700 hover:text-black font-sans focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-sm" /></a></li>
            <li><a href="https://www.youtube.com/@bootoshi" target="_blank" rel="noopener noreferrer"><ComesInGoesOutUnderline label="YouTube" direction="right" className="text-gray-700 hover:text-black font-sans focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-sm" /></a></li>
          </ul>
        </div>

        {/* Column 4: Legal (Optional) */}
        <div>
          <h4 className="font-mono text-sm uppercase tracking-wider text-black mb-4">Legal</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/legal/privacy"><CenterUnderline label="Privacy Policy" className="text-gray-700 hover:text-black font-sans focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-sm" /></Link></li>
            <li><Link href="/legal/terms"><CenterUnderline label="Terms of Service" className="text-gray-700 hover:text-black font-sans focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-sm" /></Link></li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="container mx-auto mt-12 pt-8 border-t border-black text-center text-gray-700 text-sm">
        <p className="font-sans">&copy; {currentYear} △42. All rights reserved.</p>
      </div>
    </footer>
  )
} 