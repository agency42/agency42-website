'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'

// Set to true to show the Research link
const showResearchLink = true;

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const menuVariants = {
    hidden: {
      x: '100%',
      opacity: 0,
      transition: { 
        type: 'tween',
        ease: 'easeInOut',
        duration: 0.3 
      }
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: { 
        type: 'tween',
        ease: 'easeInOut',
        duration: 0.3 
      }
    }
  }

  const backdropVariants = {
    hidden: {
      opacity: 0,
      transition: {
        duration: 0.3
      }
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3
      }
    }
  }

  const navLinks = [
    { href: "/", label: "HOME" },
    { href: "/content", label: "STORIES" },
    ...(showResearchLink ? [{ href: "/research", label: "RESEARCH" }] : []),
    { href: "/services", label: "SERVICES" },
    { href: "/company", label: "COMPANY" },
    { href: "/our-work", label: "PROJECTS" },
    { href: "https://daybloom.ai", label: "DAYBLOOM" },
    { href: "https://github.com/agency42", label: "GITHUB" }
  ]

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent text-foreground">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="font-mono text-xl tracking-wider text-foreground">
              AGENCY/42
            </Link>
            
            <Menu 
              className="h-7 w-7 text-foreground cursor-pointer" 
              onClick={toggleMenu} 
              aria-label="Toggle Menu"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') toggleMenu(); }}
            />
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              variants={backdropVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              onClick={toggleMenu} 
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
            />

            {/* Side Menu */}
            <motion.div
              key="menu"
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="fixed top-0 right-0 bottom-0 z-50 w-64 md:w-80 bg-neutral-950 border-l border-neutral-800 p-6 flex flex-col"
            >
              <div className="flex justify-between items-center mb-10">
                <span className="font-mono text-[11px] tracking-wider text-neutral-400">MENU</span>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  onClick={toggleMenu}
                  aria-label="Close Menu"
                >
                  <X className="h-5 w-5 text-neutral-400 hover:text-foreground" />
                </Button>
              </div>
              
              <nav className="flex-grow">
                <ul className="space-y-4">
                  {navLinks.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        onClick={toggleMenu} // Close menu on link click
                        className="block font-mono text-sm tracking-wider text-neutral-300 hover:text-foreground transition-colors py-2"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>

              {/* Optional Footer in Menu */}
              <div className="mt-auto pt-6 border-t border-neutral-800">
                <p className="text-neutral-500 text-xs">
                  &copy; {new Date().getFullYear()} Agency/42
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
} 