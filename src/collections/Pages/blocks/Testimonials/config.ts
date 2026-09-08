import { Block } from 'payload'

export const TestimonialsBlock: Block = {
  slug: 'testimonials',
  labels: { singular: 'Testimonial', plural: 'Testimonials' },
  fields: [
    {
      name: 'testimonials',
      type: 'array',
      label: 'Testimonios',
      minRows: 1,
      maxRows: 6,
      fields: [
        {
          name: 'author',
          type: 'text',
          required: true,
          label: 'Nombre del cliente',
        },
        {
          name: 'role',
          type: 'text',
          label: 'Rol o empresa',
        },
        {
          name: 'quote',
          type: 'textarea',
          required: true,
          label: 'Cita o testimonio',
        },
        {
          name: 'rating',
          type: 'number',
          min: 1,
          max: 5,
          label: 'Calificación (1-5)',
          defaultValue: 5,
        },
      ],
    },
  ],
}