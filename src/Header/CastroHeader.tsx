'use client'

import { useState } from 'react'
import { openQuoteModal } from '@/components/landing/QuoteModal'

function Logo() {
  return (
    <div className="relative w-11 h-11 flex items-center justify-center">
      <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 5 L88 27 L88 73 L50 95 L12 73 L12 27 Z" stroke="#009E49" strokeWidth="8" fill="none" />
        <path d="M50 18 L75 33 L75 67 L50 82 L25 67 L25 33 Z" stroke="#FFC700" strokeWidth="7" fill="none" />
        <path d="M35 30 L65 30 L50 70 Z" fill="#0B2545" />
      </svg>
    </div>
  )
}

export function CastroHeader() {
  const [mobileOpen, setMobileOpen] = useState(false)

  const navLinks = [
    { href: '#inicio', label: 'Inicio' },
    { href: '#nosotros', label: 'Nosotros' },
    { href: '#servicios', label: 'Servicios' },
    { href: '#proyectos', label: 'Proyectos' },
    { href: '#testimonios', label: 'Clientes' },
    { href: '#faq', label: 'Preguntas' },
    { href: '#blog', label: 'Blog' },
  ]

  return (
    <header className="font-sans">
      {/* Top Bar */}
      <div className="bg-castro-darknavy text-white text-xs py-2.5 px-4 border-b border-white/10 hidden sm:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6 text-slate-300">
            <span className="flex items-center gap-2">
              <i className="fa-solid fa-location-dot text-castro-yellow"></i>
              Av. Principal Los Castros, Edif. Corporativo, Piso 4
            </span>
            <span className="flex items-center gap-2">
              <i className="fa-solid fa-phone text-castro-green"></i>
              +58 (212) 555-CASTRO / +58 (412) 000-1234
            </span>
            <span className="flex items-center gap-2">
              <i className="fa-solid fa-clock text-castro-yellow"></i>
              Lun - Vie: 8:00 AM - 5:00 PM
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-3 text-slate-300">
              <a href="#" className="hover:text-castro-yellow transition">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a href="#" className="hover:text-castro-yellow transition">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="#" className="hover:text-castro-yellow transition">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
              <a href="#" className="hover:text-castro-yellow transition">
                <i className="fa-brands fa-whatsapp"></i>
              </a>
            </div>
            <button
              type="button"
              onClick={openQuoteModal}
              className="bg-castro-green hover:bg-castro-greenhover text-white text-xs font-semibold px-3.5 py-1 rounded-full transition shadow-sm cursor-pointer"
            >
              Solicitar Cotización
            </button>
          </div>
        </div>
      </div>

      {/* Header / Navbar */}
      <div className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <a href="#inicio" className="flex items-center gap-3 group">
              <Logo />
              <div className="flex flex-col">
                <span className="text-xl font-extrabold text-castro-navy leading-tight tracking-tight">
                  Construcciones
                </span>
                <span className="text-base font-bold text-castro-navy leading-tight tracking-wide flex items-center gap-1">
                  Los Castros <span className="text-xs font-semibold text-castro-green">C.A.</span>
                </span>
              </div>
            </a>

            <nav className="hidden md:flex items-center space-x-8 font-medium text-sm text-castro-textdark">
              {navLinks.map((l, i) => (
                <a
                  key={l.href}
                  href={l.href}
                  className={`hover:text-castro-green transition ${
                    i === 0 ? 'text-castro-green font-semibold' : ''
                  }`}
                >
                  {l.label}
                </a>
              ))}
            </nav>

            <div className="hidden lg:flex items-center gap-3">
              <a
                href="tel:+582125552278"
                className="flex items-center gap-2 text-xs font-bold text-castro-navy bg-slate-100 hover:bg-slate-200 px-3.5 py-2.5 rounded-lg transition"
              >
                <i className="fa-solid fa-headset text-castro-green text-sm"></i>
                <span>+58 (212) 555-CASTRO</span>
              </a>
              <button
                type="button"
                onClick={openQuoteModal}
                className="bg-castro-yellow hover:bg-castro-yellowhover text-castro-navy font-bold text-sm px-5 py-2.5 rounded-lg transition shadow-md flex items-center gap-2 cursor-pointer"
              >
                <span>Consulta Gratuita</span>
                <i className="fa-solid fa-arrow-right text-xs"></i>
              </button>
            </div>

            <div className="md:hidden flex items-center">
              <button
                type="button"
                onClick={() => setMobileOpen((v) => !v)}
                className="p-2 rounded-md text-castro-navy hover:text-castro-green focus:outline-none"
                aria-label="Menú"
              >
                <i className="fa-solid fa-bars text-2xl"></i>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-3 ${mobileOpen ? 'block' : 'hidden'}`}>
          {navLinks.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMobileOpen(false)}
              className={`block px-3 py-2 rounded-md ${
                i === 0
                  ? 'text-castro-green font-semibold bg-emerald-50'
                  : 'text-castro-textdark hover:bg-slate-50'
              }`}
            >
              {l.label}
            </a>
          ))}
          <div className="pt-2">
            <button
              type="button"
              onClick={() => {
                setMobileOpen(false)
                openQuoteModal()
              }}
              className="w-full bg-castro-yellow text-castro-navy font-bold text-center py-3 rounded-lg shadow cursor-pointer"
            >
              Consulta Gratuita
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
