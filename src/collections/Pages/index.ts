import { CollectionConfig } from 'payload'

import { HeroBlock } from './blocks/Hero'
import { AboutUsBlock } from './blocks/AboutUs'
import { ServicesBlock } from './blocks/Services'
import { ProcessBlock } from './blocks/Process'
import { ColumnBlock } from './blocks/Column/config'
import { TestimonialsBlock } from './blocks/Testimonials'
import { FaqBlock } from './blocks/Faq'
import { CtaBlock } from './blocks/Cta/config'
import { CtaBannerBlock } from './blocks/CtaBanner'
import { PortfolioGridBlock } from './blocks/PortfolioGrid/config'
import { MissionVisionBlock } from './blocks/MissionVision/config'
import { OrgChartBlock } from './blocks/OrgChart/config'
import { ClientLogosBlock } from './blocks/ClientLogos/config'
import { LegalInfoBlock } from './blocks/LegalInfo/config'
import { ContactBlock } from './blocks/Contact'
import { FeaturesBlock } from './blocks/Features'
import { PostsGridBlock } from './blocks/PostsGrid'
import { ProjectsBlock } from './blocks/Projects'
import { SliderBlock } from './blocks/Slider'
import { generatePreviewPath } from '../../utilities/generatePreviewPath'
import { revalidateDelete, revalidatePage } from './hooks/revalidatePage'

const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', 'updatedAt'],
    livePreview: {
      url: ({ data, req }) =>
        generatePreviewPath({
          slug: data?.slug,
          collection: 'pages',
          req,
        }),
    },
    preview: (data, { req }) =>
      generatePreviewPath({
        slug: data?.slug as string,
        collection: 'pages',
        req,
      }),
  },
  access: {
    read: () => true,
  },
  hooks: {
    afterChange: [revalidatePage],
    afterDelete: [revalidateDelete],
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
        CtaBannerBlock,
        PortfolioGridBlock,
        MissionVisionBlock,
        OrgChartBlock,
        ClientLogosBlock,
        LegalInfoBlock,
        ContactBlock,
        FeaturesBlock,
        PostsGridBlock,
        ProjectsBlock,
        SliderBlock,
      ],
    },
  ],
}

export default Pages