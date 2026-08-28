'use client'

import { useState } from 'react'
import { openQuoteModal } from '@/components/landing/QuoteModal'

const servicesData: Record<
  string,
  { title: string; desc: string; img: string; badge: string; list: string[] }
> = {
  remodelacion: {
    title: '1. Remodelación Integral de Cocinas y Baños',
    desc: 'Transformamos espacios residenciales optimizando la distribución, instalando griferías avanzadas, acabados en porcelanato y mobiliario a medida de alta durabilidad.',
    img: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=1000&q=80',
    badge: 'Residencial Los Palos Grandes',
    list: [
      'Diseño 3D y renderizado previo',
      'Instalaciones hidráulicas y eléctricas',
      'Acabados de lujo y carpintería fina',
    ],
  },
  obras: {
    title: '2. Construcción de Obras Civiles y Estructuras',
    desc: 'Edificación desde cero de galpones, estructuras de concreto armado, muros de contención y locales comerciales con ingeniería de alta precisión.',
    img: 'https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?w=1000&q=80',
    badge: 'Estructura Comercial La Trinidad',
    list: [
      'Fundaciones y vaciado de losas',
      'Cálculo e ingeniería estructural',
      'Control de calidad y pruebas de resistencia',
    ],
  },
  mantenimiento: {
    title: '3. Mantenimiento Preventivo y Corrección Estructural',
    desc: 'Soluciones efectivas para impermeabilización, reparación de grietas, frisos, pintura de fachadas e inspección técnica periódica.',
    img: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1000&q=80',
    badge: 'Mantenimiento Torre Empresarial',
    list: [
      'Impermeabilización de mantos asfálticos',
      'Restauración de fachadas e hilos de agua',
      'Refuerzo antisísmico y de columnas',
    ],
  },
  diseno: {
    title: '4. Diseño Arquitectónico y Decoración de Interiores',
    desc: 'Creación de ambientes armónicos, selección de acabados, revestimientos de vanguardia e iluminación inteligente adaptada a tu estilo.',
    img: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1000&q=80',
    badge: 'Penthouse Valle Arriba',
    list: [
      'Planos arquitectónicos y permisos',
      'Diseño de iluminación moderna (LED)',
      'Mobiliario y revestimientos exclusivos',
    ],
  },
}

const faqs = [
  {
    q: '¿Cuánto tiempo toma una remodelación residencial completa?',
    a: 'El tiempo varía según el alcance. Generalmente, renovaciones pequeñas tardan de 2 a 4 semanas, mientras que proyectos integrales completas toman entre 6 y 12 semanas. Elaboramos un cronograma detallado desde el día uno.',
  },
  {
    q: '¿Ofrecen un presupuesto fijo y cerrado?',
    a: 'Sí, presentamos presupuestos transparentes por partida de obra. Salvo modificaciones solicitadas explícitamente por el cliente durante la ejecución, el costo acordado se mantiene.',
  },
  {
    q: '¿Los materiales de construcción están incluidos en el presupuesto?',
    a: 'Ofrecemos la modalidad "llave en mano" que incluye tanto materiales de obra gruesa como fina, o podemos trabajar bajo modalidad de suministro directo según tus preferencias.',
  },
  {
    q: '¿Puedo habitar la vivienda mientras se realiza la remodelación?',
    a: 'En remodelaciones parciales (como baños o terrazas) coordinamos el trabajo por fases para minimizar las molestias. En obras integrales recomendamos desocupar temporalmente por seguridad e higiene.',
  },
]

