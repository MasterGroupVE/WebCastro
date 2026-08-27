'use client'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import { cn } from '@/utilities/ui'

interface CtaBannerBlockProps {
  block: {
    headline: string
    text?: string
    buttonText?: string
    buttonLink?: string
    style?: 'navy' | 'green' | 'gold' | 'gradient'
    backgroundImage?: { url: string; alt?: string }
  }
}

const styleClasses = {
  navy: 'bg-brand-navy text-white',
  green: 'bg-brand-green text-white',
  gold: 'bg-brand-gold text-brand-navy',
  gradient: 'bg-gradient-to-r from-brand-navy via-brand-green to-brand-navy text-white',
}

export const CtaBannerBlockComponent = ({ block }: CtaBannerBlockProps) => {
  const { headline, text, buttonText, buttonLink, style = 'navy', backgroundImage } = block

  const hasImage = Boolean(backgroundImage?.url)
  const isGold = !hasImage && style === 'gold'
  const buttonClasses = isGold
    ? 'bg-brand-navy text-white hover:bg-brand-green'
    : 'bg-brand-gold text-brand-navy hover:bg-yellow-300'

  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div
          className={cn(
            'relative overflow-hidden rounded-2xl px-6 py-14 md:px-12 md:py-20 text-center',
            hasImage ? '' : styleClasses[style],
          )}
        >
          {hasImage && (
            <>
              <Image
                src={backgroundImage!.url}
                alt={backgroundImage!.alt || ''}
                fill
                className="object-cover"
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-brand-navy/70" />
            </>
          )}

          <div className="relative z-10 max-w-3xl mx-auto">
            <h2
              className={cn(
                'font-display text-3xl md:text-4xl font-bold mb-4',
                isGold ? 'text-brand-navy' : 'text-white',
              )}
            >
              {headline}
            </h2>
            {text && (
              <p
                className={cn(
                  'font-body text-lg leading-relaxed mb-8',
                  isGold ? 'text-brand-navy/80' : 'text-white/90',
                )}
              >
                {text}
              </p>
            )}
            {buttonText && buttonLink && (
              <Link
                href={buttonLink}
                className={cn(
                  'inline-flex items-center gap-2 px-8 py-4 font-body font-semibold rounded-lg transition-colors',
                  buttonClasses,
                  hasImage && 'relative z-10',
                )}
              >
                {buttonText}
                <span aria-hidden="true" className="material-icons-outlined text-xl leading-none">
                  arrow_forward
                </span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
