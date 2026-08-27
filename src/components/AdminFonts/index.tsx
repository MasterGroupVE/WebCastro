'use client'

import React, { useEffect } from 'react'

export const AdminFonts: React.FC = () => {
  useEffect(() => {
    if (typeof document === 'undefined') return

    const preconnect1 = document.createElement('link')
    preconnect1.rel = 'preconnect'
    preconnect1.href = 'https://fonts.googleapis.com'

    const preconnect2 = document.createElement('link')
    preconnect2.rel = 'preconnect'
    preconnect2.href = 'https://fonts.gstatic.com'
    preconnect2.crossOrigin = 'anonymous'

    const fontLink = document.createElement('link')
    fontLink.rel = 'stylesheet'
    fontLink.href = 'https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&family=Space+Grotesk:wght@300..700&display=swap'

    document.head.appendChild(preconnect1)
    document.head.appendChild(preconnect2)
    document.head.appendChild(fontLink)

    const style = document.createElement('style')
    style.textContent = `
      h1, h2, h3, h4, h5, h6,
      .payload .field-label,
      .payload .nav-item,
      .payload .button,
      [class*="heading"],
      [class*="title"] {
        font-family: 'Space Grotesk', sans-serif !important;
      }
      body,
      .payload,
      .payload *:not(h1):not(h2):not(h3):not(h4):not(h5):not(h6):not([class*="heading"]):not([class*="title"]):not(.field-label):not(.nav-item):not(.button):not(code):not(pre) {
        font-family: 'DM Sans', sans-serif !important;
      }
      code, pre, .monospace, [class*="code"] {
        font-family: 'JetBrains Mono', monospace !important;
      }
    `
    document.head.appendChild(style)

    return () => {
      document.head.removeChild(preconnect1)
      document.head.removeChild(preconnect2)
      document.head.removeChild(fontLink)
      document.head.removeChild(style)
    }
  }, [])

  return null
}

export default AdminFonts