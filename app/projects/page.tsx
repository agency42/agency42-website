import { getSortedCaseStudiesData } from '@/lib/case-studies'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Projects | Agency/42',
    description: 'Selected projects and case studies from Agency/42, showcasing our work in AI consulting and implementation.',
    keywords: ['AI portfolio', 'AI case studies', 'AI projects', 'client work', 'AI implementation examples', 'generative AI projects', 'AI agent development'],
    // We can remove noindex, nofollow later when the content is ready
    robots: 'noindex, nofollow', 
}

export default function OurWorkPage() {
    const allCaseStudiesData = getSortedCaseStudiesData()

    return (
        <div className="min-h-screen bg-background text-foreground pt-24">
            <main className="container mx-auto max-w-5xl px-4 py-16">
                <h1 className="text-4xl md:text-6xl font-heading font-medium mb-4 text-center">Our Work</h1>
                <p className="text-lg text-gray-700 mb-16 text-center font-sans">Selected projects showcasing applied AI.</p>

                <div className="space-y-6">
                    {allCaseStudiesData.map(({ id, date, title, description }) => (
                        <div key={id} className="py-6 border-b border-gray-200 group">
                            <Link href={`/projects/${id}`} className="block">
                                <h2 className="font-heading text-2xl mb-2 text-foreground group-hover:text-neutral-600 transition-colors">
                                    {title}
                                </h2>
                                <p className="font-sans text-gray-600 leading-relaxed mb-3">
                                    {/* The description will come from the markdown frontmatter */}
                                    {description}
                                </p>
                                <div className="flex items-center justify-between">
                                    <p className="font-mono text-xs text-gray-500">{date}</p>
                                    <span className="font-mono text-xs tracking-wider text-foreground group-hover:text-neutral-600 transition-colors">
                                        Read More →
                                    </span>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
} 