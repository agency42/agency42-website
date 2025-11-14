"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function SiteHeader() {
  const [open, setOpen] = React.useState(false);
  const panelRef = React.useRef<HTMLDivElement | null>(null);
  React.useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (!open) return;
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) setOpen(false);
    }
    function onEsc(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false);
    }
    document.addEventListener('mousedown', onDocClick);
    document.addEventListener('keydown', onEsc);
    return () => {
      document.removeEventListener('mousedown', onDocClick);
      document.removeEventListener('keydown', onEsc);
    };
  }, [open]);
  return (
    <header className="flex items-center justify-between px-4 sm:px-6 py-3">
      <Link href="/" className="flex items-center gap-2">
        <Image src="/icons/android-chrome-192x192.png" alt="Agency/42" width={24} height={24} className="md:w-6 md:h-6" />
        <div className="text-sm uppercase tracking-wider">Agency/42</div>
      </Link>
      <div className="flex items-center">
        <button aria-label="Menu" onClick={() => setOpen((v) => !v)} className="h-6 w-6 flex flex-col items-center justify-center gap-[3px]">
          <span className="block h-[2px] w-4 bg-black" />
          <span className="block h-[2px] w-4 bg-black" />
          <span className="block h-[2px] w-4 bg-black" />
        </button>
      </div>

      {open && (
        <div ref={panelRef} className="absolute right-4 top-12 z-50 w-56 bg-white border border-gray-200 shadow-md p-3">
          <nav className="space-y-3 text-sm">
            <div>
              <Link href="/" onClick={() => setOpen(false)} className="underline">home</Link>
            </div>
            <div>
              <Link href="/blog" onClick={() => setOpen(false)} className="underline">blog</Link>
            </div>
            <div>
              <Link href="/projects" onClick={() => setOpen(false)} className="underline">archive</Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}


