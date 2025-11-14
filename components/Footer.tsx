"use client";

import React from "react";
import Link from "next/link";
import EmailSubscribe from "./EmailSubscribe";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white relative">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-16">
        <div className="flex flex-col gap-12 md:flex-row md:items-start md:justify-between">
          {/* Left: Newsletter */}
          <div className="flex-1 w-full">
            <EmailSubscribe />
          </div>

          {/* Right: Navigation */}
          <div className="flex flex-col items-start md:items-end space-y-4 text-sm md:text-right">
            <Link href="/" className="text-gray-300 hover:text-white transition-colors">
              home
            </Link>
            <Link href="/blog" className="text-gray-300 hover:text-white transition-colors">
              blog
            </Link>
            <Link href="/legal/privacy" className="text-gray-300 hover:text-white transition-colors">
              privacy
            </Link>
            <Link href="/legal/terms" className="text-gray-300 hover:text-white transition-colors">
              terms
            </Link>
            <p className="text-gray-500 text-xs mt-8">
              &copy; {currentYear} Agency/42
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
