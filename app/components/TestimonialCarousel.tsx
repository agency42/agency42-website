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
import { ArrowLeft, ArrowRight, Sparkles } from "lucide-react";

// Updated interface to match HomePageClient data
interface TestimonialData {
  quote: string;
  attribution: string;
}

interface ClientLogoData {
  src: string;
  alt: string;
}

interface TestimonialCarouselProps extends React.HTMLAttributes<HTMLDivElement> {
  testimonials: TestimonialData[];
  clientLogos: ClientLogoData[];
}

// Sparkles component remains the same as generated
const SparklesCore = ({
  id,
  className,
  background,
  minSize,
  maxSize,
  speed,
  particleColor,
  particleDensity,
}: {
  id: string;
  className?: string;
  background?: string;
  minSize?: number;
  maxSize?: number;
  speed?: number;
  particleColor?: string;
  particleDensity?: number;
}) => {
  const particles = React.useMemo(() => {
    const particleList = [];
    const density = particleDensity || 100;
    for (let i = 0; i < density; i++) {
      const size = Math.floor(Math.random() * (maxSize || 5) + (minSize || 1));
      particleList.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: size,
        blurSize: size * 2,
        speed: Math.random() * (speed || 1) + 0.2,
        color: particleColor || "#fff", // Will likely need adjustment for dark theme
      });
    }
    return particleList;
  }, [maxSize, minSize, particleColor, particleDensity, speed]);

  return (
    <div
      className={cn(
        "h-full w-full absolute inset-0 overflow-hidden",
        className
      )}
    >
      <svg
        id={id}
        width="100%"
        height="100%"
        className="absolute inset-0"
        style={{
          background: background || "transparent",
        }}
      >
        {particles.map((particle) => (
          <circle
            key={particle.id}
            cx={`${particle.x}%`}
            cy={`${particle.y}%`}
            r={particle.size}
            fill={particle.color} // Will likely need adjustment
            className="animate-pulse"
            style={{
              animationDuration: `${particle.speed}s`,
              filter: `blur(${particle.blurSize}px)`,
            }}
          />
        ))}
      </svg>
    </div>
  );
};

// Main Testimonial Carousel Component
export const TestimonialCarousel = React.forwardRef<HTMLDivElement, TestimonialCarouselProps>(
  ({ className, testimonials, clientLogos, ...props }, ref) => {
    const [api, setApi] = React.useState<CarouselApi>();
    const [current, setCurrent] = React.useState(0);
    const [logoElements, setLogoElements] = React.useState<React.ReactNode[]>([]);

    React.useEffect(() => {
      if (!api) return;
      api.on("select", () => {
        setCurrent(api.selectedScrollSnap());
      });
    }, [api]);

    React.useEffect(() => {
      // Create logo elements for the ticker
      const logos = clientLogos.map((logo, idx) => (
        <div key={`${logo.alt}-${idx}`} className="relative h-32 w-64 flex-shrink-0">
          <Image 
            src={logo.src} 
            alt={logo.alt} 
            fill
            className="object-cover opacity-60"
            unoptimized
          />
        </div>
      ));
      // Repeat logos to create a continuous scroll effect
      setLogoElements([...logos, ...logos, ...logos]); 
    }, [clientLogos]);

    return (
      <div ref={ref} className={cn("py-24 md:py-32 relative bg-background text-foreground overflow-hidden", className)} {...props}>
        {/* Sparkles Background - Adjust color for dark theme */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <SparklesCore
            id="sparkles-testimonials"
            background="transparent"
            minSize={0.4}
            maxSize={1}
            particleColor="#A0A0A0" // Adjusted color
            particleDensity={30}
            speed={1.2}
            className="h-full w-full"
          />
        </div>

        {/* Main Content Container */}
        <div className="container mx-auto max-w-4xl relative z-10">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-heading font-medium text-center mb-16">
            Loved by leading innovators
          </h2>
          
          {/* Logo Ticker Section */}
          <div className="relative w-full overflow-hidden h-36 mb-16">
            {/* Optional: Add subtle gradient fades at the edges */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
            
            <motion.div 
              className="flex items-center absolute left-0 top-0 bottom-0 whitespace-nowrap"
              animate={{
                x: ["0%", "-33.333%"] // Animate exactly one-third of the width for seamless loop
              }}
              transition={{
                x: {
                  duration: 55, // Adjusted duration for size change
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "linear",
                },
              }}
            >
              {logoElements}
            </motion.div>
          </div>

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
                      <blockquote className="italic text-xl md:text-2xl text-neutral-300 mb-8 font-sans leading-relaxed">
                        "{testimonial.quote}"
                      </blockquote>
                      {/* Attribution - Adjusted styling */}
                      <p className="font-mono text-sm tracking-wider text-neutral-400">
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
                className="h-10 w-10 rounded-full border border-neutral-700 text-neutral-500 hover:text-foreground hover:border-foreground transition-colors flex items-center justify-center"
              >
                <ArrowLeft className="h-5 w-5" />
              </button>
              
              {/* Dots Indicator */}
              <div className="flex items-center justify-center gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    className={cn(
                      "h-2 w-2 rounded-full transition-colors",
                      index === current ? "bg-foreground" : "bg-neutral-700 hover:bg-neutral-500"
                    )}
                    onClick={() => api?.scrollTo(index)}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              
              <button
                onClick={() => api?.scrollNext()}
                aria-label="Next testimonial"
                className="h-10 w-10 rounded-full border border-neutral-700 text-neutral-500 hover:text-foreground hover:border-foreground transition-colors flex items-center justify-center"
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