import type { Metadata } from 'next'

import type { Media, Page, Post, Config } from '../payload-types'

import { mergeOpenGraph } from './mergeOpenGraph'
import { getServerSideURL } from './getURL'

const getImageURL = (image?: Media | Config['db']['defaultIDType'] | null) => {
  const serverUrl = getServerSideURL()

  let url = serverUrl + '/website-template-OG.webp'

  if (image && typeof image === 'object' && 'url' in image) {
    const ogUrl = image.sizes?.og?.url

    url = ogUrl ? serverUrl + ogUrl : serverUrl + image.url
  }

  return url
}

export const generateMeta = async (args: {
  doc: Partial<Page> | Partial<Post> | null
}): Promise<Metadata> => {
  const { doc } = args

  // Para Pages: usar la primera imagen de hero en layout, o meta.image si existe (legacy)
  // Para Posts: usar doc.meta.image
  let ogImageUrl: string | undefined
  let title = 'Construcciones Los Castros'
  let description = 'Empresa de construcción con más de 15 años de experiencia'

  if (doc) {
    if ('meta' in doc && doc.meta) {
      // Post o Page legacy
      ogImageUrl = getImageURL(doc.meta.image)
      title = doc.meta.title ? `${doc.meta.title} | Construcciones Los Castros` : title
      description = doc.meta.description || description
    } else if ('layout' in doc && doc.layout) {
      // Page nueva con blocks
      const heroBlock = doc.layout.find((b: any) => b.blockType === 'hero')
      const heroBg = heroBlock && 'backgroundImage' in heroBlock ? heroBlock.backgroundImage : undefined
      if (heroBg) {
        ogImageUrl = getImageURL(heroBg)
      }
      title = doc.title ? `${doc.title} | Construcciones Los Castros` : title
    }
  }

  return {
    description,
    openGraph: mergeOpenGraph({
      description,
      images: ogImageUrl
        ? [
            {
              url: ogImageUrl,
            },
          ]
        : undefined,
      title,
      url: Array.isArray(doc?.slug) ? doc?.slug.join('/') : '/',
    }),
    title,
  }
}
