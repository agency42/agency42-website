"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { ArrowLeft, ArrowRight } from "lucide-react";

// Define client logo interface
interface ClientLogo {
  src: string;
  alt: string;
}

interface ClientCarouselProps extends React.HTMLAttributes<HTMLDivElement> {
  logos: ClientLogo[];
  autoplayInterval?: number; // milliseconds
}

export const ClientCarousel = React.forwardRef<HTMLDivElement, ClientCarouselProps>(
  ({ className, logos, autoplayInterval = 3000, ...props }, ref) => {
    const [api, setApi] = React.useState<CarouselApi>();
    const [current, setCurrent] = React.useState(0);
    const [autoplay, setAutoplay] = React.useState(true);

    // Handle auto-scrolling
    React.useEffect(() => {
      if (!api || !autoplay) return;
      
      const interval = setInterval(() => {
        api.scrollNext();
      }, autoplayInterval);
      
      return () => clearInterval(interval);
    }, [api, autoplay, autoplayInterval]);

    // Pause autoplay when user interacts with the carousel
    const pauseAutoplay = React.useCallback(() => {
      setAutoplay(false);
      // Resume after a period of inactivity
      const timeout = setTimeout(() => setAutoplay(true), 5000);
      return () => clearTimeout(timeout);
    }, []);

    React.useEffect(() => {
      if (!api) return;
      
      const handleSelect = () => {
        setCurrent(api.selectedScrollSnap());
      };
      
      const handlePointerDown = () => {
        pauseAutoplay();
      };
      
      // Add event listeners
      api.on("select", handleSelect);
      api.on("pointerDown", handlePointerDown);
      
      // Cleanup function to remove event listeners
      return () => {
        api.off("select", handleSelect);
        api.off("pointerDown", handlePointerDown);
      };
    }, [api, pauseAutoplay]);

    return (
      <div 
        ref={ref} 
        className={cn("relative w-full", className)} 
        {...props}
        onMouseEnter={() => setAutoplay(false)}
        onMouseLeave={() => setAutoplay(true)}
      >
        {/* Fade gradient on left */}
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent z-10" />
        
        {/* Main carousel */}
        <Carousel
          setApi={setApi}
          opts={{ 
            loop: true,
            align: "start",
            dragFree: true,
            skipSnaps: true
          }}
          className="w-full"
        >
          <CarouselContent className="py-6">
            {logos.map((logo, index) => (
              <CarouselItem key={index} className="basis-1/2 md:basis-1/3 lg:basis-1/4 pl-4">
                <div className="flex items-center justify-center h-20 px-4">
                  <Image 
                    src={logo.src} 
                    alt={logo.alt} 
                    width={120} 
                    height={60} 
                    className={cn(
                      "object-contain opacity-80 hover:opacity-100 transition-opacity duration-200 filter grayscale contrast-125",
                      // Invert specific light logos to make them visible on white bg
                      logo.src === '/logos/prerich.png' && "invert brightness-75"
                    )}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          
          {/* Fade gradient on right */}
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent z-10" />
          
          {/* Controls */}
          <div className="flex items-center justify-end gap-2 mt-4 mr-4">
            <button
              onClick={() => {
                api?.scrollPrev();
                pauseAutoplay();
              }}
              aria-label="Previous logos"
              className="h-8 w-8 border border-black/40 text-black/60 hover:text-black hover:border-black transition-colors flex items-center justify-center rounded-full"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>
            <button
              onClick={() => {
                api?.scrollNext();
                pauseAutoplay();
              }}
              aria-label="Next logos"
              className="h-8 w-8 border border-black/40 text-black/60 hover:text-black hover:border-black transition-colors flex items-center justify-center rounded-full"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </Carousel>
      </div>
    );
  }
);

ClientCarousel.displayName = "ClientCarousel"; 