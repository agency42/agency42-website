"use client";

import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface TypewriterAnimationProps {
  texts: string[];
  onComplete?: () => void;
  className?: string;
  speed?: number;
  thinkingDuration?: number;
  textClasses?: string[];
}

export function TypewriterAnimation({
  texts,
  onComplete,
  className,
  speed = 50,
  thinkingDuration = 2000,
  textClasses = [],
}: TypewriterAnimationProps) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isThinking, setIsThinking] = useState(true);
  const [, setShowCursor] = useState(true);
  const [, setIsComplete] = useState(false);

  // Thinking dots animation
  const [thinkingDots, setThinkingDots] = useState("");

  // Handle the initial "thinking…" phase
  useEffect(() => {
    if (!isThinking) return; // Skip when we're done thinking

    const thinkingInterval = setInterval(() => {
      setThinkingDots((prev) => (prev.length >= 3 ? "" : prev + "."));
    }, 500);

    const thinkingTimer = setTimeout(() => {
      setIsThinking(false);
      setThinkingDots("");
    }, thinkingDuration);

    // Clean-up on unmount or when dependencies change
    return () => {
      clearInterval(thinkingInterval);
      clearTimeout(thinkingTimer);
    };
  }, [isThinking, thinkingDuration]);

  // Typewriter effect
  useEffect(() => {
    if (isThinking || currentTextIndex >= texts.length) return;

    const targetText = texts[currentTextIndex];

    if (currentText.length < targetText.length) {
      const timer = setTimeout(() => {
        setCurrentText(targetText.slice(0, currentText.length + 1));
      }, speed);
      return () => clearTimeout(timer);
    } else {
      // Current text is complete, move to next after a pause
      const timer = setTimeout(() => {
        if (currentTextIndex < texts.length - 1) {
          setCurrentTextIndex(currentTextIndex + 1);
          setCurrentText("");
        } else {
          setIsComplete(true);
          onComplete?.();
        }
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [currentText, currentTextIndex, texts, speed, isThinking, onComplete]);

  // Cursor blinking effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <div className={cn("relative", className)}>
      {/*
        INVISIBLE PLACEHOLDER
        This sets the final height of the component.
        The structure here must be IDENTICAL to the animated block below.
      */}
      <div className="opacity-0" aria-hidden={true}>
        {texts.map((text, index) => (
          <div
            key={`placeholder-${index}`}
            className={cn("mb-8 last:mb-0", textClasses[index] || "")}
          >
            {text}
          </div>
        ))}
      </div>

      {/*
        ANIMATED OVERLAY
        This is absolutely positioned and sits on top of the placeholder.
      */}
      <div className="absolute inset-0">
        {isThinking ? (
          // Center the "thinking" text vertically and horizontally inside the overlay
          <div className="h-full flex justify-center items-center">
            <span className="text-gray-400 font-mono text-lg">
              thinking{thinkingDots}
            </span>
          </div>
        ) : (
          // When typing, the structure is IDENTICAL to the placeholder block.
          texts.map((text, index) => {
            const textClass = cn("mb-8 last:mb-0", textClasses[index] || "");

            // Render completed text
            if (index < currentTextIndex) {
              return (
                <div key={index} className={textClass}>
                  {text}
                </div>
              );
            }

            // Render currently typing text
            if (index === currentTextIndex) {
              // Use a non-breaking space to prevent height collapse on empty string
              return (
                <div key={index} className={textClass}>
                  {currentText || "\u00A0"}
                </div>
              );
            }

            // Render future text invisibly to hold space and maintain structure
            return (
              <div
                key={index}
                className={cn(textClass, "opacity-0")}
                aria-hidden={true}
              >
                {text}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
