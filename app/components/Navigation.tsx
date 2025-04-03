'use client'

import React from 'react'
import Link from 'next/link'

export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-neutral-100">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="font-mono text-[11px] tracking-wider">
            AGENCY/42
          </Link>
          
          <div className="flex gap-8">
            <Link 
              href="https://improbable.beehiiv.com/" 
              className="font-mono text-[11px] tracking-wider hover:text-orange-500 transition-colors"
            >
              BLOG
            </Link>
            <Link 
              href="/about" 
              className="font-mono text-[11px] tracking-wider hover:text-orange-500 transition-colors"
            >
              ABOUT
            </Link>
            <a 
              href="https://calendly.com/ken-agency42/discovery" 
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[11px] tracking-wider hover:text-orange-500 transition-colors"
            >
              CONTACT
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
} 