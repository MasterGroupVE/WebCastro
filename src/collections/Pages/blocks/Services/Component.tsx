'use client'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import { cn } from '@/utilities/ui'

interface FrameStyle {
  frameStyle?: ('none' | 'green-gold' | 'gold-green' | 'green' | 'gold') | null
}

interface ServiceItem {
  title: string
  description?: string
  icon?: string
  iconColor?: string
  image?: ({ url: string; alt?: string }) & FrameStyle
  link?: string
}

interface ServicesBlockProps {
  block: {
    headline: string
    subheadline?: string
    iconColor?: string
    services: ServiceItem[]
    layout?: 'grid3' | 'grid2' | 'list' | 'cards' | 'numbered'
    listImage?: ({ url: string; alt?: string }) & FrameStyle
    backgroundColor?: 'white' | 'gray' | 'navy'
    ctaText?: string
    ctaLink?: string
  }
}

const MATERIAL_ICONS = new Set([
  // Construction/Architecture
  'construction', 'architecture', 'factory', 'warehouse', 'home', 'apartment', 'building', 'domain', 'location_city', 'real_estate_agent', 'roofing', 'carpenter', 'plumbing', 'electrical_services', 'hvac', 'handyman', 'landscape', 'pool_service', 'cleaning_services', 'pest_control', 'water_drop', 'water', 'dry_cleaning', 'local_fire_department', 'local_hospital', 'local_police',
  // Tools
  'build', 'settings', 'engineering', 'precision_manufacturing', 'manufacturing', 'hammer', 'wrench', 'screwdriver', 'power_tools', 'tools', 'handyman',
  // Transport
  'local_shipping', 'delivery_truck', 'truck', 'van', 'cargo', 'inventory', 'inventory_2',
  // Business
  'business', 'work', 'badge', 'verified', 'verified_user', 'shield', 'security', 'support', 'contact_support', 'customer_service', 'groups', 'people', 'team', 'supervisor_account',
  // General
  'star', 'favorite', 'thumb_up', 'check_circle', 'check', 'done', 'verified', 'award', 'military_tech', 'science', 'analytics', 'trending_up', 'show_chart', 'insights', 'monitoring', 'speed', 'flash_on', 'bolt', 'electric_bolt',
  // Communication
  'phone', 'call', 'email', 'mail', 'chat', 'message', 'contact_mail', 'contact_phone', 'videocam', 'meeting_room', 'calendar_today', 'event', 'schedule', 'access_time', 'timer', 'alarm',
  // Location
  'location_on', 'place', 'map', 'navigation', 'directions', 'my_location', 'near_me', 'pin_drop',
  // Media
  'image', 'photo', 'video', 'videocam', 'music_note', 'podcasts', 'article', 'description', 'notes',
  // Finance
  'attach_money', 'currency_exchange', 'account_balance', 'credit_card', 'receipt', 'invoice', 'receipt_long', 'calculate', 'euro', 'payments',
  // UI
  'arrow_forward', 'arrow_back', 'chevron_right', 'chevron_left', 'expand_more', 'expand_less', 'menu', 'close', 'more_vert', 'more_horiz', 'search', 'filter_list', 'sort', 'tune', 'edit', 'create', 'add', 'remove', 'delete', 'save', 'download', 'upload', 'cloud', 'cloud_upload', 'cloud_download', 'sync', 'refresh', 'autorenew', 'cached', 'history', 'restore', 'undo', 'redo',
])

function MaterialIcon({ name, size = 24, color, className = '' }: { 
  name: string
  size?: number
  color?: string
  className?: string
}) {
  const normalized = name.trim().toLowerCase().replace(/[^a-z0-9_]/g, '_')
  const isValid = MATERIAL_ICONS.has(normalized)
  
  return (
    <span
      className={cn('material-icons-outlined inline-flex items-center justify-center', className)}
      style={{ 
        fontSize: size, 
        width: size, 
        height: size,
        color,
        fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24"
      }}
      title={isValid ? name : `Icono no disponible: ${name}`}
    >
      {isValid ? normalized : 'help_outline'}
    </span>
  )
}

interface FrameStyle {
  frameStyle?: ('none' | 'green-gold' | 'gold-green' | 'green' | 'gold') | null
}

interface ServiceItem {
  title: string
  description?: string
  icon?: string
  iconColor?: string
  image?: ({ url: string; alt?: string }) & FrameStyle
  link?: string
}

