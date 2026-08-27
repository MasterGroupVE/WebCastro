import { getCachedGlobal } from '@/utilities/getGlobals'
import Link from 'next/link'
import React from 'react'

import { ThemeSelector } from '@/providers/Theme/ThemeSelector'
import { CMSLink } from '@/components/Link'
import { Logo } from '@/components/Logo/Logo'

export async function Footer() {
  const footerData = await getCachedGlobal('footer', 1)()

  const navItems = footerData?.navItems || []

  return (
    <footer className="mt-auto border-t border-brand-navy/20 bg-brand-navy text-white">
      <div className="container py-8 gap-8 flex flex-col md:flex-row md:justify-between">
        <Link className="flex items-center" href="/">
          <Logo variant="inverse" />
        </Link>

        <div className="flex flex-col-reverse items-start md:flex-row gap-4 md:items-center">
          <ThemeSelector />
          <nav className="flex flex-col md:flex-row gap-4">
            {navItems.map(({ link }, i) => {
              return <CMSLink className="text-white hover:text-brand-gold transition-colors" key={i} {...link} />
            })}
          </nav>
        </div>
      </div>
      <div className="border-t border-brand-navy/30 px-4 py-4">
        <p className="text-center text-sm text-white/60 font-body">
          © {new Date().getFullYear()} Construcciones Los Castros. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  )
}
