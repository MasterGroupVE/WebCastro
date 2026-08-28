import { Block } from 'payload'

export const ServicesBlock: Block = {
  slug: 'services',
  labels: { singular: 'Servicios', plural: 'Servicios' },
  fields: [
    {
      name: 'badge',
      type: 'text',
      label: 'Insignia superior',
      defaultValue: 'Nuestros Servicios',
    },
    {
      name: 'headline',
      type: 'text',
      required: true,
      label: 'Titular principal',
      defaultValue: 'Espacios Que Se Sienten Perfectos',
    },
    {
      name: 'layout',
      type: 'select',
      label: 'Estilo de visualización',
      options: [
        { label: 'Pestañas Interactivas (Recomendado)', value: 'tabs' },
        { label: 'Cuadrícula de 3 columnas', value: 'grid3' },
        { label: 'Cuadrícula de 2 columnas', value: 'grid2' },
        { label: 'Tarjetas con imagen', value: 'cards' },
        { label: 'Lista numerada', value: 'numbered' },
      ],
      defaultValue: 'tabs',
    },
    {
      name: 'services',
      type: 'array',
      label: 'Lista de Servicios',
      required: true,
      minRows: 1,
      labels: { singular: 'Servicio', plural: 'Servicios' },
      fields: [
        {
          name: 'tabLabel',
          type: 'text',
          label: 'Etiqueta de la Pestaña (ej. Remodelaciones)',
          required: true,
        },
        {
          name: 'title',
          type: 'text',
          required: true,
          label: 'Título completo del servicio (ej. 1. Remodelación Integral...)',
        },
        {
          name: 'description',
          type: 'textarea',
          required: true,
          label: 'Descripción detallada',
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          label: 'Imagen del proyecto / servicio',
        },
        {
          name: 'badge',
          type: 'text',
          label: 'Etiqueta de proyecto destacado (ej. Residencial Los Palos Grandes)',
        },
        {
          name: 'features',
          type: 'array',
          label: 'Características / Puntos incluidos con Checkmark',
          fields: [
            {
              name: 'text',
              type: 'text',
              required: true,
              label: 'Punto incluido',
            },
          ],
        },
        {
          name: 'icon',
          type: 'text',
          label: 'Icono (nombre Lucide o FontAwesome, ej. fa-hammer, Building2)',
        },
        {
          name: 'link',
          type: 'text',
          label: 'Enlace a página de detalle (opcional)',
        },
      ],
    },
    {
      name: 'showEmergencyBox',
      type: 'checkbox',
      label: 'Mostrar caja de contacto telefónico / cotización urgente',
      defaultValue: true,
    },
    {
      name: 'emergencyTitle',
      type: 'text',
      label: 'Título de la caja telefónica',
      defaultValue: '¿Servicio Urgente o Cotización?',
      admin: {
        condition: (_data, siblingData) => Boolean(siblingData?.showEmergencyBox),
      },
    },
    {
      name: 'emergencyPhone',
      type: 'text',
      label: 'Número de teléfono visible',
      defaultValue: '+58 (212) 555-CASTRO',
      admin: {
        condition: (_data, siblingData) => Boolean(siblingData?.showEmergencyBox),
      },
    },
    {
      name: 'emergencyLink',
      type: 'text',
      label: 'Enlace telefónico (ej. tel:+582125552278)',
      defaultValue: 'tel:+582125552278',
      admin: {
        condition: (_data, siblingData) => Boolean(siblingData?.showEmergencyBox),
      },
    },
  ],
}