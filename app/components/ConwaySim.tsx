'use client'

import * as React from "react"
import { Entropy } from "@/components/ui/entropy" // Adjusted import path

export function ConwaySim() {
  return (
    // Use theme colors and ensure full viewport height if desired
    <div className="flex flex-col items-center justify-center bg-background text-foreground min-h-[calc(100vh-4rem)] w-full p-8">
      <div className="flex flex-col items-center">
        <Entropy className="rounded-lg" />
        <div className="mt-6 text-center">
          <div className="space-y-4 font-mono text-[14px] leading-relaxed">
            <p className="italic text-neutral-400/80 tracking-wide"> {/* Use theme muted color */}
              &ldquo;Order and chaos dance &mdash;
              <span className="opacity-70">digital poetry in motion.&rdquo;</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

// Removed export { EntropyDemo } as it's default export often preferred
// If named export is needed elsewhere, we can add it back. 