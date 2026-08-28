'use client'

import React from 'react'
import Link from 'next/link'
import { cn } from '@/utilities/ui'

interface BlogPostItem {
  title: string
  category?: string
  description?: string
  image?: any
  link?: string
}

interface PostsGridBlockProps {
  block: {
    badge?: string
    headline?: string
    subheadline?: string
    customPosts?: BlogPostItem[]
  }
}

const defaultPosts: BlogPostItem[] = [
  {
    image: { url: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=600&q=80' },
    category: 'Mantenimiento',
    title: 'Claves para Elegir los Mejores Materiales de Obra',
    description: 'Descubre qué considerar al comprar griferías, porcelanatos y aislamiento térmico.',
    link: '/posts',
  },
  {
    image: { url: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600&q=80' },
    category: 'Tendencias',
    title: 'Cómo Maximizar la Iluminación Natural en Tu Hogar',
    description: 'Estrategias arquitectónicas para aprovechar la luz y reducir el consumo eléctrico.',
    link: '/posts',
  },
]

export const PostsGridBlockComponent: React.FC<PostsGridBlockProps> = ({ block }) => {
  const {
    badge = 'Artículos y Consejos',
    headline = 'Blog de Innovación y Remodelaciones',
    subheadline,
    customPosts = defaultPosts,
  } = block

  const postList = customPosts?.length ? customPosts : defaultPosts

  return (
    <section id="blog" className="py-20 bg-white font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          {badge && (
            <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-castro-green mb-2">
              <span className="w-2 h-2 rounded-full bg-castro-green"></span>
              <span>{badge}</span>
            </div>
          )}
          <h2 className="text-3xl sm:text-4xl font-extrabold text-castro-navy tracking-tight">
            {headline}
          </h2>
          {subheadline && <p className="text-slate-600 text-sm mt-3">{subheadline}</p>}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {postList.map((b, idx) => {
            const imgUrl =
              typeof b.image === 'object' && b.image?.url
                ? b.image.url
                : typeof b.image === 'string'
                ? b.image
                : defaultPosts[idx % defaultPosts.length]?.image?.url || ''

            return (
              <div
                key={idx}
                className="bg-castro-lightbg rounded-2xl overflow-hidden border border-slate-200 flex flex-col sm:flex-row group"
              >
                <div className="sm:w-1/2 h-52 sm:h-auto overflow-hidden">
                  <img
                    src={imgUrl}
                    alt={b.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                  />
                </div>
                <div className="p-6 sm:w-1/2 flex flex-col justify-between">
                  <div>
                    {b.category && (
                      <span className="text-xs font-bold text-castro-green uppercase">
                        {b.category}
                      </span>
                    )}
                    <h3 className="text-lg font-bold text-castro-navy mt-1 mb-2">{b.title}</h3>
                    {b.description && <p className="text-xs text-slate-500">{b.description}</p>}
                  </div>
                  <Link
                    href={b.link || '/posts'}
                    className="inline-flex items-center gap-2 text-xs font-bold text-castro-navy hover:text-castro-green mt-4"
                  >
                    <span>Leer Artículo</span>
                    <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
