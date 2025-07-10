"use client";

import React from "react";
import Link from "next/link";
import {
  CenterUnderline,
  ComesInGoesOutUnderline,
  GoesOutComesInUnderline,
} from "@/components/ui/underline-animation"; // Assuming path

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white relative">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Column 1: Branding */}
          <div>
            <h3 className="font-heading text-2xl mb-4 text-white">Agency/42</h3>
            <p className="text-gray-400 text-sm font-sans leading-relaxed">
              Versatile AI consulting for the modern era.
            </p>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-gray-300 mb-6">
              Navigate
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/">
                  <CenterUnderline
                    label="Home"
                    className="text-gray-300 hover:text-white font-sans transition-colors duration-200"
                  />
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <CenterUnderline
                    label="Services"
                    className="text-gray-300 hover:text-white font-sans transition-colors duration-200"
                  />
                </Link>
              </li>
              <li>
                <Link href="/content">
                  <CenterUnderline
                    label="Stories"
                    className="text-gray-300 hover:text-white font-sans transition-colors duration-200"
                  />
                </Link>
              </li>
              <li>
                <Link href="/company">
                  <CenterUnderline
                    label="Company"
                    className="text-gray-300 hover:text-white font-sans transition-colors duration-200"
                  />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-gray-300 mb-6">
              Connect
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="mailto:hello@agency42.co">
                  <GoesOutComesInUnderline
                    label="hello@agency42.co"
                    direction="left"
                    className="text-gray-300 hover:text-white font-sans transition-colors duration-200"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/company/agency42co"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ComesInGoesOutUnderline
                    label="LinkedIn"
                    direction="right"
                    className="text-gray-300 hover:text-white font-sans transition-colors duration-200"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://x.com/agency42co"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ComesInGoesOutUnderline
                    label="Twitter/X"
                    direction="left"
                    className="text-gray-300 hover:text-white font-sans transition-colors duration-200"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/@bootoshi"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ComesInGoesOutUnderline
                    label="YouTube"
                    direction="right"
                    className="text-gray-300 hover:text-white font-sans transition-colors duration-200"
                  />
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Legal */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-gray-300 mb-6">
              Legal
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/legal/privacy">
                  <CenterUnderline
                    label="Privacy Policy"
                    className="text-gray-300 hover:text-white font-sans transition-colors duration-200"
                  />
                </Link>
              </li>
              <li>
                <Link href="/legal/terms">
                  <CenterUnderline
                    label="Terms of Service"
                    className="text-gray-300 hover:text-white font-sans transition-colors duration-200"
                  />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400 text-sm font-mono">
            &copy; {currentYear} Agency/42. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
