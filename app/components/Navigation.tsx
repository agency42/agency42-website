'use client'

import React, { useState } from 'react'
import Link from 'next/link'

// Set to true to show the Research link
const showResearchLink = true;

export default function Navigation() {
  // Remove dropdown state
  // const [isProductsOpen, setIsProductsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background text-foreground border-b border-neutral-800">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="font-mono text-[11px] tracking-wider text-foreground">
            AGENCY/42
          </Link>

          <div className="flex gap-8 items-center">
            <Link
              href="/content"
              className="font-mono text-[11px] tracking-wider text-foreground hover:text-neutral-400 transition-colors"
            >
              STORIES
            </Link>

            {showResearchLink && (
              <Link
                href="/research"
                className="font-mono text-[11px] tracking-wider text-foreground hover:text-neutral-400 transition-colors"
              >
                RESEARCH
              </Link>
            )}

            <Link
              href="/services"
              className="font-mono text-[11px] tracking-wider text-foreground hover:text-neutral-400 transition-colors"
            >
              SERVICES
            </Link>

            <Link
              href="/company"
              className="font-mono text-[11px] tracking-wider text-foreground hover:text-neutral-400 transition-colors"
            >
              COMPANY
            </Link>
            
            <Link
              href="/our-work"
              className="font-mono text-[11px] tracking-wider text-foreground hover:text-neutral-400 transition-colors"
            >
              OUR WORK
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
} 