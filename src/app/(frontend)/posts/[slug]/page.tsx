import type { Metadata } from 'next'

import { PayloadRedirects } from '@/components/PayloadRedirects'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { draftMode } from 'next/headers'
import React, { cache } from 'react'
import Image from 'next/image'
import RichText from '@/components/RichText'
import Link from 'next/link'

import type { Post } from '@/payload-types'

import { generateMeta } from '@/utilities/generateMeta'
import PageClient from './page.client'
import { LivePreviewListener } from '@/components/LivePreviewListener'

export async function generateStaticParams() {
  const payload = await getPayload({ config: configPromise })
  const posts = await payload.find({
    collection: 'posts',
    draft: false,
    limit: 1000,
    overrideAccess: false,
    pagination: false,
    select: {
      slug: true,
    },
  })

  const params = posts.docs.map(({ slug }) => {
    return { slug }
  })

  return params
}

type Args = {
  params: Promise<{
    slug?: string
  }>
}

export default async function Post({ params: paramsPromise }: Args) {
  const { isEnabled: draft } = await draftMode()
  const { slug = '' } = await paramsPromise
  const decodedSlug = decodeURIComponent(slug)
  const url = '/posts/' + decodedSlug
  const post = await queryPostBySlug({ slug: decodedSlug })

  if (!post) return <PayloadRedirects url={url} />

  return (
    <article className="pt-16 pb-16">
      <PageClient />
      <PayloadRedirects disableNotFound url={url} />
      {draft && <LivePreviewListener />}

      {post.heroImage && typeof post.heroImage === 'object' && 'url' in post.heroImage && post.heroImage.url && (
        <header className="mb-12">
          <div className="container">
            <Image
              src={post.heroImage.url}
              alt={post.heroImage.alt || post.title}
              fill
              className="rounded-xl object-cover aspect-video w-full max-h-[50vh]"
              priority
              sizes="100vw"
            />
          </div>
        </header>
      )}

      <div className="flex flex-col items-center gap-4 pt-8">
        <div className="container">
          <header className="max-w-[48rem] mx-auto mb-8 text-center">
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-brand-navy mb-4">
              {post.title}
            </h1>
            {post.publishedAt && (
              <time className="font-body text-brand-navy/60">
                {new Date(post.publishedAt).toLocaleDateString('es-ES', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
            )}
          </header>

          <RichText className="max-w-[48rem] mx-auto" data={post.content} enableGutter={false} />

          {post.relatedPosts && post.relatedPosts.length > 0 && (
            <section className="mt-16 max-w-[48rem] mx-auto">
              <h2 className="font-display text-2xl font-bold text-brand-navy mb-8 text-center">
                Artículos Relacionados
              </h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {post.relatedPosts
                  .filter((p): p is Post => typeof p === 'object' && p !== null)
                  .map((relatedPost) => (
                    <Link
                      key={relatedPost.id}
                      href={`/posts/${relatedPost.slug}`}
                      className="group block p-6 bg-white rounded-xl border border-gray-200 hover:shadow-lg hover:border-brand-gold transition-all"
                    >
                      {relatedPost.heroImage && typeof relatedPost.heroImage === 'object' && 'url' in relatedPost.heroImage && relatedPost.heroImage.url && (
                        <div className="relative aspect-video mb-4 rounded-lg overflow-hidden">
                          <Image
                            src={relatedPost.heroImage.url}
                            alt={relatedPost.heroImage.alt || relatedPost.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          />
                        </div>
                      )}
                      <h3 className="font-display text-lg font-semibold text-brand-navy group-hover:text-brand-green transition-colors">
                        {relatedPost.title}
                      </h3>
                    </Link>
                  ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </article>
  )
}

export async function generateMetadata({ params: paramsPromise }: Args): Promise<Metadata> {
  const { slug = '' } = await paramsPromise
  const decodedSlug = decodeURIComponent(slug)
  const post = await queryPostBySlug({ slug: decodedSlug })

  return generateMeta({ doc: post })
}

const queryPostBySlug = cache(async ({ slug }: { slug: string }) => {
  const { isEnabled: draft } = await draftMode()

  const payload = await getPayload({ config: configPromise })

  const result = await payload.find({
    collection: 'posts',
    draft,
    limit: 1,
    overrideAccess: draft,
    pagination: false,
    where: {
      slug: {
        equals: slug,
      },
    },
  })

  return result.docs?.[0] || null
})