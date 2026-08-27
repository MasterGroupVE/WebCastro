'use client'

import Image from 'next/image'
import React from 'react'

import { cn } from '@/utilities/ui'

interface FrameStyle {
  frameStyle?: ('none' | 'green-gold' | 'gold-green' | 'green' | 'gold') | null
}

interface AboutUsBlockProps {
  block: {
    headline: string
    subheadline?: string
    description: any // Lexical rich text
    image?: { url: string; alt?: string } & FrameStyle
    imagePosition?: 'left' | 'right'
    stats?: Array<{ value: string; label: string; icon?: string }>
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

export const AboutUsBlockComponent = ({ block }: AboutUsBlockProps) => {
  const {
    headline,
    subheadline,
    description,
    image,
    imagePosition = 'right',
    stats = [],
    backgroundColor = 'white',
  } = block

  const isDark = backgroundColor === 'navy'
  const containerBg = bgClasses[backgroundColor]
  const textColor = textColorClasses[backgroundColor]
  const mutedColor = mutedColorClasses[backgroundColor]

  const renderRichText = (richText: any) => {
    if (!richText?.root?.children) return null
    return richText.root.children.map((child: any, i: number) => {
      if (child.type === 'paragraph') {
        return (
          <p key={i} className="font-body text-lg leading-relaxed mb-6">
            {child.children?.map((c: any) => c.text).join('')}
          </p>
        )
      }
      if (child.type === 'heading') {
        const level = child.tag || 'h2'
        const Tag = level
        return (
          <Tag key={i} className={cn('font-display font-bold mb-4', level === 'h2' && 'text-3xl', level === 'h3' && 'text-2xl')}>
            {child.children?.map((c: any) => c.text).join('')}
          </Tag>
        )
      }
      return null
    })
  }

  return (
    <section className={cn('py-16 md:py-24 lg:py-32', containerBg)}>
      <div className="container">
        <div className={cn('flex flex-col lg:flex-row items-center gap-12 lg:gap-16', imagePosition === 'left' ? 'lg:flex-row-reverse' : '')}>
          <div className={cn('w-full lg:w-1/2', textColor)}>
            {subheadline && (
              <p className="font-display text-brand-gold font-medium mb-2 text-lg tracking-wide uppercase">
                {subheadline}
              </p>
            )}
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
              {headline}
            </h2>
            <div className="font-body text-lg leading-relaxed mb-8" style={{ color: mutedColor }}>
              {renderRichText(description)}
            </div>

            {stats.length > 0 && (
              <div className="grid grid-cols-2 gap-8 mt-10 pt-8 border-t" style={{ borderColor: isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)' }}>
                {stats.map((stat, i) => (
                  <div key={i} className="text-center">
                    <div className={cn('font-display text-3xl md:text-4xl font-bold mb-1', textColor)}>
                      {stat.value}
                    </div>
                    <div className={cn('font-body text-sm', mutedColor)}>
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {image && (
            <div className="w-full lg:w-1/2 relative">
              <div
                className={cn(
                  'aspect-[4/3] rounded-2xl overflow-hidden',
                  image.frameStyle && image.frameStyle !== 'none'
                    ? [`media-frame-${image.frameStyle}`, 'm-3']
                    : 'shadow-2xl',
                )}
              >
                <Image
                  src={image.url}
                  alt={image.alt || headline}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}