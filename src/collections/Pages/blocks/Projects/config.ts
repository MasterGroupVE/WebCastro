import { Block } from 'payload'

export const ProjectsBlock: Block = {
  slug: 'projects',
  labels: { singular: 'Sección de Proyectos', plural: 'Secciones de Proyectos' },
  fields: [
    {
      name: 'badge',
      type: 'text',
      label: 'Insignia superior',
      defaultValue: 'Proyectos Recientes',
    },
    {
      name: 'headline',
      type: 'text',
      required: true,
      label: 'Titular principal',
      defaultValue: 'Transformando Casas y Obras en Hogares',
    },
    {
      name: 'subheadline',
      type: 'textarea',
      label: 'Subtítulo (opcional)',
    },
    {
      name: 'projects',
      type: 'array',
      required: true,
      minRows: 1,
      label: 'Lista de Proyectos',
      labels: { singular: 'Proyecto', plural: 'Proyectos' },
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
          label: 'Nombre del Proyecto',
        },
        {
          name: 'category',
          type: 'text',
          label: 'Categoría (ej. Residencial, Comercial, Remodelación)',
          defaultValue: 'Residencial',
        },
        {
          name: 'categoryColor',
          type: 'select',
          label: 'Color de la etiqueta de categoría',
          options: [
            { label: 'Verde Castro', value: 'green' },
            { label: 'Azul Marino Castro', value: 'navy' },
            { label: 'Amarillo Castro', value: 'yellow' },
          ],
          defaultValue: 'green',
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Descripción breve',
        },
        {
          name: 'location',
          type: 'text',
          label: 'Ubicación (ej. Caracas, Valencia, Maracay)',
          defaultValue: 'Caracas',
        },
        {
          name: 'status',
          type: 'text',
          label: 'Estado del proyecto (ej. Completado, En Ejecución)',
          defaultValue: 'Completado',
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          label: 'Foto del proyecto',
        },
        {
          name: 'link',
          type: 'text',
          label: 'Enlace a detalle del proyecto (opcional)',
        },
      ],
    },
    {
      name: 'ctaText',
      type: 'text',
      label: 'Texto del botón inferior',
      defaultValue: 'Solicitar Presupuesto para Mi Proyecto',
    },
    {
      name: 'ctaAction',
      type: 'select',
      label: 'Acción del botón',
      options: [
        { label: 'Abrir Formulario / Modal de Cotización', value: 'modal' },
        { label: 'Enlace personalizado', value: 'link' },
      ],
      defaultValue: 'modal',
    },
    {
      name: 'ctaLink',
      type: 'text',
      label: 'Enlace personalizado',
      admin: {
        condition: (_data, siblingData) => siblingData?.ctaAction === 'link',
      },
    },
  ],
}
