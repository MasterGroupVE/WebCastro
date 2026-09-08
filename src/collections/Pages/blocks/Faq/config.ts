import { Block } from 'payload'

export const FaqBlock: Block = {
  slug: 'faq',
  labels: { singular: 'FAQ', plural: 'FAQs' },
  fields: [
    {
      name: 'questions',
      type: 'array',
      label: 'Preguntas Frecuentes',
      minRows: 1,
      maxRows: 10,
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
  ],
}