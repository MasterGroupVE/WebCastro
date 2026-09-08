import { Block } from 'payload'

export const PortfolioGridBlock: Block = {
  slug: 'portfolioGrid',
  labels: { singular: 'Portafolio de Proyectos', plural: 'Portafolios de Proyectos' },
  fields: [
    {
      name: 'badge',
      type: 'text',
      label: 'Insignia superior',
      defaultValue: 'Portafolio de Obras',
    },
    {
      name: 'headline',
      type: 'text',
      required: true,
      label: 'Titular principal',
      defaultValue: 'Proyectos de Envergadura Realizados',
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Descripción debajo del titular',
    },
    {
      name: 'categories',
      type: 'array',
      label: 'Categorías de filtro',
      fields: [
        {
          name: 'label',
          type: 'text',
          required: true,
          label: 'Nombre de la categoría',
        },
        {
          name: 'value',
          type: 'text',
          required: true,
          label: 'Valor interno (sin espacios)',
        },
      ],
    },
    {
      name: 'projects',
      type: 'array',
      label: 'Proyectos',
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
          label: 'Título del proyecto',
        },
        {
          name: 'category',
          type: 'text',
          required: true,
          label: 'Categoría (debe coincidir con un valor de filtro)',
        },
        {
          name: 'location',
          type: 'text',
          label: 'Ubicación',
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Descripción breve',
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          label: 'Imagen del proyecto',
        },
        {
          name: 'badgeText',
          type: 'text',
          label: 'Etiqueta superpuesta (ej. Vialidad Mayor)',
        },
        {
          name: 'status',
          type: 'text',
          label: 'Estado del proyecto',
          defaultValue: 'Proyecto Concluido',
        },
        {
          name: 'detailTitle',
          type: 'text',
          label: 'Título del modal de detalle',
        },
        {
          name: 'detailDescription',
          type: 'textarea',
          label: 'Descripción del modal de detalle',
        },
      ],
    },
  ],
}
