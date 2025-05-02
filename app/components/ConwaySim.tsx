'use client'

import * as React from "react"
import { Entropy } from "@/components/ui/entropy" // Adjusted import path

// Add speed, initialDensity, and preWarmSteps props to the interface
interface ConwaySimProps {
  speed?: number; 
  initialDensity?: number;
  preWarmSteps?: number; // New prop
}

// Accept props and pass them to Entropy
export function ConwaySim({ speed, initialDensity, preWarmSteps }: ConwaySimProps) {
  return (
    // Use theme colors and ensure full viewport height if desired
    <div className="flex flex-col items-center justify-center bg-background text-foreground w-full p-8">
      <div className="flex flex-col items-center">
        <Entropy 
          className="rounded-lg" 
          speed={speed} 
          initialDensity={initialDensity}
          preWarmSteps={preWarmSteps} // Pass prop here
        /> 
      </div>
    </div>
  )
}

// Removed export { EntropyDemo } as it's default export often preferred
// If named export is needed elsewhere, we can add it back. 