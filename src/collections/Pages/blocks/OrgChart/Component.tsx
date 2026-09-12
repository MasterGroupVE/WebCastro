'use client'

import React, { useState, useEffect } from 'react'
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

// Información extraída del dossier
const dossierData: Record<string, React.ReactNode> = {
  'Gerencia de Geociencias': (
    <div className="text-slate-600 text-sm space-y-3 text-left">
      <p>A través de la Gerencia de Geociencias de la empresa se desarrollan y ofrecen, a nivel nacional, servicios de:</p>
      <p>Exploración, estudios, asesorías y consultorías ingenieriles en las áreas de la geología, geofísica, geotecnia, geodesia y topografía, hidrología, hidrogeología y cualquier otra rama relacionada con las ciencias de la Tierra. De manera más específica nos encargamos de:</p>
      <ul className="list-disc pl-5 space-y-1 text-slate-700">
        <li>Estudios de suelo y perforaciones geotécnicas para obras civiles.</li>
        <li>Caracterización de suelos en sistemas nacionales e internacionales.</li>
        <li>Laboratorio para caracterización de suelos y rocas.</li>
        <li>Cálculos de fundaciones superficiales y profundas, muros de contención, pilas, entre otras obras civiles.</li>
        <li>Cálculos de estabilidad de taludes y caracterización de macizos rocosos.</li>
        <li>Control geológico de frente de excavación en túneles y trincheras.</li>
        <li>Perforación de pozos de agua y modelado de acuíferos subterráneos.</li>
        <li>Equipamiento de pozos de agua.</li>
        <li>Prospección geofísica.</li>
        <li>Levantamientos topográficos especializados en el área de la construcción, vialidad, minería y otros, así como replanteos de control planialtimétrico.</li>
        <li>Puesta de puntos de control GPS doble frecuencia para la construcción de redes geodésicas locales y regionales.</li>
        <li>Cálculos de volumen de tierras, corte y relleno.</li>
        <li>Catastro rural y urbano, así como división parcelaria.</li>
        <li>Teledetección, Diseño y manejo de Sistemas de Información Geográfica (SIG).</li>
        <li>Control de Calidad de Obras Civiles y Movimientos de Tierra.</li>
      </ul>
    </div>
  ),
  'Gerencia de Proyectos': (
    <div className="text-slate-600 text-sm space-y-3 text-left">
      <p>Este departamento se encarga de desarrollar proyectos en las áreas de geociencias e ingeniería. Sus parámetros de investigación están proyectados a:</p>
      <ul className="list-disc pl-5 space-y-1 text-slate-700">
        <li>Diseños Estructurales.</li>
        <li>Diseños Arquitectónicos.</li>
        <li>Planeación Urbanística.</li>
        <li>Proyectos y Diseños de asfalto (rígido y flexible)</li>
        <li>Diseño de túneles.</li>
        <li>Diseño de Puentes.</li>
        <li>Cálculos de Estabilidad.</li>
        <li>Diseños de Sistemas de contención.</li>
        <li>Diseño de vías.</li>
        <li>Cálculos de estructuras.</li>
        <li>Cómputos métricos.</li>
        <li>Diseños de Mezclas de concreto y asfalto.</li>
      </ul>
      <p>Este departamento cuenta con un equipo de profesionales de alta experiencia en los diversos ramos para el desarrollo de cualquier proyecto los cuales cumplen con las normativas y tolerancias exigidas por los organismos nacionales e internacionales.</p>
    </div>
  ),
  'Gerencia de Ingeniería': (
    <div className="text-slate-600 text-sm space-y-3 text-left">
      <p>En la Gerencia de Ingeniería se manejan todos aquellos aspectos relacionados con la ejecución de proyectos de obras civiles con un alto potencial de calidad y responsabilidad:</p>
      <ul className="list-disc pl-5 space-y-1 text-slate-700">
        <li>Construcción de Obras Civiles viales y estructurales.</li>
        <li>Construcción de obras civiles menores.</li>
        <li>Construcción de obras de contención de rocas y suelos.</li>
        <li>Remodelaciones de interiores y exteriores.</li>
        <li>Diseño e inspección de obras civiles.</li>
        <li>Control de Calidad de Obras Civiles.</li>
        <li>Control de Calidad de Movimiento y Estructuras de Tierra.</li>
        <li>Diseño e inspección de obras hidráulicas.</li>
      </ul>
    </div>
  ),
  'Gerencia de Control y Obra': (
    <div className="text-slate-600 text-sm space-y-3 text-left">
      <p>En la Gerencia de Control de Calidad e Inspección de Obras Civiles se manejan todos aquellos aspectos relacionados con la evaluación, tanto en campo como en laboratorio, de proyectos de obras civiles buscando el aseguramiento y control de la calidad exigida por lo entes rectores del país.</p>
      <ul className="list-disc pl-5 space-y-1 text-slate-700">
        <li>Laboratorio de Concreto y Asfalto.</li>
        <li>Control de Calidad de Obras Civiles metálicas.</li>
        <li>Control de Calidad de Movimiento y Estructuras de Tierra.</li>
        <li>Inspección de obras hidráulicas.</li>
        <li>Control de calidad en frentes de excavaciones (túneles).</li>
        <li>Evaluación de sistemas de contención.</li>
      </ul>
    </div>
  )
}

