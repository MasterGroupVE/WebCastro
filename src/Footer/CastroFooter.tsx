'use client'

import React from 'react'
import { showToast } from '@/components/landing/QuoteModal'

function DefaultFooterLogo() {
  return (
    <div className="relative w-10 h-10 flex items-center justify-center">
      <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 5 L88 27 L88 73 L50 95 L12 73 L12 27 Z" stroke="#009E49" strokeWidth="8" fill="none" />
        <path d="M50 18 L75 33 L75 67 L50 82 L25 67 L25 33 Z" stroke="#FFC700" strokeWidth="7" fill="none" />
        <path d="M35 30 L65 30 L50 70 Z" fill="#FFFFFF" />
      </svg>
    </div>
  )
}

export interface CastroFooterProps {
  data?: {
    logo?: any
    companyName?: string | null
    description?: string | null
    socialLinks?: {
      facebook?: string | null
      instagram?: string | null
      linkedin?: string | null
      whatsapp?: string | null
    } | null
    column2Title?: string | null
    companyLinks?: Array<{ label: string; href: string }> | null
    column3Title?: string | null
    serviceLinks?: Array<{ label: string; href: string }> | null
    newsletterTitle?: string | null
    newsletterDescription?: string | null
    newsletterButtonText?: string | null
    copyrightText?: string | null
    legalLinks?: Array<{ label: string; href: string }> | null
  } | null
}

const defaultCompanyLinks = [
  { label: 'Sobre Nosotros', href: '#nosotros' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Testimonios', href: '#testimonios' },
]

const defaultServiceLinks = [
  { label: 'Obras Viales y Autopistas', href: '#servicios' },
  { label: 'Pilotaje y Geotecnia', href: '#servicios' },
  { label: 'Petróleo, Gas e Hidrocarburos', href: '#servicios' },
  { label: 'Obras Hidráulicas y Sanitarias', href: '#servicios' },
]

const defaultLegalLinks = [
  { label: 'Política de Privacidad', href: '#' },
  { label: 'Términos de Servicio', href: '#' },
]

export function CastroFooter({ data }: CastroFooterProps) {
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    showToast('¡Suscripción Exitosa!', 'Te has suscrito al boletín de Los Castros.')
  }

  const logoUrl =
    typeof data?.logo === 'object' && data?.logo?.url
      ? data.logo.url
      : typeof data?.logo === 'string'
      ? data.logo
      : null

  const companyName = data?.companyName || 'Construcciones Los Castros C.A.'
  const description =
    data?.description ||
    'Soluciones integrales de ingeniería civil, geotecnia, obras viales, pantallas atirantadas, obras hidráulicas y sector petrolero. Construyendo con bases sólidas y garantía técnica.'

  const socialLinks = data?.socialLinks || {}
  const facebook = socialLinks.facebook || '#'
  const instagram = socialLinks.instagram || '#'
  const linkedin = socialLinks.linkedin || '#'
  const whatsapp = socialLinks.whatsapp || 'https://wa.me/584129643616'

  const column2Title = data?.column2Title || 'Empresa'
  const companyLinks = data?.companyLinks?.length ? data.companyLinks : defaultCompanyLinks

  const column3Title = data?.column3Title || 'Servicios'
  const serviceLinks = data?.serviceLinks?.length ? data.serviceLinks : defaultServiceLinks

  const newsletterTitle = data?.newsletterTitle || 'Boletín Informativo'
  const newsletterDescription =
    data?.newsletterDescription || 'Recibe consejos de remodelación y novedades de construcción.'
  const newsletterButtonText = data?.newsletterButtonText || 'Suscribirme'

  const copyrightText =
    data?.copyrightText || '© 2026 Construcciones Los Castros C.A. Todos los derechos reservados.'
  const legalLinks = data?.legalLinks?.length ? data.legalLinks : defaultLegalLinks

  return (
    <footer id="contacto" className="bg-castro-darknavy text-white pt-16 pb-12 border-t border-white/10 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#inicio" className="flex items-center gap-3">
              {logoUrl ? (
                <div className="relative h-10 flex items-center justify-center">
                  <img
                    src={logoUrl}
                    alt={companyName}
                    className="max-h-10 max-w-[140px] w-auto object-contain"
                  />
                </div>
              ) : (
                <DefaultFooterLogo />
              )}
              <span className="text-xl font-extrabold text-white">{companyName}</span>
            </a>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              {description}
            </p>
            <div className="flex items-center space-x-3 pt-2">
              {facebook && (
                <a
                  href={facebook}
                  className="w-9 h-9 rounded-lg bg-white/10 hover:bg-castro-green flex items-center justify-center text-sm transition"
                  aria-label="Facebook"
                >
                  <i className="fa-brands fa-facebook-f"></i>
                </a>
              )}
              {instagram && (
                <a
                  href={instagram}
                  className="w-9 h-9 rounded-lg bg-white/10 hover:bg-castro-green flex items-center justify-center text-sm transition"
                  aria-label="Instagram"
                >
                  <i className="fa-brands fa-instagram"></i>
                </a>
              )}
              {linkedin && (
                <a
                  href={linkedin}
                  className="w-9 h-9 rounded-lg bg-white/10 hover:bg-castro-green flex items-center justify-center text-sm transition"
                  aria-label="LinkedIn"
                >
                  <i className="fa-brands fa-linkedin-in"></i>
                </a>
              )}
              {whatsapp && (
                <a
                  href={whatsapp}
                  className="w-9 h-9 rounded-lg bg-white/10 hover:bg-castro-green flex items-center justify-center text-sm transition"
                  aria-label="WhatsApp"
                >
                  <i className="fa-brands fa-whatsapp"></i>
                </a>
              )}
            </div>
          </div>

          {/* Col 2: Empresa */}
          <div>
            <h4 className="text-sm font-bold text-castro-yellow uppercase tracking-wider mb-4">
              {column2Title}
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-300">
              {companyLinks.map((item, idx) => (
                <li key={idx}>
                  <a href={item.href} className="hover:text-castro-green transition">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Servicios */}
          <div>
            <h4 className="text-sm font-bold text-castro-yellow uppercase tracking-wider mb-4">
              {column3Title}
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-300">
              {serviceLinks.map((item, idx) => (
                <li key={idx}>
                  <a href={item.href} className="hover:text-castro-green transition">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Newsletter */}
          <div>
            <h4 className="text-sm font-bold text-castro-yellow uppercase tracking-wider mb-4">
              {newsletterTitle}
            </h4>
            {newsletterDescription && (
              <p className="text-xs text-slate-400 mb-3">{newsletterDescription}</p>
            )}
            <form onSubmit={handleSubscribe} className="space-y-2">
              <input
                type="email"
                placeholder="Tu correo electrónico"
                required
                className="w-full px-3.5 py-2.5 rounded-lg bg-white/10 border border-white/20 text-white placeholder-slate-400 text-xs focus:outline-none focus:border-castro-yellow"
              />
              <button
                type="submit"
                className="w-full bg-castro-green hover:bg-castro-greenhover text-white text-xs font-bold py-2.5 rounded-lg transition shadow cursor-pointer"
              >
                {newsletterButtonText}
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-400 gap-4">
          <p>{copyrightText}</p>
          {legalLinks && legalLinks.length > 0 && (
            <div className="flex space-x-6">
              {legalLinks.map((link, idx) => (
                <a key={idx} href={link.href} className="hover:text-white transition">
                  {link.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </footer>
  )
}
