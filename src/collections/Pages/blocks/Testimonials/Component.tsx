'use client'

import React from 'react'
import { cn } from '@/utilities/ui'

interface TestimonialItem {
  quote: string
  author: string
  role?: string
  rating?: number
  avatar?: any
}

interface TestimonialsBlockProps {
  block: {
    badge?: string
    headline?: string
    subheadline?: string
    testimonials?: TestimonialItem[]
  }
}

const defaultTestimonials: TestimonialItem[] = [
  {
    avatar: { url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80' },
    author: 'Anya Petrova',
    role: 'Propietaria Residencial',
    quote:
      'Transformaron nuestra casa por completo. El equipo de Los Castros fue sumamente puntual y profesional en cada etapa de la obra.',
    rating: 5,
  },
  {
    avatar: { url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80' },
    author: 'Carlos Mendoza',
    role: 'Director Comercial',
    quote:
      'De principio a fin, la comunicación fue fluida y clara. Entregaron la obra comercial exactamente en la fecha acordada.',
    rating: 5,
  },
  {
    avatar: { url: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&q=80' },
    author: 'Isabelle Dubois',
    role: 'Cliente Residencial',
    quote:
      'La calidad de los acabados en la cocina y baños superó nuestras expectativas. ¡Recomendados con los ojos cerrados!',
    rating: 5,
  },
]

export const TestimonialsBlockComponent: React.FC<TestimonialsBlockProps> = ({ block }) => {
  const {
    badge = 'Opiniones Reales',
    headline = 'Respaldados por Nuestros Clientes',
    subheadline,
    testimonials = defaultTestimonials,
  } = block

  const testimonialList = testimonials?.length ? testimonials : defaultTestimonials

  return (
    <section id="testimonios" className="py-20 bg-white font-sans">
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
          {subheadline && <p className="text-slate-600 text-sm mt-3">{subheadline}</p>}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonialList.map((c, idx) => {
            const avatarUrl =
              typeof c.avatar === 'object' && c.avatar?.url
                ? c.avatar.url
                : typeof c.avatar === 'string'
                ? c.avatar
                : defaultTestimonials[idx % defaultTestimonials.length]?.avatar?.url || ''

            const starsCount = c.rating || 5

            return (
              <div
                key={idx}
                className="bg-castro-lightbg p-6 rounded-2xl border border-slate-200/60 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex text-castro-yellow text-sm mb-3">
                    {Array.from({ length: starsCount }).map((_, s) => (
                      <i key={s} className="fa-solid fa-star"></i>
                    ))}
                  </div>
                  <p className="text-slate-700 text-sm leading-relaxed mb-6 italic">"{c.quote}"</p>
                </div>
                <div className="flex items-center gap-3 pt-4 border-t border-slate-200">
                  {avatarUrl && (
                    <img
                      src={avatarUrl}
                      alt={c.author}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                  )}
                  <div>
                    <h4 className="text-sm font-bold text-castro-navy">{c.author}</h4>
                    {c.role && <p className="text-xs text-slate-500">{c.role}</p>}
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
