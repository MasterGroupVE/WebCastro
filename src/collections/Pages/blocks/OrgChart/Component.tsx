'use client'

import React from 'react'
import { cn } from '@/utilities/ui'

const colorMap: Record<string, string> = {
  teal: 'border-geo-teal/60',
  amber: 'border-amber-500/60',
  blue: 'border-blue-500/60',
  emerald: 'border-emerald-500/60',
}

const iconBgMap: Record<string, string> = {
  teal: 'bg-geo-teal/20 text-geo-teal',
  amber: 'bg-amber-500/20 text-amber-400',
  blue: 'bg-blue-500/20 text-blue-400',
  emerald: 'bg-emerald-500/20 text-emerald-400',
}

const textColorMap: Record<string, string> = {
  teal: 'text-geo-teal',
  amber: 'text-amber-400',
  blue: 'text-blue-400',
  emerald: 'text-emerald-400',
}

interface OrgNode {
  icon?: string
  title: string
  description?: string
  color?: string
}

interface OrgChartBlockProps {
  block: {
    badge?: string
    headline: string
    subheadline?: string
    topNode: {
      label?: string
      title: string
      subtitle?: string
    }
    adminNodes?: OrgNode[]
    operationalNodes?: OrgNode[]
  }
}

export const OrgChartBlockComponent = ({ block }: OrgChartBlockProps) => {
  const { badge, headline, subheadline, topNode, adminNodes = [], operationalNodes = [] } = block

  return (
    <section className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          {badge && (
            <span className="text-xs font-bold uppercase tracking-widest text-geo-teal bg-teal-50 px-3.5 py-1.5 rounded-full border border-teal-200">
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

        <div className="bg-slate-900 text-white p-8 sm:p-12 rounded-3xl shadow-2xl relative overflow-hidden border border-slate-800">
          <div className="absolute top-0 right-0 w-96 h-96 bg-geo-teal/10 rounded-full blur-3xl pointer-events-none" />

          {/* Level 1: Top Node */}
          <div className="flex justify-center mb-8">
            <div className="bg-gradient-to-r from-brand-navy to-brand-blue border-2 border-brand-green text-center py-4 px-8 rounded-2xl shadow-xl max-w-md w-full">
              {topNode.label && (
                <span className="text-[10px] text-brand-green font-extrabold uppercase tracking-widest block mb-1">
                  {topNode.label}
                </span>
              )}
              <h3 className="text-xl font-display font-extrabold text-white">{topNode.title}</h3>
              {topNode.subtitle && (
                <p className="text-xs text-slate-300 mt-1">{topNode.subtitle}</p>
              )}
            </div>
          </div>

          {/* Connector */}
          <div className="w-0.5 h-8 bg-brand-green/50 mx-auto -mt-4 mb-4" />

          {/* Level 2: Admin Nodes */}
          {adminNodes.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto mb-10">
              {adminNodes.map((node, i) => (
                <div key={i} className="bg-slate-800/90 border border-slate-700 p-4 rounded-xl text-center">
                  {node.icon && (
                    <span className={cn('material-icons-outlined text-lg mb-1 block', 'text-amber-400')}>
                      {node.icon}
                    </span>
                  )}
                  <h4 className="font-bold text-sm text-white">{node.title}</h4>
                  {node.description && (
                    <p className="text-[11px] text-slate-400 mt-0.5">{node.description}</p>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Connector line to level 3 */}
          {operationalNodes.length > 0 && (
            <div className="relative py-2 max-w-4xl mx-auto hidden sm:block">
              <div className="w-full h-0.5 bg-slate-700" />
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2 w-0.5 h-6 bg-brand-green" />
            </div>
          )}

          {/* Level 3: Operational Nodes */}
          {operationalNodes.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
              {operationalNodes.map((node, i) => {
                const color = node.color || 'teal'
                return (
                  <div
                    key={i}
                    className={cn(
                      'bg-slate-800 hover:bg-slate-700 border-2 p-5 rounded-2xl text-center transition-all group',
                      colorMap[color] || colorMap.teal,
                    )}
                  >
                    {node.icon && (
                      <div
                        className={cn(
                          'w-10 h-10 mx-auto rounded-xl flex items-center justify-center text-lg mb-2 group-hover:scale-110 transition-transform',
                          iconBgMap[color] || iconBgMap.teal,
                        )}
                      >
                        <span className="material-icons-outlined">{node.icon}</span>
                      </div>
                    )}
                    <h4 className="font-display font-bold text-sm text-white">{node.title}</h4>
                    {node.description && (
                      <p className="text-[11px] text-slate-300 mt-1">{node.description}</p>
                    )}
                    <span
                      className={cn(
                        'mt-3 inline-block text-[10px] font-semibold underline',
                        textColorMap[color] || textColorMap.teal,
                      )}
                    >
                      Ver Detalles <span className="material-icons-outlined text-[10px] align-middle ml-1">arrow_forward</span>
                    </span>
                  </div>
                )
              })}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
