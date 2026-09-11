'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export function SmoothScrollHandler() {
  const pathname = usePathname()

  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash
      if (hash) {
        const id = hash.replace('#', '')
        const scrollToElement = () => {
          const element = document.getElementById(id)
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' })
            return true
          }
          return false
        }

        if (!scrollToElement()) {
          const t1 = setTimeout(scrollToElement, 100)
          const t2 = setTimeout(scrollToElement, 300)
          const t3 = setTimeout(scrollToElement, 700)
          return () => {
            clearTimeout(t1)
            clearTimeout(t2)
            clearTimeout(t3)
          }
        }
      }
    }

    handleHash()
  }, [pathname])

  return null
}
