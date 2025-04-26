'use client'

import React, { useState } from 'react'
import Link from 'next/link'

// Set to true to show the Research link
const showResearchLink = false;

export default function Navigation() {
  const [isProductsOpen, setIsProductsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-neutral-100">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="font-mono text-[11px] tracking-wider">
            AGENCY/42
          </Link>

          <div className="flex gap-8 items-center">
            {/* Content Link */}
            <Link
              href="/content"
              className="font-mono text-[11px] tracking-wider hover:text-orange-500 transition-colors"
            >
              CONTENT
            </Link>

            {/* Research Link (Conditionally Rendered) */}
            {showResearchLink && (
              <Link
                href="/research"
                className="font-mono text-[11px] tracking-wider hover:text-orange-500 transition-colors"
              >
                RESEARCH
              </Link>
            )}

            {/* Services Link */}
            <Link
              href="/services"
              className="font-mono text-[11px] tracking-wider hover:text-orange-500 transition-colors"
            >
              SERVICES
            </Link>

            {/* Company Link */}
            <Link
              href="/company" // Changed from /about
              className="font-mono text-[11px] tracking-wider hover:text-orange-500 transition-colors"
            >
              COMPANY
            </Link>

            {/* Products Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsProductsOpen(true)}
              onMouseLeave={() => setIsProductsOpen(false)}
            >
              <button
                className="font-mono text-[11px] tracking-wider hover:text-orange-500 transition-colors flex items-center"
              >
                PRODUCTS
                {/* Simple dropdown indicator */}
                <svg className="w-3 h-3 ml-1 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" fillRule="evenodd"></path></svg>
              </button>
              {isProductsOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-neutral-100 shadow-lg py-1 z-10">
                  <Link
                    href="#" // TODO: Update Daybloom link
                    target="_blank" // Assuming external link
                    rel="noopener noreferrer"
                    className="block px-4 py-2 font-mono text-[11px] tracking-wider hover:bg-neutral-100 hover:text-orange-500 transition-colors"
                  >
                    Daybloom
                  </Link>
                  <Link
                    href="#" // TODO: Update Vibe-Check link/page
                    className="block px-4 py-2 font-mono text-[11px] tracking-wider hover:bg-neutral-100 hover:text-orange-500 transition-colors"
                  >
                    Vibe-Check (Soon)
                  </Link>
                  {/* Add other product links here */}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
} 