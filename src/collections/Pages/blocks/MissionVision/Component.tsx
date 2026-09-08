'use client'

import React from 'react'
import { cn } from '@/utilities/ui'

interface MissionVisionBlockProps {
  block: {
    badge?: string
    headline: string
    subheadline?: string
    vision: {
      label?: string
      title: string
      text: string
      footerLeft?: string
      footerRight?: string
    }
    mision: {
      label?: string
      title: string
      text: string
      footerLeft?: string
      footerRight?: string
    }
  }
}

export const MissionVisionBlockComponent = ({ block }: MissionVisionBlockProps) => {
  const { badge, headline, subheadline, vision, mision } = block

  return (
    <section className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          {badge && (
            <span className="text-xs font-bold uppercase tracking-widest text-brand-blue bg-blue-100 px-3.5 py-1.5 rounded-full">
              {badge}
            </span>
          )}
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-brand-navy mt-3">
            {headline}
          </h2>
          {subheadline && (
            <p className="text-slate-600 text-sm sm:text-base mt-2">{subheadline}</p>
          )}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Visión */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200 hover:shadow-xl transition-all relative overflow-hidden group flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-green/10 rounded-full blur-2xl group-hover:bg-brand-green/20 transition-all" />
            <div>
              <div className="w-14 h-14 rounded-2xl bg-brand-green/15 text-brand-green flex items-center justify-center text-2xl mb-6">
                <span className="material-icons-outlined">visibility</span>
              </div>
              {vision.label && (
                <span className="text-xs font-extrabold uppercase tracking-widest text-brand-green block mb-1">
                  {vision.label}
                </span>
              )}
              <h3 className="text-2xl font-display font-bold text-brand-navy mb-4">{vision.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">{vision.text}</p>
            </div>
            {(vision.footerLeft || vision.footerRight) && (
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                {vision.footerLeft && <span className="font-semibold text-brand-navy">{vision.footerLeft}</span>}
                {vision.footerRight && <span>{vision.footerRight}</span>}
              </div>
            )}
          </div>

          {/* Misión */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200 hover:shadow-xl transition-all relative overflow-hidden group flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-blue/10 rounded-full blur-2xl group-hover:bg-brand-blue/20 transition-all" />
            <div>
              <div className="w-14 h-14 rounded-2xl bg-brand-navy/15 text-brand-navy flex items-center justify-center text-2xl mb-6">
                <span className="material-icons-outlined">gps_fixed</span>
              </div>
              {mision.label && (
                <span className="text-xs font-extrabold uppercase tracking-widest text-brand-navy block mb-1">
                  {mision.label}
                </span>
              )}
              <h3 className="text-2xl font-display font-bold text-brand-navy mb-4">{mision.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">{mision.text}</p>
            </div>
            {(mision.footerLeft || mision.footerRight) && (
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                {mision.footerLeft && <span className="font-semibold text-brand-navy">{mision.footerLeft}</span>}
                {mision.footerRight && <span>{mision.footerRight}</span>}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
