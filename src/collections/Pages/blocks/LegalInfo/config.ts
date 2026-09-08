import { Block } from 'payload'

export const LegalInfoBlock: Block = {
  slug: 'legalInfo',
  labels: { singular: 'Ficha Legal', plural: 'Fichas Legales' },
  fields: [
    {
      name: 'badge',
      type: 'text',
      label: 'Insignia superior',
      defaultValue: 'Información Jurídica',
    },
    {
      name: 'headline',
      type: 'text',
      required: true,
      label: 'Titular principal',
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Descripción',
    },
    {
      name: 'checklist',
      type: 'array',
      label: 'Lista de verificación',
      fields: [
        {
          name: 'text',
          type: 'text',
          required: true,
          label: 'Elemento',
        },
      ],
    },
    {
      name: 'legalFields',
      type: 'array',
      label: 'Campos de datos legales',
      fields: [
        {
          name: 'label',
          type: 'text',
          required: true,
          label: 'Etiqueta (ej. Nombre Legal)',
        },
        {
          name: 'value',
          type: 'text',
          required: true,
          label: 'Valor',
        },
        {
          name: 'highlight',
          type: 'checkbox',
          label: 'Resaltar en color especial',
          defaultValue: false,
        },
        {
          name: 'subtext',
          type: 'text',
          label: 'Texto adicional debajo',
        },
      ],
    },
    {
      name: 'addressText',
      type: 'textarea',
      label: 'Dirección fiscal / sede',
    },
  ],
}
