'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { openQuoteModal } from '@/components/landing/QuoteModal'
import { cn } from '@/utilities/ui'

function DefaultLogo() {
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

export interface CastroHeaderProps {
  data?: {
    showTopBar?: boolean | null
    address?: string | null
    phone?: string | null
    schedule?: string | null
    topCtaText?: string | null
    topCtaAction?: 'modal' | 'link' | null
    topCtaLink?: string | null
    socialLinks?: {
      facebook?: string | null
      instagram?: string | null
      linkedin?: string | null
      whatsapp?: string | null
    } | null
    logo?: any
    showTextBrand?: boolean | null
    companyName?: string | null
    companyHighlight?: string | null
    companySuffix?: string | null
    navLinks?: Array<{ label: string; href: string }> | null
    phoneButtonText?: string | null
    phoneButtonLink?: string | null
    mainCtaText?: string | null
    mainCtaAction?: 'modal' | 'link' | null
    mainCtaLink?: string | null
  } | null
}

const defaultNavLinks = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#nosotros', label: 'Nosotros' },
  { href: '#servicios', label: 'Servicios' },
  { href: '#proyectos', label: 'Proyectos' },
  { href: '#testimonios', label: 'Clientes' },
  { href: '#faq', label: 'Preguntas' },
  { href: '#blog', label: 'Blog' },
]

