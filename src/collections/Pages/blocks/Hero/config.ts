import { Block } from 'payload'

export const HeroBlock: Block = {
  slug: 'hero',
  labels: { singular: 'Hero', plural: 'Heroes' },
  fields: [
    {
      name: 'headline',
      type: 'text',
      required: true,
      label: 'Titular principal',
    },
    {
      name: 'subheadline',
      type: 'textarea',
      label: 'Subtítulo',
    },
    {
      name: 'ctaText',
      type: 'text',
      label: 'Texto del botón',
    },
    {
      name: 'ctaLink',
      type: 'text',
      label: 'Enlace del botón',
      admin: {
        description: 'URL relativa (/servicios) o absoluta',
      },
    },
    {
      name: 'backgroundImage',
      type: 'upload',
      relationTo: 'media',
      label: 'Imagen de fondo',
    },
    {
      name: 'overlayOpacity',
      type: 'select',
      label: 'Opacidad del overlay',
      options: [
        { label: 'Ligera (30%)', value: '30' },
        { label: 'Media (50%)', value: '50' },
        { label: 'Fuerte (70%)', value: '70' },
      ],
      defaultValue: '50',
    },
    {
      name: 'layout',
      type: 'select',
      label: 'Distribución',
      options: [
        { label: 'Centrado', value: 'centered' },
        { label: 'Izquierda', value: 'left' },
        { label: 'Derecha', value: 'right' },
        { label: 'Partida (imagen + texto)', value: 'split' },
      ],
      defaultValue: 'centered',
    },
    {
      name: 'height',
      type: 'select',
      label: 'Altura',
      options: [
        { label: 'Pantalla completa (100vh)', value: 'full' },
        { label: 'Grande (80vh)', value: 'large' },
        { label: 'Mediana (60vh)', value: 'medium' },
        { label: 'Auto (contenido)', value: 'auto' },
      ],
      defaultValue: 'large',
    },
    {
      name: 'textColor',
      type: 'select',
      label: 'Color del texto',
      options: [
        { label: 'Blanco (para fondos oscuros)', value: 'white' },
        { label: 'Navy (para fondos claros)', value: 'navy' },
      ],
      defaultValue: 'white',
    },
  ],
}