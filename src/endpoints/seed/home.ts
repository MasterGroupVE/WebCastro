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
        headline: 'Los Profesionales Detrás de Cada Renovación y Estructura',
        paragraph1:
          'En Construcciones Los Castros C.A. somos un equipo apasionado de ingenieros, arquitectos y maestros de obra dedicados a transformar espacios y erigir estructuras sólidas. Cuidamos cada detalle desde el diseño inicial hasta los acabados finales.',
        paragraph2:
          'Nuestra filosofía se basa en tres pilares: transparencia presupuestaria, el uso de materiales de primera calidad y el cumplimiento riguroso de los tiempos de entrega.',
        features: [
          { text: 'Atención Personalizada' },
          { text: 'Supervisión en Sitio' },
        ],
        ctaText: 'Conoce Más de Nuestro Equipo',
        ctaAction: 'modal',
        image1: metaImage.id,
        stat1Value: '+15 Años',
        stat1Label: 'De Experiencia y Liderazgo',
        stat2Value: '+78k M²',
        stat2Label: 'Proyectos Construidos',
        image2: image3.id,
        guaranteeBadgeTitle: 'Garantía Escrita',
        guaranteeBadgeText: '100% Calidad Garantizada',
      },
      {
        blockType: 'services',
        badge: 'Nuestros Servicios',
        headline: 'Espacios Que Se Sienten Perfectos',
        layout: 'tabs',
        showEmergencyBox: true,
        emergencyTitle: '¿Servicio Urgente o Cotización?',
        emergencyPhone: '+58 (212) 555-CASTRO',
        emergencyLink: 'tel:+582125552278',
        services: [
          {
            tabLabel: 'Remodelaciones',
            title: '1. Remodelación Integral de Cocinas y Baños',
            description:
              'Transformamos espacios residenciales optimizando la distribución, instalando griferías avanzadas, acabados en porcelanato y mobiliario a medida de alta durabilidad.',
            image: image1.id,
            badge: 'Residencial Los Palos Grandes',
            features: [
              { text: 'Diseño 3D y renderizado previo' },
              { text: 'Instalaciones hidráulicas y eléctricas' },
              { text: 'Acabados de lujo y carpintería fina' },
            ],
          },
          {
            tabLabel: 'Obras Civiles',
            title: '2. Construcción de Obras Civiles y Estructuras',
            description:
              'Edificación desde cero de galpones, estructuras de concreto armado, muros de contención y locales comerciales con ingeniería de alta precisión.',
            image: heroImage.id,
            badge: 'Estructura Comercial La Trinidad',
            features: [
              { text: 'Fundaciones y vaciado de losas' },
              { text: 'Cálculo e ingeniería estructural' },
              { text: 'Control de calidad y pruebas de resistencia' },
            ],
          },
          {
            tabLabel: 'Mantenimiento',
            title: '3. Mantenimiento Preventivo y Corrección Estructural',
            description:
              'Soluciones efectivas para impermeabilización, reparación de grietas, frisos, pintura de fachadas e inspección técnica periódica.',
            image: image3.id,
            badge: 'Mantenimiento Torre Empresarial',
            features: [
              { text: 'Impermeabilización de mantos asfálticos' },
              { text: 'Restauración de fachadas e hilos de agua' },
              { text: 'Refuerzo antisísmico y de columnas' },
            ],
          },
          {
            tabLabel: 'Diseño e Interiores',
            title: '4. Diseño Arquitectónico y Decoración de Interiores',
            description:
              'Creación de ambientes armónicos, selección de acabados, revestimientos de vanguardia e iluminación inteligente adaptada a tu estilo.',
            image: metaImage.id,
            badge: 'Penthouse Valle Arriba',
            features: [
              { text: 'Planos arquitectónicos y permisos' },
              { text: 'Diseño de iluminación moderna (LED)' },
              { text: 'Mobiliario y revestimientos exclusivos' },
            ],
          },
        ],
      },
      {
        blockType: 'process',
        badge: 'Proceso de Trabajo',
        headline: 'Transformaciones Paso a Paso',
        subheadline:
          'Garantizamos un desarrollo estructurado para que disfrutes del proceso con total tranquilidad.',
        steps: [
          {
            stepNumber: '01',
            title: 'Planificación y Diseño',
            description:
              'Evaluamos tus necesidades en sitio, elaboramos los planos, presupuestos transparentes y la programación de la obra.',
            icon: 'fa-clipboard-list',
            color: 'yellow',
          },
          {
            stepNumber: '02',
            title: 'Ejecución Profesional',
            description:
              'Nuestro equipo especializado ejecuta la construcción con supervisión constante, control de calidad y seguridad total.',
            icon: 'fa-hammer',
            color: 'green',
          },
          {
            stepNumber: '03',
            title: 'Entrega y Garantía',
            description:
              'Realizamos una inspección exhaustiva final y entregamos la obra lista para ser habitada o utilizada, respaldada por garantía.',
            icon: 'fa-key',
            color: 'blue',
          },
        ],
      },
      {
        blockType: 'column',
        badge: 'Proyectos Destacados',
        headline: 'Proyectos Recientes',
        // projects se moverá a su propia página
        // columnCount define cuántas columnas mostrar
        columnCount: '3',
      },
      {
        blockType: 'testimonials',
        badge: 'Opiniones Reales',
        headline: 'Respaldados por Nuestros Clientes',
        testimonials: [
          {
            author: 'Anya Petrova',
            role: 'Propietaria Residencial',
            quote:
              'Transformaron nuestra casa por completo. El equipo de Los Castros fue sumamente puntual y profesional en cada etapa de la obra.',
            rating: 5,
          },
          {
            author: 'Carlos Mendoza',
            role: 'Director Comercial',
            quote:
              'De principio a fin, la comunicación fue fluida y clara. Entregaron la obra comercial exactamente en la fecha acordada.',
            rating: 5,
          },
          {
            author: 'Isabelle Dubois',
            role: 'Cliente Residencial',
            quote:
              'La calidad de los acabados en la cocina y baños superó nuestras expectativas. ¡Recomendados con los ojos cerrados!',
            rating: 5,
          },
        ],
      },
      {
        blockType: 'faq',
        badge: 'Preguntas Frecuentes',
        headline: 'Lo Que Debes Saber Antes de Iniciar',
        questions: [
          {
            question: '¿Cuánto tiempo toma una remodelación residencial completa?',
            answer:
              'El tiempo varía según el alcance. Generalmente, renovaciones pequeñas tardan de 2 a 4 semanas, mientras que proyectos integrales completas toman entre 6 y 12 semanas. Elaboramos un cronograma detallado desde el día uno.',
          },
          {
            question: '¿Ofrecen un presupuesto fijo y cerrado?',
            answer:
              'Sí, presentamos presupuestos transparentes por partida de obra. Salvo modificaciones solicitadas explícitamente por el cliente durante la ejecución, el costo acordado se mantiene.',
          },
          {
            question: '¿Los materiales de construcción están incluidos en el presupuesto?',
            answer:
              'Ofrecemos la modalidad "llave en mano" que incluye tanto materiales de obra gruesa como fina, o podemos trabajar bajo modalidad de suministro directo según tus preferencias.',
          },
          {
            question: '¿Puedo habitar la vivienda mientras se realiza la remodelación?',
            answer:
              'En remodelaciones parciales (como baños o terrazas) coordinamos el trabajo por fases para minimizar las molestias. En obras integrales recomendamos desocupar temporalmente por seguridad e higiene.',
          },
        ],
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