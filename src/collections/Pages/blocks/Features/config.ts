import { Block } from 'payload'

export const FeaturesBlock: Block = {
  slug: 'features',
  labels: { singular: 'Feature', plural: 'Features' },
  fields: [
    {
      name: 'headline',
      type: 'text',
      required: true,
      label: 'Titular',
    },
    {
      name: 'subheadline',
      type: 'textarea',
      label: 'Subtítulo',
    },
    {
      name: 'items',
      type: 'array',
      required: true,
      minRows: 1,
      maxRows: 6,
      label: 'Características',
      labels: { singular: 'Característica', plural: 'Características' },
      fields: [
        {
          name: 'icon',
          type: 'text',
          label: 'Icono (Material Icons)',
          defaultValue: 'check_circle',
          admin: {
            description: 'Ej: architecture, construction, engineering, verified, handshake',
          },
        },
        {
          name: 'title',
          type: 'text',
          required: true,
          label: 'Título',
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Descripción',
        },
      ],
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
      defaultValue: 'white',
    },
  ],
}
