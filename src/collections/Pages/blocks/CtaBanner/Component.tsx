'use client'

import React from 'react'
import { openQuoteModal } from '@/components/landing/QuoteModal'
import { cn } from '@/utilities/ui'

interface CtaBannerBlockProps {
  block: {
    headline?: string
    text?: string
    buttonText?: string
    buttonAction?: 'link' | 'modal'
    buttonLink?: string
    backgroundColor?: 'yellow' | 'navy' | 'green'
    // Legacy support
    style?: string
  }
}

export const CtaBannerBlockComponent: React.FC<CtaBannerBlockProps> = ({ block }) => {
  const {
    headline = '¿Necesitas Ayuda Inmediata con Tu Proyecto?',
    text = 'Habla directamente con uno de nuestros ingenieros supervisores hoy mismo.',
    buttonText = 'Llámanos: +58 (212) 555-CASTRO',
    buttonAction = 'link',
    buttonLink = 'tel:+582125552278',
    backgroundColor = 'yellow',
  } = block

  const isYellow = backgroundColor === 'yellow' || block.style === 'gold'
  const isGreen = backgroundColor === 'green' || block.style === 'green'

  const bannerBg = isYellow
    ? 'bg-castro-yellow text-castro-navy'
    : isGreen
    ? 'bg-castro-green text-white'
    : 'bg-castro-navy text-white'

  const buttonCls = isYellow
    ? 'bg-castro-navy hover:bg-castro-darknavy text-white'
    : isGreen
    ? 'bg-castro-yellow hover:bg-castro-yellowhover text-castro-navy'
    : 'bg-castro-yellow hover:bg-castro-yellowhover text-castro-navy'

  return (
    <div className={cn('py-6 px-4 font-sans', bannerBg)}>
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        <div>
          <h3
            className={cn(
              'text-xl sm:text-2xl font-black',
              isYellow ? 'text-castro-navy' : 'text-white',
            )}
          >
            {headline}
          </h3>
          {text && (
            <p
              className={cn(
                'text-xs sm:text-sm font-semibold',
                isYellow ? 'text-castro-navy/80' : 'text-slate-200',
              )}
            >
              {text}
            </p>
          )}
        </div>

        {buttonText && (
          <>
            {buttonAction === 'modal' ? (
              <button
                type="button"
                onClick={openQuoteModal}
                className={cn(
                  'font-extrabold text-sm px-8 py-3.5 rounded-xl shadow-lg transition whitespace-nowrap cursor-pointer',
                  buttonCls,
                )}
              >
                {buttonText}
              </button>
            ) : (
              <a
                href={buttonLink}
                className={cn(
                  'font-extrabold text-sm px-8 py-3.5 rounded-xl shadow-lg transition whitespace-nowrap',
                  buttonCls,
                )}
              >
                {buttonText}
              </a>
            )}
          </>
        )}
      </div>
    </div>
  )
}
