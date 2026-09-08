import { CollectionConfig } from 'payload'

import { HeroBlock } from './blocks/Hero'
import { AboutUsBlock } from './blocks/AboutUs'
import { ServicesBlock } from './blocks/Services'
import { ProcessBlock } from './blocks/Process'
import { ColumnBlock } from './blocks/Column/config'
import { TestimonialsBlock } from './blocks/Testimonials'
import { FaqBlock } from './blocks/Faq'
import { CtaBlock } from './blocks/Cta/config'
import { PortfolioGridBlock } from './blocks/PortfolioGrid/config'
import { MissionVisionBlock } from './blocks/MissionVision/config'
import { OrgChartBlock } from './blocks/OrgChart/config'
import { ClientLogosBlock } from './blocks/ClientLogos/config'
import { LegalInfoBlock } from './blocks/LegalInfo/config'

const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', 'updatedAt'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Título de la Página',
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'layout',
      label: 'Estructura de Bloques de la Página',
      type: 'blocks',
      blocks: [
        HeroBlock,
        AboutUsBlock,
        ServicesBlock,
        ProcessBlock,
        ColumnBlock,
        TestimonialsBlock,
        FaqBlock,
        CtaBlock,
        PortfolioGridBlock,
        MissionVisionBlock,
        OrgChartBlock,
        ClientLogosBlock,
        LegalInfoBlock,
      ],
    },
  ],
}

export default Pages