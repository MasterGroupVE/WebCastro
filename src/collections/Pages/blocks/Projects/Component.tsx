'use client'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import { cn } from '@/utilities/ui'

interface FrameStyle {
  frameStyle?: ('none' | 'green-gold' | 'gold-green' | 'green' | 'gold') | null
}

interface ProjectItem {
  title: string
  category?: string
  description?: string
  location?: string
  year?: string
  image?: ({ url: string; alt?: string }) & FrameStyle
  link?: string
}

interface ProjectsBlockProps {
  block: {
    headline: string
    subheadline?: string
    projects: ProjectItem[]
    layout?: 'grid3' | 'grid2' | 'list'
    backgroundColor?: 'white' | 'gray' | 'navy'
    ctaText?: string
    ctaLink?: string
  }
}

const bgClasses = {
  white: 'bg-white',
  gray: 'bg-gray-50',
  navy: 'bg-brand-navy',
}

const textColorClasses = {
  white: 'text-brand-navy',
  gray: 'text-brand-navy',
  navy: 'text-white',
}

const mutedColorClasses = {
  white: 'text-gray-600',
  gray: 'text-gray-600',
  navy: 'text-white/70',
}

const gridCols = {
  grid3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
  grid2: 'grid-cols-1 md:grid-cols-2',
  list: 'grid-cols-1',
}

function Icon({ name, className }: { name: string; className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={cn('material-icons-outlined text-base leading-none', className)}
    >
      {name}
    </span>
  )
}

export const ProjectsBlockComponent = ({ block }: ProjectsBlockProps) => {
  const {
    headline,
    subheadline,
    projects,
    layout = 'grid3',
    backgroundColor = 'gray',
    ctaText,
    ctaLink,
  } = block

  const isDark = backgroundColor === 'navy'
  const textColor = textColorClasses[backgroundColor]
  const mutedColor = mutedColorClasses[backgroundColor]
  const cardBg = isDark ? 'bg-brand-navy/40 border-white/10' : 'bg-white border-gray-200'

  return (
    <section className={cn('py-16 md:py-24 lg:py-32', bgClasses[backgroundColor])}>
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          {subheadline && (
            <p className="font-display text-brand-gold font-medium mb-2 text-lg tracking-wide uppercase">
              {subheadline}
            </p>
          )}
          <h2 className={cn('font-display text-3xl md:text-4xl font-bold', textColor)}>
            {headline}
          </h2>
        </div>

        <div className={cn('grid gap-8', gridCols[layout])}>
          {projects?.map((project, index) => {
            const frame =
              project.image?.frameStyle && project.image.frameStyle !== 'none'
                ? project.image.frameStyle
                : null

            return (
              <article
                key={index}
                className={cn(
                  'group flex flex-col rounded-xl overflow-hidden border transition-all hover:shadow-xl',
                  cardBg,
                  layout === 'list' && 'md:flex-row',
                )}
              >
                {project.image && (
                  <div
                    className={cn(
                      'relative overflow-hidden',
                      layout === 'list'
                        ? 'aspect-[16/10] md:aspect-auto md:w-2/5 md:min-h-[240px]'
                        : 'aspect-[16/10]',
                      frame && [`media-frame-${frame}`, 'm-3'],
                    )}
                  >
                    <Image
                      src={project.image.url}
                      alt={project.image.alt || project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    {project.category && (
                      <span className="absolute top-3 left-3 z-10 bg-brand-gold text-brand-navy text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide">
                        {project.category}
                      </span>
                    )}
                  </div>
                )}

                <div className="p-6 flex flex-col flex-1">
                  <h3 className={cn('font-display text-xl font-bold mb-2', textColor)}>
                    {project.title}
                  </h3>
                  {project.description && (
                    <p className={cn('font-body leading-relaxed mb-4 line-clamp-3', mutedColor)}>
                      {project.description}
                    </p>
                  )}
                  {(project.location || project.year) && (
                    <div
                      className={cn(
                        'flex flex-wrap items-center gap-x-4 gap-y-1 mt-auto pt-4 text-sm',
                        mutedColor,
                      )}
                    >
                      {project.location && (
                        <span className="inline-flex items-center gap-1">
                          <Icon name="place" />
                          {project.location}
                        </span>
                      )}
                      {project.year && (
                        <span className="inline-flex items-center gap-1">
                          <Icon name="event" />
                          {project.year}
                        </span>
                      )}
                    </div>
                  )}
                  {project.link && (
                    <Link
                      href={project.link}
                      className={cn(
                        'inline-flex items-center gap-1 mt-4 font-body font-medium text-sm transition-colors',
                        isDark ? 'text-brand-gold' : 'text-brand-green hover:text-brand-navy',
                      )}
                    >
                      Ver proyecto
                      <Icon name="arrow_forward" />
                    </Link>
                  )}
                </div>
              </article>
            )
          })}
        </div>

        {ctaText && ctaLink && (
          <div className="text-center mt-16">
            <Link
              href={ctaLink}
              className="inline-flex items-center gap-2 px-8 py-4 bg-brand-gold text-brand-navy font-body font-semibold rounded-lg hover:bg-yellow-300 transition-colors"
            >
              {ctaText}
              <Icon name="arrow_forward" />
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}
