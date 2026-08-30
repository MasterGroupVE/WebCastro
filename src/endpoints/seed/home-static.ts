// Used for pre-seeded content so that the homepage renders all Castro blocks dynamically
export const homeStatic: any = {
  slug: 'home',
  _status: 'published',
  title: 'Inicio',
  layout: [
    {
      blockType: 'hero',
      badge: 'Construcción de Obras Civiles, Infraestructura y Geotecnia',
      headline: 'Soluciones de Ingeniería y Construcción con',
      highlightText: 'Calidad y Compromiso',
      subheadline:
        'Especialistas en obras civiles, vialidad, pantallas atirantadas, estabilización de taludes, pilotaje, obras hidráulicas y sector petrolero con más de 15 años de liderazgo técnico.',
      primaryCtaText: 'Explorar Servicios',
      primaryCtaLink: '#servicios',
      secondaryCtaText: 'Solicitar Inspección Técnica',
      secondaryCtaType: 'modal',
      backgroundImage: {
        url: '/hero-castro.jpg',
      },
      showRating: true,
      ratingScore: '5/5',
      ratingText: 'Más de +250 proyectos y contratos entregados con éxito',
    },
    {
      blockType: 'aboutUs',
      badge: 'Sobre Nosotros',
      headline: 'Líderes en Obras Civiles, Geociencias y Construcción Pesada',
      paragraph1:
        'En Construcciones Los Castros C.A. brindamos servicios integrales de ingeniería civil, geología, geotecnia, topografía, obras viales, hidráulicas, eléctricas y mecánicas para el sector público y privado.',
      paragraph2:
        'Nos apegamos a los más estrictos estándares de calidad, seguridad y normativas técnicas nacionales e internacionales, garantizando solidez estructural y cumplimiento riguroso de los plazos.',
      features: [
        { text: 'Supervisión Geotécnica en Sitio' },
        { text: 'Laboratorio y Control de Calidad' },
      ],
      ctaText: 'Conoce Nuestra Trayectoria',
      ctaAction: 'modal',
      image1: {
        url: '/hero-castro.jpg',
      },
      stat1Value: '+15 Años',
      stat1Label: 'De Trayectoria y Liderazgo',
      stat2Value: '+78k M²',
      stat2Label: 'Obras e Infraestructuras',
      image2: {
        url: 'https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?w=800&q=80',
      },
      guaranteeBadgeTitle: 'Garantía Técnica',
      guaranteeBadgeText: '100% Calidad y Respaldo de Obra',
    },
    {
      blockType: 'services',
      badge: 'Nuestras Especialidades',
      headline: 'Ingeniería y Construcción de Alto Rendimiento',
      layout: 'tabs',
      showEmergencyBox: true,
      emergencyTitle: '¿Consultoría o Cotización Urgente?',
      emergencyPhone: '+58 (412) 964-3616',
      emergencyLink: 'tel:+584129643616',
      services: [
        {
          tabLabel: 'Obras Viales y Civiles',
          title: '1. Obras Civiles, Autopistas y Vialidad',
          description:
            'Construcción y rehabilitación de autopistas, puentes, viaductos, pavimentación rígida y flexible, fallas de borde y movimientos masivos de tierra.',
          image: {
            url: '/hero-castro.jpg',
          },
          badge: 'Autopista Gran Mariscal de Ayacucho',
          features: [
            { text: 'Construcción y rehabilitación de vías' },
            { text: 'Corrección de fallas de borde y pavimentos' },
            { text: 'Movimientos de tierra y nivelación' },
          ],
        },
        {
          tabLabel: 'Pilotaje y Geotecnia',
          title: '2. Pilotaje, Pantallas Atirantadas y Geotecnia',
          description:
            'Estabilización de taludes, pantallas atirantadas, cortinas de pilotes, fundaciones profundas, muros de contención y estudios de suelo para obras civiles.',
          image: {
            url: 'https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?w=1000&q=80',
          },
          badge: 'Pantallas Atirantadas El Junquito',
          features: [
            { text: 'Pilotaje y fundaciones profundas' },
            { text: 'Pantallas atirantadas y anclajes' },
            { text: 'Estabilización de taludes y macizos rocosos' },
          ],
        },
        {
          tabLabel: 'Petróleo y Gas',
          title: '3. Obras Civiles para Petróleo, Gas e Hidrocarburos',
          description:
            'Ejecución de proyectos de envergadura en divisiones Oriente y Occidente: poliductos, gasoductos, adecuaciones y obras civiles para la industria petrolera.',
          image: {
            url: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1000&q=80',
          },
          badge: 'Sector Hidrocarburos Oriente-Occidente',
          features: [
            { text: 'Tendido y montaje de poliductos' },
            { text: 'Obras civiles para plantas industriales' },
            { text: 'Cumplimiento de normativas ambientales' },
          ],
        },
        {
          tabLabel: 'Obras Hidráulicas',
          title: '4. Obras Hidráulicas, Drenajes y Canalizaciones',
          description:
            'Canalización de ríos y quebradas, construcción de cajones de paso, redes sanitarias, pluviales y protección contra inundaciones.',
          image: {
            url: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1000&q=80',
          },
          badge: 'Canalización Quebrada Mamera',
          features: [
            { text: 'Construcción de cajones y canalizaciones' },
            { text: 'Drenajes superficiales y profundos' },
            { text: 'Redes sanitarias e hidráulicas' },
          ],
        },
      ],
    },
    {
      blockType: 'process',
      badge: 'Metodología Técnica',
      headline: 'Metodología y Ejecución de Obra',
      subheadline:
        'Garantizamos rigor técnico, seguridad industrial y cumplimiento normativo en cada etapa del proyecto.',
      steps: [
        {
          stepNumber: '01',
          title: 'Estudios Previos y Geotecnia',
          description:
            'Exploración de suelos, levantamiento topográfico, cálculos estructurales y planificación presupuestaria por partida.',
          icon: 'fa-clipboard-list',
          color: 'yellow',
        },
        {
          stepNumber: '02',
          title: 'Ejecución con Maquinaria Pesada',
          description:
            'Despliegue de equipo especializado, pilotaje, perforación, vaciado de concreto y supervisión continua de obra.',
          icon: 'fa-hammer',
          color: 'green',
        },
        {
          stepNumber: '03',
          title: 'Control de Calidad y Entrega',
          description:
            'Ensayos de resistencia de materiales, pruebas de carga y entrega de acta de culminación con total garantía.',
          icon: 'fa-key',
          color: 'blue',
        },
      ],
    },
    {
      blockType: 'projects',
      badge: 'Portafolio de Obras',
      headline: 'Grandes Obras de Infraestructura Ejecutadas',
      projects: [
        {
          image: {
            url: '/hero-castro.jpg',
          },
          category: 'Vialidad',
          categoryColor: 'green',
          title: 'Autopista Gran Mariscal de Ayacucho',
          description:
            'Construcción de tramos de autopista, cajones de concreto armado, movimientos de tierra y pavimentación pesada.',
          location: 'Oriente',
          status: 'Culminado',
        },
        {
          image: {
            url: 'https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?w=800&q=80',
          },
          category: 'Geotecnia',
          categoryColor: 'navy',
          title: 'Pantalla Atirantada Carretera El Junquito',
          description:
            'Estabilización de taludes críticos, micropilotes, drenajes y pantalla atirantada en progreso de montaña.',
          location: 'Caracas - Dtto. Capital',
          status: 'Culminado',
        },
        {
          image: {
            url: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=800&q=80',
          },
          category: 'Hidráulica',
          categoryColor: 'yellow',
          title: 'Canalización Quebrada Mamera',
          description:
            'Construcción de cajón hidráulico, muros de contención y canalización de descarga al Río Guaire.',
          location: 'Caracas',
          status: 'Culminado',
        },
      ],
      ctaText: 'Solicitar Asesoría para Nuevos Proyectos',
      ctaAction: 'modal',
    },
    {
      blockType: 'testimonials',
      badge: 'Confianza Comprobada',
      headline: 'Respaldados por Nuestros Clientes y Contratantes',
      testimonials: [
        {
          avatar: {
            url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80',
          },
          author: 'Ing. Supervisor de Obras',
          role: 'Sector Infraestructura',
          quote:
            'Construcciones Los Castros demostró solvencia técnica y capacidad operativa en obras de gran complejidad como pantallas atirantadas y taludes.',
          rating: 5,
        },
        {
          avatar: {
            url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80',
          },
          author: 'Dirección de Proyectos',
          role: 'Sector Hidrocarburos',
          quote:
            'Cumplimiento estricto de los cronogramas y apego a los estándares de seguridad industrial y calidad en la ejecución de poliductos.',
          rating: 5,
        },
        {
          avatar: {
            url: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&q=80',
          },
          author: 'Gerencia Técnica',
          role: 'Desarrollo Urbano',
          quote:
            'Excelente respuesta técnica y maquinaria adecuada para movimientos masivos de tierra y muros de contención.',
          rating: 5,
        },
      ],
    },
    {
      blockType: 'faq',
      badge: 'Preguntas Frecuentes',
      headline: 'Consultas Técnicas y de Contratación',
      questions: [
        {
          question: '¿Qué tipo de obras y proyectos ejecuta Construcciones Los Castros C.A.?',
          answer:
            'Ejecutamos obras civiles de gran envergadura: vialidad, autopistas, puentes, estabilización de taludes, pantallas atirantadas, muros de contención, pilotaje, canalizaciones hidráulicas, edificaciones y obras para el sector petrolero y gas.',
        },
        {
          question: '¿Cuentan con maquinaria pesada propia y equipo técnico especializado?',
          answer:
            'Sí, disponemos de flota de maquinaria pesada (excavadoras, camiones de volteo, piloteras, motoniveladoras, rodillos compactadores) y un equipo multidisciplinario de ingenieros civiles, geotécnicos y topógrafos.',
        },
        {
          question: '¿Prestan servicios a nivel nacional en toda Venezuela?',
          answer:
            'Sí, hemos desarrollado proyectos de infraestructura a nivel nacional, con divisiones operativas en la región Capital, Central, Oriente y Occidente.',
        },
        {
          question: '¿Cómo solicitar una inspección técnica o cotización?',
          answer:
            'Puedes contactarnos a través de nuestros números telefónicos (+58 412-9643616 / +58 414-3904751), enviarnos un correo a construccionesloscastrosca@gmail.com o hacer clic en "Solicitar Inspección Técnica" en la web.',
        },
      ],
    },
    {
      blockType: 'postsGrid',
      badge: 'Artículos y Novedades',
      headline: 'Ingeniería, Geotecnia y Avances en Construcción',
      customPosts: [
        {
          image: {
            url: '/hero-castro.jpg',
          },
          category: 'Geotecnia',
          title: 'Importancia de las Pantallas Atirantadas en la Estabilización de Vías',
          description:
            'Análisis de la ingeniería geotécnica aplicada a taludes montañosos y prevención de fallas de borde.',
          link: '/posts',
        },
        {
          image: {
            url: 'https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?w=600&q=80',
          },
          category: 'Infraestructura',
          title: 'Buenas Prácticas en el Vaciado de Concreto y Cimentaciones Profundas',
          description:
            'Control de calidad, pruebas de laboratorio y resistencia estructural en fundaciones.',
          link: '/posts',
        },
      ],
    },
    {
      blockType: 'ctaBanner',
      headline: '¿Tienes un Proyecto de Infraestructura u Obra Civil?',
      text: 'Comunícate con nuestro equipo de ingenieros y obtén asesoría técnica de primer nivel.',
      buttonText: 'Llámanos: +58 (412) 964-3616',
      buttonAction: 'link',
      buttonLink: 'tel:+584129643616',
      backgroundColor: 'yellow',
    },
  ],
}