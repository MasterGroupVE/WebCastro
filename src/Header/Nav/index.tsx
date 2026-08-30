'use client'

import React from 'react'
import type { Header as HeaderType } from '@/payload-types'
import Link from 'next/link'
import { SearchIcon } from 'lucide-react'

export const HeaderNav: React.FC<{ data: HeaderType }> = ({ data }) => {
  const navLinks = data?.navLinks || []

  return (
    <nav className="flex gap-4 items-center">
      {navLinks.map((item, i) => {
        return (
          <Link key={i} href={item.href} className="text-sm font-medium hover:text-castro-green transition">
            {item.label}
          </Link>
        )
      })}
      <Link href="/search" aria-label="Buscar">
        <SearchIcon className="w-5 text-primary" />
      </Link>
    </nav>
  )
}
