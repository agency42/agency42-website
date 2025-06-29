import React, { Suspense } from 'react'
import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { IBM_Plex_Mono } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import { PostHogProvider } from './providers/PostHogProvider'
import { Footer } from '@/components/Footer'

// Instantiate the fonts
const inter = localFont({
  src: [
    {
      path: './fonts/Inter-Variable.woff2',
      weight: '100 900', // Variable font weight range
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-inter',
})

const ibmPlexMono = IBM_Plex_Mono({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-ibm-plex-mono',
})

const pixelFont = localFont({
  src: [
    {
      path: './fonts/DotGothic16-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-pixel',
})

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'; // Define your base URL

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL), // Important for absolute URLs in OG/Twitter images
  title: {
    default: 'Agency 42 | Human Efficiency Through AI', // Default title
    template: '%s | Agency 42', // Template for page-specific titles
  },
  description: 'Agency 42 partners with teams to map, prototype, and deploy high-impact AI workflows, turning unknown-unknowns into 10x outcomes.', // More descriptive default
  icons: {
    icon: [
      {
        url: '/favicon/favicon.ico',
        sizes: 'any',
        rel: 'icon', // Ensure rel: 'icon' is present
      },
      {
        url: '/favicon/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png',
        rel: 'icon',
      },
      {
        url: '/favicon/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png',
        rel: 'icon',
      }
    ],
    apple: [ // Ensure apple is an array
        {
            url: '/favicon/apple-touch-icon.png',
            sizes: '180x180',
            type: 'image/png',
        }
    ],
    other: [
      {
        rel: 'manifest',
        url: '/favicon/site.webmanifest',
      },
      {
        url: '/favicon/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        url: '/favicon/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      }
    ],
  },
  // Add Open Graph and Twitter metadata defaults
  openGraph: {
    title: 'Agency 42 | Human Efficiency Through AI',
    description: 'Agency 42 partners with teams to map, prototype, and deploy high-impact AI workflows.',
    url: BASE_URL,
    siteName: 'Agency 42',
    // Add a default image for sharing
    images: [
      {
        url: '/content/images/og-default.png', // Replace with your actual default OG image path
        width: 1200,
        height: 630,
        alt: 'Agency 42 Logo and tagline',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Agency 42 | Human Efficiency Through AI',
    description: 'Agency 42 partners with teams to map, prototype, and deploy high-impact AI workflows.',
    // Add the same default image or a Twitter-specific one
    images: ['/content/images/og-default.png'], // Replace with your actual default Twitter image path
    // Optional: Add Twitter site handle if you have one
    // site: '@agency42co',
    // Optional: Add Twitter creator handle if relevant
    // creator: '@bootoshi',
  },
  // Optional: Add robots meta tag configuration if needed
  // robots: {
  //   index: true,
  //   follow: true,
  //   googleBot: {
  //     index: true,
  //     follow: true,
  //     'max-video-preview': -1,
  //     'max-image-preview': 'large',
  //     'max-snippet': -1,
  //   },
  // },
}

interface RootLayoutProps {
  children: React.ReactNode
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en" className={`${inter.variable} ${ibmPlexMono.variable} ${pixelFont.variable} font-mono`}>
      <head>
        {/* Plausible Analytics */}
        {process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN && (
          <script 
            defer 
            data-domain={process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN} 
            src="https://plausible.io/js/script.js"
          ></script>
        )}
      </head>
      <body className="bg-white text-black">
        <Suspense fallback={null}>
          <PostHogProvider>
            <Navigation />
            <main className="w-full">
              {children}
            </main>
            <Footer />
          </PostHogProvider>
        </Suspense>
      </body>
    </html>
  )
}

export default RootLayout 