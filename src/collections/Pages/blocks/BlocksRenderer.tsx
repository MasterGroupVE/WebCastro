'use client'

import React from 'react'

import { HeroBlockComponent } from './Hero/Component'
import { AboutUsBlockComponent } from './AboutUs/Component'
import { ServicesBlockComponent } from './Services/Component'
import { ProjectsBlockComponent } from './Projects/Component'
import { ContactBlockComponent } from './Contact/Component'
import { SliderBlockComponent } from './Slider/Component'
import { TestimonialsBlockComponent } from './Testimonials/Component'
import { CtaBannerBlockComponent } from './CtaBanner/Component'
import { FeaturesBlockComponent } from './Features/Component'
import { FaqBlockComponent } from './Faq/Component'
import { PostsGridBlockComponent } from './PostsGrid/Component'

const blockComponents: Record<string, React.FC<any>> = {
  hero: HeroBlockComponent,
  aboutUs: AboutUsBlockComponent,
  services: ServicesBlockComponent,
  projects: ProjectsBlockComponent,
  contact: ContactBlockComponent,
  slider: SliderBlockComponent,
  testimonials: TestimonialsBlockComponent,
  ctaBanner: CtaBannerBlockComponent,
  features: FeaturesBlockComponent,
  faq: FaqBlockComponent,
  postsGrid: PostsGridBlockComponent,
}

interface BlocksRendererProps {
  blocks: any[]
}

export const BlocksRenderer = ({ blocks }: BlocksRendererProps) => {
  if (!blocks?.length) return null

  return (
    <>
      {blocks.map((block, index) => {
        const Component = blockComponents[block.blockType]
        if (!Component) {
          console.warn(`No component found for block type: ${block.blockType}`)
          return null
        }
        return <Component key={index} block={block} />
      })}
    </>
  )
}