import { Block } from 'payload'

export const CtaBannerBlock: Block = {
  slug: 'ctaBanner',
  labels: { singular: 'Franja CTA / Llamada a la Acción', plural: 'Franjas CTA' },
  fields: [
    {
      name: 'headline',
      type: 'text',
      required: true,
      label: 'Titular',
      defaultValue: '¿Necesitas Ayuda Inmediata con Tu Proyecto?',
    },
    {
      name: 'text',
      type: 'textarea',
      label: 'Texto descriptivo',
      defaultValue: 'Habla directamente con uno de nuestros ingenieros supervisores hoy mismo.',
    },
    {
      name: 'buttonText',
      type: 'text',
      label: 'Texto del botón',
      defaultValue: 'Llámanos: +58 (212) 555-CASTRO',
    },
    {
      name: 'buttonAction',
      type: 'select',
      label: 'Acción del botón',
      options: [
        { label: 'Enlace (teléfono / web)', value: 'link' },
        { label: 'Abrir Formulario / Modal de Cotización', value: 'modal' },
      ],
      defaultValue: 'link',
    },
    {
      name: 'buttonLink',
      type: 'text',
      label: 'Enlace del botón (ej. tel:+582125552278 o /contacto)',
      defaultValue: 'tel:+582125552278',
      admin: {
        condition: (_data, siblingData) => siblingData?.buttonAction === 'link',
      },
    },
    {
      name: 'backgroundColor',
      type: 'select',
      label: 'Color de fondo',
      options: [
        { label: 'Amarillo Castro (Corporativo)', value: 'yellow' },
        { label: 'Azul Marino Castro', value: 'navy' },
        { label: 'Verde Castro', value: 'green' },
      ],
      defaultValue: 'yellow',
    },
  ],
}
