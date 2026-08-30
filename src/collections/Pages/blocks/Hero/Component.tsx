'use client'

import Image from 'next/image'
import React from 'react'
import { openQuoteModal } from '@/components/landing/QuoteModal'
import { cn } from '@/utilities/ui'

interface HeroBlockProps {
  block: {
    badge?: string
    headline?: string
    highlightText?: string
    subheadline?: string
    primaryCtaText?: string
    primaryCtaLink?: string
    secondaryCtaText?: string
    secondaryCtaType?: 'modal' | 'link'
    secondaryCtaLink?: string
    backgroundImage?: any
    showRating?: boolean
    ratingScore?: string
    ratingText?: string
    avatars?: Array<{ image?: any }>
    // legacy props fallback
    ctaText?: string
    ctaLink?: string
  }
}

const defaultAvatars = [
  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80',
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80',
  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80',
]

export const HeroBlockComponent: React.FC<HeroBlockProps> = ({ block }) => {
  const {
    badge = 'Líderes en Construcción y Remodelaciones Integrales',
    headline = 'Excelencia y Calidad Enfocada en',
    highlightText = 'Tus Proyectos',
    subheadline = 'Ofrecemos soluciones de construcción, ingeniería y remodelación residencial y comercial de alto nivel. Garantizamos acabados impecables, materiales duraderos y entrega a tiempo.',
    primaryCtaText = block.ctaText || 'Explorar Servicios',
    primaryCtaLink = block.ctaLink || '#servicios',
    secondaryCtaText = 'Agendar Inspección',
    secondaryCtaType = 'modal',
    secondaryCtaLink = '#',
    backgroundImage,
    showRating = true,
    ratingScore = '5/5',
    ratingText = 'Más de +250 proyectos entregados con éxito',
    avatars,
  } = block

  const bgImageUrl =
    typeof backgroundImage === 'object' && backgroundImage?.url
      ? backgroundImage.url
      : typeof backgroundImage === 'string'
      ? backgroundImage
      : '/hero-castro.jpg'

  const avatarUrls =
    avatars && avatars.length > 0
      ? avatars
          .map((a) => (typeof a.image === 'object' ? a.image?.url : a.image))
          .filter(Boolean)
      : defaultAvatars

  return (
    <section
      id="inicio"
      className="relative bg-castro-navy text-white overflow-hidden py-20 lg:py-28 min-h-[640px] flex items-center"
    >
      <div className="absolute inset-0 z-0">
        <img
          src={bgImageUrl}
          alt="Construcción y Remodelación"
          className="w-full h-full object-cover object-center scale-105 transform"
        />
        <div className="absolute inset-0 gradient-overlay"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="max-w-3xl">
          {badge && (
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-castro-yellow font-medium text-xs sm:text-sm mb-6">
              <span className="w-2 h-2 rounded-full bg-castro-green animate-pulse"></span>
              <span>{badge}</span>
            </div>
          )}

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-6">
            {headline}{' '}
            {highlightText && (
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-castro-yellow via-amber-200 to-white">
                {highlightText}
              </span>
            )}
          </h1>

          {subheadline && (
            <p className="text-lg sm:text-xl text-slate-200 mb-8 font-normal leading-relaxed max-w-2xl">
              {subheadline}
            </p>
          )}

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
            {primaryCtaText && (
              <a
                href={primaryCtaLink}
                className="bg-castro-yellow hover:bg-castro-yellowhover text-castro-navy font-extrabold px-8 py-4 rounded-xl transition-all duration-200 transform hover:-translate-y-0.5 shadow-lg text-center flex items-center justify-center gap-3"
              >
                <span>{primaryCtaText}</span>
                <i className="fa-solid fa-arrow-right"></i>
              </a>
            )}

            {secondaryCtaText && (
              <>
                {secondaryCtaType === 'modal' ? (
                  <button
                    type="button"
                    onClick={openQuoteModal}
                    className="bg-castro-green hover:bg-castro-greenhover text-white font-bold px-8 py-4 rounded-xl transition-all duration-200 border border-emerald-500/30 text-center flex items-center justify-center gap-3 shadow-lg cursor-pointer"
                  >
                    <i className="fa-regular fa-calendar-check text-castro-yellow"></i>
                    <span>{secondaryCtaText}</span>
                  </button>
                ) : (
                  <a
                    href={secondaryCtaLink}
                    className="bg-castro-green hover:bg-castro-greenhover text-white font-bold px-8 py-4 rounded-xl transition-all duration-200 border border-emerald-500/30 text-center flex items-center justify-center gap-3 shadow-lg"
                  >
                    <i className="fa-regular fa-calendar-check text-castro-yellow"></i>
                    <span>{secondaryCtaText}</span>
                  </a>
                )}
              </>
            )}
          </div>

          {showRating && (
            <div className="flex items-center gap-4 pt-4 border-t border-white/15">
              <div className="flex -space-x-2">
                {avatarUrls.slice(0, 3).map((url, idx) => (
                  <img
                    key={idx}
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-white object-cover"
                    src={url}
                    alt="Cliente"
                  />
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1 text-castro-yellow text-sm">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <span className="font-bold text-white ml-1">{ratingScore}</span>
                </div>
                <p className="text-xs text-slate-300">
                  {ratingText.includes('+250 proyectos') ? (
                    <>
                      Más de <span className="font-bold text-white">+250 proyectos</span> entregados con éxito
                    </>
                  ) : (
                    ratingText
                  )}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}