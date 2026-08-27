import { Block } from 'payload'

export const FaqBlock: Block = {
  slug: 'faq',
  labels: { singular: 'FAQ', plural: 'FAQs' },
  fields: [
    {
      name: 'headline',
      type: 'text',
      required: true,
      label: 'Titular',
      defaultValue: 'Preguntas Frecuentes',
    },
    {
      name: 'subheadline',
      type: 'textarea',
      label: 'Subtítulo',
    },
    {
      name: 'questions',
      type: 'array',
      required: true,
      minRows: 1,
      label: 'Preguntas',
      labels: { singular: 'Pregunta', plural: 'Preguntas' },
      fields: [
        {
          name: 'question',
          type: 'text',
          required: true,
          label: 'Pregunta',
        },
        {
          name: 'answer',
          type: 'textarea',
          required: true,
          label: 'Respuesta',
        },
      ],
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
  ],
}
