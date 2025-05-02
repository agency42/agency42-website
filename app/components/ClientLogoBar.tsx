'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { InfiniteSlider } from './InfiniteSlider';

interface ClientLogo {
  src: string;
  alt: string;
  invert?: boolean;
  url?: string;
}

interface ClientLogoBarProps extends React.HTMLAttributes<HTMLDivElement> {
  logos: ClientLogo[];
}

export function ClientLogoBar({ logos, className, ...props }: ClientLogoBarProps) {
  return (
    <div className={cn("w-full overflow-hidden py-4", className)} {...props}>
      <InfiniteSlider gap={48} duration={400} className="h-80 w-full">
        {logos.map((logo, index) => (
          <Link 
            key={`logo-${index}`}
            href={logo.url || '#'}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-80 w-auto items-center justify-center px-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-sm"
            aria-label={`Visit ${logo.alt} website`}
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              width={800}
              height={400}
              className={cn(
                "h-80 w-auto object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-200 filter grayscale contrast-125",
                logo.invert && "invert brightness-75"
              )}
            />
          </Link>
        ))}
      </InfiniteSlider>
    </div>
  );
} 