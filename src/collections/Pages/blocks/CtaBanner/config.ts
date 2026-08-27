import { Block } from 'payload'

export const CtaBannerBlock: Block = {
  slug: 'ctaBanner',
  labels: { singular: 'Banner CTA', plural: 'Banners CTA' },
  fields: [
    {
      name: 'headline',
      type: 'text',
      required: true,
      label: 'Titular',
    },
    {
      name: 'text',
      type: 'textarea',
      label: 'Texto',
    },
    {
      name: 'buttonText',
      type: 'text',
      label: 'Texto del botón',
    },
    {
      name: 'buttonLink',
      type: 'text',
      label: 'Enlace del botón',
    },
    {
      name: 'style',
      type: 'select',
      label: 'Estilo de fondo',
      options: [
        { label: 'Navy', value: 'navy' },
        { label: 'Verde', value: 'green' },
        { label: 'Dorado', value: 'gold' },
        { label: 'Degradado', value: 'gradient' },
      ],
      defaultValue: 'navy',
    },
    {
      name: 'backgroundImage',
      type: 'upload',
      relationTo: 'media',
      label: 'Imagen de fondo (opcional)',
    },
  ],
}
