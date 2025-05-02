'use client'

import React from 'react'
import Link from 'next/link'
import { Popover, PopoverTrigger, PopoverContent } from '@/components/ui/popover'

// Set to true to show the Research link
const showResearchLink = false;

export default function Navigation() {
  const navLinks = [
    { href: "/", label: "HOME" },
    { href: "/services", label: "SERVICES" },
    { href: "/content", label: "STORIES" },
    ...(showResearchLink ? [{ href: "/research", label: "RESEARCH" }] : []),
    { href: "/company", label: "COMPANY" },
    // { href: "/projects", label: "PROJECTS" },
    { href: "https://daybloom.ai", label: "DAYBLOOM" },
    { href: "https://improbable.beehiiv.com/", label: "NEWSLETTER" },
    { href: "https://github.com/agency42", label: "GITHUB" }
  ]

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent text-foreground">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <Link 
              href="/" 
              className="font-mono text-xl tracking-wider text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 rounded-sm"
            >
              <span className="text-black !text-black font-bold flex items-baseline">
                <span className="text-3xl leading-none mr-[2px] relative -top-[2px]">△</span>
              </span>
            </Link>
            
            {/* Popover-based Menu */}
            <Popover>
              <PopoverTrigger asChild>
                <button
                  className="group h-7 w-7 flex items-center justify-center text-black hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 rounded-sm"
                  aria-label="Toggle Menu"
                >
                  <svg
                    className="pointer-events-none"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 12H20"
                      className="origin-center -translate-y-[7px] transition-all duration-300 [transition-timing-function:cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[315deg]"
                    />
                    <path
                      d="M4 12H20"
                      className="origin-center transition-all duration-300 [transition-timing-function:cubic-bezier(.5,.85,.25,1.8)] group-aria-expanded:rotate-45"
                    />
                    <path
                      d="M4 12H20"
                      className="origin-center translate-y-[7px] transition-all duration-300 [transition-timing-function:cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[135deg]"
                    />
                  </svg>
                </button>
              </PopoverTrigger>
              <PopoverContent side="bottom" align="end" className="bg-card border border-border p-6 rounded-md shadow-lg w-64">
                <ul className="space-y-4">
                  {navLinks.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="block font-mono text-sm tracking-wider text-muted-foreground hover:text-foreground transition-colors py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-sm"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </nav>
    </>
  )
} 