'use client'

import React from 'react'
import Link from 'next/link'
import { Logo } from '@/components/Logo/Logo'

const BeforeLogin: React.FC = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '24px',
      padding: '40px',
      maxWidth: '400px',
      margin: '0 auto',
    }}>
      <Link href="/" style={{ textDecoration: 'none' }}>
        <Logo width={200} height={50} variant="inverse" priority={true} />
      </Link>
      <p style={{
        fontFamily: "'DM Sans', sans-serif",
        fontSize: '16px',
        color: '#fff',
        opacity: 0.7,
        margin: 0,
        textAlign: 'center',
      }}>
        Panel de administración
      </p>
      <Link
        href="/admin"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          padding: '12px 24px',
          background: '#009845',
          color: '#fff',
          borderRadius: '8px',
          fontFamily: "'DM Sans', sans-serif",
          fontSize: '14px',
          fontWeight: 600,
          textDecoration: 'none',
          transition: 'background 0.2s',
        }}
        onMouseEnter={(e) => { e.currentTarget.style.background = '#007a38' }}
        onMouseLeave={(e) => { e.currentTarget.style.background = '#009845' }}
      >
        Acceder al panel
      </Link>
    </div>
  )
}

export default BeforeLogin
