import { getCaseStudyData, getSortedCaseStudiesData } from '@/lib/case-studies'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import CaseStudyLayout from '@/components/CaseStudyLayout'
import Link from 'next/link'

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
        <div>
            <CaseStudyLayout
                title={caseStudy.title}
                hero={caseStudy.hero}
                stats={caseStudy.stats}
                contentHtml={caseStudy.contentHtml}
                headings={caseStudy.headings}
                diagrams={caseStudy.diagrams}
            />
            <div className="text-center py-12 bg-white text-black">
                <Link href="/projects" className="text-foreground hover:text-neutral-600 transition-colors">
                    ← Back to all projects
                </Link>
            </div>
        </div>
    )
}

// Generate static paths for all case studies at build time
export async function generateStaticParams() {
    const caseStudies = getSortedCaseStudiesData()
    return caseStudies.map(caseStudy => ({
        slug: caseStudy.id,
    }))
} 