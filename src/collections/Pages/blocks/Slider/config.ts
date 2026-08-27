import { Block } from 'payload'

export const SliderBlock: Block = {
  slug: 'slider',
  labels: { singular: 'Slider', plural: 'Sliders' },
  fields: [
    {
      name: 'slides',
      type: 'array',
      required: true,
      minRows: 1,
      label: 'Diapositivas',
      labels: { singular: 'Diapositiva', plural: 'Diapositivas' },
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
          label: 'Imagen',
        },
        {
          name: 'title',
          type: 'text',
          label: 'Título',
        },
        {
          name: 'subtitle',
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
        },
      ],
    },
    {
      name: 'autoplay',
      type: 'checkbox',
      label: 'Reproducción automática',
      defaultValue: true,
    },
    {
      name: 'interval',
      type: 'number',
      label: 'Intervalo (ms)',
      defaultValue: 5000,
      min: 2000,
      max: 15000,
      admin: {
        description: 'Milisegundos entre diapositivas (mínimo 2000)',
      },
    },
    {
      name: 'height',
      type: 'select',
      label: 'Altura',
      options: [
        { label: 'Pantalla completa (100vh)', value: 'full' },
        { label: 'Grande (80vh)', value: 'large' },
        { label: 'Mediana (60vh)', value: 'medium' },
      ],
      defaultValue: 'large',
    },
  ],
}
