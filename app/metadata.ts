// Metadata configuration for the home page
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Agency42 - AI Innovation Studio',
  description: 'We help build AI-first ventures. An AI innovation studio that believes in the power of open source, community, and talent.',
  openGraph: {
    images: ['/content/images/42-logo.png'],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/content/images/42-logo.png'],
  }
} 