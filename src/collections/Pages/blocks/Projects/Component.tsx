'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { openQuoteModal } from '@/components/landing/QuoteModal'
import { cn } from '@/utilities/ui'

interface ProjectItem {
  title: string
  category?: string
  categoryColor?: 'green' | 'navy' | 'yellow'
  description?: string
  location?: string
  status?: string
  image?: any
  link?: string
}

interface ProjectsBlockProps {
  block: {
    badge?: string
    headline?: string
    subheadline?: string
    projects?: ProjectItem[]
    ctaText?: string
    ctaAction?: 'modal' | 'link'
    ctaLink?: string
  }
}

const defaultProjects: ProjectItem[] = [
  {
    image: { url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80' },
    category: 'Residencial',
    categoryColor: 'green',
    title: 'Residencia La Castellana',
    description: 'Remodelación completa de interiores, iluminación automatizada y acabados de lujo.',
    location: 'Caracas',
    status: 'Completado',
  },
  {
    image: { url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80' },
    category: 'Comercial',
    categoryColor: 'navy',
    title: 'Oficinas Torre Financiera',
    description: 'Adecuación estructural, tabiquería de drywall y sistemas integrados.',
    location: 'Valencia',
    status: 'Completado',
  },
  {
    image: { url: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=800&q=80' },
    category: 'Remodelación',
    categoryColor: 'yellow',
    title: 'Quinta San Francisco',
    description: 'Ampliación de terraza, piscina y reforzamiento de fundaciones.',
    location: 'Maracay',
    status: 'Completado',
  },
]

const tagClasses: Record<string, string> = {
  green: 'bg-castro-green text-white',
  navy: 'bg-castro-navy text-white',
  yellow: 'bg-castro-yellow text-castro-navy',
}

export const ProjectsBlockComponent: React.FC<ProjectsBlockProps> = ({ block }) => {
  const {
    badge = 'Proyectos Recientes',
    headline = 'Transformando Casas y Obras en Hogares',
    subheadline,
    projects = defaultProjects,
    ctaText = 'Solicitar Presupuesto para Mi Proyecto',
    ctaAction = 'modal',
    ctaLink = '#contacto',
  } = block

  const projectList = projects?.length ? projects : defaultProjects

  return (
    <section id="proyectos" className="py-20 bg-castro-lightbg font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          {badge && (
            <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-castro-green mb-2">
              <span className="w-2 h-2 rounded-full bg-castro-green"></span>
              <span>{badge}</span>
            </div>
          )}
          <h2 className="text-3xl sm:text-4xl font-extrabold text-castro-navy tracking-tight">
            {headline}
          </h2>
          {subheadline && <p className="text-slate-600 text-sm mt-3">{subheadline}</p>}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectList.map((p, idx) => {
            const imgUrl =
              typeof p.image === 'object' && p.image?.url
                ? p.image.url
                : typeof p.image === 'string'
                ? p.image
                : defaultProjects[idx % defaultProjects.length]?.image?.url || ''

            const tagCls = tagClasses[p.categoryColor || 'green'] || tagClasses.green

            return (
              <div
                key={idx}
                className="bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-100 group flex flex-col justify-between"
              >
                <div>
                  <div className="relative overflow-hidden h-60">
                    <img
                      src={imgUrl}
                      alt={p.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    />
                    {p.category && (
                      <div
                        className={cn(
                          'absolute top-4 left-4 text-xs font-bold px-3 py-1 rounded-full',
                          tagCls,
                        )}
                      >
                        {p.category}
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-castro-navy mb-2">{p.title}</h3>
                    {p.description && (
                      <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                        {p.description}
                      </p>
                    )}
                  </div>
                </div>

                <div className="px-6 pb-6 pt-0">
                  <div className="flex items-center justify-between pt-4 border-t border-slate-100 text-xs font-semibold text-slate-500">
                    <span>
                      <i className="fa-solid fa-location-dot text-castro-yellow mr-1"></i>{' '}
                      {p.location || 'Caracas'}
                    </span>
                    <span className="text-castro-green font-bold">
                      {p.status || 'Completado'}
                    </span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {ctaText && (
          <div className="text-center mt-12">
            {ctaAction === 'modal' ? (
              <button
                type="button"
                onClick={openQuoteModal}
                className="bg-castro-navy hover:bg-castro-darknavy text-white font-bold px-8 py-3.5 rounded-xl shadow transition cursor-pointer"
              >
                {ctaText}
              </button>
            ) : (
              <a
                href={ctaLink}
                className="bg-castro-navy hover:bg-castro-darknavy text-white font-bold px-8 py-3.5 rounded-xl shadow transition inline-block"
              >
                {ctaText}
              </a>
            )}
          </div>
        )}
      </div>
    </section>
  )
}
