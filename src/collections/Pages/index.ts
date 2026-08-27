import { CollectionConfig } from 'payload'
// Importa tus bloques
import { HeroBlock } from './blocks/Hero'
import { AboutUsBlock } from './blocks/AboutUs'
import { ServicesBlock } from './blocks/Services'
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
  },
  access: {
    read: () => true, // Permitir lectura pública
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        position: 'sidebar', // Opcional: mover a la barra lateral
      },
    },
    // --- ESTE ES EL CAMPO CLAVE ---
    {
      name: 'layout', // Nombre del campo en la base de datos
      label: 'Estructura de la Página',
      type: 'blocks', // Tipo Flexible Content
      blocks: [
        HeroBlock,
        AboutUsBlock,
        ServicesBlock,
        ProjectsBlock,
        ContactBlock,
        SliderBlock,
        TestimonialsBlock,
        CtaBannerBlock,
        FeaturesBlock,
        FaqBlock,
        PostsGridBlock,
        // Agrega aquí el resto de bloques cuando los crees
      ],
    },
  ],
};

export default Pages;