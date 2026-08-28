'use client'

import React from 'react'
import { openQuoteModal } from '@/components/landing/QuoteModal'
import { cn } from '@/utilities/ui'

interface AboutUsBlockProps {
  block: {
    badge?: string
    headline?: string
    paragraph1?: string
    paragraph2?: string
    features?: Array<{ text: string }>
    ctaText?: string
    ctaAction?: 'modal' | 'link'
    ctaLink?: string
    image1?: any
    stat1Value?: string
    stat1Label?: string
    stat2Value?: string
    stat2Label?: string
    image2?: any
    guaranteeBadgeTitle?: string
    guaranteeBadgeText?: string
    // Legacy support
    description?: any
    stats?: Array<{ value: string; label: string }>
  }
}

export const AboutUsBlockComponent: React.FC<AboutUsBlockProps> = ({ block }) => {
  const {
    badge = 'Sobre Nosotros',
    headline = 'Los Profesionales Detrás de Cada Renovación y Estructura',
    paragraph1 = 'En Construcciones Los Castros C.A. somos un equipo apasionado de ingenieros, arquitectos y maestros de obra dedicados a transformar espacios y erigir estructuras sólidas. Cuidamos cada detalle desde el diseño inicial hasta los acabados finales.',
    paragraph2 = 'Nuestra filosofía se basa en tres pilares: transparencia presupuestaria, el uso de materiales de primera calidad y el cumplimiento riguroso de los tiempos de entrega.',
    features = [{ text: 'Atención Personalizada' }, { text: 'Supervisión en Sitio' }],
    ctaText = 'Conoce Más de Nuestro Equipo',
    ctaAction = 'modal',
    ctaLink = '#contacto',
    image1,
    stat1Value = '+15 Años',
    stat1Label = 'De Experiencia y Liderazgo',
    stat2Value = '+78k M²',
    stat2Label = 'Proyectos Construidos',
    image2,
    guaranteeBadgeTitle = 'Garantía Escrita',
    guaranteeBadgeText = '100% Calidad Garantizada',
  } = block

  const image1Url =
    typeof image1 === 'object' && image1?.url
      ? image1.url
      : typeof image1 === 'string'
      ? image1
      : 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80'

  const image2Url =
    typeof image2 === 'object' && image2?.url
      ? image2.url
      : typeof image2 === 'string'
      ? image2
      : 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80'

  return (
    <section id="nosotros" className="py-20 bg-castro-lightbg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Asymmetric Image / Stats Grid */}
          <div className="lg:col-span-6 relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden shadow-xl border-4 border-white transform hover:scale-[1.02] transition duration-300">
                  <img
                    src={image1Url}
                    alt="Especialistas en obra"
                    className="w-full h-64 object-cover"
                  />
                </div>
                {stat1Value && (
                  <div className="bg-castro-navy text-white p-6 rounded-2xl shadow-xl">
                    <div className="text-3xl sm:text-4xl font-extrabold text-castro-yellow mb-1">
                      {stat1Value}
                    </div>
                    {stat1Label && (
                      <p className="text-xs font-medium text-slate-300 uppercase tracking-wider">
                        {stat1Label}
                      </p>
                    )}
                  </div>
                )}
              </div>

              <div className="space-y-4 pt-8">
                {stat2Value && (
                  <div className="bg-castro-green text-white p-6 rounded-2xl shadow-xl">
                    <div className="text-3xl sm:text-4xl font-extrabold text-white mb-1">
                      {stat2Value}
                    </div>
                    {stat2Label && (
                      <p className="text-xs font-medium text-emerald-100 uppercase tracking-wider">
                        {stat2Label}
                      </p>
                    )}
                  </div>
                )}
                <div className="rounded-2xl overflow-hidden shadow-xl border-4 border-white transform hover:scale-[1.02] transition duration-300">
                  <img
                    src={image2Url}
                    alt="Supervisión técnica"
                    className="w-full h-64 object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Floating Guarantee Badge */}
            {guaranteeBadgeTitle && (
              <div className="absolute -bottom-6 -right-2 bg-white p-4 rounded-xl shadow-2xl hidden sm:flex items-center gap-3 border border-slate-100">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-castro-green flex items-center justify-center font-bold text-xl">
                  <i className="fa-solid fa-shield-halved"></i>
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-semibold">{guaranteeBadgeTitle}</p>
                  <p className="text-sm font-bold text-castro-navy">{guaranteeBadgeText}</p>
                </div>
              </div>
            )}
          </div>

          {/* Text Content */}
          <div className="lg:col-span-6 space-y-6">
            {badge && (
              <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-castro-green">
                <span className="w-2 h-2 rounded-full bg-castro-green"></span>
                <span>{badge}</span>
              </div>
            )}

            <h2 className="text-3xl sm:text-4xl font-extrabold text-castro-navy tracking-tight leading-snug">
              {headline}
            </h2>

            {paragraph1 && (
              <p className="text-slate-600 leading-relaxed text-base">{paragraph1}</p>
            )}

            {paragraph2 && (
              <p className="text-slate-600 leading-relaxed text-base">{paragraph2}</p>
            )}

            {features && features.length > 0 && (
              <div className="grid grid-cols-2 gap-4 pt-2">
                {features.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 bg-white rounded-xl border border-slate-200/80 shadow-sm flex items-center gap-3"
                  >
                    <i className="fa-solid fa-check-circle text-castro-green text-xl"></i>
                    <span className="text-sm font-bold text-castro-navy">{item.text}</span>
                  </div>
                ))}
              </div>
            )}

            {ctaText && (
              <div className="pt-4">
                {ctaAction === 'modal' ? (
                  <button
                    type="button"
                    onClick={openQuoteModal}
                    className="inline-flex items-center gap-2 border-2 border-castro-navy text-castro-navy hover:bg-castro-navy hover:text-white font-bold px-6 py-3 rounded-xl transition duration-200 text-sm cursor-pointer"
                  >
                    <span>{ctaText}</span>
                    <i className="fa-solid fa-arrow-right"></i>
                  </button>
                ) : (
                  <a
                    href={ctaLink}
                    className="inline-flex items-center gap-2 border-2 border-castro-navy text-castro-navy hover:bg-castro-navy hover:text-white font-bold px-6 py-3 rounded-xl transition duration-200 text-sm"
                  >
                    <span>{ctaText}</span>
                    <i className="fa-solid fa-arrow-right"></i>
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}