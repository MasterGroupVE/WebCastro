import { Block } from 'payload'

export const FaqBlock: Block = {
  slug: 'faq',
  labels: { singular: 'Preguntas Frecuentes (FAQ)', plural: 'Preguntas Frecuentes (FAQ)' },
  fields: [
    {
      name: 'badge',
      type: 'text',
      label: 'Insignia superior',
      defaultValue: 'Preguntas Frecuentes',
    },
    {
      name: 'headline',
      type: 'text',
      required: true,
      label: 'Titular principal',
      defaultValue: 'Lo Que Debes Saber Antes de Iniciar',
    },
    {
      name: 'subheadline',
      type: 'textarea',
      label: 'Subtítulo (opcional)',
    },
    {
      name: 'questions',
      type: 'array',
      required: true,
      minRows: 1,
      label: 'Preguntas y Respuestas',
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
          label: 'Respuesta detallada',
        },
      ],
    },
  ],
}
