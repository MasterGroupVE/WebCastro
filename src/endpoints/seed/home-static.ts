import type { RequiredDataFromCollectionSlug } from 'payload'

// Used for pre-seeded content so that the homepage is not empty
export const homeStatic: any = {
  slug: 'home',
  _status: 'published',
  title: 'Home',
  layout: [
    {
      blockType: 'hero',
      headline: 'Construcciones Los Castros',
      subheadline: 'Construimos tus sueños con calidad y compromiso',
      ctaText: 'Ver Proyectos',
      ctaLink: '/proyectos',
      layout: 'centered',
      height: 'large',
      textColor: 'white',
      overlayOpacity: '50',
    },
    {
      blockType: 'aboutUs',
      headline: 'Sobre Nosotros',
      subheadline: 'Experiencia y Compromiso',
      description: {
        root: {
          type: 'root',
          children: [
            {
              type: 'paragraph',
              children: [
                {
                  type: 'text',
                  detail: 0,
                  format: 0,
                  mode: 'normal',
                  style: '',
                  text: 'Con más de 15 años de experiencia en el sector de la construcción.',
                  version: 1,
                },
              ],
              direction: 'ltr',
              format: '',
              indent: 0,
              textFormat: 0,
              version: 1,
            },
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
          version: 1,
        },
      },
      stats: [
        { value: '150+', label: 'Proyectos completados' },
        { value: '15', label: 'Años de experiencia' },
      ],
      backgroundColor: 'white',
    },
    {
      blockType: 'services',
      headline: 'Nuestros Servicios',
      subheadline: 'Qué hacemos',
      layout: 'grid3',
      backgroundColor: 'gray',
      services: [
        { title: 'Obras Civiles', description: 'Infraestructura vial y urbanización.', icon: 'construction' },
        { title: 'Remodelaciones', description: 'Rehabilitación integral.', icon: 'build' },
        { title: 'Proyectos Llave en Mano', description: 'Gestión completa del proyecto.', icon: 'engineering' },
      ],
      ctaText: 'Solicitar Presupuesto',
      ctaLink: '/contacto',
    },
  ],
}