export function CastroHome() {
  const [activeService, setActiveService] = useState('remodelacion')
  const [openFaq, setOpenFaq] = useState<string | null>(null)

  const service = servicesData[activeService]
  const tabs = [
    { key: 'remodelacion', label: 'Remodelaciones' },
    { key: 'obras', label: 'Obras Civiles' },
    { key: 'mantenimiento', label: 'Mantenimiento' },
    { key: 'diseno', label: 'Diseño e Interiores' },
  ]

  return (
    <main className="font-sans text-castro-textdark bg-white antialiased selection:bg-castro-yellow selection:text-castro-navy">
      {/* Hero */}
      <section
        id="inicio"
        className="relative bg-castro-navy text-white overflow-hidden py-20 lg:py-28 min-h-[640px] flex items-center"
      >
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?auto=format&fit=crop&w=2000&q=80"
            alt="Construcción y Remodelación"
            className="w-full h-full object-cover object-center scale-105 transform"
          />
          <div className="absolute inset-0 gradient-overlay"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-castro-yellow font-medium text-xs sm:text-sm mb-6">
              <span className="w-2 h-2 rounded-full bg-castro-green animate-pulse"></span>
              <span>Líderes en Construcción y Remodelaciones Integrales</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-6">
              Excelencia y Calidad Enfocada en{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-castro-yellow via-amber-200 to-white">
                Tus Proyectos
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-200 mb-8 font-normal leading-relaxed max-w-2xl">
              Ofrecemos soluciones de construcción, ingeniería y remodelación residencial y comercial de alto nivel.
              Garantizamos acabados impecables, materiales duraderos y entrega a tiempo.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
              <a
                href="#servicios"
                className="bg-castro-yellow hover:bg-castro-yellowhover text-castro-navy font-extrabold px-8 py-4 rounded-xl transition-all duration-200 transform hover:-translate-y-0.5 shadow-lg text-center flex items-center justify-center gap-3"
              >
                <span>Explorar Servicios</span>
                <i className="fa-solid fa-arrow-right"></i>
              </a>
              <button
                type="button"
                onClick={openQuoteModal}
                className="bg-castro-green hover:bg-castro-greenhover text-white font-bold px-8 py-4 rounded-xl transition-all duration-200 border border-emerald-500/30 text-center flex items-center justify-center gap-3 shadow-lg cursor-pointer"
              >
                <i className="fa-regular fa-calendar-check text-castro-yellow"></i>
                <span>Agendar Inspección</span>
              </button>
            </div>

            <div className="flex items-center gap-4 pt-4 border-t border-white/15">
              <div className="flex -space-x-2">
                <img
                  className="inline-block h-10 w-10 rounded-full ring-2 ring-white object-cover"
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80"
                  alt="Cliente"
                />
                <img
                  className="inline-block h-10 w-10 rounded-full ring-2 ring-white object-cover"
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80"
                  alt="Cliente"
                />
                <img
                  className="inline-block h-10 w-10 rounded-full ring-2 ring-white object-cover"
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80"
                  alt="Cliente"
                />
              </div>
              <div>
                <div className="flex items-center gap-1 text-castro-yellow text-sm">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <span className="font-bold text-white ml-1">5/5</span>
                </div>
                <p className="text-xs text-slate-300">
                  Más de <span className="font-bold text-white">+250 proyectos</span> entregados con éxito
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="nosotros" className="py-20 bg-castro-lightbg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="rounded-2xl overflow-hidden shadow-xl border-4 border-white transform hover:scale-[1.02] transition duration-300">
                    <img
                      src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80"
                      alt="Especialistas en obra"
                      className="w-full h-64 object-cover"
                    />
                  </div>
                  <div className="bg-castro-navy text-white p-6 rounded-2xl shadow-xl">
                    <div className="text-3xl sm:text-4xl font-extrabold text-castro-yellow mb-1">+15 Años</div>
                    <p className="text-xs font-medium text-slate-300 uppercase tracking-wider">
                      De Experiencia y Liderazgo
                    </p>
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="bg-castro-green text-white p-6 rounded-2xl shadow-xl">
                    <div className="text-3xl sm:text-4xl font-extrabold text-white mb-1">+78k M²</div>
                    <p className="text-xs font-medium text-emerald-100 uppercase tracking-wider">Proyectos Construidos</p>
                  </div>
                  <div className="rounded-2xl overflow-hidden shadow-xl border-4 border-white transform hover:scale-[1.02] transition duration-300">
                    <img
                      src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80"
                      alt="Supervisión técnica"
                      className="w-full h-64 object-cover"
                    />
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 -right-2 bg-white p-4 rounded-xl shadow-2xl hidden sm:flex items-center gap-3 border border-slate-100">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-castro-green flex items-center justify-center font-bold text-xl">
                  <i className="fa-solid fa-shield-halved"></i>
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-semibold">Garantía Escrita</p>
                  <p className="text-sm font-bold text-castro-navy">100% Calidad Garantizada</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-castro-green">
                <span className="w-2 h-2 rounded-full bg-castro-green"></span>
                <span>Sobre Nosotros</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-castro-navy tracking-tight leading-snug">
                Los Profesionales Detrás de Cada Renovación y Estructura
              </h2>

              <p className="text-slate-600 leading-relaxed text-base">
                En <strong className="text-castro-navy">Construcciones Los Castros C.A.</strong> somos un equipo
                apasionado de ingenieros, arquitectos y maestros de obra dedicados a transformar espacios y erigir
                estructuras sólidas. Cuidamos cada detalle desde el diseño inicial hasta los acabados finales.
              </p>

              <p className="text-slate-600 leading-relaxed text-base">
                Nuestra filosofía se basa en tres pilares: transparencia presupuestaria, el uso de materiales de
                primera calidad y el cumplimiento riguroso de los tiempos de entrega.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-4 bg-white rounded-xl border border-slate-200/80 shadow-sm flex items-center gap-3">
                  <i className="fa-solid fa-check-circle text-castro-green text-xl"></i>
                  <span className="text-sm font-bold text-castro-navy">Atención Personalizada</span>
                </div>
                <div className="p-4 bg-white rounded-xl border border-slate-200/80 shadow-sm flex items-center gap-3">
                  <i className="fa-solid fa-check-circle text-castro-green text-xl"></i>
                  <span className="text-sm font-bold text-castro-navy">Supervisión en Sitio</span>
                </div>
              </div>

              <div className="pt-4">
                <button
                  type="button"
                  onClick={openQuoteModal}
                  className="inline-flex items-center gap-2 border-2 border-castro-navy text-castro-navy hover:bg-castro-navy hover:text-white font-bold px-6 py-3 rounded-xl transition duration-200 text-sm cursor-pointer"
                >
                  <span>Conoce Más de Nuestro Equipo</span>
                  <i className="fa-solid fa-arrow-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="servicios" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-castro-green mb-2">
                <span className="w-2 h-2 rounded-full bg-castro-green"></span>
                <span>Nuestros Servicios</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-castro-navy tracking-tight">
                Espacios Que Se Sienten Perfectos
              </h2>
            </div>

            <div className="mt-6 md:mt-0 flex flex-wrap gap-2 bg-slate-100 p-1.5 rounded-xl border border-slate-200">
              {tabs.map((t) => (
                <button
                  key={t.key}
                  type="button"
                  onClick={() => setActiveService(t.key)}
                  className={`font-semibold text-xs sm:text-sm px-4 py-2.5 rounded-lg transition cursor-pointer ${
                    activeService === t.key
                      ? 'bg-castro-green text-white shadow-sm'
                      : 'text-slate-600 hover:text-castro-navy'
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-castro-lightbg rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-lg">
            <div className="lg:col-span-5 space-y-6">
              <div className="text-2xl font-extrabold text-castro-navy">{service.title}</div>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">{service.desc}</p>

              <ul className="space-y-3 font-medium text-sm text-slate-700">
                {service.list.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-emerald-100 text-castro-green flex items-center justify-center text-xs font-bold">
                      <i className="fa-solid fa-check"></i>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="p-5 bg-gradient-to-r from-castro-navy to-castro-darknavy text-white rounded-2xl shadow-md flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs text-castro-yellow font-bold uppercase tracking-wider">
                    ¿Servicio Urgente o Cotización?
                  </p>
                  <p className="text-lg font-extrabold text-white">+58 (212) 555-CASTRO</p>
                </div>
                <a
                  href="tel:+582125552278"
                  className="bg-castro-yellow hover:bg-castro-yellowhover text-castro-navy p-3 rounded-xl transition font-bold"
                >
                  <i className="fa-solid fa-phone-flip text-lg"></i>
                </a>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white h-[380px] sm:h-[440px]">
                <img
                  src={service.img}
                  alt="Remodelación de espacios"
                  className="w-full h-full object-cover transition-all duration-500"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md p-4 rounded-xl border border-white/50 flex justify-between items-center">
                  <div>
                    <span className="text-xs font-bold text-castro-green block">PROYECTO DESTACADO</span>
                    <span className="text-sm font-bold text-castro-navy">{service.badge}</span>
                  </div>
                  <button
                    type="button"
                    onClick={openQuoteModal}
                    className="text-xs font-bold text-white bg-castro-navy hover:bg-castro-green px-4 py-2 rounded-lg transition cursor-pointer"
                  >
                    Ver Detalles
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-castro-lightbg border-y border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-castro-green mb-2">
              <span className="w-2 h-2 rounded-full bg-castro-green"></span>
              <span>Proceso de Trabajo</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-castro-navy tracking-tight">
              Transformaciones Paso a Paso
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-3">
              Garantizamos un desarrollo estructurado para que disfrutes del proceso con total tranquilidad.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: 'fa-clipboard-list',
                n: '01',
                t: 'Planificación y Diseño',
                d: 'Evaluamos tus necesidades en sitio, elaboramos los planos, presupuestos transparentes y la programación de la obra.',
                c: 'bg-amber-100 text-castro-navy group-hover:bg-castro-yellow',
              },
              {
                icon: 'fa-hammer',
                n: '02',
                t: 'Ejecución Profesional',
                d: 'Nuestro equipo especializado ejecuta la construcción con supervisión constante, control de calidad y seguridad total.',
                c: 'bg-emerald-100 text-castro-green group-hover:bg-castro-green group-hover:text-white',
              },
              {
                icon: 'fa-key',
                n: '03',
                t: 'Entrega y Garantía',
                d: 'Realizamos una inspección exhaustiva final y entregamos la obra lista para ser habitada o utilizada, respaldada por garantía.',
                c: 'bg-blue-100 text-castro-navy group-hover:bg-castro-navy group-hover:text-white',
              },
            ].map((p) => (
              <div
                key={p.n}
                className="bg-white p-8 rounded-2xl shadow-md border border-slate-100 relative group hover:-translate-y-1 transition duration-300"
              >
                <div
                  className={`w-14 h-14 rounded-2xl ${p.c} flex items-center justify-center text-2xl font-bold mb-6 transition`}
                >
                  <i className={`fa-solid ${p.icon}`}></i>
                </div>
                <span className="text-4xl font-black text-slate-200 absolute top-6 right-6">{p.n}</span>
                <h3 className="text-xl font-bold text-castro-navy mb-3">{p.t}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="proyectos" className="py-20 bg-castro-lightbg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-castro-green mb-2">
              <span className="w-2 h-2 rounded-full bg-castro-green"></span>
              <span>Proyectos Recientes</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-castro-navy tracking-tight">
              Transformando Casas y Obras en Hogares
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
                tag: 'Residencial',
                tagCls: 'bg-castro-green text-white',
                t: 'Residencia La Castellana',
                d: 'Remodelación completa de interiores, iluminación automatizada y acabados de lujo.',
                loc: 'Caracas',
              },
              {
                img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
                tag: 'Comercial',
                tagCls: 'bg-castro-navy text-white',
                t: 'Oficinas Torre Financiera',
                d: 'Adecuación estructural, tabiquería de drywall y sistemas integrados.',
                loc: 'Valencia',
              },
              {
                img: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=800&q=80',
                tag: 'Remodelación',
                tagCls: 'bg-castro-yellow text-castro-navy',
                t: 'Quinta San Francisco',
                d: 'Ampliación de terraza, piscina y reforzamiento de fundaciones.',
                loc: 'Maracay',
              },
            ].map((p) => (
              <div
                key={p.t}
                className="bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-100 group"
              >
                <div className="relative overflow-hidden h-60">
                  <img
                    src={p.img}
                    alt={p.t}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                  <div className={`absolute top-4 left-4 ${p.tagCls} text-xs font-bold px-3 py-1 rounded-full`}>
                    {p.tag}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-castro-navy mb-2">{p.t}</h3>
                  <p className="text-slate-600 text-sm mb-4">{p.d}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-slate-100 text-xs font-semibold text-slate-500">
                    <span>
                      <i className="fa-solid fa-location-dot text-castro-yellow mr-1"></i> {p.loc}
                    </span>
                    <span className="text-castro-green font-bold">Completado</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              type="button"
              onClick={openQuoteModal}
              className="bg-castro-navy hover:bg-castro-darknavy text-white font-bold px-8 py-3.5 rounded-xl shadow transition cursor-pointer"
            >
              Solicitar Presupuesto para Mi Proyecto
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonios" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-castro-green mb-2">
              <span className="w-2 h-2 rounded-full bg-castro-green"></span>
              <span>Opiniones Reales</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-castro-navy tracking-tight">
              Respaldados por Nuestros Clientes
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80',
                name: 'Anya Petrova',
                role: 'Propietaria Residencial',
                t: 'Transformaron nuestra casa por completo. El equipo de Los Castros fue sumamente puntual y profesional en cada etapa de la obra.',
              },
              {
                img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80',
                name: 'Carlos Mendoza',
                role: 'Director Comercial',
                t: 'De principio a fin, la comunicación fue fluida y clara. Entregaron la obra comercial exactamente en la fecha acordada.',
              },
              {
                img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&q=80',
                name: 'Isabelle Dubois',
                role: 'Cliente Residencial',
                t: 'La calidad de los acabados en la cocina y baños superó nuestras expectativas. ¡Recomendados con los ojos cerrados!',
              },
            ].map((c) => (
              <div
                key={c.name}
                className="bg-castro-lightbg p-6 rounded-2xl border border-slate-200/60 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex text-castro-yellow text-sm mb-3">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </div>
                  <p className="text-slate-700 text-sm leading-relaxed mb-6 italic">{c.t}</p>
                </div>
                <div className="flex items-center gap-3 pt-4 border-t border-slate-200">
                  <img src={c.img} alt={c.name} className="w-10 h-10 rounded-full object-cover" />
                  <div>
                    <h4 className="text-sm font-bold text-castro-navy">{c.name}</h4>
                    <p className="text-xs text-slate-500">{c.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 bg-castro-lightbg border-t border-slate-200/60">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-castro-green mb-2">
              <span className="w-2 h-2 rounded-full bg-castro-green"></span>
              <span>Preguntas Frecuentes</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-castro-navy tracking-tight">
              Lo Que Debes Saber Antes de Iniciar
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((f, i) => {
              const id = `faq-${i + 1}`
              const isOpen = openFaq === id
              return (
                <div key={id} className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : id)}
                    className="w-full text-left p-6 font-bold text-castro-navy text-lg flex justify-between items-center hover:bg-slate-50 transition cursor-pointer"
                  >
                    <span>{f.q}</span>
                    <i
                      className={`fa-solid fa-chevron-down text-castro-green transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    ></i>
                  </button>
                  {isOpen && <div className="px-6 pb-6 text-slate-600 text-sm leading-relaxed">{f.a}</div>}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Blog */}
      <section id="blog" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-castro-green mb-2">
              <span className="w-2 h-2 rounded-full bg-castro-green"></span>
              <span>Artículos y Consejos</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-castro-navy tracking-tight">
              Blog de Innovación y Remodelaciones
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                img: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=600&q=80',
                cat: 'Mantenimiento',
                t: 'Claves para Elegir los Mejores Materiales de Obra',
                d: 'Descubre qué considerar al comprar griferías, porcelanatos y aislamiento térmico.',
              },
              {
                img: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600&q=80',
                cat: 'Tendencias',
                t: 'Cómo Maximizar la Iluminación Natural en Tu Hogar',
                d: 'Estrategias arquitectónicas para aprovechar la luz y reducir el consumo eléctrico.',
              },
            ].map((b) => (
              <div
                key={b.t}
                className="bg-castro-lightbg rounded-2xl overflow-hidden border border-slate-200 flex flex-col sm:flex-row group"
              >
                <div className="sm:w-1/2 h-52 sm:h-auto overflow-hidden">
                  <img
                    src={b.img}
                    alt={b.t}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                  />
                </div>
                <div className="p-6 sm:w-1/2 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-bold text-castro-green uppercase">{b.cat}</span>
                    <h3 className="text-lg font-bold text-castro-navy mt-1 mb-2">{b.t}</h3>
                    <p className="text-xs text-slate-500">{b.d}</p>
                  </div>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-xs font-bold text-castro-navy hover:text-castro-green mt-4"
                  >
                    <span>Leer Artículo</span>
                    <i className="fa-solid fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <div className="bg-castro-yellow py-6 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h3 className="text-xl sm:text-2xl font-black text-castro-navy">
              ¿Necesitas Ayuda Inmediata con Tu Proyecto?
            </h3>
            <p className="text-xs sm:text-sm font-semibold text-castro-navy/80">
              Habla directamente con uno de nuestros ingenieros supervisores hoy mismo.
            </p>
          </div>
          <a
            href="tel:+582125552278"
            className="bg-castro-navy hover:bg-castro-darknavy text-white font-extrabold text-sm px-8 py-3.5 rounded-xl shadow-lg transition whitespace-nowrap"
          >
            Llámanos: +58 (212) 555-CASTRO
          </a>
        </div>
      </div>
    </main>
  )
}