export const OrgChartBlockComponent = ({ block }: OrgChartBlockProps) => {
  const { badge, headline, subheadline, topNode, adminNodes = [], operationalNodes = [] } = block
  const [selectedNode, setSelectedNode] = useState<OrgNode | null>(null)

  // Prevenir scroll cuando el modal está abierto
  useEffect(() => {
    if (selectedNode) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [selectedNode])

  const handleClose = () => setSelectedNode(null)

  // Normalizar título para buscar en el diccionario (en caso de que el CMS tenga espacios o diferencias leves)
  const getDossierInfo = (title: string) => {
    const keys = Object.keys(dossierData)
    const normalizedTitle = title.toLowerCase().trim()
    const match = keys.find(k => normalizedTitle.includes(k.toLowerCase().trim()) || k.toLowerCase().trim().includes(normalizedTitle))
    return match ? dossierData[match] : <p className="text-slate-600 text-sm">Información no disponible en el dossier para este departamento.</p>
  }

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
                    onClick={() => setSelectedNode(node)}
                    className={cn(
                      'bg-slate-800 hover:bg-slate-700 border-2 p-5 rounded-2xl text-center transition-all group cursor-pointer',
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

      {/* Modal Overlay */}
      {selectedNode && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity" 
            onClick={handleClose}
          />
          
          {/* Modal Content */}
          <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-2xl max-h-[85vh] flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-slate-100">
              <div className="flex items-center gap-4">
                {selectedNode.icon && (
                  <div className={cn('w-12 h-12 rounded-xl flex items-center justify-center text-2xl', iconBgMap[selectedNode.color || 'teal'])}>
                    <span className="material-icons-outlined">{selectedNode.icon}</span>
                  </div>
                )}
                <div>
                  <h3 className="text-xl font-display font-bold text-brand-navy">{selectedNode.title}</h3>
                  {selectedNode.description && <p className="text-sm text-slate-500">{selectedNode.description}</p>}
                </div>
              </div>
              <button 
                onClick={handleClose}
                className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-colors"
              >
                <span className="material-icons-outlined">close</span>
              </button>
            </div>
            
            {/* Body */}
            <div className="p-6 overflow-y-auto">
              {getDossierInfo(selectedNode.title)}
            </div>
            
            {/* Footer */}
            <div className="p-6 border-t border-slate-100 bg-slate-50 flex justify-end">
              <button
                onClick={handleClose}
                className="px-6 py-2.5 bg-brand-navy text-white text-sm font-semibold rounded-xl hover:bg-brand-blue transition-colors"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
