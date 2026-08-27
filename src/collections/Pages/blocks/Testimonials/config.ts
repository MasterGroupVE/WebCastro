import { Block } from 'payload'

export const TestimonialsBlock: Block = {
  slug: 'testimonials',
  labels: { singular: 'Testimonio', plural: 'Testimonios' },
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
      name: 'testimonials',
      type: 'array',
      required: true,
      minRows: 1,
      label: 'Testimonios',
      labels: { singular: 'Testimonio', plural: 'Testimonios' },
      fields: [
        {
          name: 'quote',
          type: 'textarea',
          required: true,
          label: 'Testimonio',
        },
        {
          name: 'author',
          type: 'text',
          required: true,
          label: 'Autor',
        },
        {
          name: 'role',
          type: 'text',
          label: 'Cargo o empresa',
        },
        {
          name: 'rating',
          type: 'number',
          label: 'Calificación (1-5)',
          min: 1,
          max: 5,
          defaultValue: 5,
        },
        {
          name: 'avatar',
          type: 'upload',
          relationTo: 'media',
          label: 'Foto (opcional)',
        },
      ],
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
  ],
}
