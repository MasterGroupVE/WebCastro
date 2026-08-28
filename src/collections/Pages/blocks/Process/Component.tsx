'use client'

import React from 'react'
import { cn } from '@/utilities/ui'

interface StepItem {
  stepNumber: string
  title: string
  description: string
  icon?: string
  color?: 'yellow' | 'green' | 'blue'
}

interface ProcessBlockProps {
  block: {
    badge?: string
    headline: string
    subheadline?: string
    steps?: StepItem[]
    backgroundColor?: 'light' | 'white' | 'navy'
  }
}

const colorStyles: Record<string, string> = {
  yellow: 'bg-amber-100 text-castro-navy group-hover:bg-castro-yellow',
  green: 'bg-emerald-100 text-castro-green group-hover:bg-castro-green group-hover:text-white',
  blue: 'bg-blue-100 text-castro-navy group-hover:bg-castro-navy group-hover:text-white',
}

const defaultSteps: StepItem[] = [
  {
    icon: 'fa-clipboard-list',
    stepNumber: '01',
    title: 'Planificación y Diseño',
    description:
      'Evaluamos tus necesidades en sitio, elaboramos los planos, presupuestos transparentes y la programación de la obra.',
    color: 'yellow',
  },
  {
    icon: 'fa-hammer',
    stepNumber: '02',
    title: 'Ejecución Profesional',
    description:
      'Nuestro equipo especializado ejecuta la construcción con supervisión constante, control de calidad y seguridad total.',
    color: 'green',
  },
  {
    icon: 'fa-key',
    stepNumber: '03',
    title: 'Entrega y Garantía',
    description:
      'Realizamos una inspección exhaustiva final y entregamos la obra lista para ser habitada o utilizada, respaldada por garantía.',
    color: 'blue',
  },
]

export const ProcessBlockComponent: React.FC<ProcessBlockProps> = ({ block }) => {
  const {
    badge = 'Proceso de Trabajo',
    headline = 'Transformaciones Paso a Paso',
    subheadline = 'Garantizamos un desarrollo estructurado para que disfrutes del proceso con total tranquilidad.',
    steps = defaultSteps,
    backgroundColor = 'light',
  } = block

  const isNavy = backgroundColor === 'navy'
  const isWhite = backgroundColor === 'white'

  const sectionBg = isNavy
    ? 'bg-castro-navy text-white'
    : isWhite
    ? 'bg-white text-castro-textdark'
    : 'bg-castro-lightbg text-castro-textdark border-y border-slate-200/60'

  return (
    <section className={cn('py-20', sectionBg)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          {badge && (
            <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-castro-green mb-2">
              <span className="w-2 h-2 rounded-full bg-castro-green"></span>
              <span>{badge}</span>
            </div>
          )}
          <h2
            className={cn(
              'text-3xl sm:text-4xl font-extrabold tracking-tight',
              isNavy ? 'text-white' : 'text-castro-navy',
            )}
          >
            {headline}
          </h2>
          {subheadline && (
            <p
              className={cn(
                'text-sm sm:text-base mt-3',
                isNavy ? 'text-slate-300' : 'text-slate-600',
              )}
            >
              {subheadline}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {(steps?.length ? steps : defaultSteps).map((p, idx) => {
            const stepNum = p.stepNumber || String(idx + 1).padStart(2, '0')
            const colorClass = colorStyles[p.color || 'yellow'] || colorStyles.yellow
            const iconClass = p.icon?.startsWith('fa-') ? p.icon : `fa-${p.icon || 'clipboard-list'}`

            return (
              <div
                key={stepNum + idx}
                className={cn(
                  'p-8 rounded-2xl shadow-md border relative group hover:-translate-y-1 transition duration-300',
                  isNavy
                    ? 'bg-white/5 border-white/10 text-white'
                    : 'bg-white border-slate-100 text-castro-textdark',
                )}
              >
                <div
                  className={cn(
                    'w-14 h-14 rounded-2xl flex items-center justify-center text-2xl font-bold mb-6 transition',
                    colorClass,
                  )}
                >
                  <i className={cn('fa-solid', iconClass)}></i>
                </div>
                <span
                  className={cn(
                    'text-4xl font-black absolute top-6 right-6',
                    isNavy ? 'text-white/10' : 'text-slate-200',
                  )}
                >
                  {stepNum}
                </span>
                <h3
                  className={cn(
                    'text-xl font-bold mb-3',
                    isNavy ? 'text-white' : 'text-castro-navy',
                  )}
                >
                  {p.title}
                </h3>
                <p
                  className={cn(
                    'text-sm leading-relaxed',
                    isNavy ? 'text-slate-300' : 'text-slate-600',
                  )}
                >
                  {p.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
