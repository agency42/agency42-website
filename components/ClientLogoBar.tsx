"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { InfiniteSlider } from "./InfiniteSlider";

interface ClientLogo {
  src: string;
  alt: string;
  invert?: boolean;
  url?: string;
}

interface ClientLogoBarProps extends React.HTMLAttributes<HTMLDivElement> {
  logos: ClientLogo[];
}

export function ClientLogoBar({
  logos,
  className,
  ...props
}: ClientLogoBarProps) {
  return (
    <div className={cn("w-full overflow-hidden", className)} {...props}>
      <InfiniteSlider gap={10} duration={100} className="h-56 w-full">
        {logos.map((logo, index) => (
          <Link
            key={`logo-${index}`}
            href={logo.url || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-56 w-auto items-center justify-center px-16 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-sm group"
            aria-label={`Visit ${logo.alt} website`}
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              width={400}
              height={200}
              className={cn(
                "h-40 w-auto object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300 filter grayscale hover:grayscale-0",
                logo.invert && "invert",
                logo.alt === "Prerich" && "h-12"
              )}
            />
          </Link>
        ))}
      </InfiniteSlider>
    </div>
  );
}
