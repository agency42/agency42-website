"use client";

import Link from "next/link";

export default function SimpleFooter() {
  return (
    <footer className="px-4 sm:px-6 py-6 text-xs text-gray-500">
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        <div>© {new Date().getFullYear()} Agency/42</div>
        <nav className="flex items-center gap-4">
          <Link href="/legal/privacy" className="underline">Privacy</Link>
          <Link href="/legal/terms" className="underline">Terms</Link>
        </nav>
      </div>
    </footer>
  );
}


