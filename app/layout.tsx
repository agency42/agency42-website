import React, { Suspense } from 'react'
import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { IBM_Plex_Mono, Lato } from 'next/font/google'
import './globals.css'
import SiteHeader from '@/components/SiteHeader'
import { PostHogProvider } from './providers/PostHogProvider'
import { Footer } from '@/components/Footer'

// Instantiate the fonts
const inter = localFont({
  src: [
    {
      path: './fonts/Inter-Variable.woff2',
      weight: '100 900',
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

const lato = Lato({
  weight: ['300', '400', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lato',
})

const pixelFont = localFont({
  src: [{ path: './fonts/DotGothic16-Regular.ttf', weight: '400', style: 'normal' }],
  display: 'swap',
  variable: '--font-pixel',
})

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'; // Define your base URL

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL), // Important for absolute URLs in OG/Twitter images
  title: {
    default: "Agency/42 | Applied Intelligence Studio",
    template: '%s | Agency/42',
  },
  description: "Applied intelligence studio based in Los Angeles. We work with select clients to integrate AI into business and social applications.",
  icons: {
    icon: [
      {
        url: '/icons/favicon.ico',
        sizes: 'any',
        rel: 'icon', // Ensure rel: 'icon' is present
      },
      {
        url: '/icons/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png',
        rel: 'icon',
      },
      {
        url: '/icons/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png',
        rel: 'icon',
      }
    ],
    apple: [ // Ensure apple is an array
        {
            url: '/icons/apple-touch-icon.png',
            sizes: '180x180',
            type: 'image/png',
        }
    ],
    other: [
      {
        rel: 'manifest',
        url: '/icons/site.webmanifest',
      },
      {
        url: '/icons/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        url: '/icons/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      }
    ],
  },
  // Add Open Graph and Twitter metadata defaults
  openGraph: {
    title: "Agency/42 | Applied Intelligence Studio",
    description: "Applied intelligence studio based in Los Angeles. We work with select clients to integrate AI into business and social applications.",
    url: BASE_URL,
    siteName: 'Agency/42',
    images: [
      {
        url: '/images/content/cybernet.jpeg',
        width: 1200,
        height: 630,
        alt: 'Agency/42 - Applied Intelligence Studio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Agency/42 | Applied Intelligence Studio",
    description: "Applied intelligence studio based in Los Angeles. We work with select clients to integrate AI into business and social applications.",
    images: ['/images/content/cybernet.jpeg'],
  },
}

interface RootLayoutProps {
  children: React.ReactNode
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en" className={`${inter.variable} ${ibmPlexMono.variable} ${lato.variable} ${pixelFont.variable} font-mono`}>
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
      <body className="bg-white text-black min-h-screen flex flex-col">
        <Suspense fallback={null}>
          <PostHogProvider>
            <SiteHeader />
            <main className="w-full flex-1 max-w-full">
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