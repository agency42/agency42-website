import React from 'react'
import type { Metadata } from 'next'
import { Inter, IBM_Plex_Mono, DotGothic16 } from "next/font/google"
import './globals.css'
import Navigation from './components/Navigation'
import { PostHogProvider } from './providers/PostHogProvider'

// Instantiate the fonts
const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap',
  variable: '--font-ibm-plex-mono',
})

const pixelFont = DotGothic16({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
  variable: '--font-pixel',
})

export const metadata: Metadata = {
  title: 'Agency42',
  description: 'AI innovation studio',
  icons: {
    icon: [
      {
        url: '/favicon/favicon.ico',
        sizes: 'any',
      },
      {
        url: '/favicon/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png',
      },
      {
        url: '/favicon/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png',
      }
    ],
    apple: {
      url: '/favicon/apple-touch-icon.png',
      sizes: '180x180',
      type: 'image/png',
    },
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
}

interface RootLayoutProps {
  children: React.ReactNode
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en" className={`${inter.variable} ${ibmPlexMono.variable} ${pixelFont.variable} font-sans`}>
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
      <body>
        <PostHogProvider>
          <Navigation />
          {children}
        </PostHogProvider>
      </body>
    </html>
  )
}

export default RootLayout 