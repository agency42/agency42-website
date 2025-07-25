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
      <div className="absolute inset-0 bg-white/85 backdrop-blur-sm" />

      <div className="relative z-10 w-full max-w-5xl px-4">
        <div className="flex flex-col items-center space-y-12 md:space-y-16">
          {/* Logo */}
          <Image
            src="/images/logos/agency42.png"
            alt="Agency 42"
            width={360}
            height={180}
            className="h-28 sm:h-36 md:h-44 w-auto object-contain"
          />

          {/* Animated Tagline */}
          <TypewriterAnimation
            texts={[
              "Build tomorrow's competitive edge.",
              "We turn your AI ambitions into real-world advantages.",
            ]}
            textClasses={[
              "text-3xl md:text-4xl lg:text-5xl font-heading font-normal text-black tracking-tight leading-[1.05] text-center",
              "text-base md:text-lg text-black font-sans leading-relaxed text-center max-w-3xl mx-auto",
            ]}
            onComplete={() => setShowButton(true)}
            className="flex flex-col justify-center items-center text-center"
            speed={30}
            thinkingDuration={1500}
          />

          {/* Button */}
          <div className="h-14 flex items-center justify-center">
            {showButton && (
              <div className="opacity-0 animate-fade-in">
                <Link
                  href="/services#contact"
                  className="inline-block bg-black text-white font-mono text-sm font-medium tracking-wide px-10 py-4 hover:bg-gray-900 transition-colors duration-200"
                >
                  Get Started
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
