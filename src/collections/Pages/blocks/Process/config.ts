import { Block } from 'payload'

export const ProcessBlock: Block = {
  slug: 'process',
  labels: { singular: 'Proceso de Trabajo', plural: 'Procesos de Trabajo' },
  fields: [
    {
      name: 'badge',
      type: 'text',
      label: 'Insignia superior',
      defaultValue: 'Proceso de Trabajo',
    },
    {
      name: 'headline',
      type: 'text',
      required: true,
      label: 'Titular de la sección',
      defaultValue: 'Transformaciones Paso a Paso',
    },
    {
      name: 'subheadline',
      type: 'textarea',
      label: 'Subtítulo descriptivo',
      defaultValue: 'Garantizamos un desarrollo estructurado para que disfrutes del proceso con total tranquilidad.',
    },
    {
      name: 'steps',
      type: 'array',
      required: true,
      minRows: 1,
      label: 'Pasos del proceso',
      labels: { singular: 'Paso', plural: 'Pasos' },
      fields: [
        {
          name: 'stepNumber',
          type: 'text',
          required: true,
          label: 'Número de paso (ej. 01, 02, 03)',
          defaultValue: '01',
        },
        {
          name: 'title',
          type: 'text',
          required: true,
          label: 'Título del paso',
        },
        {
          name: 'description',
          type: 'textarea',
          required: true,
          label: 'Descripción del paso',
        },
        {
          name: 'icon',
          type: 'text',
          label: 'Icono FontAwesome (ej. fa-clipboard-list, fa-hammer, fa-key)',
          defaultValue: 'fa-clipboard-list',
        },
        {
          name: 'color',
          type: 'select',
          label: 'Esquema de color del icono',
          options: [
            { label: 'Amarillo Castro', value: 'yellow' },
            { label: 'Verde Castro', value: 'green' },
            { label: 'Azul / Navy Castro', value: 'blue' },
          ],
          defaultValue: 'yellow',
        },
      ],
    },
    {
      name: 'backgroundColor',
      type: 'select',
      label: 'Fondo de la sección',
      options: [
        { label: 'Gris Claro (#f8faf9)', value: 'light' },
        { label: 'Blanco (#ffffff)', value: 'white' },
        { label: 'Azul Marino (#0b2545)', value: 'navy' },
      ],
      defaultValue: 'light',
    },
  ],
}
