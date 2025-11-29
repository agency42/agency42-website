"use client";

import { useState } from "react";
import Link from "next/link";

interface BlogPost {
  title: string;
  description?: string;
  link: string;
  date?: string;
  tag?: string;
}

export default function BlogList({ posts }: { posts: BlogPost[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="border-t border-gray-200">
      {posts.map((post, index) => {
        const isExternal = !post.link.startsWith('/');
        const isOpen = openIndex === index;

        return (
          <div key={`${post.title}-${post.date}`} className="border-b border-gray-200">
            <button
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="w-full py-6 text-left hover:bg-gray-50 transition-colors"
            >
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-2">
                <div className="flex-1">
                  <h3 className="font-medium text-sm text-gray-900">
                    {post.title}
                  </h3>
                </div>
                <div className="flex items-center gap-3">
                  {post.date && (
                    <div className="text-xs text-gray-500">{post.date}</div>
                  )}
                  <svg
                    className={`w-3 h-3 text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </button>
            {isOpen && (
              <div className="px-0 pb-6">
                {post.description && (
                  <p className="text-xs text-gray-600 leading-relaxed mb-4">
                    {post.description}
                  </p>
                )}
                {isExternal ? (
                  <a
                    href={post.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-xs text-gray-900 hover:text-gray-600 underline transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {post.tag === 'video' ? 'watch →' : 'read →'}
                  </a>
                ) : (
                  <Link
                    href={post.link}
                    className="inline-block text-xs text-gray-900 hover:text-gray-600 underline transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {post.tag === 'video' ? 'watch →' : 'read →'}
                  </Link>
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
