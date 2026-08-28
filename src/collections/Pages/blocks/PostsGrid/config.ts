import { Block } from 'payload'

export const PostsGridBlock: Block = {
  slug: 'postsGrid',
  labels: { singular: 'Blog / Artículos', plural: 'Secciones de Blog / Artículos' },
  fields: [
    {
      name: 'badge',
      type: 'text',
      label: 'Insignia superior',
      defaultValue: 'Artículos y Consejos',
    },
    {
      name: 'headline',
      type: 'text',
      required: true,
      label: 'Titular principal',
      defaultValue: 'Blog de Innovación y Remodelaciones',
    },
    {
      name: 'subheadline',
      type: 'textarea',
      label: 'Subtítulo (opcional)',
    },
    {
      name: 'customPosts',
      type: 'array',
      label: 'Artículos Destacados',
      labels: { singular: 'Artículo', plural: 'Artículos' },
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
          label: 'Título del artículo',
        },
        {
          name: 'category',
          type: 'text',
          label: 'Categoría (ej. Mantenimiento, Tendencias, Consejos)',
          defaultValue: 'Mantenimiento',
        },
        {
          name: 'description',
          type: 'textarea',
          required: true,
          label: 'Extracto o descripción breve',
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          label: 'Imagen de portada',
        },
        {
          name: 'link',
          type: 'text',
          label: 'Enlace del artículo',
          defaultValue: '/posts',
        },
      ],
    },
  ],
}
