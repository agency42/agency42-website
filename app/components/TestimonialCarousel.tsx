"use client";

import * as React from "react";
import { cn } from "@/lib/utils"; // Assuming you have this utility
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"; // Make sure this path is correct
import { ArrowLeft, ArrowRight } from "lucide-react";

// Updated interface to match HomePageClient data
interface TestimonialData {
  quote: string;
  attribution: string;
}

interface TestimonialCarouselProps
  extends React.HTMLAttributes<HTMLDivElement> {
  testimonials: TestimonialData[];
}

// Main Testimonial Carousel Component
export const TestimonialCarousel = React.forwardRef<
  HTMLDivElement,
  TestimonialCarouselProps
>(({ className, testimonials, ...props }, ref) => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    if (!api) return;
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <div ref={ref} className={cn("w-full", className)} {...props}>
      {/* Main Content Container */}
      <div className="max-w-4xl mx-auto relative">
        {/* Testimonial Carousel */}
        <Carousel setApi={setApi} opts={{ loop: true }} className="w-full">
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem
                key={index}
                className="flex flex-col items-center text-center px-8"
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="w-full"
                  >
                    {/* Testimonial Quote */}
                    <blockquote className="text-xl md:text-2xl text-gray-800 mb-8 font-sans leading-relaxed max-w-3xl mx-auto">
                      "{testimonial.quote}"
                    </blockquote>
                    {/* Attribution */}
                    <p className="font-mono text-xs uppercase tracking-widest text-gray-500">
                      {testimonial.attribution}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Dots Indicator - Clean and minimal */}
          <div className="mt-12 flex items-center justify-center gap-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={cn(
                  "w-2 h-2 rounded-full transition-all duration-200",
                  index === current
                    ? "bg-black w-8"
                    : "bg-gray-300 hover:bg-gray-400"
                )}
                onClick={() => api?.scrollTo(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </Carousel>
      </div>
    </div>
  );
});

TestimonialCarousel.displayName = "TestimonialCarousel";

// No need for the demo export function in the final component
