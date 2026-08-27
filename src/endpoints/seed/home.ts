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
    title: 'Home',
    layout: [
      {
        blockType: 'hero',
        headline: 'Renovación y Construcción de Calidad para tu Hogar',
        subheadline:
          'En Construcciones Los Castros transformamos tus espacios con un equipo experto, materiales de primera y entregas a tiempo.',
        ctaText: 'Cotiza Gratis',
        ctaLink: '/contacto',
        backgroundImage: heroImage.id,
        layout: 'centered',
        height: 'large',
        textColor: 'white',
        overlayOpacity: '50',
      },
      {
        blockType: 'aboutUs',
        headline: 'Los Profesionales Detrás de Cada Obra',
        subheadline: 'Sobre Nosotros',
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
                    text: 'Con más de 15 años de experiencia en el sector de la construcción, en Construcciones Los Castros nos especializamos en obras civiles, remodelaciones y proyectos llave en mano. Cada proyecto refleja nuestra experiencia y compromiso con la calidad.',
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
        image: metaImage.id,
        imagePosition: 'right',
        stats: [
          { value: '150+', label: 'Proyectos completados' },
          { value: '15', label: 'Años de experiencia' },
        ],
        backgroundColor: 'white',
      },
      {
        blockType: 'services',
        headline: 'Espacios que se Sienten Bien',
        subheadline: 'Nuestros Servicios',
        layout: 'numbered',
        listImage: image3.id,
        backgroundColor: 'gray',
        services: [
          {
            title: 'Remodelación de Cocinas',
            description: 'Cocinas modernas y funcionales, diseñadas a tu medida.',
            link: '/contacto',
          },
          {
            title: 'Remodelación de Baños',
            description: 'Baños renovados con acabados de primera calidad.',
          },
          {
            title: 'Ampliaciones de Vivienda',
            description: 'Gana espacio sin mudarte, con obras limpias y seguras.',
          },
          {
            title: 'Obras Civiles y Estructuras',
            description: 'Infraestructura, estructuras metálicas y urbanismo.',
          },
        ],
        ctaText: 'Solicitar Presupuesto',
        ctaLink: '/contacto',
      },
      {
        blockType: 'features',
        headline: 'Transformaciones Paso a Paso',
        subheadline: 'Nuestro Proceso',
        backgroundColor: 'white',
        items: [
          {
            icon: 'architecture',
            title: 'Diseño y Asesoría',
            description:
              'Cada detalle refleja nuestra experiencia. Te asesoramos desde el primer boceto hasta los acabados finales.',
          },
          {
            icon: 'construction',
            title: 'Construcción Cuidadosa',
            description:
              'Construimos hogares con esmero: obra limpia, materiales de calidad y comunicación constante.',
          },
          {
            icon: 'home',
            title: 'Espacios que Inspiran',
            description:
              'Crear espacios que inspiren alegría y comodidad es nuestra especialidad. Tu satisfacción es nuestro orgullo.',
          },
        ],
      },
      {
        blockType: 'projects',
        headline: 'Proyectos que Hablan por Nosotros',
        subheadline: 'Portafolio',
        layout: 'grid3',
        backgroundColor: 'gray',
        projects: [
          {
            title: 'Remodelación Residencial Los Teques',
            category: 'Residencial',
            description:
              'Renovación integral de una vivienda familiar: cocina, baños y áreas sociales en 8 semanas.',
            location: 'Los Teques',
            year: '2025',
            image: image1.id,
          },
          {
            title: 'Local Comercial El Hatillo',
            category: 'Comercial',
            description:
              'Adecuación completa de local comercial con fachada nueva e iluminación moderna.',
            location: 'El Hatillo',
            year: '2024',
            image: metaImage.id,
          },
          {
            title: 'Oficinas Las Mercedes',
            category: 'Corporativo',
            description:
              'Diseño y construcción de espacios de oficina abiertos con salas de reunión.',
            location: 'Caracas',
            year: '2024',
            image: image3.id,
          },
        ],
        ctaText: 'Ver Todos los Proyectos',
        ctaLink: '/proyectos',
      },
      {
        blockType: 'testimonials',
        headline: 'Clientes que Confían en Nosotros',
        subheadline: 'Testimonios',
        backgroundColor: 'white',
        testimonials: [
          {
            quote:
              'El equipo superó nuestras expectativas. La remodelación de la casa quedó hermosa y la atención fue excelente de principio a fin.',
            author: 'María González',
            role: 'Propietaria, Caracas',
            rating: 5,
          },
          {
            quote:
              'Trabajaron en nuestro local comercial y cumplieron con los tiempos exactos. Profesionales serios y ordenados.',
            author: 'José Rodríguez',
            role: 'Empresario, El Hatillo',
            rating: 5,
          },
          {
            quote:
              'La ampliación de nuestra vivienda fue impecable. Precio justo, obra limpia y un acabado de primera calidad.',
            author: 'Ana y Pedro Martínez',
            role: 'Propietarios, Los Teques',
            rating: 5,
          },
        ],
      },
      {
        blockType: 'faq',
        headline: 'Lo que Debes Saber Antes de Empezar',
        subheadline: 'Preguntas Frecuentes',
        backgroundColor: 'gray',
        questions: [
          {
            question: '¿Cuánto dura un proyecto de remodelación?',
            answer:
              'El tiempo depende del alcance. Un baño toma entre 2 y 3 semanas; una cocina completa, de 4 a 6 semanas. Antes de empezar te entregamos un cronograma detallado.',
          },
          {
            question: '¿El presupuesto incluye materiales?',
            answer:
              'Sí. Preparamos presupuestos transparentes con materiales y mano de obra detallados, sin sorpresas al final.',
          },
          {
            question: '¿Trabajan con permisos municipales?',
            answer:
              'Sí, gestionamos y tramitamos los permisos necesarios ante las autoridades municipales correspondientes.',
          },
          {
            question: '¿Ofrecen garantía por sus trabajos?',
            answer:
              'Todos nuestros proyectos cuentan con garantía de mano de obra. Si algo no queda como lo acordado, lo corregimos sin costo.',
          },
          {
            question: '¿Puedo vivir en mi casa durante la remodelación?',
            answer:
              'En la mayoría de los casos sí. Planificamos la obra por etapas para minimizar las molestias en tu día a día.',
          },
        ],
      },
      {
        blockType: 'postsGrid',
        headline: 'Blog y Consejos de Construcción',
        subheadline: 'Mantente Informado',
        limit: 3,
        backgroundColor: 'white',
        ctaText: 'Ver Todas las Publicaciones',
        ctaLink: '/posts',
      },
      {
        blockType: 'ctaBanner',
        headline: '¿Necesitas Ayuda con tu Proyecto?',
        text: 'Llámanos hoy y recibe asesoría gratuita con nuestro equipo de expertos.',
        buttonText: 'Contáctanos',
        buttonLink: '/contacto',
        style: 'gradient',
      },
      {
        blockType: 'contact',
        headline: 'Contáctanos',
        subheadline: 'Estamos para Servirte',
        backgroundColor: 'white',
        contactItems: [
          {
            icon: 'call',
            label: 'Teléfono / WhatsApp',
            value: '+58 412 000 0000',
            link: 'https://wa.me/584120000000',
          },
          {
            icon: 'mail',
            label: 'Correo',
            value: 'info@loscastros.com',
            link: 'mailto:info@loscastros.com',
          },
          {
            icon: 'location_on',
            label: 'Dirección',
            value: 'Caracas, Venezuela',
          },
          {
            icon: 'schedule',
            label: 'Horario',
            value: 'Lun - Sáb: 8:00am - 5:00pm',
          },
        ],
      },
    ],
  }
}