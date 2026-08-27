'use client'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import { cn } from '@/utilities/ui'

interface HeroBlockProps {
  block: {
    headline: string
    subheadline?: string
    ctaText?: string
    ctaLink?: string
    backgroundImage?: { url: string; alt?: string }
    overlayOpacity?: string
    layout?: 'centered' | 'left' | 'right' | 'split'
    height?: 'full' | 'large' | 'medium' | 'auto'
    textColor?: 'white' | 'navy'
  }
}

const heightClasses = {
  full: 'min-h-screen',
  large: 'min-h-[80vh]',
  medium: 'min-h-[60vh]',
  auto: 'min-h-[50vh]',
}

const layoutClasses = {
  centered: 'text-center mx-auto max-w-3xl',
  left: 'max-w-2xl',
  right: 'max-w-2xl mx-auto text-right',
  split: 'max-w-2xl',
}

export const HeroBlockComponent = ({ block }: HeroBlockProps) => {
  const {
    headline,
    subheadline,
    ctaText,
    ctaLink,
    backgroundImage,
    overlayOpacity = '50',
    layout = 'centered',
    height = 'large',
    textColor = 'white',
  } = block

  const isDarkText = textColor === 'navy'
  const textClasses = isDarkText
    ? 'text-brand-navy'
    : 'text-white'

  const overlayClass = `bg-brand-navy/${overlayOpacity}`

  if (layout === 'split' && backgroundImage) {
    return (
      <section className={cn('relative', heightClasses[height], 'flex items-center')}>
        <div className="absolute inset-0 z-0">
          <Image
            src={backgroundImage.url}
            alt={backgroundImage.alt || ''}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className={cn('absolute inset-0', overlayClass)} />
        </div>
        <div className="container relative z-10 flex items-center">
          <div className="w-1/2 pr-8">
            <h1 className={cn('font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6', textClasses)}>
              {headline}
            </h1>
            {subheadline && (
              <p className={cn('font-body text-lg md:text-xl mb-8 leading-relaxed', isDarkText ? 'text-brand-navy/80' : 'text-white/90')}>
                {subheadline}
              </p>
            )}
            {ctaText && ctaLink && (
              <Link
                href={ctaLink}
                className={cn(
                  'inline-flex items-center gap-2 px-8 py-4 font-body font-semibold rounded-lg transition-all',
                  isDarkText
                    ? 'bg-brand-gold text-brand-navy hover:bg-yellow-300'
                    : 'bg-brand-gold text-brand-navy hover:bg-yellow-300'
                )}
              >
                {ctaText}
              </Link>
            )}
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className={cn('relative flex items-center justify-center', heightClasses[height])}>
      {backgroundImage && (
        <div className="absolute inset-0 z-0">
          <Image
            src={backgroundImage.url}
            alt={backgroundImage.alt || ''}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className={cn('absolute inset-0', overlayClass)} />
        </div>
      )}
      {!backgroundImage && (
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-brand-navy via-brand-green to-brand-navy" />
      )}
      <div className="container relative z-10 py-12 md:py-20">
        <div className={cn(layoutClasses[layout], 'w-full')}>
          <h1 className={cn('font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6', textClasses)}>
            {headline}
          </h1>
          {subheadline && (
            <p className={cn('font-body text-lg md:text-xl mb-8 leading-relaxed', isDarkText ? 'text-brand-navy/80' : 'text-white/90')}>
              {subheadline}
            </p>
          )}
          {ctaText && ctaLink && (
            <Link
              href={ctaLink}
              className={cn(
                'inline-flex items-center gap-2 px-8 py-4 font-body font-semibold rounded-lg transition-all',
                'bg-brand-gold text-brand-navy hover:bg-yellow-300'
              )}
            >
              {ctaText}
            </Link>
          )}
        </div>
      </div>
    </section>
  )
}