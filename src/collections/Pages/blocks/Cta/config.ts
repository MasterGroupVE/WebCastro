import { Block } from 'payload'

export const CtaBlock: Block = {
  slug: 'cta',
  labels: { singular: 'CTA', plural: 'CTAs' },
  fields: [
    {
      name: 'headline',
      type: 'text',
      required: true,
      label: 'Título principal',
    },
    {
      name: 'subheadline',
      type: 'textarea',
      label: 'Subtítulo o descripción',
    },
    {
      name: 'buttonText',
      type: 'text',
      required: true,
      label: 'Texto del botón',
      defaultValue: 'Más información',
    },
    {
      name: 'buttonAction',
      type: 'select',
      required: true,
      label: 'Acción del botón',
      options: [
        { label: 'Abrir Formulario', value: 'modal' },
        { label: 'Enlace personalizado', value: 'link' },
      ],
      defaultValue: 'modal',
    },
    {
      name: 'buttonLink',
      type: 'text',
      label: 'Enlace personalizado',
      admin: {
        condition: (_data, siblingData) => siblingData?.buttonAction === 'link',
      },
    },
    {
      name: 'backgroundColor',
      type: 'select',
      label: 'Color de fondo',
      options: [
        { label: 'Amarillo', value: 'yellow' },
        { label: 'Navy', value: 'navy' },
        { label: 'Verde', value: 'green' },
      ],
      defaultValue: 'yellow',
    },
  ],
}