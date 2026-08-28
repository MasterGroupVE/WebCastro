'use client'

import React, { useState } from 'react'
import { cn } from '@/utilities/ui'

interface FaqItem {
  question: string
  answer: string
}

interface FaqBlockProps {
  block: {
    badge?: string
    headline?: string
    subheadline?: string
    questions?: FaqItem[]
  }
}

const defaultFaqs: FaqItem[] = [
  {
    question: '¿Cuánto tiempo toma una remodelación residencial completa?',
    answer:
      'El tiempo varía según el alcance. Generalmente, renovaciones pequeñas tardan de 2 a 4 semanas, mientras que proyectos integrales completas toman entre 6 y 12 semanas. Elaboramos un cronograma detallado desde el día uno.',
  },
  {
    question: '¿Ofrecen un presupuesto fijo y cerrado?',
    answer:
      'Sí, presentamos presupuestos transparentes por partida de obra. Salvo modificaciones solicitadas explícitamente por el cliente durante la ejecución, el costo acordado se mantiene.',
  },
  {
    question: '¿Los materiales de construcción están incluidos en el presupuesto?',
    answer:
      'Ofrecemos la modalidad "llave en mano" que incluye tanto materiales de obra gruesa como fina, o podemos trabajar bajo modalidad de suministro directo según tus preferencias.',
  },
  {
    question: '¿Puedo habitar la vivienda mientras se realiza la remodelación?',
    answer:
      'En remodelaciones parciales (como baños o terrazas) coordinamos el trabajo por fases para minimizar las molestias. En obras integrales recomendamos desocupar temporalmente por seguridad e higiene.',
  },
]

export const FaqBlockComponent: React.FC<FaqBlockProps> = ({ block }) => {
  const {
    badge = 'Preguntas Frecuentes',
    headline = 'Lo Que Debes Saber Antes de Iniciar',
    subheadline,
    questions = defaultFaqs,
  } = block

  const [openFaq, setOpenFaq] = useState<string | null>(null)
  const faqList = questions?.length ? questions : defaultFaqs

  return (
    <section id="faq" className="py-20 bg-castro-lightbg border-t border-slate-200/60 font-sans">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
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

        <div className="space-y-4">
          {faqList.map((f, i) => {
            const id = `faq-${i + 1}`
            const isOpen = openFaq === id
            return (
              <div
                key={id}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(isOpen ? null : id)}
                  className="w-full text-left p-6 font-bold text-castro-navy text-lg flex justify-between items-center hover:bg-slate-50 transition cursor-pointer"
                >
                  <span className="pr-4">{f.question}</span>
                  <i
                    className={cn(
                      'fa-solid fa-chevron-down text-castro-green transition-transform duration-200 flex-shrink-0',
                      isOpen ? 'rotate-180' : '',
                    )}
                  ></i>
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 text-slate-600 text-sm leading-relaxed border-t border-slate-100/60 pt-4">
                    {f.answer}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
