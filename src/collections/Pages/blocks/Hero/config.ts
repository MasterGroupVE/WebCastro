import { Block } from 'payload'

export const HeroBlock: Block = {
  slug: 'hero',
  labels: { singular: 'Hero Principal', plural: 'Heroes Principales' },
  fields: [
    {
      name: 'badge',
      type: 'text',
      label: 'Insignia superior destacada',
      defaultValue: 'Líderes en Construcción y Remodelaciones Integrales',
    },
    {
      name: 'headline',
      type: 'text',
      required: true,
      label: 'Titular principal',
      defaultValue: 'Excelencia y Calidad Enfocada en',
    },
    {
      name: 'highlightText',
      type: 'text',
      label: 'Texto resaltado con gradiente dorado',
      defaultValue: 'Tus Proyectos',
      admin: {
        description: 'Aparecerá en el titular con un degradado llamativo amarillo/dorado.',
      },
    },
    {
      name: 'subheadline',
      type: 'textarea',
      label: 'Subtítulo / Descripción',
      defaultValue:
        'Ofrecemos soluciones de construcción, ingeniería y remodelación residencial y comercial de alto nivel. Garantizamos acabados impecables, materiales duraderos y entrega a tiempo.',
    },
    {
      name: 'primaryCtaText',
      type: 'text',
      label: 'Texto del botón principal',
      defaultValue: 'Explorar Servicios',
    },
    {
      name: 'primaryCtaLink',
      type: 'text',
      label: 'Enlace del botón principal',
      defaultValue: '#servicios',
    },
    {
      name: 'secondaryCtaText',
      type: 'text',
      label: 'Texto del botón secundario',
      defaultValue: 'Agendar Inspección',
    },
    {
      name: 'secondaryCtaType',
      type: 'select',
      label: 'Acción del botón secundario',
      options: [
        { label: 'Abrir Formulario / Modal de Cotización', value: 'modal' },
        { label: 'Enlace personalizado', value: 'link' },
      ],
      defaultValue: 'modal',
    },
    {
      name: 'secondaryCtaLink',
      type: 'text',
      label: 'Enlace personalizado del botón secundario',
      admin: {
        condition: (_data, siblingData) => siblingData?.secondaryCtaType === 'link',
      },
    },
    {
      name: 'backgroundImage',
      type: 'upload',
      relationTo: 'media',
      label: 'Imagen de fondo',
    },
    {
      name: 'showRating',
      type: 'checkbox',
      label: 'Mostrar barra de prueba social (estrellas y proyectos entregados)',
      defaultValue: true,
    },
    {
      name: 'ratingScore',
      type: 'text',
      label: 'Calificación (ej. 5/5)',
      defaultValue: '5/5',
      admin: {
        condition: (_data, siblingData) => Boolean(siblingData?.showRating),
      },
    },
    {
      name: 'ratingText',
      type: 'text',
      label: 'Texto de satisfacción / entrega',
      defaultValue: 'Más de +250 proyectos entregados con éxito',
      admin: {
        condition: (_data, siblingData) => Boolean(siblingData?.showRating),
      },
    },
    {
      name: 'avatars',
      type: 'array',
      label: 'Fotos de clientes (avatares)',
      admin: {
        condition: (_data, siblingData) => Boolean(siblingData?.showRating),
      },
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          label: 'Foto del cliente',
        },
      ],
    },
  ],
}