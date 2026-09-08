import { Block } from 'payload'

export const ColumnBlock: Block = {
  slug: 'column',
  labels: { singular: 'Columnas', plural: 'Columnas' },
  fields: [
    {
      name: 'columnCount',
      type: 'select',
      required: true,
      label: 'Número de columnas',
      options: [
        { label: '1 columna', value: '1' },
        { label: '2 columnas', value: '2' },
        { label: '3 columnas', value: '3' },
        { label: '4 columnas', value: '4' },
      ],
      defaultValue: '1',
    },
    {
      name: 'columns',
      type: 'array',
      label: 'Columnas',
      fields: [
        {
          name: 'contentType',
          type: 'select',
          label: 'Tipo de contenido',
          options: [
            { label: 'Bloque existente', value: 'block' },
            { label: 'Título + párrafo', value: 'text' },
            { label: 'Imagen sola', value: 'image' },
          ],
          defaultValue: 'block',
        },
        {
          name: 'blockType',
          type: 'select',
          label: 'Tipo de bloque',
          options: [
            { label: 'Proyecto', value: 'proyecto' },
            { label: 'Hero', value: 'hero' },
            { label: 'Acerca de', value: 'aboutUs' },
            { label: 'Servicios', value: 'services' },
            { label: 'Procesos', value: 'process' },
            { label: 'Proyectos', value: 'projects' },
            { label: 'Testimonios', value: 'testimonials' },
            { label: 'FAQ', value: 'faq' },
            { label: 'CTA', value: 'ctaBanner' },
            { label: 'Funciones', value: 'features' },
            { label: 'Cuadrícula de posts', value: 'postsGrid' },
            { label: 'Slider', value: 'slider' },
          ],
          admin: {
            condition: (_data, siblingData) => siblingData?.contentType === 'block',
          },
        },
        {
          name: 'headline',
          type: 'text',
          label: 'Título',
          admin: {
            condition: (_data, siblingData) =>
              siblingData?.contentType === 'text' || siblingData?.contentType === 'block',
          },
        },
        {
          name: 'subheadline',
          type: 'textarea',
          label: 'Descripción / párrafo',
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          label: 'Imagen',
          admin: {
            condition: (_data, siblingData) => siblingData?.contentType === 'image',
          },
        },
      ],
      minRows: 1,
      maxRows: 4,
    },
  ],
}