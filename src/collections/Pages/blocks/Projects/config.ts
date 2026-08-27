import { Block } from 'payload'

export const ProjectsBlock: Block = {
  slug: 'projects',
  labels: { singular: 'Proyecto', plural: 'Proyectos' },
  fields: [
    {
      name: 'headline',
      type: 'text',
      required: true,
      label: 'Título de la sección',
    },
    {
      name: 'subheadline',
      type: 'textarea',
      label: 'Subtítulo',
    },
    {
      name: 'projects',
      type: 'array',
      required: true,
      minRows: 1,
      label: 'Lista de proyectos',
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
          label: 'Nombre del proyecto',
        },
        {
          name: 'category',
          type: 'text',
          label: 'Categoría (ej. Residencial, Comercial)',
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Descripción',
        },
        {
          name: 'location',
          type: 'text',
          label: 'Ubicación',
        },
        {
          name: 'year',
          type: 'text',
          label: 'Año',
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          label: 'Imagen',
        },
        {
          name: 'link',
          type: 'text',
          label: 'Enlace (opcional)',
          admin: {
            description: 'URL relativa (/proyectos/obra-x) o absoluta',
          },
        },
      ],
    },
    {
      name: 'layout',
      type: 'select',
      label: 'Distribución',
      options: [
        { label: '3 columnas', value: 'grid3' },
        { label: '2 columnas', value: 'grid2' },
        { label: 'Lista', value: 'list' },
      ],
      defaultValue: 'grid3',
    },
    {
      name: 'backgroundColor',
      type: 'select',
      label: 'Color de fondo',
      options: [
        { label: 'Blanco', value: 'white' },
        { label: 'Gris claro', value: 'gray' },
        { label: 'Navy', value: 'navy' },
      ],
      defaultValue: 'gray',
    },
    {
      name: 'ctaText',
      type: 'text',
      label: 'Texto del botón final',
    },
    {
      name: 'ctaLink',
      type: 'text',
      label: 'Enlace del botón final',
    },
  ],
}
