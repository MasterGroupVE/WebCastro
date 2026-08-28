import { Block } from 'payload'

export const AboutUsBlock: Block = {
  slug: 'aboutUs',
  labels: { singular: 'Sobre Nosotros', plural: 'Secciones Sobre Nosotros' },
  fields: [
    {
      name: 'badge',
      type: 'text',
      label: 'Insignia superior',
      defaultValue: 'Sobre Nosotros',
    },
    {
      name: 'headline',
      type: 'text',
      required: true,
      label: 'Titular principal',
      defaultValue: 'Los Profesionales Detrás de Cada Renovación y Estructura',
    },
    {
      name: 'paragraph1',
      type: 'textarea',
      label: 'Primer párrafo',
      defaultValue:
        'En Construcciones Los Castros C.A. somos un equipo apasionado de ingenieros, arquitectos y maestros de obra dedicados a transformar espacios y erigir estructuras sólidas. Cuidamos cada detalle desde el diseño inicial hasta los acabados finales.',
    },
    {
      name: 'paragraph2',
      type: 'textarea',
      label: 'Segundo párrafo',
      defaultValue:
        'Nuestra filosofía se basa en tres pilares: transparencia presupuestaria, el uso de materiales de primera calidad y el cumplimiento riguroso de los tiempos de entrega.',
    },
    {
      name: 'features',
      type: 'array',
      label: 'Puntos clave / Ventajas con Checkmark',
      fields: [
        {
          name: 'text',
          type: 'text',
          required: true,
          label: 'Texto del punto clave',
        },
      ],
      defaultValue: [
        { text: 'Atención Personalizada' },
        { text: 'Supervisión en Sitio' },
      ],
    },
    {
      name: 'ctaText',
      type: 'text',
      label: 'Texto del botón',
      defaultValue: 'Conoce Más de Nuestro Equipo',
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
    {
      name: 'image1',
      type: 'upload',
      relationTo: 'media',
      label: 'Imagen Superior Izquierda',
    },
    {
      name: 'stat1Value',
      type: 'text',
      label: 'Valor Estadística 1 (Fondo Marino/Amarillo)',
      defaultValue: '+15 Años',
    },
    {
      name: 'stat1Label',
      type: 'text',
      label: 'Etiqueta Estadística 1',
      defaultValue: 'De Experiencia y Liderazgo',
    },
    {
      name: 'stat2Value',
      type: 'text',
      label: 'Valor Estadística 2 (Fondo Verde/Blanco)',
      defaultValue: '+78k M²',
    },
    {
      name: 'stat2Label',
      type: 'text',
      label: 'Etiqueta Estadística 2',
      defaultValue: 'Proyectos Construidos',
    },
    {
      name: 'image2',
      type: 'upload',
      relationTo: 'media',
      label: 'Imagen Inferior Derecha',
    },
    {
      name: 'guaranteeBadgeTitle',
      type: 'text',
      label: 'Título de la tarjeta flotante de garantía',
      defaultValue: 'Garantía Escrita',
    },
    {
      name: 'guaranteeBadgeText',
      type: 'text',
      label: 'Texto de la tarjeta flotante de garantía',
      defaultValue: '100% Calidad Garantizada',
    },
  ],
}