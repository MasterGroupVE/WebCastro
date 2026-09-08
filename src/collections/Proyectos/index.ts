import { CollectionConfig } from 'payload'

export const Proyectos: CollectionConfig = {
  slug: 'proyectos',
  labels: { singular: 'Proyecto', plural: 'Proyectos' },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'titulo',
      type: 'text',
      required: true,
    },
    {
      name: 'categoria',
      type: 'select',
      options: [
        { label: 'Vialidad', value: 'vialidad' },
        { label: 'Petróleo & Gas', value: 'petroleo' },
        { label: 'Pilotaje', value: 'pilotaje' },
        { label: 'Patrimonio', value: 'patrimonial' },
        { label: 'Ambiental', value: 'ambiental' },
      ],
      required: true,
    },
    {
      name: 'imagen',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'descripcion',
      type: 'textarea',
      label: 'Descripción',
    },
    {
      name: 'tecnologia',
      type: 'textarea',
      label: 'Tecnología/especialidad',
    },
    {
      name: 'cliente',
      type: 'text',
    },
    {
      name: 'ano',
      type: 'text',
      label: 'Año',
    },
  ],
}