export function CastroHeader({ data }: CastroHeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const pathname = usePathname()

  const showTopBar = data?.showTopBar !== false
  const address = data?.address || 'El Junquito, Km 23 / Caracas, Venezuela'
  const phone = data?.phone || '+58 (412) 964-3616 / +58 (414) 390-4751'
  const schedule = data?.schedule || 'Lun - Vie: 8:00 AM - 5:00 PM'
  const topCtaText = data?.topCtaText || 'Solicitar Cotización'
  const topCtaAction = data?.topCtaAction || 'modal'
  const topCtaLink = data?.topCtaLink || '#'

  const socialLinks = data?.socialLinks || {}
  const facebook = socialLinks.facebook || '#'
  const instagram = socialLinks.instagram || '#'
  const linkedin = socialLinks.linkedin || '#'
  const whatsapp = socialLinks.whatsapp || 'https://wa.me/584129643616'

  const logoUrl =
    typeof data?.logo === 'object' && data?.logo?.url
      ? data.logo.url
      : typeof data?.logo === 'string'
      ? data.logo
      : null

  const showTextBrand = data?.showTextBrand !== false
  const companyName = data?.companyName || 'Construcciones'
  const companyHighlight = data?.companyHighlight || 'Los Castros'
  const companySuffix = data?.companySuffix || 'C.A.'

  const navLinks = data?.navLinks?.length ? data.navLinks : defaultNavLinks

  const phoneButtonText = data?.phoneButtonText || '+58 (412) 964-3616'
  const phoneButtonLink = data?.phoneButtonLink || 'tel:+584129643616'

  const mainCtaText = data?.mainCtaText || 'Consulta Gratuita'
  const mainCtaAction = data?.mainCtaAction || 'modal'
  const mainCtaLink = data?.mainCtaLink || '#'

  // Scroll detection for navbar elevation (shadow) without layout shift
  useEffect(() => {
    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 15)
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Scroll spy to highlight active section on the home page
  useEffect(() => {
    if (pathname !== '/') {
      setActiveSection('')
      return
    }

    const sectionIds = navLinks
      .map((l) => (l.href.includes('#') ? l.href.split('#')[1] : null))
      .filter(Boolean) as string[]

    if (!sectionIds.length) return

    let ticking = false
    const handleScrollSpy = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollPosition = window.scrollY + 140
          for (let i = sectionIds.length - 1; i >= 0; i--) {
            const id = sectionIds[i]
            const el = document.getElementById(id)
            if (el) {
              const top = el.offsetTop
              if (scrollPosition >= top) {
                setActiveSection(id)
                ticking = false
                return
              }
            }
          }
          setActiveSection(sectionIds[0] || '')
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScrollSpy, { passive: true })
    handleScrollSpy()
    return () => window.removeEventListener('scroll', handleScrollSpy)
  }, [pathname, navLinks])

  // Handle smooth scroll on home page or cross-page navigation
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setMobileOpen(false)

    const isHash = href.includes('#')
    if (!isHash) return

    const [pathPart, hashPart] = href.split('#')
    const isTargetHome = !pathPart || pathPart === '/'

    if (pathname === '/' && isTargetHome && hashPart) {
      e.preventDefault()
      const targetElement = document.getElementById(hashPart)
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' })
        window.history.pushState(null, '', `#${hashPart}`)
        setActiveSection(hashPart)
      }
    }
  }

  return (
    <>
      {/* Top Bar - In normal document flow, scrolls away naturally with zero jitter */}
      {showTopBar && (
        <div className="bg-castro-darknavy text-white text-xs py-2.5 px-4 border-b border-white/10 hidden sm:block">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <div className="flex items-center space-x-6 text-slate-300">
              {address && (
                <span className="flex items-center gap-2">
                  <i className="fa-solid fa-location-dot text-castro-yellow"></i>
                  {address}
                </span>
              )}
              {phone && (
                <span className="flex items-center gap-2">
                  <i className="fa-solid fa-phone text-castro-green"></i>
                  {phone}
                </span>
              )}
              {schedule && (
                <span className="flex items-center gap-2">
                  <i className="fa-solid fa-clock text-castro-yellow"></i>
                  {schedule}
                </span>
              )}
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-3 text-slate-300">
                {facebook && (
                  <a href={facebook} className="hover:text-castro-yellow transition" aria-label="Facebook">
                    <i className="fa-brands fa-facebook-f"></i>
                  </a>
                )}
                {instagram && (
                  <a href={instagram} className="hover:text-castro-yellow transition" aria-label="Instagram">
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                )}
                {linkedin && (
                  <a href={linkedin} className="hover:text-castro-yellow transition" aria-label="LinkedIn">
                    <i className="fa-brands fa-linkedin-in"></i>
                  </a>
                )}
                {whatsapp && (
                  <a href={whatsapp} className="hover:text-castro-yellow transition" aria-label="WhatsApp">
                    <i className="fa-brands fa-whatsapp"></i>
                  </a>
                )}
              </div>
              {topCtaText && (
                <>
                  {topCtaAction === 'modal' ? (
                    <button
                      type="button"
                      onClick={openQuoteModal}
                      className="bg-castro-green hover:bg-castro-greenhover text-white text-xs font-semibold px-3.5 py-1 rounded-full transition shadow-sm cursor-pointer"
                    >
                      {topCtaText}
                    </button>
                  ) : (
                    <a
                      href={topCtaLink}
                      className="bg-castro-green hover:bg-castro-greenhover text-white text-xs font-semibold px-3.5 py-1 rounded-full transition shadow-sm"
                    >
                      {topCtaText}
                    </a>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Main Sticky Navbar - Sticks at top-0 across the whole page with zero bounce */}
      <header
        className={cn(
          'sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b font-sans transition-all duration-200',
          isScrolled ? 'shadow-md border-slate-200/90' : 'shadow-xs border-slate-100',
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link
              href={pathname === '/' ? '#inicio' : '/'}
              onClick={(e) => handleNavClick(e, '#inicio')}
              className="flex items-center gap-3 group cursor-pointer"
            >
              {logoUrl ? (
                <div className="relative h-12 flex items-center justify-center">
                  <img
                    src={logoUrl}
                    alt={companyName || 'Logo'}
                    className="max-h-12 max-w-[160px] w-auto object-contain"
                  />
                </div>
              ) : (
                <DefaultLogo />
              )}

              {showTextBrand && (
                <div className="flex flex-col">
                  <span className="text-xl font-extrabold text-castro-navy leading-tight tracking-tight">
                    {companyName}
                  </span>
                  <span className="text-base font-bold text-castro-navy leading-tight tracking-wide flex items-center gap-1">
                    {companyHighlight}{' '}
                    {companySuffix && (
                      <span className="text-xs font-semibold text-castro-green">{companySuffix}</span>
                    )}
                  </span>
                </div>
              )}
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-7 font-medium text-sm text-castro-textdark">
              {navLinks.map((l, i) => {
                const isHash = l.href.includes('#')
                const hashId = isHash ? l.href.split('#')[1] : ''
                const targetHref = l.href.startsWith('#')
                  ? pathname === '/'
                    ? l.href
                    : `/${l.href}`
                  : l.href

                const isActive =
                  pathname === '/'
                    ? activeSection
                      ? activeSection === hashId
                      : i === 0
                    : pathname === l.href

                return (
                  <Link
                    key={l.href + i}
                    href={targetHref}
                    onClick={(e) => handleNavClick(e, l.href)}
                    className={cn(
                      'transition-colors py-1 relative font-medium',
                      isActive
                        ? 'text-castro-green font-bold'
                        : 'text-castro-textdark hover:text-castro-green',
                    )}
                  >
                    {l.label}
                    {isActive && (
                      <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-castro-green rounded-full transition-all" />
                    )}
                  </Link>
                )
              })}
            </nav>

            {/* Call Button & Main CTA */}
            <div className="hidden lg:flex items-center gap-3">
              {phoneButtonText && (
                <a
                  href={phoneButtonLink}
                  className="flex items-center gap-2 text-xs font-bold text-castro-navy bg-slate-100 hover:bg-slate-200 px-3.5 py-2.5 rounded-lg transition"
                >
                  <i className="fa-solid fa-headset text-castro-green text-sm"></i>
                  <span>{phoneButtonText}</span>
                </a>
              )}
              {mainCtaText && (
                <>
                  {mainCtaAction === 'modal' ? (
                    <button
                      type="button"
                      onClick={openQuoteModal}
                      className="bg-castro-yellow hover:bg-castro-yellowhover text-castro-navy font-bold text-sm px-5 py-2.5 rounded-lg transition shadow-md flex items-center gap-2 cursor-pointer"
                    >
                      <span>{mainCtaText}</span>
                      <i className="fa-solid fa-arrow-right text-xs"></i>
                    </button>
                  ) : (
                    <a
                      href={mainCtaLink}
                      className="bg-castro-yellow hover:bg-castro-yellowhover text-castro-navy font-bold text-sm px-5 py-2.5 rounded-lg transition shadow-md flex items-center gap-2"
                    >
                      <span>{mainCtaText}</span>
                      <i className="fa-solid fa-arrow-right text-xs"></i>
                    </a>
                  )}
                </>
              )}
            </div>

            {/* Mobile Hamburger Button */}
            <div className="md:hidden flex items-center">
              <button
                type="button"
                onClick={() => setMobileOpen((v) => !v)}
                className="p-2 rounded-md text-castro-navy hover:text-castro-green focus:outline-none"
                aria-label="Menú"
              >
                <i className={cn('fa-solid text-2xl', mobileOpen ? 'fa-xmark' : 'fa-bars')}></i>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            'md:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-2 transition-all',
            mobileOpen ? 'block' : 'hidden',
          )}
        >
          {navLinks.map((l, i) => {
            const isHash = l.href.includes('#')
            const hashId = isHash ? l.href.split('#')[1] : ''
            const targetHref = l.href.startsWith('#')
              ? pathname === '/'
                ? l.href
                : `/${l.href}`
              : l.href

            const isActive =
              pathname === '/'
                ? activeSection
                  ? activeSection === hashId
                  : i === 0
                : pathname === l.href

            return (
              <Link
                key={l.href + i}
                href={targetHref}
                onClick={(e) => handleNavClick(e, l.href)}
                className={cn(
                  'block px-3 py-2 rounded-md font-medium transition',
                  isActive
                    ? 'text-castro-green font-bold bg-emerald-50'
                    : 'text-castro-textdark hover:bg-slate-50',
                )}
              >
                {l.label}
              </Link>
            )
          })}
          {mainCtaText && (
            <div className="pt-2">
              {mainCtaAction === 'modal' ? (
                <button
                  type="button"
                  onClick={() => {
                    setMobileOpen(false)
                    openQuoteModal()
                  }}
                  className="w-full bg-castro-yellow text-castro-navy font-bold text-center py-3 rounded-lg shadow cursor-pointer"
                >
                  {mainCtaText}
                </button>
              ) : (
                <a
                  href={mainCtaLink}
                  onClick={() => setMobileOpen(false)}
                  className="block w-full bg-castro-yellow text-castro-navy font-bold text-center py-3 rounded-lg shadow"
                >
                  {mainCtaText}
                </a>
              )}
            </div>
          )}
        </div>
      </header>
    </>
  )
}
