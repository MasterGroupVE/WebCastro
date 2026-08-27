'use client'

import React from 'react'

import { cn } from '@/utilities/ui'

interface FeatureItem {
  icon?: string
  title: string
  description?: string
}

interface FeaturesBlockProps {
  block: {
    headline: string
    subheadline?: string
    items: FeatureItem[]
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

export const FeaturesBlockComponent = ({ block }: FeaturesBlockProps) => {
  const { headline, subheadline, items, backgroundColor = 'white' } = block

  const isDark = backgroundColor === 'navy'
  const textColor = textColorClasses[backgroundColor]
  const mutedColor = mutedColorClasses[backgroundColor]

  return (
    <section className={cn('py-16 md:py-24', bgClasses[backgroundColor])}>
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-14">
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
          {items?.map((item, index) => (
            <div key={index} className="text-center px-4">
              <span
                className={cn(
                  'w-14 h-14 mx-auto mb-5 rounded-xl flex items-center justify-center',
                  isDark ? 'bg-brand-gold/20' : 'bg-brand-green/15',
                )}
              >
                <span
                  aria-hidden="true"
                  className={cn(
                    'material-icons-outlined text-2xl leading-none',
                    isDark ? 'text-brand-gold' : 'text-brand-green',
                  )}
                >
                  {item.icon || 'check_circle'}
                </span>
              </span>
              <h3 className={cn('font-display text-xl font-bold mb-2', textColor)}>{item.title}</h3>
              {item.description && (
                <p className={cn('font-body leading-relaxed', mutedColor)}>{item.description}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
