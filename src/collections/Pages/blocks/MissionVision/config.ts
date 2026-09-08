import { Block } from 'payload'

export const MissionVisionBlock: Block = {
  slug: 'missionVision',
  labels: { singular: 'Misión y Visión', plural: 'Misión y Visión' },
  fields: [
    {
      name: 'badge',
      type: 'text',
      label: 'Insignia superior',
      defaultValue: 'Nuestra Filosofía',
    },
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
      name: 'vision',
      type: 'group',
      label: 'Visión',
      fields: [
        {
          name: 'label',
          type: 'text',
          label: 'Etiqueta (ej. PROYECCIÓN NACIONAL)',
        },
        {
          name: 'title',
          type: 'text',
          required: true,
          label: 'Título (ej. Nuestra Visión)',
        },
        {
          name: 'text',
          type: 'textarea',
          required: true,
          label: 'Texto de la visión',
        },
        {
          name: 'footerLeft',
          type: 'text',
          label: 'Texto inferior izquierdo',
        },
        {
          name: 'footerRight',
          type: 'text',
          label: 'Texto inferior derecho',
        },
      ],
    },
    {
      name: 'mision',
      type: 'group',
      label: 'Misión',
      fields: [
        {
          name: 'label',
          type: 'text',
          label: 'Etiqueta (ej. PROPÓSITO CORPORATIVO)',
        },
        {
          name: 'title',
          type: 'text',
          required: true,
          label: 'Título (ej. Nuestra Misión)',
        },
        {
          name: 'text',
          type: 'textarea',
          required: true,
          label: 'Texto de la misión',
        },
        {
          name: 'footerLeft',
          type: 'text',
          label: 'Texto inferior izquierdo',
        },
        {
          name: 'footerRight',
          type: 'text',
          label: 'Texto inferior derecho',
        },
      ],
    },
  ],
}
