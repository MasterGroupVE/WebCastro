import type { GlobalConfig } from 'payload'
import { revalidateHeader } from './hooks/revalidateHeader'

export const Header: GlobalConfig = {
  slug: 'header',
  label: 'Encabezado (Header)',
  access: {
    read: () => true,
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Barra Superior (Top Bar)',
          fields: [
            {
              name: 'showTopBar',
              type: 'checkbox',
              label: 'Mostrar barra superior',
              defaultValue: true,
            },
            {
              name: 'address',
              type: 'text',
              label: 'Dirección / Ubicación',
              defaultValue: 'El Junquito, Km 23 / Caracas, Venezuela',
              admin: {
                condition: (_data, siblingData) => Boolean(siblingData?.showTopBar),
              },
            },
            {
              name: 'phone',
              type: 'text',
              label: 'Teléfonos visibles',
              defaultValue: '+58 (412) 964-3616 / +58 (414) 390-4751',
              admin: {
                condition: (_data, siblingData) => Boolean(siblingData?.showTopBar),
              },
            },
            {
              name: 'schedule',
              type: 'text',
              label: 'Horario de atención',
              defaultValue: 'Lun - Vie: 8:00 AM - 5:00 PM',
              admin: {
                condition: (_data, siblingData) => Boolean(siblingData?.showTopBar),
              },
            },
            {
              name: 'topCtaText',
              type: 'text',
              label: 'Texto del botón superior',
              defaultValue: 'Solicitar Cotización',
              admin: {
                condition: (_data, siblingData) => Boolean(siblingData?.showTopBar),
              },
            },
            {
              name: 'topCtaAction',
              type: 'select',
              label: 'Acción del botón superior',
              options: [
                { label: 'Abrir Formulario / Modal de Cotización', value: 'modal' },
                { label: 'Enlace personalizado', value: 'link' },
              ],
              defaultValue: 'modal',
              admin: {
                condition: (_data, siblingData) => Boolean(siblingData?.showTopBar),
              },
            },
            {
              name: 'topCtaLink',
              type: 'text',
              label: 'Enlace personalizado del botón superior',
              admin: {
                condition: (_data, siblingData) =>
                  Boolean(siblingData?.showTopBar) && siblingData?.topCtaAction === 'link',
              },
            },
            {
              name: 'socialLinks',
              type: 'group',
              label: 'Redes Sociales',
              admin: {
                condition: (_data, siblingData) => Boolean(siblingData?.showTopBar),
              },
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
                  label: 'Enlace WhatsApp (ej. https://wa.me/584129643616)',
                  defaultValue: 'https://wa.me/584129643616',
                },
              ],
            },
          ],
        },
        {
          label: 'Barra Principal (Navbar)',
          fields: [
            {
              name: 'logo',
              type: 'upload',
              relationTo: 'media',
              label: 'Logo de la empresa (PNG / SVG / Imagen personalizada)',
              admin: {
                description: 'Si no subes una imagen, se mostrará el isotipo vectorial oficial de Los Castros.',
              },
            },
            {
              name: 'showTextBrand',
              type: 'checkbox',
              label: 'Mostrar texto de la empresa junto al logo',
              defaultValue: true,
            },
            {
              name: 'companyName',
              type: 'text',
              label: 'Nombre principal',
              defaultValue: 'Construcciones',
              admin: {
                condition: (_data, siblingData) => Boolean(siblingData?.showTextBrand),
              },
            },
            {
              name: 'companyHighlight',
              type: 'text',
              label: 'Nombre secundario / Marca',
              defaultValue: 'Los Castros',
              admin: {
                condition: (_data, siblingData) => Boolean(siblingData?.showTextBrand),
              },
            },
            {
              name: 'companySuffix',
              type: 'text',
              label: 'Sufijo legal',
              defaultValue: 'C.A.',
              admin: {
                condition: (_data, siblingData) => Boolean(siblingData?.showTextBrand),
              },
            },
            {
              name: 'navLinks',
              type: 'array',
              label: 'Enlaces del Menú',
              labels: { singular: 'Enlace', plural: 'Enlaces' },
              defaultValue: [
                { label: 'Inicio', href: '#inicio' },
                { label: 'Nosotros', href: '#nosotros' },
                { label: 'Servicios', href: '#servicios' },
                { label: 'Proyectos', href: '#proyectos' },
                { label: 'Clientes', href: '#testimonios' },
                { label: 'Preguntas', href: '#faq' },
                { label: 'Blog', href: '#blog' },
              ],
              admin: {
                initCollapsed: true,
                components: {
                  RowLabel: '@/Header/RowLabel#RowLabel',
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
            {
              name: 'phoneButtonText',
              type: 'text',
              label: 'Texto del botón de llamada',
              defaultValue: '+58 (412) 964-3616',
            },
            {
              name: 'phoneButtonLink',
              type: 'text',
              label: 'Enlace del botón de llamada (ej. tel:+584129643616)',
              defaultValue: 'tel:+584129643616',
            },
            {
              name: 'mainCtaText',
              type: 'text',
              label: 'Texto del botón principal',
              defaultValue: 'Consulta Gratuita',
            },
            {
              name: 'mainCtaAction',
              type: 'select',
              label: 'Acción del botón principal',
              options: [
                { label: 'Abrir Formulario / Modal de Cotización', value: 'modal' },
                { label: 'Enlace personalizado', value: 'link' },
              ],
              defaultValue: 'modal',
            },
            {
              name: 'mainCtaLink',
              type: 'text',
              label: 'Enlace personalizado del botón principal',
              admin: {
                condition: (_data, siblingData) => siblingData?.mainCtaAction === 'link',
              },
            },
          ],
        },
      ],
    },
  ],
  hooks: {
    afterChange: [revalidateHeader],
  },
}
