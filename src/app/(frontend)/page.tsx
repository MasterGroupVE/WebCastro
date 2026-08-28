import type { Metadata } from 'next'
import { PayloadRedirects } from '@/components/PayloadRedirects'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { draftMode } from 'next/headers'
import React, { cache } from 'react'
import { homeStatic } from '@/endpoints/seed/home-static'
import { BlocksRenderer } from '@/collections/Pages/blocks/BlocksRenderer'
import { generateMeta } from '@/utilities/generateMeta'
import PageClient from './[slug]/page.client'
import { LivePreviewListener } from '@/components/LivePreviewListener'

export default async function Page() {
  const { isEnabled: draft } = await draftMode()
  const page = await queryHomePage(draft)

  const layout = page?.layout || homeStatic.layout || []

  return (
    <article className="min-h-screen">
      <PageClient />
      <PayloadRedirects disableNotFound url="/" />
      {draft && <LivePreviewListener />}
      <BlocksRenderer blocks={layout} />
    </article>
  )
}

export async function generateMetadata(): Promise<Metadata> {
  const { isEnabled: draft } = await draftMode()
  const page = await queryHomePage(draft)

  return generateMeta({ doc: page || homeStatic })
}

const queryHomePage = cache(async (draft: boolean) => {
  try {
    const payload = await getPayload({ config: configPromise })
    const result = await payload.find({
      collection: 'pages',
      draft,
      limit: 1,
      pagination: false,
      overrideAccess: draft,
      where: {
        slug: {
          equals: 'home',
        },
      },
    })
    return result.docs?.[0] || null
  } catch (e) {
    console.error('Error fetching home page:', e)
    return null
  }
})
