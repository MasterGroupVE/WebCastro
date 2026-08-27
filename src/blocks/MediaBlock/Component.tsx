'use client'

import Image from 'next/image'
import React from 'react'

import { cn } from '@/utilities/ui'

interface MediaBlockProps {
  className?: string
  imgClassName?: string
  caption?: string
  captionClassName?: string
  media?: {
    url: string
    alt?: string
    frameStyle?: ('none' | 'green-gold' | 'gold-green' | 'green' | 'gold') | null
    sizes?: {
      thumbnail?: { url: string }
      card?: { url: string }
    }
  }
  disableInnerContainer?: boolean
  enableGutter?: boolean
}

export const MediaBlock: React.FC<MediaBlockProps> = ({
  className,
  imgClassName,
  caption,
  captionClassName,
  media,
  disableInnerContainer,
  enableGutter = true,
}) => {
  if (!media?.url) return null

  const imageUrl = media.sizes?.card?.url || media.url
  const alt = media.alt || ''
  const frameStyle = media.frameStyle && media.frameStyle !== 'none' ? media.frameStyle : null

  return (
    <figure className={cn('my-8', disableInnerContainer ? '' : 'max-w-[48rem] mx-auto', className)}>
      <div
        className={cn(
          'relative aspect-video rounded-xl overflow-hidden',
          frameStyle && `media-frame-${frameStyle} m-3`,
          imgClassName,
        )}
      >
        <Image
          src={imageUrl}
          alt={alt}
          fill
          className="object-cover"
          sizes="100vw"
        />
      </div>
      {caption && (
        <figcaption className={cn('mt-2 text-center text-sm text-gray-600', captionClassName, enableGutter && 'mx-auto max-w-[48rem]')}>
          {caption}
        </figcaption>
      )}
    </figure>
  )
}