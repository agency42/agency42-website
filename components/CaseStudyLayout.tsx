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
  authors?: string
  stats?: {
    hours_saved?: number
    annual_value?: number
    roi_months?: number
  }
  contentHtml: string
  headings?: Heading[]
  diagrams?: string[]
}

export default function CaseStudyLayout({ title, hero, authors, stats, contentHtml, headings = [], diagrams = [] }: CaseStudyLayoutProps) {
  return (
    <article className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white text-black">
      {/* Grid background */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.02]" style={{
        backgroundImage: `linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)`,
        backgroundSize: '32px 32px'
      }} />

      <header className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 pt-8 sm:pt-12">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-medium leading-tight mb-4 whitespace-nowrap overflow-hidden text-ellipsis">{title}</h1>

        {authors && (
          <div className="text-xs text-gray-600 mb-6 not-italic">
            By {authors}
          </div>
        )}

        {hero && (
          <div className="relative w-full my-6 md:my-8">
            <Image
              src={hero}
              alt={title}
              width={800}
              height={450}
              sizes="(max-width: 768px) 100vw, 800px"
              className="w-full h-auto object-cover max-h-[300px]"
              priority
            />
          </div>
        )}

        {stats && (
          <div className="border-t border-b border-gray-200 py-6 my-8">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-center">
              {stats.hours_saved && (
                <div>
                  <p className="text-2xl md:text-3xl font-medium">{stats.hours_saved.toLocaleString()}+</p>
                  <p className="text-xs text-gray-600">Hours Saved</p>
                </div>
              )}
              {stats.annual_value && (
                <div>
                  <p className="text-2xl md:text-3xl font-medium">${(stats.annual_value / 1000).toFixed(0)}k+</p>
                  <p className="text-xs text-gray-600">Annual Value</p>
                </div>
              )}
              {stats.roi_months && (
                <div>
                  <p className="text-2xl md:text-3xl font-medium">{stats.roi_months}</p>
                  <p className="text-xs text-gray-600">Months to ROI</p>
                </div>
              )}
            </div>
          </div>
        )}
      </header>

      <main className="relative z-10 pb-16">
        <div className="relative mx-auto px-4 sm:px-6" style={{ maxWidth: 'calc(672px + 256px + 3rem)' }}>
          <div className="flex justify-center gap-12">
            <div className="w-full max-w-2xl">
              <div
                className="blog-content prose prose-base max-w-none"
                dangerouslySetInnerHTML={{ __html: contentHtml }}
              />

              {diagrams.length > 0 && (
                <div className="mt-12 space-y-8">
                  {diagrams.map((src, index) => (
                    <div key={index} className="relative w-full">
                      <Image
                        src={src}
                        alt={`Diagram ${index + 1}`}
                        width={800}
                        height={450}
                        sizes="(max-width: 768px) 100vw, 800px"
                        className="w-full h-auto"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>

            {headings.length > 0 && (
              <aside className="hidden xl:block w-64 flex-shrink-0">
                <div className="sticky top-24">
                  <h3 className="text-sm text-gray-500 mb-4">On this page</h3>
                  <ul className="space-y-2 text-sm">
                    {headings.filter(heading => heading.level === 2).map((heading) => (
                      <li key={heading.slug}>
                        <a href={`#${heading.slug}`} className="text-gray-600 hover:text-gray-900 transition-colors">
                          {heading.text}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </aside>
            )}
          </div>
        </div>
      </main>
    </article>
  )
} 