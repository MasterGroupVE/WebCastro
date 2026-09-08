import { Block } from 'payload'

export const ClientLogosBlock: Block = {
  slug: 'clientLogos',
  labels: { singular: 'Logos de Clientes', plural: 'Logos de Clientes' },
  fields: [
    {
      name: 'badge',
      type: 'text',
      label: 'Insignia superior',
      defaultValue: 'Respaldo Institucional',
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
      name: 'clients',
      type: 'array',
      label: 'Clientes',
      fields: [
        {
          name: 'name',
          type: 'text',
          required: true,
          label: 'Nombre del cliente',
        },
        {
          name: 'description',
          type: 'text',
          label: 'Descripción breve (ej. División Petrolera)',
        },
        {
          name: 'icon',
          type: 'text',
          label: 'Icono (FontAwesome class)',
        },
        {
          name: 'logo',
          type: 'upload',
          relationTo: 'media',
          label: 'Logo (opcional, si no se usa icono)',
        },
      ],
    },
    {
      name: 'additionalClientsText',
      type: 'textarea',
      label: 'Texto de otros clientes destacados',
    },
  ],
}
