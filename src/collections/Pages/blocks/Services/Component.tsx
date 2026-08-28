'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { openQuoteModal } from '@/components/landing/QuoteModal'
import { cn } from '@/utilities/ui'

interface ServiceItem {
  tabLabel?: string
  title: string
  description?: string
  image?: any
  badge?: string
  features?: Array<{ text: string }>
  icon?: string
  link?: string
}

interface ServicesBlockProps {
  block: {
    badge?: string
    headline?: string
    layout?: 'tabs' | 'grid3' | 'grid2' | 'cards' | 'numbered'
    services?: ServiceItem[]
    showEmergencyBox?: boolean
    emergencyTitle?: string
    emergencyPhone?: string
    emergencyLink?: string
    // Legacy support
    subheadline?: string
    ctaText?: string
    ctaLink?: string
  }
}

const defaultServices: ServiceItem[] = [
  {
    tabLabel: 'Remodelaciones',
    title: '1. Remodelación Integral de Cocinas y Baños',
    description:
      'Transformamos espacios residenciales optimizando la distribución, instalando griferías avanzadas, acabados en porcelanato y mobiliario a medida de alta durabilidad.',
    image: { url: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=1000&q=80' },
    badge: 'Residencial Los Palos Grandes',
    features: [
      { text: 'Diseño 3D y renderizado previo' },
      { text: 'Instalaciones hidráulicas y eléctricas' },
      { text: 'Acabados de lujo y carpintería fina' },
    ],
  },
  {
    tabLabel: 'Obras Civiles',
    title: '2. Construcción de Obras Civiles y Estructuras',
    description:
      'Edificación desde cero de galpones, estructuras de concreto armado, muros de contención y locales comerciales con ingeniería de alta precisión.',
    image: { url: 'https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?w=1000&q=80' },
    badge: 'Estructura Comercial La Trinidad',
    features: [
      { text: 'Fundaciones y vaciado de losas' },
      { text: 'Cálculo e ingeniería estructural' },
      { text: 'Control de calidad y pruebas de resistencia' },
    ],
  },
  {
    tabLabel: 'Mantenimiento',
    title: '3. Mantenimiento Preventivo y Corrección Estructural',
    description:
      'Soluciones efectivas para impermeabilización, reparación de grietas, frisos, pintura de fachadas e inspección técnica periódica.',
    image: { url: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1000&q=80' },
    badge: 'Mantenimiento Torre Empresarial',
    features: [
      { text: 'Impermeabilización de mantos asfálticos' },
      { text: 'Restauración de fachadas e hilos de agua' },
      { text: 'Refuerzo antisísmico y de columnas' },
    ],
  },
  {
    tabLabel: 'Diseño e Interiores',
    title: '4. Diseño Arquitectónico y Decoración de Interiores',
    description:
      'Creación de ambientes armónicos, selección de acabados, revestimientos de vanguardia e iluminación inteligente adaptada a tu estilo.',
    image: { url: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1000&q=80' },
    badge: 'Penthouse Valle Arriba',
    features: [
      { text: 'Planos arquitectónicos y permisos' },
      { text: 'Diseño de iluminación moderna (LED)' },
      { text: 'Mobiliario y revestimientos exclusivos' },
    ],
  },
]

export const ServicesBlockComponent: React.FC<ServicesBlockProps> = ({ block }) => {
  const {
    badge = 'Nuestros Servicios',
    headline = 'Espacios Que Se Sienten Perfectos',
    layout = 'tabs',
    services = defaultServices,
    showEmergencyBox = true,
    emergencyTitle = '¿Servicio Urgente o Cotización?',
    emergencyPhone = '+58 (212) 555-CASTRO',
    emergencyLink = 'tel:+582125552278',
    ctaText,
    ctaLink,
  } = block

  const serviceList = services?.length ? services : defaultServices
  const [activeTabIdx, setActiveTabIdx] = useState(0)
  const activeService = serviceList[activeTabIdx] || serviceList[0]

  const activeImageUrl =
    typeof activeService?.image === 'object' && activeService.image?.url
      ? activeService.image.url
      : typeof activeService?.image === 'string'
      ? activeService.image
      : 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=1000&q=80'

  if (layout === 'tabs') {
    return (
      <section id="servicios" className="py-20 bg-white font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              {badge && (
                <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-castro-green mb-2">
                  <span className="w-2 h-2 rounded-full bg-castro-green"></span>
                  <span>{badge}</span>
                </div>
              )}
              <h2 className="text-3xl sm:text-4xl font-extrabold text-castro-navy tracking-tight">
                {headline}
              </h2>
            </div>

            <div className="mt-6 md:mt-0 flex flex-wrap gap-2 bg-slate-100 p-1.5 rounded-xl border border-slate-200">
              {serviceList.map((t, idx) => {
                const label = t.tabLabel || t.title.split('.')[1] || t.title
                const isActive = activeTabIdx === idx
                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveTabIdx(idx)}
                    className={cn(
                      'font-semibold text-xs sm:text-sm px-4 py-2.5 rounded-lg transition cursor-pointer',
                      isActive
                        ? 'bg-castro-green text-white shadow-sm'
                        : 'text-slate-600 hover:text-castro-navy',
                    )}
                  >
                    {label.trim()}
                  </button>
                )
              })}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-castro-lightbg rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-lg">
            <div className="lg:col-span-5 space-y-6">
              <div className="text-2xl font-extrabold text-castro-navy">
                {activeService.title}
              </div>
              {activeService.description && (
                <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                  {activeService.description}
                </p>
              )}

              {activeService.features && activeService.features.length > 0 && (
                <ul className="space-y-3 font-medium text-sm text-slate-700">
                  {activeService.features.map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <span className="w-6 h-6 rounded-full bg-emerald-100 text-castro-green flex items-center justify-center text-xs font-bold">
                        <i className="fa-solid fa-check"></i>
                      </span>
                      {item.text}
                    </li>
                  ))}
                </ul>
              )}

              {showEmergencyBox && (
                <div className="p-5 bg-gradient-to-r from-castro-navy to-castro-darknavy text-white rounded-2xl shadow-md flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs text-castro-yellow font-bold uppercase tracking-wider">
                      {emergencyTitle}
                    </p>
                    <p className="text-lg font-extrabold text-white">{emergencyPhone}</p>
                  </div>
                  <a
                    href={emergencyLink}
                    className="bg-castro-yellow hover:bg-castro-yellowhover text-castro-navy p-3 rounded-xl transition font-bold"
                  >
                    <i className="fa-solid fa-phone-flip text-lg"></i>
                  </a>
                </div>
              )}
            </div>

            <div className="lg:col-span-7">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white h-[380px] sm:h-[440px]">
                <img
                  src={activeImageUrl}
                  alt={activeService.title}
                  className="w-full h-full object-cover transition-all duration-500"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md p-4 rounded-xl border border-white/50 flex justify-between items-center">
                  <div>
                    <span className="text-xs font-bold text-castro-green block">
                      PROYECTO DESTACADO
                    </span>
                    <span className="text-sm font-bold text-castro-navy">
                      {activeService.badge || 'Residencial Los Castros'}
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={openQuoteModal}
                    className="text-xs font-bold text-white bg-castro-navy hover:bg-castro-green px-4 py-2 rounded-lg transition cursor-pointer"
                  >
                    Ver Detalles
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  // Grid / Cards Fallback layout
  return (
    <section id="servicios" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          {badge && (
            <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-castro-green mb-2">
              <span className="w-2 h-2 rounded-full bg-castro-green"></span>
              <span>{badge}</span>
            </div>
          )}
          <h2 className="text-3xl sm:text-4xl font-extrabold text-castro-navy tracking-tight">
            {headline}
          </h2>
        </div>

        <div
          className={cn(
            'grid gap-8',
            layout === 'grid2'
              ? 'grid-cols-1 md:grid-cols-2'
              : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
          )}
        >
          {serviceList.map((service, idx) => {
            const img =
              typeof service.image === 'object' && service.image?.url
                ? service.image.url
                : typeof service.image === 'string'
                ? service.image
                : null

            return (
              <div
                key={idx}
                className="bg-castro-lightbg rounded-2xl overflow-hidden border border-slate-200 shadow-md p-6 flex flex-col justify-between hover:shadow-lg transition"
              >
                {img && (
                  <div className="h-48 rounded-xl overflow-hidden mb-5">
                    <img
                      src={img}
                      alt={service.title}
                      className="w-full h-full object-cover hover:scale-105 transition duration-300"
                    />
                  </div>
                )}
                <div>
                  <h3 className="text-xl font-bold text-castro-navy mb-2">{service.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={openQuoteModal}
                  className="inline-flex items-center gap-2 text-xs font-bold text-castro-navy hover:text-castro-green mt-2 cursor-pointer"
                >
                  <span>Solicitar Información</span>
                  <i className="fa-solid fa-arrow-right"></i>
                </button>
              </div>
            )
          })}
        </div>

        {ctaText && (
          <div className="text-center mt-12">
            <a
              href={ctaLink || '#contacto'}
              className="bg-castro-navy hover:bg-castro-darknavy text-white font-bold px-8 py-3.5 rounded-xl shadow transition inline-block"
            >
              {ctaText}
            </a>
          </div>
        )}
      </div>
    </section>
  )
}