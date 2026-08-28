'use client'

import { showToast } from '@/components/landing/QuoteModal'

function Logo() {
  return (
    <div className="relative w-10 h-10 flex items-center justify-center">
      <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 5 L88 27 L88 73 L50 95 L12 73 L12 27 Z" stroke="#009E49" strokeWidth="8" fill="none" />
        <path d="M50 18 L75 33 L75 67 L50 82 L25 67 L25 33 Z" stroke="#FFC700" strokeWidth="7" fill="none" />
        <path d="M35 30 L65 30 L50 70 Z" fill="#FFFFFF" />
      </svg>
    </div>
  )
}

export function CastroFooter() {
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    showToast('¡Suscripción Exitosa!', 'Te has suscrito al boletín de Los Castros.')
  }

  return (
    <footer id="contacto" className="bg-castro-darknavy text-white pt-16 pb-12 border-t border-white/10 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          <div className="lg:col-span-2 space-y-4">
            <a href="#inicio" className="flex items-center gap-3">
              <Logo />
              <span className="text-xl font-extrabold text-white">Construcciones Los Castros C.A.</span>
            </a>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Soluciones modernas de construcción, arquitectura y remodelación. Construyendo el futuro con bases
              sólidas y confianza garantizada.
            </p>
            <div className="flex items-center space-x-3 pt-2">
              <a href="#" className="w-9 h-9 rounded-lg bg-white/10 hover:bg-castro-green flex items-center justify-center text-sm transition">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-white/10 hover:bg-castro-green flex items-center justify-center text-sm transition">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-white/10 hover:bg-castro-green flex items-center justify-center text-sm transition">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-white/10 hover:bg-castro-green flex items-center justify-center text-sm transition">
                <i className="fa-brands fa-whatsapp"></i>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold text-castro-yellow uppercase tracking-wider mb-4">Empresa</h4>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li>
                <a href="#nosotros" className="hover:text-castro-green transition">
                  Sobre Nosotros
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-castro-green transition">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#proyectos" className="hover:text-castro-green transition">
                  Proyectos
                </a>
              </li>
              <li>
                <a href="#testimonios" className="hover:text-castro-green transition">
                  Testimonios
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-castro-yellow uppercase tracking-wider mb-4">Servicios</h4>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li>
                <a href="#servicios" className="hover:text-castro-green transition">
                  Remodelación Residencial
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-castro-green transition">
                  Obras Civiles
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-castro-green transition">
                  Mantenimiento Estructural
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-castro-green transition">
                  Diseño e Interiores
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-castro-yellow uppercase tracking-wider mb-4">Boletín Informativo</h4>
            <p className="text-xs text-slate-400 mb-3">Recibe consejos de remodelación y novedades de construcción.</p>
            <form onSubmit={handleSubscribe} className="space-y-2">
              <input
                type="email"
                placeholder="Tu correo electrónico"
                required
                className="w-full px-3.5 py-2.5 rounded-lg bg-white/10 border border-white/20 text-white placeholder-slate-400 text-xs focus:outline-none focus:border-castro-yellow"
              />
              <button
                type="submit"
                className="w-full bg-castro-green hover:bg-castro-greenhover text-white text-xs font-bold py-2.5 rounded-lg transition shadow cursor-pointer"
              >
                Suscribirme
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-400 gap-4">
          <p>© 2026 Construcciones Los Castros C.A. Todos los derechos reservados.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white transition">
              Política de Privacidad
            </a>
            <a href="#" className="hover:text-white transition">
              Términos de Servicio
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
