import { Banner } from '@payloadcms/ui/elements/Banner'
import React from 'react'

import { SeedButton } from './SeedButton'
import { Logo } from '@/components/Logo/Logo'

const baseClass = 'before-dashboard'

const BeforeDashboard: React.FC = () => {
  const brandStyles = {
    container: {
      padding: '24px',
      borderRadius: '12px',
      background: 'linear-gradient(135deg, #f8f9fa 0%, #eef2f5 100%)',
      border: '1px solid #e1e5e9',
    },
    header: {
      display: 'flex',
      alignItems: 'center',
      gap: '16px',
      marginBottom: '24px',
      paddingBottom: '24px',
      borderBottom: '2px solid #F8D000',
    },
    logo: {
      width: '48px',
      height: '48px',
      background: '#092F56',
      borderRadius: '10px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      fontFamily: "'Space Grotesk', sans-serif",
      fontSize: '20px',
      fontWeight: 700,
      color: '#092F56',
      margin: 0,
    },
    subtitle: {
      fontFamily: "'DM Sans', sans-serif",
      fontSize: '14px',
      color: '#666',
      margin: '4px 0 0',
    },
    banner: {
      background: '#E8F5E9',
      border: '1px solid #009845',
      borderRadius: '8px',
      padding: '16px',
    },
    bannerTitle: {
      fontFamily: "'Space Grotesk', sans-serif",
      fontSize: '16px',
      fontWeight: 600,
      color: '#009845',
      margin: '0 0 12px',
    },
    instructions: {
      fontFamily: "'DM Sans', sans-serif",
      fontSize: '14px',
      color: '#333',
      lineHeight: 1.6,
      paddingLeft: '20px',
      margin: '16px 0',
    },
    instructionItem: {
      marginBottom: '12px',
    },
    link: {
      color: '#092F56',
      fontWeight: 500,
      textDecoration: 'none',
      transition: 'color 0.2s',
    },
    proTip: {
      fontFamily: "'DM Sans', sans-serif",
      fontSize: '13px',
      color: '#888',
      marginTop: '24px',
      paddingTop: '16px',
      borderTop: '1px solid #e1e5e9',
    },
  }

  return (
    <div className={baseClass} style={brandStyles.container}>
      <div style={{ textAlign: 'center', marginBottom: '24px' }}>
        <Logo width={180} height={45} priority={true} />
      </div>
      <p style={{ ...brandStyles.instructions, fontWeight: 500, color: '#092F56', marginBottom: '12px', textAlign: 'center' }}>
        Bienvenido a tu panel de control
      </p>

      <ul style={brandStyles.instructions} className={`${baseClass}__instructions`}>
        <li style={brandStyles.instructionItem}>
          <SeedButton />
          {' con páginas, posts y proyectos de ejemplo para iniciar tu sitio, luego '}
          <a href="/" target="_blank" rel="noopener noreferrer" style={brandStyles.link}>
            visita tu web
          </a>
          {' para ver el resultado.'}
        </li>
        <li style={brandStyles.instructionItem}>
          {'Modifica tus '}
          <a href="https://payloadcms.com/docs/configuration/collections" rel="noopener noreferrer" target="_blank" style={brandStyles.link}>
            colecciones
          </a>
          {' y añade más '}
          <a href="https://payloadcms.com/docs/fields/overview" rel="noopener noreferrer" target="_blank" style={brandStyles.link}>
            campos
          </a>
          {' según necesites. Si eres nuevo en Payload, te recomendamos la '}
          <a href="https://payloadcms.com/docs/getting-started/what-is-payload" rel="noopener noreferrer" target="_blank" style={brandStyles.link}>
            guía de inicio
          </a>
          {'.'}
        </li>
        <li style={brandStyles.instructionItem}>
          Haz commit y push de tus cambios para desplegar automáticamente.
        </li>
      </ul>

      <p style={brandStyles.proTip}>
        {'Pro Tip: Este bloque es un '}
        <a href="https://payloadcms.com/docs/custom-components/overview" rel="noopener noreferrer" target="_blank" style={brandStyles.link}>
          componente personalizado
        </a>
        {', puedes eliminarlo actualizando tu <strong>payload.config</strong>.'}
      </p>
    </div>
  )
}

export default BeforeDashboard
