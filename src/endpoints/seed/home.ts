// @ts-nocheck
import type { RequiredDataFromCollectionSlug } from 'payload'
import type { Media } from '@/payload-types'

type HomeArgs = {
  heroImage: Media
  metaImage: Media
  image1: Media
  image3: Media
}

export const home: (args: HomeArgs) => RequiredDataFromCollectionSlug<'pages'> = ({
  heroImage,
  metaImage,
  image1,
  image3,
}) => {
  return {
    slug: 'home',
    _status: 'published',
    title: 'Inicio',
    layout: [
      {
        blockType: 'hero',
        badge: 'Líderes en Construcción y Remodelaciones Integrales',
        headline: 'Excelencia y Calidad Enfocada en',
        highlightText: 'Tus Proyectos',
        subheadline:
          'Ofrecemos soluciones de construcción, ingeniería y remodelación residencial y comercial de alto nivel. Garantizamos acabados impecables, materiales duraderos y entrega a tiempo.',
        primaryCtaText: 'Explorar Servicios',
        primaryCtaLink: '#servicios',
        secondaryCtaText: 'Agendar Inspección',
        secondaryCtaType: 'modal',
        backgroundImage: heroImage.id,
        showRating: true,
        ratingScore: '5/5',
        ratingText: 'Más de +250 proyectos entregados con éxito',
      },
      {
        blockType: 'aboutUs',
        badge: 'Sobre Nosotros',
        headline: 'Nuestra Historia',
        text: 'Nuestra filosofía se basa en tres pilares: transparencia presupuestaria, el uso de materiales de primera calidad y el cumplimiento riguroso de los tiempos de entrega.',
      },
      {
        blockType: 'services',
        headline: 'Nuestros Servicios',
        headline2: 'Confía en la experiencia de un equipo multidisciplinario',
        text: 'Ofrecemos soluciones integrales de ingeniería civil, geotecnia, obras viales, pantallas atirantadas, obras hidráulicas y sector petrolero. Construyendo con bases sólidas y garantía técnica.',
      },
      {
        blockType: 'postsGrid',
        badge: 'Artículos y Consejos',
        headline: 'Blog de Innovación y Remodelaciones',
        customPosts: [
          {
            image: image1.id,
            category: 'Mantenimiento',
            title: 'Claves para Elegir los Mejores Materiales de Obra',
            description:
              'Descubre qué considerar al comprar griferías, porcelanatos y aislamiento térmico.',
            link: '/posts',
          },
          {
            image: image3.id,
            category: 'Tendencias',
            title: 'Cómo Maximizar la Iluminación Natural en Tu Hogar',
            description:
              'Estrategias arquitectónicas para aprovechar la luz y reducir el consumo eléctrico.',
            link: '/posts',
          },
        ],
      },
      {
        blockType: 'ctaBanner',
        headline: '¿Necesitas Ayuda Inmediata con Tu Proyecto?',
        text: 'Habla directamente con uno de nuestros ingenieros supervisores hoy mismo.',
        buttonText: 'Llámanos: +58 (212) 555-CASTRO',
        buttonAction: 'link',
        buttonLink: 'tel:+582125552278',
        backgroundColor: 'yellow',
      },
    ],
  }
}
