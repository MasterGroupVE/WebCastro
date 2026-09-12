'use client'

import { useEffect, useState } from 'react'

export function QuoteModal() {
  const [open, setOpen] = useState(false)
  const [toast, setToast] = useState<{ title: string; msg: string } | null>(null)

  useEffect(() => {
    const openModal = () => setOpen(true)
    const showToast = (e: Event) => {
      const detail = (e as CustomEvent<{ title: string; msg: string }>).detail
      setToast(detail ?? { title: 'Listo', msg: '' })
      window.setTimeout(() => setToast(null), 4000)
    }
    window.addEventListener('open-quote-modal', openModal)
    window.addEventListener('show-toast', showToast as EventListener)
    return () => {
      window.removeEventListener('open-quote-modal', openModal)
      window.removeEventListener('show-toast', showToast as EventListener)
    }
  }, [])

  const closeModal = () => setOpen(false)

  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)

    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get('name'),
      phone: formData.get('phone'),
      service: formData.get('service'),
      details: formData.get('details'),
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setOpen(false)
        setToast({
          title: '¡Solicitud Enviada!',
          msg: 'Un representante de Los Castros te contactará pronto.',
        })
        window.setTimeout(() => setToast(null), 4000)
        e.currentTarget.reset()
      } else {
        setToast({
          title: 'Error',
          msg: 'Hubo un problema enviando tu solicitud. Por favor intenta de nuevo.',
        })
        window.setTimeout(() => setToast(null), 4000)
      }
    } catch (error) {
      setToast({
        title: 'Error',
        msg: 'Hubo un problema de red. Por favor intenta de nuevo.',
      })
      window.setTimeout(() => setToast(null), 4000)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <div
        className={`fixed inset-0 z-50 ${open ? 'flex' : 'hidden'} bg-black/60 backdrop-blur-xs items-center justify-center p-4`}
      >
        <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 relative shadow-2xl">
          <button
            type="button"
            onClick={closeModal}
            className="absolute top-4 right-4 text-slate-400 hover:text-castro-navy text-xl p-2 cursor-pointer"
            aria-label="Cerrar"
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
          <div className="mb-6">
            <div className="inline-block px-3 py-1 rounded-full bg-emerald-100 text-castro-green text-xs font-bold mb-2">
              Respuesta en menos de 24 horas
            </div>
            <h3 className="text-2xl font-extrabold text-castro-navy">Solicita Tu Consulta Gratuita</h3>
            <p className="text-xs text-slate-500">
              Déjanos los datos de tu proyecto y nuestro equipo te contactará de inmediato.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-castro-navy mb-1">Nombre Completo</label>
              <input
                name="name"
                type="text"
                required
                placeholder="Ej: Juan Pérez"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-castro-green focus:outline-none"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-castro-navy mb-1">Teléfono / WhatsApp</label>
                <input
                  name="phone"
                  type="tel"
                  required
                  placeholder="+58 412 0000000"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-castro-green focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-castro-navy mb-1">Tipo de Servicio</label>
                <select name="service" className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-castro-green focus:outline-none">
                  <option value="Remodelación Residencial">Remodelación Residencial</option>
                  <option value="Obra Civil / Construcción">Obra Civil / Construcción</option>
                  <option value="Mantenimiento Estructural">Mantenimiento Estructural</option>
                  <option value="Otro">Otro</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block text-xs font-bold text-castro-navy mb-1">Detalles del Proyecto</label>
              <textarea
                name="details"
                rows={3}
                placeholder="Describe brevemente lo que deseas realizar..."
                className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-castro-green focus:outline-none"
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-castro-yellow hover:bg-castro-yellowhover disabled:opacity-50 text-castro-navy font-extrabold py-3.5 rounded-xl transition shadow-lg text-sm cursor-pointer"
            >
              {isLoading ? 'Enviando...' : 'Enviar Solicitud'}
            </button>
          </form>
        </div>
      </div>

      <div
        className={`fixed bottom-5 right-5 z-50 ${toast ? 'flex' : 'hidden'} bg-castro-navy text-white px-5 py-4 rounded-2xl shadow-2xl border border-castro-yellow items-center gap-3 transition-all duration-300`}
      >
        <div className="w-8 h-8 rounded-full bg-castro-green text-white flex items-center justify-center font-bold">
          <i className="fa-solid fa-circle-check"></i>
        </div>
        <div>
          <p className="text-sm font-bold text-castro-yellow">{toast?.title}</p>
          <p className="text-xs text-slate-200">{toast?.msg}</p>
        </div>
      </div>
    </>
  )
}

export function openQuoteModal() {
  if (typeof window !== 'undefined') window.dispatchEvent(new Event('open-quote-modal'))
}

export function showToast(title: string, msg: string) {
  if (typeof window !== 'undefined')
    window.dispatchEvent(new CustomEvent('show-toast', { detail: { title, msg } }))
}
