import { CollectionConfig } from 'payload'
// Importa tus bloques
import { HeroBlock } from './blocks/Hero'
import { AboutUsBlock } from './blocks/AboutUs'
import { ServicesBlock } from './blocks/Services'
import { ProcessBlock } from './blocks/Process'
import { ProjectsBlock } from './blocks/Projects'
import { ContactBlock } from './blocks/Contact'
import { SliderBlock } from './blocks/Slider'
import { TestimonialsBlock } from './blocks/Testimonials'
import { CtaBannerBlock } from './blocks/CtaBanner'
import { FeaturesBlock } from './blocks/Features'
import { FaqBlock } from './blocks/Faq'
import { PostsGridBlock } from './blocks/PostsGrid'

const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', 'updatedAt'],
  },
  access: {
    read: () => true, // Permitir lectura pública
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
        ProjectsBlock,
        TestimonialsBlock,
        FaqBlock,
        PostsGridBlock,
        CtaBannerBlock,
        ContactBlock,
        FeaturesBlock,
        SliderBlock,
      ],
    },
  ],
}

export default Pages