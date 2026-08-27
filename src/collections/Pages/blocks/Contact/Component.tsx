'use client'

import Link from 'next/link'
import React from 'react'

import { cn } from '@/utilities/ui'

interface ContactItem {
  icon?: string
  label: string
  value: string
  link?: string
}

interface ContactBlockProps {
  block: {
    headline: string
    subheadline?: string
    contactItems: ContactItem[]
    mapEmbedUrl?: string
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

export const ContactBlockComponent = ({ block }: ContactBlockProps) => {
  const { headline, subheadline, contactItems, mapEmbedUrl, backgroundColor = 'white' } = block

  const isDark = backgroundColor === 'navy'
  const textColor = textColorClasses[backgroundColor]
  const mutedColor = mutedColorClasses[backgroundColor]

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

        <div className={cn('grid gap-10', mapEmbedUrl ? 'lg:grid-cols-2' : '')}>
          <ul className="space-y-5">
            {contactItems?.map((item, index) => {
              const content = (
                <>
                  <span
                    className={cn(
                      'w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0',
                      isDark ? 'bg-brand-gold/20 text-brand-gold' : 'bg-brand-navy/10 text-brand-navy',
                    )}
                  >
                    <span aria-hidden="true" className="material-icons-outlined text-xl leading-none">
                      {item.icon || 'info'}
                    </span>
                  </span>
                  <span className="flex flex-col">
                    <span className={cn('font-body text-sm', mutedColor)}>{item.label}</span>
                    <span
                      className={cn(
                        'font-display font-semibold',
                        textColor,
                        item.link && (isDark ? 'group-hover:text-brand-gold' : 'group-hover:text-brand-green'),
                        'transition-colors',
                      )}
                    >
                      {item.value}
                    </span>
                  </span>
                </>
              )

              const baseClass =
                'group flex items-center gap-4 p-4 rounded-xl border transition-colors ' +
                (isDark
                  ? 'border-white/10 hover:border-brand-gold/50'
                  : 'border-gray-200 hover:border-brand-green/60')

              return (
                <li key={index}>
                  {item.link ? (
                    <Link href={item.link} className={baseClass}>
                      {content}
                    </Link>
                  ) : (
                    <div className={baseClass}>{content}</div>
                  )}
                </li>
              )
            })}
          </ul>

          {mapEmbedUrl && (
            <div className="rounded-2xl overflow-hidden min-h-[320px] lg:min-h-full border border-gray-200">
              <iframe
                src={mapEmbedUrl}
                title="Ubicación"
                className="w-full h-full min-h-[320px] border-0"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
