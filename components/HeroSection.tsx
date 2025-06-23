"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { TypewriterAnimation } from "./TypewriterAnimation";

export function HeroSection() {
  const [showButton, setShowButton] = useState(false);

  return (
    <section className="min-h-[calc(100vh-5rem)] flex items-center justify-center relative">
      {/* Semi-transparent overlay for better text readability */}
      <div className="absolute inset-0 bg-white/90 backdrop-blur-sm" />

      <div className="relative z-10 text-center px-4">
        {/* Logo - better sized */}
        <div className="flex justify-center mb-16">
          <Image
            src="/content/images/logos/agency42.png"
            alt="Agency 42"
            width={300}
            height={150}
            className="h-32 md:h-40 w-auto object-contain"
          />
        </div>

        {/* Animated tagline */}
        <div className="max-w-5xl mx-auto">
          <TypewriterAnimation
            texts={[
              "From AI Ambition to Action.",
              "We don't just build AI systems. We build your team's capability to command them.",
            ]}
            textClasses={[
              "text-3xl md:text-4xl lg:text-5xl font-heading font-normal text-black tracking-tight leading-[1.05] text-center",
              "text-base md:text-lg text-gray-600 font-sans leading-relaxed text-center max-w-3xl mx-auto",
            ]}
            onComplete={() => setShowButton(true)}
            className="min-h-[200px] flex flex-col justify-center items-center"
            speed={30}
            thinkingDuration={1500}
          />

          {/* Button container - always present to prevent layout shift */}
          <div className="text-center mt-16 h-14 flex items-center justify-center">
            {showButton && (
              <div className="opacity-0 animate-fade-in">
                <Link
                  href="/services#contact"
                  className="inline-block bg-black text-white font-mono text-sm font-medium tracking-wide px-10 py-4 hover:bg-gray-900 transition-colors duration-200"
                >
                  Analyze My Needs
                </Link>
                <style jsx>{`
                  .animate-fade-in {
                    animation: fadeIn 0.5s ease-in-out forwards;
                  }

                  @keyframes fadeIn {
                    from {
                      opacity: 0;
                      transform: translateY(10px);
                    }
                    to {
                      opacity: 1;
                      transform: translateY(0);
                    }
                  }
                `}</style>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
