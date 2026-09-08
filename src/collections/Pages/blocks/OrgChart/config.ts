import { Block } from 'payload'

export const OrgChartBlock: Block = {
  slug: 'orgChart',
  labels: { singular: 'Organigrama', plural: 'Organigramas' },
  fields: [
    {
      name: 'badge',
      type: 'text',
      label: 'Insignia superior',
      defaultValue: 'Organización Interna',
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
      name: 'topNode',
      type: 'group',
      label: 'Nodo Superior (Dirección)',
      fields: [
        {
          name: 'label',
          type: 'text',
          label: 'Etiqueta (ej. DIRECCIÓN GENERAL)',
          defaultValue: 'DIRECCIÓN GENERAL',
        },
        {
          name: 'title',
          type: 'text',
          required: true,
          label: 'Título del nodo',
        },
        {
          name: 'subtitle',
          type: 'text',
          label: 'Subtítulo (ej. Representante Legal)',
        },
      ],
    },
    {
      name: 'adminNodes',
      type: 'array',
      label: 'Nivel 2: Nodos Administrativos',
      fields: [
        {
          name: 'icon',
          type: 'text',
          label: 'Icono (FontAwesome class, ej. fa-scale-balanced)',
        },
        {
          name: 'title',
          type: 'text',
          required: true,
          label: 'Título',
        },
        {
          name: 'description',
          type: 'text',
          label: 'Descripción breve',
        },
      ],
    },
    {
      name: 'operationalNodes',
      type: 'array',
      label: 'Nivel 3: Nodos Operativos',
      fields: [
        {
          name: 'icon',
          type: 'text',
          label: 'Icono (FontAwesome class)',
        },
        {
          name: 'title',
          type: 'text',
          required: true,
          label: 'Título (ej. Gerencia de Geociencias)',
        },
        {
          name: 'description',
          type: 'text',
          label: 'Descripción breve',
        },
        {
          name: 'color',
          type: 'select',
          label: 'Color del borde',
          options: [
            { label: 'Teal', value: 'teal' },
            { label: 'Amber', value: 'amber' },
            { label: 'Azul', value: 'blue' },
            { label: 'Verde', value: 'emerald' },
          ],
          defaultValue: 'teal',
        },
      ],
    },
  ],
}
