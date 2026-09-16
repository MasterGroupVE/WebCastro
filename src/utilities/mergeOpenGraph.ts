import type { Metadata } from 'next'
import { getServerSideURL } from './getURL'

const defaultOpenGraph: Metadata['openGraph'] = {
  type: 'website',
  description:
    'Construcciones Los Castros C.A. - Empresa líder en remodelaciones residenciales, comerciales, obras civiles y mantenimiento de estructuras en Caracas y Venezuela.',
  images: [
    {
      url: `${getServerSideURL()}/image-hero1.webp`,
    },
  ],
  siteName: 'Construcciones Los Castros C.A.',
  title: 'Construcciones Los Castros C.A. | Remodelación, Obras Civiles y Mantenimiento',
}

export const mergeOpenGraph = (og?: Metadata['openGraph']): Metadata['openGraph'] => {
  return {
    ...defaultOpenGraph,
    ...og,
    images: og?.images ? og.images : defaultOpenGraph.images,
  }
}
