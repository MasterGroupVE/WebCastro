'use client'

import React, { useEffect, useState } from 'react'

import { cn } from '@/utilities/ui'
import { Card, type CardPostData } from '@/components/Card'

interface PostsGridBlockProps {
  block: {
    headline: string
    subheadline?: string
    limit?: number
    backgroundColor?: 'white' | 'gray' | 'navy'
    ctaText?: string
    ctaLink?: string
  }
}

const bgClasses = {
  white: 'bg-white',
  gray: 'bg-gray-50',
  navy: 'bg-brand-navy',
}

const textColorClasses = {
  white: 'text-brand-navy',
  gray: 'text-brand-navy',
  navy: 'text-white',
}

export const PostsGridBlockComponent = ({ block }: PostsGridBlockProps) => {
  const { headline, subheadline, limit = 3, backgroundColor = 'white', ctaText, ctaLink } = block

  const [posts, setPosts] = useState<CardPostData[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let active = true

    fetch(`/api/posts?limit=${limit}&sort=-publishedAt&depth=1&draft=false`)
      .then((res) => (res.ok ? res.json() : Promise.reject(new Error('Error al cargar posts'))))
      .then((data) => {
        if (active) setPosts(data?.docs || [])
      })
      .catch(() => {
        if (active) setPosts([])
      })
      .finally(() => {
        if (active) setLoading(false)
      })

    return () => {
      active = false
    }
  }, [limit])

  const isDark = backgroundColor === 'navy'
  const textColor = textColorClasses[backgroundColor]

  return (
    <section className={cn('py-16 md:py-24', bgClasses[backgroundColor])}>
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-14">
          {subheadline && (
            <p className="font-display text-brand-gold font-medium mb-2 text-lg tracking-wide uppercase">
              {subheadline}
            </p>
          )}
          <h2 className={cn('font-display text-3xl md:text-4xl font-bold', textColor)}>
            {headline}
          </h2>
        </div>

        {loading ? (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: limit }).map((_, i) => (
              <div key={i} className="rounded-lg overflow-hidden border border-gray-200">
                <div className="aspect-[4/3] bg-gray-100 animate-pulse" />
                <div className="p-4 space-y-2">
                  <div className="h-5 bg-gray-100 rounded animate-pulse w-3/4" />
                  <div className="h-4 bg-gray-100 rounded animate-pulse" />
                  <div className="h-4 bg-gray-100 rounded animate-pulse w-2/3" />
                </div>
              </div>
            ))}
          </div>
        ) : posts.length === 0 ? (
          <p className={cn('text-center font-body', textColor)}>
            Aún no hay publicaciones. ¡Crea la primera desde el panel!
          </p>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post, index) => (
              <Card key={index} doc={post} relationTo="posts" showCategories />
            ))}
          </div>
        )}

        {ctaText && ctaLink && (
          <div className="text-center mt-14">
            <a
              href={ctaLink}
              className="inline-flex items-center gap-2 px-8 py-4 bg-brand-gold text-brand-navy font-body font-semibold rounded-lg hover:bg-yellow-300 transition-colors"
            >
              {ctaText}
              <span aria-hidden="true" className="material-icons-outlined text-xl leading-none">
                arrow_forward
              </span>
            </a>
          </div>
        )}
      </div>
    </section>
  )
}
