'use client'

import React from 'react'

import { HeroBlockComponent } from './Hero/Component'
import { AboutUsBlockComponent } from './AboutUs/Component'
import { ServicesBlockComponent } from './Services/Component'
import { ProcessBlockComponent } from './Process/Component'
import { ProjectsBlockComponent } from './Projects/Component'
import { ContactBlockComponent } from './Contact/Component'
import { SliderBlockComponent } from './Slider/Component'
import { TestimonialsBlockComponent } from './Testimonials/Component'
import { CtaBannerBlockComponent } from './CtaBanner/Component'
import { FeaturesBlockComponent } from './Features/Component'
import { FaqBlockComponent } from './Faq/Component'
import { PostsGridBlockComponent } from './PostsGrid/Component'
import { ColumnBlockComponent } from './Column/Component'
import { PortfolioGridBlockComponent } from './PortfolioGrid/Component'
import { MissionVisionBlockComponent } from './MissionVision/Component'
import { OrgChartBlockComponent } from './OrgChart/Component'
import { ClientLogosBlockComponent } from './ClientLogos/Component'
import { LegalInfoBlockComponent } from './LegalInfo/Component'

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
  column: ColumnBlockComponent,
  portfolioGrid: PortfolioGridBlockComponent,
  missionVision: MissionVisionBlockComponent,
  orgChart: OrgChartBlockComponent,
  clientLogos: ClientLogosBlockComponent,
  legalInfo: LegalInfoBlockComponent,
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