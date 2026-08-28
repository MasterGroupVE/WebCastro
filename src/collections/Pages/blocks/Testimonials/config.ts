import { Block } from 'payload'

export const TestimonialsBlock: Block = {
  slug: 'testimonials',
  labels: { singular: 'Sección de Testimonios', plural: 'Secciones de Testimonios' },
  fields: [
    {
      name: 'badge',
      type: 'text',
      label: 'Insignia superior',
      defaultValue: 'Opiniones Reales',
    },
    {
      name: 'headline',
      type: 'text',
      required: true,
      label: 'Titular principal',
      defaultValue: 'Respaldados por Nuestros Clientes',
    },
    {
      name: 'subheadline',
      type: 'textarea',
      label: 'Subtítulo (opcional)',
    },
    {
      name: 'testimonials',
      type: 'array',
      required: true,
      minRows: 1,
      label: 'Lista de Testimonios',
      labels: { singular: 'Testimonio', plural: 'Testimonios' },
      fields: [
        {
          name: 'quote',
          type: 'textarea',
          required: true,
          label: 'Testimonio del cliente',
        },
        {
          name: 'author',
          type: 'text',
          required: true,
          label: 'Nombre del cliente',
        },
        {
          name: 'role',
          type: 'text',
          label: 'Cargo / Tipo de cliente (ej. Propietaria Residencial, Director Comercial)',
        },
        {
          name: 'rating',
          type: 'number',
          label: 'Calificación de estrellas (1-5)',
          min: 1,
          max: 5,
          defaultValue: 5,
        },
        {
          name: 'avatar',
          type: 'upload',
          relationTo: 'media',
          label: 'Foto de perfil / avatar',
        },
      ],
    },
  ],
}
