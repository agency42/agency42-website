import { getCaseStudyData, getSortedCaseStudiesData } from '@/lib/case-studies'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import CaseStudyLayout from '@/components/CaseStudyLayout'
import Link from 'next/link'
import { getSiteUrl } from '@/lib/config'

// Generate metadata for each blog post/case study
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const caseStudy = await getCaseStudyData(params.slug)
    if (!caseStudy) {
        return notFound()
    }
    
    const siteUrl = getSiteUrl()
    const ogImage = caseStudy.hero || '/images/content/cybernet.jpeg'
    const description = caseStudy.description || caseStudy.summary || 'A post by Agency/42.'
    const publishedTime = caseStudy.date ? new Date(caseStudy.date).toISOString() : undefined
    const tags = caseStudy.tags || []
    
    return {
        title: caseStudy.title,
        description: description,
        keywords: tags.length > 0 ? tags : undefined,
        alternates: {
            canonical: `${siteUrl}/blog/${params.slug}`,
        },
        openGraph: {
            title: caseStudy.title,
            description: description,
            url: `${siteUrl}/blog/${params.slug}`,
            type: 'article',
            publishedTime: publishedTime,
            authors: caseStudy.authors ? [caseStudy.authors] : undefined,
            tags: tags.length > 0 ? tags : undefined,
            images: [
                {
                    url: ogImage,
                    width: 1200,
                    height: 630,
                    alt: caseStudy.title,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: caseStudy.title,
            description: description,
            images: [ogImage],
        },
    }
}

// Generate Article structured data (JSON-LD) for SEO
function generateArticleStructuredData(caseStudy: any, slug: string) {
    const siteUrl = getSiteUrl()
    const publishedTime = caseStudy.date ? new Date(caseStudy.date).toISOString() : undefined
    
    return {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: caseStudy.title,
        description: caseStudy.description || caseStudy.summary,
        image: caseStudy.hero ? `${siteUrl}${caseStudy.hero}` : `${siteUrl}/images/content/cybernet.jpeg`,
        datePublished: publishedTime,
        dateModified: publishedTime,
        author: caseStudy.authors ? {
            '@type': 'Organization',
            name: 'Agency/42',
        } : undefined,
        publisher: {
            '@type': 'Organization',
            name: 'Agency/42',
            url: siteUrl,
        },
        mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': `${siteUrl}/blog/${slug}`,
        },
        keywords: caseStudy.tags?.join(', ') || undefined,
    }
}

// Main component to display a single blog post/case study
export default async function BlogPostPage({ params }: { params: { slug: string } }) {
    const caseStudy = await getCaseStudyData(params.slug)

    if (!caseStudy) {
        return notFound()
    }

    const structuredData = generateArticleStructuredData(caseStudy, params.slug)

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
            />
        <div>
            <CaseStudyLayout
                title={caseStudy.title}
                hero={caseStudy.hero}
                authors={caseStudy.authors}
                stats={caseStudy.stats}
                contentHtml={caseStudy.contentHtml}
                headings={caseStudy.headings}
                diagrams={caseStudy.diagrams}
            />
            <div className="text-center py-12 bg-white text-black">
                <Link href="/blog" className="text-foreground hover:text-neutral-600 transition-colors">
                    ← back to blog
                </Link>
            </div>
        </div>
        </>
    )
}

// Generate static paths for all case studies at build time
export async function generateStaticParams() {
    const caseStudies = getSortedCaseStudiesData()
    return caseStudies.map(caseStudy => ({
        slug: caseStudy.id,
    }))
}

