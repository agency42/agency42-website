"use client";

import React from "react";
import Link from "next/link";
import EmailSubscribe from "./EmailSubscribe";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white relative">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Left: Newsletter */}
          <div className="max-w-lg">
            <EmailSubscribe />
          </div>

          {/* Right: Navigation */}
          <div className="flex flex-col items-start md:items-end space-y-4 text-sm">
            <Link href="/" className="text-gray-300 hover:text-white transition-colors">
              Home
            </Link>
            <Link href="/blog" className="text-gray-300 hover:text-white transition-colors">
              Blog
            </Link>
            <Link href="/legal/privacy" className="text-gray-300 hover:text-white transition-colors">
              Privacy
            </Link>
            <Link href="/legal/terms" className="text-gray-300 hover:text-white transition-colors">
              Terms
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
