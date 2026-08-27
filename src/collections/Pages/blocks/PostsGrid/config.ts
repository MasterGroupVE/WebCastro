import { Block } from 'payload'

export const PostsGridBlock: Block = {
  slug: 'postsGrid',
  labels: { singular: 'Blog', plural: 'Blogs' },
  fields: [
    {
      name: 'headline',
      type: 'text',
      required: true,
      label: 'Titular',
      defaultValue: 'Blog y Consejos',
    },
    {
      name: 'subheadline',
      type: 'textarea',
      label: 'Subtítulo',
    },
    {
      name: 'limit',
      type: 'number',
      label: 'Cantidad de publicaciones',
      defaultValue: 3,
      min: 1,
      max: 9,
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
