import { getCaseStudyData, getSortedCaseStudiesData } from '@/lib/case-studies'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

// Generate metadata for each case study page
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const caseStudy = await getCaseStudyData(params.slug)
    if (!caseStudy) {
        return notFound()
    }
    return {
        title: `${caseStudy.title} | Projects`,
        description: caseStudy.description || 'A case study by Agency/42.',
    }
}

// Main component to display a single case study
export default async function CaseStudyPage({ params }: { params: { slug: string } }) {
    const caseStudy = await getCaseStudyData(params.slug)

    if (!caseStudy) {
        return notFound()
    }

    return (
        <article className="min-h-screen bg-background text-foreground pt-24">
            <main className="container mx-auto max-w-3xl px-4 py-16">
                <header className="mb-12 text-center">
                    <h1 className="text-4xl md:text-5xl font-heading font-medium mb-4">{caseStudy.title}</h1>
                    <p className="text-gray-500 font-mono text-sm">{caseStudy.date}</p>
                </header>

                <div
                    className="prose prose-lg max-w-none mx-auto"
                    dangerouslySetInnerHTML={{ __html: caseStudy.contentHtml }}
                />

                <div className="mt-16 text-center">
                    <a href="/projects" className="text-foreground hover:text-neutral-600 transition-colors">
                        ← Back to all projects
                    </a>
                </div>
            </main>
        </article>
    )
}

// Generate static paths for all case studies at build time
export async function generateStaticParams() {
    const caseStudies = getSortedCaseStudiesData()
    return caseStudies.map(caseStudy => ({
        slug: caseStudy.id,
    }))
} 