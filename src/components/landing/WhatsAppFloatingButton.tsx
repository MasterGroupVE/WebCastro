'use client'

import { useState } from 'react'

interface WhatsAppFloatingButtonProps {
  phones?: Array<{ label: string; number: string; display?: string }>
}

const defaultPhones = [
  { label: 'Atención 1', number: '584129643616', display: '+58 (412) 964-3616' },
  { label: 'Atención 2', number: '584143904751', display: '+58 (414) 390-4751' },
]

export function WhatsAppFloatingButton({ phones = defaultPhones }: WhatsAppFloatingButtonProps) {
  const [showMenu, setShowMenu] = useState(false)

  return (
    <div className="fixed bottom-6 left-6 z-50 flex flex-col items-start font-sans">
      {/* Popover con los números disponibles */}
      {showMenu && (
        <div className="mb-3 bg-white rounded-2xl shadow-2xl border border-slate-100 p-4 w-64 animate-in fade-in slide-in-from-bottom-3 duration-200">
          <div className="flex justify-between items-center mb-2 pb-2 border-b border-slate-100">
            <span className="text-xs font-bold text-castro-navy flex items-center gap-1.5">
              <i className="fa-brands fa-whatsapp text-[#25D366] text-base"></i>
              Contactar por WhatsApp
            </span>
            <button
              onClick={() => setShowMenu(false)}
              className="text-slate-400 hover:text-slate-600 text-xs p-1"
              aria-label="Cerrar"
            >
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>
          <p className="text-[11px] text-slate-500 mb-3">
            Selecciona el número de tu preferencia para iniciar el chat:
          </p>
          <div className="space-y-2">
            {phones.map((p, idx) => (
              <a
                key={idx}
                href={`https://wa.me/${p.number}?text=Hola%2C%20quisiera%20solicitar%20informaci%C3%B3n%20sobre%20sus%20servicios%20de%20construcci%C3%B3n.`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setShowMenu(false)}
                className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 hover:bg-emerald-50 text-castro-navy hover:text-[#25D366] border border-slate-100 transition group"
              >
                <div className="flex flex-col">
                  <span className="text-xs font-bold">{p.display}</span>
                  <span className="text-[10px] text-slate-400 group-hover:text-emerald-600">{p.label}</span>
                </div>
                <i className="fa-solid fa-chevron-right text-xs text-slate-300 group-hover:text-[#25D366] transition-transform group-hover:translate-x-0.5"></i>
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Botón flotante principal de WhatsApp */}
      <button
        type="button"
        onClick={() => setShowMenu((prev) => !prev)}
        aria-label="Abrir WhatsApp"
        className="relative group flex items-center gap-3 bg-[#25D366] hover:bg-[#20ba5a] text-white px-4 py-3.5 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer"
      >
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-300"></span>
        </span>
        <i className="fa-brands fa-whatsapp text-2xl"></i>
        <span className="text-xs font-extrabold pr-1 tracking-wide hidden sm:inline-block">Escríbenos</span>
      </button>
    </div>
  )
}
