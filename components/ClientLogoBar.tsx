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
      <InfiniteSlider gap={40} duration={150} className="h-20 w-full">
        {logos.map((logo, index) => (
          <Link
            key={`logo-${index}`}
            href={logo.url || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-20 w-auto items-center justify-center px-8 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-sm group"
            aria-label={`Visit ${logo.alt} website`}
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              width={100}
              height={60}
              className={cn(
                "h-10 w-auto max-w-[100px] object-contain opacity-50 group-hover:opacity-100 transition-opacity duration-300 filter grayscale hover:grayscale-0",
                logo.invert && "invert",
                logo.alt === "WiserX" && "h-15",
                logo.alt === "GameOver" && "h-15",
                logo.alt === "Story Protocol" && "h-15",
                logo.alt === "Prerich" && "h-10",
                logo.alt === "FSU" && "h-10",
                logo.alt === "Kinn" && "h-10"
              )}
            />
          </Link>
        ))}
      </InfiniteSlider>
    </div>
  );
}
