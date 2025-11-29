"use client";

import { useState } from "react";

interface Project {
  name: string;
  client: string;
  year: string;
  details: string;
  link?: string;
}

export default function ProjectList({ projects }: { projects: Project[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section>
      <div className="border-t border-gray-800">
        {projects.map((project, index) => (
          <div
            key={index}
            className="border-b border-gray-800"
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full py-6 text-left hover:bg-gray-900 transition-colors"
            >
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-2">
                <div className="flex-1">
                  <h3 className="font-medium text-sm text-white">
                    {project.link ? (
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="hover:underline" onClick={(e) => e.stopPropagation()}>
                        {project.name}
                      </a>
                    ) : (
                      project.name
                    )}
                  </h3>
                  <p className="text-xs text-gray-400 mt-1">{project.client}</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="text-xs text-gray-500">{project.year}</div>
                  <svg
                    className={`w-3 h-3 text-gray-600 transition-transform ${openIndex === index ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </button>
            {openIndex === index && (
              <div className="px-0 pb-6 text-xs text-gray-300 leading-relaxed">
                {project.details}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
