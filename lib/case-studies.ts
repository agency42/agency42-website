import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'
import * as cheerio from 'cheerio'
import slugify from 'slugify'

const caseStudiesDirectory = path.join(process.cwd(), 'content/case-studies')

interface Heading {
  level: number;
  text: string;
  slug: string;
}

interface CaseStudyData {
  id: string;
  contentHtml: string;
  headings: Heading[];
  title: string;
  date: string;
  published: boolean;
  description?: string;
  summary?: string;
  hero?: string;
  authors?: string;
  diagrams?: string[];
  client?: {
    name: string;
    industry: string;
    location: string;
  };
  services?: string[];
  tags?: string[];
  stats?: any; // Keeping this flexible for different stat types
}

export function getSortedCaseStudiesData(): Omit<CaseStudyData, 'contentHtml' | 'headings'>[] {
  // Get file names under /content/case-studies
  const fileNames = fs.readdirSync(caseStudiesDirectory)
  const allCaseStudiesData = fileNames
    .map(fileName => {
      // Remove ".md" from file name to get id
      const id = fileName.replace(/\.md$/, '')

      // Read markdown file as string
      const fullPath = path.join(caseStudiesDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')

      // Use gray-matter to parse the post metadata section
      const matterResult = matter(fileContents)

      // Combine the data with the id
      return {
        id,
        ...matterResult.data,
      } as Omit<CaseStudyData, 'contentHtml' | 'headings'>
    })
    .filter(study => study.published !== false); // Filter out unpublished studies

  // Sort case studies by date
  return allCaseStudiesData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}

export async function getCaseStudyData(id: string): Promise<CaseStudyData> {
  const fullPath = path.join(caseStudiesDirectory, `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents)

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html, { sanitize: false })
    .process(matterResult.content)
  const contentHtmlWithIds = processedContent.toString()
  const $ = cheerio.load(contentHtmlWithIds)
  const headings: Heading[] = []

  $('h2, h3').each((_, el) => {
    if (el.type === 'tag') {
      const element = $(el)
      const text = element.text()
      const level = parseInt(el.tagName.substring(1), 10)
      const slug = slugify(text, { lower: true, strict: true })
      
      element.attr('id', slug)
      
      headings.push({ level, text, slug })
    }
  });

  // Combine the data with the id and contentHtml
  return {
    id,
    contentHtml: $.html(),
    headings,
    ...matterResult.data,
  } as CaseStudyData
} 