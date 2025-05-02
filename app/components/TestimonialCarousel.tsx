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

interface TestimonialCarouselProps extends React.HTMLAttributes<HTMLDivElement> {
  testimonials: TestimonialData[];
}

// Main Testimonial Carousel Component
export const TestimonialCarousel = React.forwardRef<HTMLDivElement, TestimonialCarouselProps>(
  ({ className, testimonials, ...props }, ref) => {
    const [api, setApi] = React.useState<CarouselApi>();
    const [current, setCurrent] = React.useState(0);

    React.useEffect(() => {
      if (!api) return;
      api.on("select", () => {
        setCurrent(api.selectedScrollSnap());
      });
    }, [api]);

    return (
      <div ref={ref} className={cn("py-16 bg-transparent text-black", className)} {...props}>
        {/* Main Content Container */}
        <div className="container mx-auto max-w-4xl relative z-10">
          {/* Testimonial Carousel */}
          <Carousel
            setApi={setApi}
            opts={{ loop: true }} // Enable looping
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem
                  key={index}
                  className="flex flex-col items-center text-center"
                >
                  <AnimatePresence mode="wait">
                    <motion.div 
                      key={index} // Use index as key if quotes can be identical
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.5 }}
                      className="max-w-2xl"
                    >
                      {/* Testimonial Quote - Adjusted styling */}
                      <blockquote className="italic text-xl md:text-2xl text-black/80 mb-8 font-sans leading-relaxed">
                        "{testimonial.quote}"
                      </blockquote>
                      {/* Attribution - Adjusted styling */}
                      <p className="font-mono text-sm tracking-wider text-gray-600">
                        - {testimonial.attribution}
                      </p>
                    </motion.div>
                  </AnimatePresence>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            {/* Carousel Controls */}
            <div className="mt-12 flex items-center justify-center gap-4">
              <button
                onClick={() => api?.scrollPrev()}
                aria-label="Previous testimonial"
                className="h-10 w-10 border border-black/50 text-black/60 hover:text-black hover:border-black transition-colors flex items-center justify-center"
              >
                <ArrowLeft className="h-5 w-5" />
              </button>
              
              {/* Dots Indicator */}
              <div className="flex items-center justify-center gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    className={cn(
                      "h-2 w-2 transition-colors",
                      index === current ? "bg-black" : "bg-black/30 hover:bg-black/50"
                    )}
                    onClick={() => api?.scrollTo(index)}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              
              <button
                onClick={() => api?.scrollNext()}
                aria-label="Next testimonial"
                className="h-10 w-10 border border-black/50 text-black/60 hover:text-black hover:border-black transition-colors flex items-center justify-center"
              >
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </Carousel>
        </div>
      </div>
    );
  }
);

TestimonialCarousel.displayName = "TestimonialCarousel";

// No need for the demo export function in the final component 