'use client'

import Image from 'next/image'
import React from 'react'

import { cn } from '@/utilities/ui'

interface TestimonialItem {
  quote: string
  author: string
  role?: string
  rating?: number
  avatar?: { url: string; alt?: string }
}

interface TestimonialsBlockProps {
  block: {
    headline: string
    subheadline?: string
    testimonials: TestimonialItem[]
    backgroundColor?: 'white' | 'gray' | 'navy'
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

export const TestimonialsBlockComponent = ({ block }: TestimonialsBlockProps) => {
  const { headline, subheadline, testimonials, backgroundColor = 'gray' } = block

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

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials?.map((item, index) => {
            const rating = Math.min(5, Math.max(1, item.rating ?? 5))
            const initial = item.author?.trim()?.charAt(0)?.toUpperCase() || '?'

            return (
              <figure
                key={index}
                className={cn('flex flex-col rounded-xl border p-6 transition-all hover:shadow-xl', cardBg)}
              >
                <span
                  aria-hidden="true"
                  className={cn(
                    'material-icons-outlined text-4xl mb-3',
                    isDark ? 'text-brand-gold' : 'text-brand-gold',
                  )}
                >
                  format_quote
                </span>

                <div className="flex gap-0.5 mb-3" aria-label={`Calificación: ${rating} de 5`}>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span
                      key={i}
                      aria-hidden="true"
                      className={cn(
                        'material-icons-outlined text-base leading-none',
                        i < rating ? 'text-brand-gold' : 'opacity-30 text-gray-400',
                      )}
                    >
                      star
                    </span>
                  ))}
                </div>

                <blockquote className={cn('font-body leading-relaxed mb-6 flex-1', mutedColor)}>
                  “{item.quote}”
                </blockquote>

                <figcaption className="flex items-center gap-3 mt-auto pt-4 border-t"
                  style={{ borderColor: isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.08)' }}
                >
                  {item.avatar?.url ? (
                    <Image
                      src={item.avatar.url}
                      alt={item.avatar.alt || item.author}
                      width={48}
                      height={48}
                      className="rounded-full object-cover w-12 h-12"
                    />
                  ) : (
                    <span
                      className={cn(
                        'w-12 h-12 rounded-full flex items-center justify-center font-display text-xl font-bold flex-shrink-0',
                        isDark ? 'bg-brand-gold/20 text-brand-gold' : 'bg-brand-green/15 text-brand-green',
                      )}
                    >
                      {initial}
                    </span>
                  )}
                  <span className="flex flex-col">
                    <cite className={cn('font-display font-semibold not-italic', textColor)}>
                      {item.author}
                    </cite>
                    {item.role && (
                      <span className={cn('font-body text-sm', mutedColor)}>{item.role}</span>
                    )}
                  </span>
                </figcaption>
              </figure>
            )
          })}
        </div>
      </div>
    </section>
  )
}
