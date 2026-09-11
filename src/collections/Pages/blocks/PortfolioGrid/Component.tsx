'use client'

import React, { useState } from 'react'
import { cn } from '@/utilities/ui'

interface Project {
  title: string
  category: string
  location?: string
  description?: string
  image?: { url: string; alt?: string }
  badgeText?: string
  status?: string
  detailTitle?: string
  detailDescription?: string
}

interface Category {
  label: string
  value: string
}

interface PortfolioGridBlockProps {
  block: {
    badge?: string
    headline: string
    description?: string
    categories?: Category[]
    projects?: Project[]
  }
}

export const PortfolioGridBlockComponent = ({ block }: PortfolioGridBlockProps) => {
  const { badge, headline, description, categories = [], projects = [] } = block
  const [activeFilter, setActiveFilter] = useState('all')

  const filteredProjects =
    activeFilter === 'all'
      ? projects
      : projects.filter((p) => p.category === activeFilter)

  return (
    <section id="proyectos" className="py-20 bg-slate-100/70 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            {badge && (
              <span className="text-xs font-extrabold uppercase tracking-widest text-amber-600 bg-amber-100/60 px-3 py-1 rounded-full inline-block mb-3">
                {badge}
              </span>
            )}
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-brand-navy tracking-tight">
              {headline}
            </h2>
            {description && (
              <p className="text-slate-600 mt-2 max-w-xl text-sm sm:text-base">{description}</p>
            )}
          </div>

          {categories.length > 0 && (
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setActiveFilter('all')}
                className={cn(
                  'px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all',
                  activeFilter === 'all'
                    ? 'bg-brand-navy text-white shadow-sm'
                    : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-200',
                )}
              >
                Todos
              </button>
              {categories.map((cat) => (
                <button
                  key={cat.value}
                  onClick={() => setActiveFilter(cat.value)}
                  className={cn(
                    'px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all',
                    activeFilter === cat.value
                      ? 'bg-brand-navy text-white shadow-sm'
                      : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-200',
                  )}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => {
            const imgUrl =
              typeof project.image === 'object' && project.image?.url
                ? project.image.url
                : typeof project.image === 'string'
                ? project.image
                : null

            return (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-slate-200/80 flex flex-col transition-all duration-300 hover:-translate-y-1"
              >
                {imgUrl && (
                  <div className="relative aspect-video overflow-hidden bg-slate-800">
                    <img
                      src={imgUrl}
                      alt={(typeof project.image === 'object' && project.image?.alt) || project.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  {project.badgeText && (
                    <span className="absolute top-3 left-3 bg-amber-500 text-slate-950 font-display font-bold text-[10px] uppercase px-2.5 py-1 rounded-md tracking-wider">
                      {project.badgeText}
                    </span>
                  )}
                </div>
              )}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  {project.location && (
                    <div className="flex items-center gap-2 text-xs text-slate-500 mb-2">
                      <span className="material-icons-outlined text-amber-500 text-sm">location_on</span>
                      <span>{project.location}</span>
                    </div>
                  )}
                  <h3 className="font-display font-bold text-lg text-brand-navy mb-2">
                    {project.title}
                  </h3>
                  {project.description && (
                    <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                      {project.description}
                    </p>
                  )}
                </div>
                {project.status && (
                  <div className="pt-4 mt-4 border-t border-slate-100">
                    <span className="text-[11px] font-semibold text-emerald-600">
                      <span className="material-icons-outlined text-sm align-middle mr-1">check_circle</span>
                      {project.status}
                    </span>
                  </div>
                )}
              </div>
            </div>
          )
        })}
        </div>
      </div>
    </section>
  )
}
