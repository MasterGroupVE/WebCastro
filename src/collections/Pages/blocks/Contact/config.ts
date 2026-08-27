import { Block } from 'payload'

export const ContactBlock: Block = {
  slug: 'contact',
  labels: { singular: 'Contacto', plural: 'Contactos' },
  fields: [
    {
      name: 'headline',
      type: 'text',
      required: true,
      label: 'Título de la sección',
    },
    {
      name: 'subheadline',
      type: 'textarea',
      label: 'Subtítulo',
    },
    {
      name: 'contactItems',
      type: 'array',
      required: true,
      minRows: 1,
      label: 'Datos de contacto',
      labels: { singular: 'Dato', plural: 'Datos' },
      fields: [
        {
          name: 'icon',
          type: 'text',
          label: 'Icono (Material Icons)',
          defaultValue: 'info',
          admin: {
            description:
              'Ej: call, mail, location_on, schedule, chat (WhatsApp), language (web)',
          },
        },
        {
          name: 'label',
          type: 'text',
          required: true,
          label: 'Etiqueta (ej. Teléfono)',
        },
        {
          name: 'value',
          type: 'text',
          required: true,
          label: 'Valor (ej. +58 412 1234567)',
        },
        {
          name: 'link',
          type: 'text',
          label: 'Enlace (opcional)',
          admin: {
            description: 'Ej: tel:+584121234567, mailto:info@empresa.com, https://wa.me/584121234567',
          },
        },
      ],
    },
    {
      name: 'mapEmbedUrl',
      type: 'textarea',
      label: 'URL del mapa embebido (opcional)',
      admin: {
        description:
          'Pega la URL src del iframe de Google Maps (Compartir → Insertar un mapa → copiar solo el src)',
      },
    },
    {
      name: 'backgroundColor',
      type: 'select',
      label: 'Color de fondo',
      options: [
        { label: 'Blanco', value: 'white' },
        { label: 'Gris claro', value: 'gray' },
        { label: 'Navy', value: 'navy' },
      ],
      defaultValue: 'white',
    },
  ],
}
