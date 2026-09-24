import type { CollectionConfig } from 'payload'
import { anyone } from '../../access/anyone'
import { authenticated } from '../../access/authenticated'

export const Consultas: CollectionConfig = {
  slug: 'consultas',
  labels: {
    singular: 'Consulta',
    plural: 'Consultas Web',
  },
  access: {
    create: anyone,
    read: authenticated,
    update: authenticated,
    delete: authenticated,
  },
  admin: {
    useAsTitle: 'nombre',
    defaultColumns: ['nombre', 'telefono', 'servicio', 'estado', 'createdAt'],
    group: 'Gestión',
    description: 'Solicitudes y consultas recibidas desde la modal de asesoría de la web.',
  },
  timestamps: true,
  fields: [
    {
      name: 'nombre',
      type: 'text',
      label: 'Nombre Completo',
      required: true,
    },
    {
      name: 'telefono',
      type: 'text',
      label: 'Teléfono / WhatsApp',
      required: true,
    },
    {
      name: 'servicio',
      type: 'text',
      label: 'Tipo de Servicio',
      required: true,
    },
    {
      name: 'detalles',
      type: 'textarea',
      label: 'Detalles del Proyecto',
    },
    {
      name: 'estado',
      type: 'select',
      label: 'Estado de la Consulta',
      defaultValue: 'pendiente',
      options: [
        { label: '🟡 Pendiente por Contactar', value: 'pendiente' },
        { label: '🔵 Contactado', value: 'contactado' },
        { label: '🟢 Cotización Enviada', value: 'cotizado' },
        { label: '🤝 Cerrado / Ganado', value: 'ganado' },
        { label: '⚪ Descartado', value: 'descartado' },
      ],
      required: true,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'origen',
      type: 'text',
      label: 'Origen del Lead',
      defaultValue: 'Modal Asesoría Web',
      admin: {
        position: 'sidebar',
        readOnly: true,
      },
    },
    {
      name: 'notasAdmin',
      type: 'textarea',
      label: 'Notas Internas de Seguimiento',
      admin: {
        description: 'Notas del equipo comercial o de atención sobre el cliente o acuerdos.',
      },
    },
  ],
}
