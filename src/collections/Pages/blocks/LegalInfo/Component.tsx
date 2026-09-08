'use client'

import React from 'react'
import { cn } from '@/utilities/ui'

interface LegalField {
  label: string
  value: string
  highlight?: boolean
  subtext?: string
}

interface LegalInfoBlockProps {
  block: {
    badge?: string
    headline: string
    description?: string
    checklist?: { text: string }[]
    legalFields?: LegalField[]
    addressText?: string
  }
}

export const LegalInfoBlockComponent = ({ block }: LegalInfoBlockProps) => {
  const { badge, headline, description, checklist = [], legalFields = [], addressText } = block

  return (
    <section className="py-20 bg-brand-navy text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left: Text */}
          <div className="lg:col-span-5 space-y-6">
            {badge && (
              <span className="text-xs font-bold uppercase tracking-widest text-brand-green bg-brand-green/10 border border-brand-green/30 px-3.5 py-1.5 rounded-full inline-block">
                {badge}
              </span>
            )}
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold tracking-tight">
              {headline}
            </h2>
            {description && (
              <p className="text-slate-300 text-sm leading-relaxed">{description}</p>
            )}

            {checklist.length > 0 && (
              <div className="pt-4 space-y-3">
                {checklist.map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <span className="material-icons-outlined text-brand-green text-sm">check_circle</span>
                    <span className="text-xs text-slate-300">{item.text}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Right: Data Card */}
          <div className="lg:col-span-7">
            <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl shadow-2xl space-y-6">
              <h3 className="text-xl font-display font-bold text-white border-b border-slate-800 pb-4">
                Datos Técnicos Legales
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                {legalFields.map((field, i) => (
                  <div key={i} className="p-4 bg-slate-800/80 rounded-xl border border-slate-700">
                    <span className="text-slate-400 block font-semibold mb-1">{field.label}:</span>
                    <span
                      className={cn(
                        'font-bold text-sm block',
                        field.highlight ? 'text-brand-gold' : 'text-white',
                      )}
                    >
                      {field.value}
                    </span>
                    {field.subtext && (
                      <span className="text-[10px] text-slate-400 block mt-0.5">{field.subtext}</span>
                    )}
                  </div>
                ))}
              </div>

              {addressText && (
                <div className="p-4 bg-slate-800/80 rounded-xl border border-slate-700 text-xs text-slate-300 space-y-1">
                  <span className="text-slate-400 block font-semibold">Dirección Fiscal de Registro:</span>
                  <p>{addressText}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
