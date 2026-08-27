'use client'

import React, { useState } from 'react'

import { cn } from '@/utilities/ui'

interface FaqItem {
  question: string
  answer: string
}

interface FaqBlockProps {
  block: {
    headline: string
    subheadline?: string
    questions: FaqItem[]
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

export const FaqBlockComponent = ({ block }: FaqBlockProps) => {
  const { headline, subheadline, questions, backgroundColor = 'white' } = block

  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const isDark = backgroundColor === 'navy'
  const textColor = textColorClasses[backgroundColor]
  const mutedColor = mutedColorClasses[backgroundColor]

  return (
    <section className={cn('py-16 md:py-24', bgClasses[backgroundColor])}>
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-12">
          {subheadline && (
            <p className="font-display text-brand-gold font-medium mb-2 text-lg tracking-wide uppercase">
              {subheadline}
            </p>
          )}
          <h2 className={cn('font-display text-3xl md:text-4xl font-bold', textColor)}>
            {headline}
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          {questions?.map((item, index) => {
            const isOpen = openIndex === index
            return (
              <div
                key={index}
                className={cn('border-b', isDark ? 'border-white/10' : 'border-gray-200')}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-4 py-5 text-left"
                >
                  <span className={cn('font-display text-lg font-semibold', textColor)}>
                    {item.question}
                  </span>
                  <span
                    aria-hidden="true"
                    className={cn(
                      'material-icons-outlined text-xl leading-none flex-shrink-0 transition-transform duration-300',
                      isOpen && 'rotate-180',
                      isDark ? 'text-brand-gold' : 'text-brand-green',
                    )}
                  >
                    expand_more
                  </span>
                </button>
                <div
                  className={cn(
                    'grid transition-all duration-300 ease-in-out',
                    isOpen ? 'grid-rows-[1fr] opacity-100 pb-5' : 'grid-rows-[0fr] opacity-0',
                  )}
                >
                  <div className="overflow-hidden">
                    <p className={cn('font-body leading-relaxed pr-8', mutedColor)}>{item.answer}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
