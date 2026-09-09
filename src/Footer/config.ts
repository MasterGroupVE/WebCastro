import type { GlobalConfig } from 'payload'
import { revalidateFooter } from './hooks/revalidateFooter'

export const Footer: GlobalConfig = {
  slug: 'footer',
  label: 'Pie de Página (Footer)',
  access: {
    read: () => true,
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Marca y Redes',
          fields: [
            {
              name: 'logo',
              type: 'upload',
              relationTo: 'media',
              label: 'Logo del Pie de Página (Imagen/SVG/PNG personalizada)',
              admin: {
                description: 'Si no subes una imagen, se mostrará el isotipo oficial blanco de Los Castros.',
              },
            },
            {
              name: 'companyName',
              type: 'text',
              label: 'Nombre de la empresa',
              defaultValue: 'Construcciones Los Castros C.A.',
            },
            {
              name: 'description',
              type: 'textarea',
              label: 'Descripción corporativa',
              defaultValue:
                'Soluciones integrales de ingeniería civil, geotecnia, obras viales, pantallas atirantadas, obras hidráulicas y sector petrolero. Construyendo con bases sólidas y garantía técnica.',
            },
{
            name: 'socialLinks',
            type: 'group',
            label: 'Redes Sociales',
            fields: [
              {
                name: 'facebook',
                type: 'text',
                label: 'Enlace Facebook',
                defaultValue: '#',
              },
              {
                name: 'instagram',
                type: 'text',
                label: 'Enlace Instagram',
                defaultValue: '#',
              },
              {
                name: 'linkedin',
                type: 'text',
                label: 'Enlace LinkedIn',
                defaultValue: '#',
              },
              {
                name: 'whatsapp',
                type: 'text',
                label: 'Enlace WhatsApp',
                defaultValue: 'https://wa.me/584129643616',
              },
              {
                name: 'showText',
                type: 'checkbox',
                label: 'Mostrar texto junto a íconos',
                defaultValue: true,
              },
            ],
          },
          ],
        },
        {
          label: 'Columnas de Enlaces',
          fields: [
            {
              name: 'column2Title',
              type: 'text',
              label: 'Título Columna 2 (ej. Empresa)',
              defaultValue: 'Empresa',
            },
            {
              name: 'companyLinks',
              type: 'array',
              label: 'Enlaces de la Columna 2',
              labels: { singular: 'Enlace', plural: 'Enlaces' },
              defaultValue: [
                { label: 'Sobre Nosotros', href: '#nosotros' },
                { label: 'Servicios', href: '#servicios' },
                { label: 'Proyectos', href: '#proyectos' },
                { label: 'Testimonios', href: '#testimonios' },
              ],
              admin: {
                initCollapsed: true,
                components: {
                  RowLabel: '@/Footer/RowLabel#RowLabel',
                },
              },
              fields: [
                {
                  name: 'label',
                  type: 'text',
                  required: true,
                  label: 'Texto del enlace',
                },
                {
                  name: 'href',
                  type: 'text',
                  required: true,
                  label: 'Destino (ej. #nosotros o /posts)',
                },
              ],
            },
            {
              name: 'column3Title',
              type: 'text',
              label: 'Título Columna 3 (ej. Servicios)',
              defaultValue: 'Servicios',
            },
            {
              name: 'serviceLinks',
              type: 'array',
              label: 'Enlaces de la Columna 3',
              labels: { singular: 'Enlace', plural: 'Enlaces' },
              defaultValue: [
                { label: 'Obras Viales y Autopistas', href: '#servicios' },
                { label: 'Pilotaje y Geotecnia', href: '#servicios' },
                { label: 'Petróleo, Gas e Hidrocarburos', href: '#servicios' },
                { label: 'Obras Hidráulicas y Sanitarias', href: '#servicios' },
              ],
              admin: {
                initCollapsed: true,
                components: {
                  RowLabel: '@/Footer/RowLabel#RowLabel',
                },
              },
              fields: [
                {
                  name: 'label',
                  type: 'text',
                  required: true,
                  label: 'Texto del enlace',
                },
                {
                  name: 'href',
                  type: 'text',
                  required: true,
                  label: 'Destino (ej. #servicios o /posts)',
                },
              ],
            },
          ],
        },
        {
          label: 'Boletín y Legal',
          fields: [
            {
              name: 'newsletterTitle',
              type: 'text',
              label: 'Título del Boletín',
              defaultValue: 'Boletín Informativo',
            },
            {
              name: 'newsletterDescription',
              type: 'textarea',
              label: 'Texto del Boletín',
              defaultValue: 'Recibe consejos de remodelación y novedades de construcción.',
            },
            {
              name: 'newsletterButtonText',
              type: 'text',
              label: 'Texto del botón de suscripción',
              defaultValue: 'Suscribirme',
            },
            {
              name: 'copyrightText',
              type: 'text',
              label: 'Texto de Copyright',
              defaultValue: '© 2026 Construcciones Los Castros C.A. Todos los derechos reservados.',
            },
            {
              name: 'legalLinks',
              type: 'array',
              label: 'Enlaces Legales Inferiores',
              labels: { singular: 'Enlace Legal', plural: 'Enlaces Legales' },
              defaultValue: [
                { label: 'Política de Privacidad', href: '#' },
                { label: 'Términos de Servicio', href: '#' },
              ],
              admin: {
                initCollapsed: true,
                components: {
                  RowLabel: '@/Footer/RowLabel#RowLabel',
                },
              },
              fields: [
                {
                  name: 'label',
                  type: 'text',
                  required: true,
                  label: 'Texto del enlace',
                },
                {
                  name: 'href',
                  type: 'text',
                  required: true,
                  label: 'Destino (ej. /privacidad o #)',
                },
              ],
            },
          ],
        },
      ],
    },
  ],
  hooks: {
    afterChange: [revalidateFooter],
  },
}
