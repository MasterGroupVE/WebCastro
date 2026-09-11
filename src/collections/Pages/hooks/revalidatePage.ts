import type { CollectionAfterChangeHook, CollectionAfterDeleteHook } from 'payload'

import { revalidatePath, revalidateTag } from 'next/cache'

import type { Page } from '../../../payload-types'

export const revalidatePage: CollectionAfterChangeHook<Page> = ({
  doc,
  previousDoc,
  req: { payload, context },
}) => {
  if (!context.disableRevalidate) {
    const status = (doc as any)._status
    const prevStatus = (previousDoc as any)?._status

    // When drafts are not enabled, status is undefined. In that case or when published, revalidate.
    if (!status || status === 'published') {
      const path = doc.slug === 'home' ? '/' : `/${doc.slug}`

      payload.logger.info(`Revalidating page at path: ${path}`)

      revalidatePath(path)
      revalidatePath('/', 'layout')
      try {
        revalidateTag('pages-sitemap', 'max')
      } catch (err) {
        // ignore sitemap tag errors if not supported
      }
    }

    // If the page was previously published and now unpublished
    if (prevStatus === 'published' && status !== 'published') {
      const oldPath = previousDoc?.slug === 'home' ? '/' : `/${previousDoc?.slug}`

      payload.logger.info(`Revalidating old page at path: ${oldPath}`)

      revalidatePath(oldPath)
      revalidatePath('/', 'layout')
      try {
        revalidateTag('pages-sitemap', 'max')
      } catch (err) {
        // ignore
      }
    }
  }
  return doc
}

export const revalidateDelete: CollectionAfterDeleteHook<Page> = ({ doc, req: { context } }) => {
  if (!context.disableRevalidate) {
    const path = doc?.slug === 'home' ? '/' : `/${doc?.slug}`
    revalidatePath(path)
    revalidatePath('/', 'layout')
    try {
      revalidateTag('pages-sitemap', 'max')
    } catch (err) {
      // ignore
    }
  }

  return doc
}