interface ServicesBlockProps {
  block: {
    headline: string
    subheadline?: string
    iconColor?: string
    services: ServiceItem[]
    layout?: 'grid3' | 'grid2' | 'list' | 'cards' | 'numbered'
    listImage?: ({ url: string; alt?: string }) & FrameStyle
    backgroundColor?: 'white' | 'gray' | 'navy'
    ctaText?: string
    ctaLink?: string
  }
}

export const ServicesBlockComponent = ({ block }: ServicesBlockProps) => {
  const {
    headline,
    subheadline,
    services,
    layout = 'grid3',
    listImage,
    backgroundColor = 'gray',
    iconColor: blockIconColor = '#092F56',
    ctaText,
    ctaLink,
  } = block

  const isDark = backgroundColor === 'navy'
  const containerBg = { white: 'bg-white', gray: 'bg-gray-50', navy: 'bg-brand-navy' }[backgroundColor]
  const textColor = { white: 'text-brand-navy', gray: 'text-brand-navy', navy: 'text-white' }[backgroundColor]
  const mutedColor = { white: 'text-gray-600', gray: 'text-gray-600', navy: 'text-white/70' }[backgroundColor]
  const cardBg = { white: 'bg-white', gray: 'bg-white', navy: 'bg-brand-navy/30' }[backgroundColor]
  const borderColor = { white: 'border-gray-200', gray: 'border-gray-200', navy: 'border-white/10' }[backgroundColor]

  const gridCols = {
    grid3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    grid2: 'grid-cols-1 md:grid-cols-2',
    list: 'grid-cols-1',
    cards: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    numbered: 'grid-cols-1',
  }

  if (layout === 'numbered') {
    const listFrame =
      listImage?.frameStyle && listImage.frameStyle !== 'none' ? listImage.frameStyle : null

    return (
      <section className={cn('py-16 md:py-24 lg:py-32', containerBg)}>
        <div className="container">
          <div className="max-w-3xl mb-14">
            {subheadline && (
              <p className="font-display text-brand-gold font-medium mb-2 text-lg tracking-wide uppercase">
                {subheadline}
              </p>
            )}
            <h2 className={cn('font-display text-3xl md:text-4xl font-bold', textColor)}>
              {headline}
            </h2>
          </div>

          <div className={cn('grid gap-12 items-center', listImage ? 'lg:grid-cols-2' : '')}>
            <ol className="divide-y divide-gray-200">
              {services.map((service, index) => {
                const row = (
                  <>
                    <span className="font-display text-2xl md:text-3xl font-bold text-brand-gold w-12 flex-shrink-0">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="flex-1">
                      <span className={cn('block font-display text-xl font-bold mb-1', textColor)}>
                        {service.title}
                      </span>
                      {service.description && (
                        <span className={cn('block font-body leading-relaxed', mutedColor)}>
                          {service.description}
                        </span>
                      )}
                    </span>
                    {service.link && (
                      <span
                        aria-hidden="true"
                        className={cn(
                          'material-icons-outlined self-center transition-transform group-hover:translate-x-1',
                          textColor,
                        )}
                      >
                        arrow_forward
                      </span>
                    )}
                  </>
                )

                const rowClass =
                  'group flex items-start gap-5 py-5 transition-colors ' +
                  (service.link ? 'cursor-pointer' : '')

                return (
                  <li key={index}>
                    {service.link ? (
                      <Link href={service.link} className={rowClass}>
                        {row}
                      </Link>
                    ) : (
                      <div className={rowClass}>{row}</div>
                    )}
                  </li>
                )
              })}
            </ol>

            {listImage && (
              <div className="relative">
                <div
                  className={cn(
                    'aspect-[4/3] rounded-2xl overflow-hidden',
                    listFrame ? [`media-frame-${listFrame}`, 'm-3'] : 'shadow-2xl',
                  )}
                >
                  <Image
                    src={listImage.url}
                    alt={listImage.alt || headline}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>
            )}
          </div>

          {ctaText && ctaLink && (
            <div className="text-center mt-14">
              <Link
                href={ctaLink}
                className="inline-flex items-center gap-2 px-8 py-4 bg-brand-gold text-brand-navy font-body font-semibold rounded-lg hover:bg-yellow-300 transition-colors"
              >
                {ctaText}
                <span aria-hidden="true" className="material-icons-outlined text-xl leading-none">
                  arrow_forward
                </span>
              </Link>
            </div>
          )}
        </div>
      </section>
    )
  }

  return (
    <section className={cn('py-16 md:py-24 lg:py-32', containerBg)}>
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          {subheadline && (
            <p className="font-display text-brand-gold font-medium mb-2 text-lg tracking-wide uppercase">
              {subheadline}
            </p>
          )}
          <h2 className={cn('font-display text-3xl md:text-4xl font-bold mb-4', textColor)}>
            {headline}
          </h2>
        </div>

        <div className={cn('grid gap-8', gridCols[layout])}>
          {services.map((service, index) => {
            const hasImage = layout === 'cards' && service.image
            const serviceIconColor = service.iconColor || blockIconColor

            if (layout === 'list') {
              return (
                <Link
                  key={index}
                  href={service.link || '#'}
                  className={cn(
                    'flex items-start gap-6 p-6 rounded-xl transition-all hover:shadow-lg',
                    cardBg,
                    'border',
                    borderColor
                  )}
                >
                  <div className={cn('w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0', isDark ? 'bg-brand-gold/20' : 'bg-brand-navy/10')}>
                    {service.icon && (
                      <MaterialIcon name={service.icon} size={24} color={service.iconColor || blockIconColor} />
                    )}
                  </div>
                  <div className="flex-1">
                    <h3 className={cn('font-display text-xl font-bold mb-2', textColor)}>
                      {service.title}
                    </h3>
                    {service.description && (
                      <p className={cn('font-body leading-relaxed', mutedColor)}>
                        {service.description}
                      </p>
                    )}
                  </div>
                </Link>
              )
            }

            if (layout === 'cards' && hasImage) {
              return (
                <Link
                  key={index}
                  href={service.link || '#'}
                  className={cn('group flex flex-col rounded-xl overflow-hidden transition-all hover:shadow-xl', cardBg, 'border', borderColor)}
                >
                  <div
                    className={cn(
                      'relative aspect-[16/10] overflow-hidden',
                      service.image!.frameStyle &&
                        service.image!.frameStyle !== 'none' && [
                          `media-frame-${service.image!.frameStyle}`,
                          'm-3',
                        ],
                    )}
                  >
                    <Image
                      src={service.image!.url}
                      alt={service.image!.alt || service.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className={cn('font-display text-xl font-bold mb-2', textColor)}>
                      {service.title}
                    </h3>
                    {service.description && (
                      <p className={cn('font-body leading-relaxed mb-4 flex-1', mutedColor)}>
                        {service.description}
                      </p>
                    )}
                    {service.link && (
                      <span className={cn('inline-flex items-center gap-1 font-body font-medium text-sm transition-colors', isDark ? 'text-brand-gold' : 'text-brand-navy')}>
                        Ver más
                        <MaterialIcon name="arrow_forward" size={16} color={service.iconColor || blockIconColor} />
                      </span>
                    )}
                  </div>
                </Link>
              )
            }

            return (
              <div
                key={index}
                className={cn('p-8 rounded-xl text-center transition-all hover:shadow-lg', cardBg, 'border', borderColor)}
              >
                {service.icon && (
                  <div className={cn('w-16 h-16 mx-auto rounded-xl flex items-center justify-center mb-6', isDark ? 'bg-brand-gold/20' : 'bg-brand-navy/10')}>
                    <MaterialIcon name={service.icon} size={32} color={service.iconColor || blockIconColor} />
                  </div>
                )}
                {service.image && !hasImage && (
                  <div className="w-16 h-16 mx-auto rounded-xl mb-6 overflow-hidden">
                    <Image
                      src={service.image.url}
                      alt={service.image.alt || service.title}
                      width={64}
                      height={64}
                      className="object-cover"
                    />
                  </div>
                )}
                <h3 className={cn('font-display text-xl font-bold mb-3', textColor)}>
                  {service.title}
                </h3>
                {service.description && (
                  <p className={cn('font-body leading-relaxed', mutedColor)}>
                    {service.description}
                  </p>
                )}
                {service.link && (
                  <Link
                    href={service.link}
                    className={cn('inline-flex items-center gap-1 mt-4 font-body font-medium text-sm transition-colors', isDark ? 'text-brand-gold' : 'text-brand-navy')}
                  >
                    Ver más
                    <MaterialIcon name="arrow_forward" size={16} color={service.iconColor || blockIconColor} />
                  </Link>
                )}
              </div>
            )
          })}
        </div>

        {ctaText && ctaLink && (
          <div className="text-center mt-16">
            <Link
              href={ctaLink}
              className="inline-flex items-center gap-2 px-8 py-4 bg-brand-gold text-brand-navy font-body font-semibold rounded-lg hover:bg-yellow-300 transition-colors"
            >
              {ctaText}
              <MaterialIcon name="arrow_forward" size={18} color="#092F56" />
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}