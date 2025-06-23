import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface CaseStudyCardProps {
  title: string
  image: string
  link: string
  stats: {
    hours_saved?: number
    annual_value?: number
    roi_months?: number
  }
  description?: string
}

export default function CaseStudyCard({ title, image, link, stats, description }: CaseStudyCardProps) {
  return (
    <Link
      href={link}
      className="group block bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-[1.02]"
    >
      <div className="relative aspect-video bg-gray-100">
        {image ? (
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <span className="flex items-center justify-center h-full text-gray-400 text-sm">No Image</span>
        )}
      </div>
      <div className="p-5">
        <h3 className="font-heading font-extrabold text-lg md:text-xl mb-2 text-black group-hover:text-gray-800 transition-colors">
          {title}
        </h3>
        {stats && (
          <div className="flex flex-wrap gap-4 mb-2 text-xs font-mono text-gray-700">
            {stats.hours_saved && <span>⏱ {stats.hours_saved}+ hrs saved</span>}
            {stats.annual_value && <span>💰 ${stats.annual_value.toLocaleString()} value</span>}
            {stats.roi_months && <span>📈 ROI: {stats.roi_months} mo</span>}
          </div>
        )}
        {description && (
          <p className="font-sans text-gray-600 text-sm mb-2 line-clamp-3">{description}</p>
        )}
        <span className="font-mono text-[11px] tracking-wider text-black group-hover:underline">Read More →</span>
      </div>
    </Link>
  )
} 