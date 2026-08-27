'use client'

import Image from 'next/image'
import Link from 'next/link'
import React, { useCallback, useEffect, useState } from 'react'

import { cn } from '@/utilities/ui'

interface Slide {
  image: { url: string; alt?: string }
  title?: string
  subtitle?: string
  ctaText?: string
  ctaLink?: string
}

interface SliderBlockProps {
  block: {
    slides: Slide[]
    autoplay?: boolean
    interval?: number
    height?: 'full' | 'large' | 'medium'
  }
}

const heightClasses = {
  full: 'min-h-screen',
  large: 'min-h-[80vh]',
  medium: 'min-h-[60vh]',
}

export const SliderBlockComponent = ({ block }: SliderBlockProps) => {
  const { slides = [], autoplay = true, interval = 5000, height = 'large' } = block

  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)

  const count = slides.length

  const goNext = useCallback(() => setCurrent((c) => (c + 1) % count), [count])
  const goPrev = useCallback(() => setCurrent((c) => (c - 1 + count) % count), [count])

  useEffect(() => {
    if (!autoplay || paused || count < 2) return
    const t = setInterval(goNext, Math.max(2000, interval))
    return () => clearInterval(t)
  }, [autoplay, paused, interval, count, goNext])

  if (count === 0) return null

  return (
    <section
      className={cn('relative overflow-hidden', heightClasses[height])}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carousel"
    >
      {slides.map((slide, i) => (
        <div
          key={i}
          className={cn(
            'absolute inset-0 transition-opacity duration-700 ease-in-out',
            i === current ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none',
          )}
          aria-hidden={i !== current}
        >
          <Image
            src={slide.image.url}
            alt={slide.image.alt || slide.title || ''}
            fill
            className="object-cover"
            priority={i === 0}
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 via-brand-navy/30 to-transparent" />

          {(slide.title || slide.subtitle || slide.ctaText) && (
            <div className="absolute inset-x-0 bottom-0 z-20">
              <div className="container pb-16 md:pb-20">
                <div className="max-w-2xl">
                  {slide.title && (
                    <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-3">
                      {slide.title}
                    </h2>
                  )}
                  {slide.subtitle && (
                    <p className="font-body text-base md:text-lg text-white/90 mb-6 leading-relaxed">
                      {slide.subtitle}
                    </p>
                  )}
                  {slide.ctaText && slide.ctaLink && (
                    <Link
                      href={slide.ctaLink}
                      className="inline-flex items-center gap-2 px-8 py-4 bg-brand-gold text-brand-navy font-body font-semibold rounded-lg hover:bg-yellow-300 transition-colors"
                    >
                      {slide.ctaText}
                      <span aria-hidden="true" className="material-icons-outlined text-xl leading-none">
                        arrow_forward
                      </span>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      ))}

      {count > 1 && (
        <>
          <button
            type="button"
            aria-label="Diapositiva anterior"
            onClick={goPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-30 h-11 w-11 rounded-full bg-white/15 hover:bg-white/30 backdrop-blur text-white flex items-center justify-center transition-colors"
          >
            <span aria-hidden="true" className="material-icons-outlined">
              chevron_left
            </span>
          </button>
          <button
            type="button"
            aria-label="Diapositiva siguiente"
            onClick={goNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-30 h-11 w-11 rounded-full bg-white/15 hover:bg-white/30 backdrop-blur text-white flex items-center justify-center transition-colors"
          >
            <span aria-hidden="true" className="material-icons-outlined">
              chevron_right
            </span>
          </button>

          <div className="absolute bottom-5 inset-x-0 z-30 flex justify-center gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Ir a la diapositiva ${i + 1}`}
                onClick={() => setCurrent(i)}
                className={cn(
                  'h-2.5 rounded-full transition-all',
                  i === current ? 'w-6 bg-brand-gold' : 'w-2.5 bg-white/50 hover:bg-white/80',
                )}
              />
            ))}
          </div>
        </>
      )}
    </section>
  )
}
