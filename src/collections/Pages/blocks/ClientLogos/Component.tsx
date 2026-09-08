'use client'

import React from 'react'
import { cn } from '@/utilities/ui'

interface Client {
  name: string
  description?: string
  icon?: string
  logo?: { url: string; alt?: string }
}

interface ClientLogosBlockProps {
  block: {
    badge?: string
    headline: string
    subheadline?: string
    clients?: Client[]
    additionalClientsText?: string
  }
}

export const ClientLogosBlockComponent = ({ block }: ClientLogosBlockProps) => {
  const { badge, headline, subheadline, clients = [], additionalClientsText } = block

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

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {clients.map((client, index) => (
            <div
              key={index}
              className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 text-center hover:border-geo-teal transition-all flex flex-col items-center justify-center"
            >
              {client.logo ? (
                <img
                  src={client.logo.url}
                  alt={client.logo.alt || client.name}
                  className="w-10 h-10 object-contain mb-2"
                />
              ) : client.icon ? (
                <span className={cn('material-icons-outlined text-2xl mb-2 text-brand-navy')}>
                  {client.icon}
                </span>
              ) : null}
              <span className="font-bold text-xs text-brand-navy block">{client.name}</span>
              {client.description && (
                <span className="text-[9px] text-slate-500">{client.description}</span>
              )}
            </div>
          ))}
        </div>

        {additionalClientsText && (
          <div className="mt-8 p-6 bg-slate-50 rounded-2xl border border-slate-200 text-center text-xs text-slate-500">
            <strong className="text-brand-navy font-bold block mb-1">Otros Clientes Destacados:</strong>
            {additionalClientsText}
          </div>
        )}
      </div>
    </section>
  )
}
