import { Block } from 'payload'

export const AboutUsBlock: Block = {
  slug: 'aboutUs',
  labels: { singular: 'Nosotros', plural: 'Nosotros' },
  fields: [
    {
      name: 'headline',
      type: 'text',
      required: true,
      label: 'Titular',
      defaultValue: 'Sobre Nosotros',
    },
    {
      name: 'subheadline',
      type: 'textarea',
      label: 'Subtítulo',
    },
    {
      name: 'description',
      type: 'richText',
      label: 'Descripción',
      required: true,
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      label: 'Imagen lateral',
    },
    {
      name: 'imagePosition',
      type: 'select',
      label: 'Posición de la imagen',
      options: [
        { label: 'Izquierda', value: 'left' },
        { label: 'Derecha', value: 'right' },
      ],
      defaultValue: 'right',
    },
    {
      name: 'stats',
      type: 'array',
      label: 'Estadísticas',
      fields: [
        { name: 'value', type: 'text', required: true, label: 'Valor (ej: 150+)' },
        { name: 'label', type: 'text', required: true, label: 'Etiqueta (ej: Proyectos completados)' },
        { name: 'icon', type: 'text', label: 'Icono (opcional, nombre de lucide-react)' },
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