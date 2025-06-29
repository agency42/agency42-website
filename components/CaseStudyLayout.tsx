import React from 'react'
import Image from 'next/image'

interface Heading {
  level: number;
  text: string;
  slug: string;
}

interface CaseStudyLayoutProps {
  title: string
  hero?: string
  stats?: {
    hours_saved?: number
    annual_value?: number
    roi_months?: number
  }
  contentHtml: string
  headings?: Heading[]
  diagrams?: string[]
}

export default function CaseStudyLayout({ title, hero, stats, contentHtml, headings = [], diagrams = [] }: CaseStudyLayoutProps) {
  return (
    <article className="min-h-screen bg-white text-black pt-16 md:pt-20">
      <header className="container mx-auto max-w-5xl px-4 pt-8 md:pt-12">
        <h1 className="text-3xl md:text-5xl font-heading font-extrabold mb-4 text-center">{title}</h1>

        {hero && (
          <div className="relative aspect-video w-full my-6 md:my-8 rounded-lg overflow-hidden border border-gray-200">
            <Image
              src={hero}
              alt={title}
              fill
              className="object-cover"
              priority // Prioritize loading the hero image
            />
          </div>
        )}

        {stats && (
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 my-8">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-center">
              {stats.hours_saved && (
                <div>
                  <p className="text-2xl md:text-3xl font-heading font-extrabold">{stats.hours_saved.toLocaleString()}+</p>
                  <p className="text-xs md:text-sm font-mono uppercase tracking-wider text-gray-600">Hours Saved</p>
                </div>
              )}
              {stats.annual_value && (
                <div>
                  <p className="text-2xl md:text-3xl font-heading font-extrabold">${(stats.annual_value / 1000).toFixed(0)}k+</p>
                  <p className="text-xs md:text-sm font-mono uppercase tracking-wider text-gray-600">Annual Value</p>
                </div>
              )}
              {stats.roi_months && (
                <div>
                  <p className="text-2xl md:text-3xl font-heading font-extrabold">{stats.roi_months}</p>
                  <p className="text-xs md:text-sm font-mono uppercase tracking-wider text-gray-600">Months to ROI</p>
                </div>
              )}
            </div>
          </div>
        )}
      </header>

      <main className="container mx-auto max-w-5xl px-4 py-8">
        <div className="flex flex-col md:flex-row md:gap-12">
          <div className="md:flex-1">
            <div
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: contentHtml }}
            />

            {diagrams.length > 0 && (
              <div className="mt-12 space-y-8">
                {diagrams.map((src, index) => (
                  <div key={index} className="relative aspect-video w-full rounded-lg overflow-hidden border border-gray-200 bg-gray-50">
                    <Image 
                      src={src} 
                      alt={`Diagram ${index + 1}`} 
                      fill 
                      className="object-contain p-4"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          {headings.length > 0 && (
            <aside className="hidden md:block w-64 mt-12 md:mt-0">
              <div className="sticky top-24">
                <h3 className="font-mono text-sm uppercase tracking-wider mb-4">On this page</h3>
                <ul className="space-y-2 text-gray-600 font-sans">
                  {headings.map((heading) => (
                    <li key={heading.slug} className={heading.level === 3 ? 'ml-4' : ''}>
                      <a href={`#${heading.slug}`} className="hover:text-black transition-colors">
                        {heading.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          )}
        </div>
      </main>
    </article>
  )
} 