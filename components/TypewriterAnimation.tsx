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
  const [showCursor, setShowCursor] = useState(true);
  const [isComplete, setIsComplete] = useState(false);

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

  // Render thinking dots
  if (isThinking) {
    return (
      <div className={cn("flex items-center justify-center", className)}>
        <span className="text-gray-400 font-mono text-lg min-w-[100px] text-center">
          thinking{thinkingDots}
        </span>
      </div>
    );
  }

  return (
    <div className={className}>
      {texts.map((text, index) => {
        const textClass = textClasses[index] || "";

        if (index < currentTextIndex) {
          // Already completed text
          return (
            <div key={index} className={cn("mb-8 last:mb-0", textClass)}>
              {text}
            </div>
          );
        } else if (index === currentTextIndex) {
          // Currently typing text
          return (
            <div key={index} className={cn("mb-8 last:mb-0", textClass)}>
              {currentText}
            </div>
          );
        }
        return null;
      })}
    </div>
  );
}
