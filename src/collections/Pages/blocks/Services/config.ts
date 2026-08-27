import { Block } from 'payload'

export const ServicesBlock: Block = {
  slug: 'services',
  labels: { singular: 'Servicios', plural: 'Servicios' },
  fields: [
    {
      name: 'headline',
      type: 'text',
      required: true,
      label: 'Titular',
      defaultValue: 'Nuestros Servicios',
    },
    {
      name: 'subheadline',
      type: 'textarea',
      label: 'Subtítulo',
    },
    {
      name: 'services',
      type: 'array',
      label: 'Lista de servicios',
      required: true,
      minRows: 1,
      fields: [
        { name: 'title', type: 'text', required: true, label: 'Título' },
        { name: 'description', type: 'textarea', label: 'Descripción' },
        { 
          name: 'icon', 
          type: 'text', 
          label: 'Icono (nombre Lucide)',
          admin: {
            description: 'Ej: Building2, Wrench, HardHat, Truck, Factory',
          },
        },
        { 
          name: 'iconColor', 
          type: 'text', 
          label: 'Color icono (hex)',
          admin: {
            description: 'Ej: #092F56, #009845, #F8D000',
          },
          defaultValue: '#092F56',
        },
        { name: 'image', type: 'upload', relationTo: 'media', label: 'Imagen (opcional)' },
        { name: 'link', type: 'text', label: 'Enlace a detalle (opcional)' },
      ],
    },
    {
      name: 'layout',
      type: 'select',
      label: 'Diseño',
      options: [
        { label: 'Grid 3 columnas', value: 'grid3' },
        { label: 'Grid 2 columnas', value: 'grid2' },
        { label: 'Lista con iconos', value: 'list' },
        { label: 'Cards con imagen', value: 'cards' },
        { label: 'Lista numerada (con imagen)', value: 'numbered' },
      ],
      defaultValue: 'grid3',
    },
    {
      name: 'listImage',
      type: 'upload',
      relationTo: 'media',
      label: 'Imagen lateral (solo lista numerada)',
      admin: {
        condition: (_data, siblingData) => siblingData?.layout === 'numbered',
      },
    },
    {
      name: 'backgroundColor',
      type: 'select',
      label: 'Fondo',
      options: [
        { label: 'Blanco', value: 'white' },
        { label: 'Gris claro', value: 'gray' },
        { label: 'Navy', value: 'navy' },
      ],
      defaultValue: 'gray',
    },
    {
      name: 'iconColor',
      type: 'text',
      label: 'Color predeterminado iconos (hex)',
      admin: {
        description: 'Color por defecto para todos los iconos (ej: #092F56)',
      },
      defaultValue: '#092F56',
    },
    {
      name: 'ctaText',
      type: 'text',
      label: 'Texto botón CTA (opcional)',
    },
    {
      name: 'ctaLink',
      type: 'text',
      label: 'Enlace botón CTA (opcional)',
    },
  ],
}