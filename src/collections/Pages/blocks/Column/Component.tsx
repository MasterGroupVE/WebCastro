'use client'

import React from 'react'

import { cn } from '@/utilities/ui'

type ColumnContent = {
  contentType: 'block' | 'text' | 'image'
  blockType?: string
  headline?: string
  subheadline?: string
  image?: { url: string; alt?: string }
}

// Importamos los componentes de los bloques existentes usando rutas relativas
// Column está en src/collections/Pages/blocks/Column/, así que subimos un nivel a blocks/
import { HeroBlockComponent } from '../Hero/Component'
import { AboutUsBlockComponent } from '../AboutUs/Component'
import { ServicesBlockComponent } from '../Services/Component'
import { ProcessBlockComponent } from '../Process/Component'
import { ProjectsBlockComponent } from '../Projects/Component'
import { ContactBlockComponent } from '../Contact/Component'
import { SliderBlockComponent } from '../Slider/Component'
import { TestimonialsBlockComponent } from '../Testimonials/Component'
import { CtaBannerBlockComponent } from '../CtaBanner/Component'
import { FeaturesBlockComponent } from '../Features/Component'
import { FaqBlockComponent } from '../Faq/Component'
import { PostsGridBlockComponent } from '../PostsGrid/Component'

const blockComponents: Record<string, React.FC<any>> = {
  hero: HeroBlockComponent,
  aboutUs: AboutUsBlockComponent,
  services: ServicesBlockComponent,
  process: ProcessBlockComponent,
  projects: ProjectsBlockComponent,
  contact: ContactBlockComponent,
  slider: SliderBlockComponent,
  testimonials: TestimonialsBlockComponent,
  ctaBanner: CtaBannerBlockComponent,
  features: FeaturesBlockComponent,
  faq: FaqBlockComponent,
  postsGrid: PostsGridBlockComponent,
}

interface ColumnBlockProps {
  block: {
    columnCount: string
    columns: ColumnContent[]
  }
}

const getColumnClasses = (index: number, columnCount: string) => {
  const cols = {
    '1': 'col-span-full',
    '2': 'col-span-2',
    '3': 'col-span-3',
    '4': 'col-span-4',
  }
  return cols[columnCount as keyof typeof cols] || 'col-span-full'
}

export const ColumnBlockComponent = ({ block }: ColumnBlockProps) => {
  const { columnCount, columns } = block
  const colCount = parseInt(columnCount, 10) || 1

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {columns.map((column, columnIndex) => {
        const contentType = column.contentType || 'block'

        // Si es contenido de tipo bloque, renderizar el bloque seleccionado
        if (contentType === 'block' && column.blockType) {
          const BlockComponent = blockComponents[column.blockType]

          if (!BlockComponent) {
            return (
              <div
                key={columnIndex}
                className={cn('p-6 border rounded-lg', getColumnClasses(columnIndex, columnCount))}
              >
                <p className="text-red-500">Bloque no encontrado: {column.blockType}</p>
              </div>
            )
          }

          // Renderizar el bloque con los datos de la columna
          return (
            <BlockComponent
              key={columnIndex}
              block={column}
              columnCount={columnCount}
              columnIndex={columnIndex}
            />
          )
        }

        if (contentType === 'text') {
          return (
            <div
              key={columnIndex}
              className={cn(
                'p-6 border rounded-lg bg-white',
                getColumnClasses(columnIndex, columnCount),
              )}
            >
              <h3 className="font-display text-xl font-bold mb-2">{column.headline || ''}</h3>
              <div
                dangerouslySetInnerHTML={{ __html: column.subheadline || '' }}
                className="font-body text-gray-600 leading-relaxed max-w prose"
              />
            </div>
          )
        }

        if (contentType === 'image') {
          return (
            <div
              key={columnIndex}
              className={cn('p-6 border rounded-lg bg-gray-50', getColumnClasses(columnIndex, columnCount))}
            >
              {column.image && (
                <img
                  src={column.image.url}
                  alt={column.image.alt || ''}
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />
              )}
            </div>
          )
        }

        // Fallback por defecto
        return (
          <div
            key={columnIndex}
            className={cn('p-6 border rounded-lg', getColumnClasses(columnIndex, columnCount))}
          >
            <p className="text-gray-600">Contenido no especificado</p>
          </div>
        )
      })}
    </div>
  )
}