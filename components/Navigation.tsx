"use client";

import React, { useState } from "react";
import Link from "next/link";

// Set to true to show the Research link
const showResearchLink = false;

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "HOME" },
    { href: "/services", label: "SERVICES" },
    { href: "/projects", label: "OUR WORK" },
    { href: "/content", label: "STORIES" },
    ...(showResearchLink ? [{ href: "/research", label: "RESEARCH" }] : []),
    { href: "/company", label: "COMPANY" },
    { href: "https://daybloom.ai", label: "DAYBLOOM" },
    { href: "https://improbable.beehiiv.com/", label: "NEWSLETTER" },
    { href: "https://github.com/agency42", label: "GITHUB" },
    { href: "/services#contact", label: "CONTACT" },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="container mx-auto px-6">
          {/* Top Bar - Always Visible */}
          <div className="flex justify-between items-center h-20">
            <Link
              href="/"
              className="font-mono text-xl tracking-wider text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 rounded-sm"
            >
              <span className="text-black font-bold flex items-baseline">
                <span className="text-3xl leading-none mr-[2px] relative -top-[2px]">
                  △
                </span>
              </span>
            </Link>

            {/* Menu Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="group h-8 w-8 flex items-center justify-center text-black hover:text-gray-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 rounded-sm transition-colors"
              aria-label="Toggle Menu"
              aria-expanded={isOpen}
            >
              <svg
                className="pointer-events-none"
                width={20}
                height={20}
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
                  className={`origin-center transition-all duration-300 ease-out ${
                    isOpen ? "rotate-45 translate-y-0" : "-translate-y-[7px]"
                  }`}
                />
                <path
                  d="M4 12H20"
                  className={`origin-center transition-all duration-300 ease-out ${
                    isOpen ? "opacity-0" : "opacity-100"
                  }`}
                />
                <path
                  d="M4 12H20"
                  className={`origin-center transition-all duration-300 ease-out ${
                    isOpen ? "-rotate-45 translate-y-0" : "translate-y-[7px]"
                  }`}
                />
              </svg>
            </button>
          </div>

          {/* Expanded Menu */}
          <div
            className={`overflow-hidden transition-all duration-500 ease-out ${
              isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="pb-8 pt-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 justify-items-center">
                {navLinks.map((link, index) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`group block font-mono text-sm tracking-widest text-gray-600 hover:text-black transition-all duration-300 py-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-sm transform hover:translate-y-[-1px] ${
                      isOpen ? "animate-fade-in-up" : ""
                    }`}
                    style={{
                      animationDelay: `${index * 50}ms`,
                      animationFillMode: "both",
                    }}
                  >
                    <span className="border-b border-transparent group-hover:border-black transition-all duration-300">
                      {link.label}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
        }
      `}</style>
    </>
  );
}
