import type { Form } from '@/payload-types'
import { RequiredDataFromCollectionSlug } from 'payload'

type ContactArgs = {
  contactForm: Form
}

export const contact: (args: ContactArgs) => RequiredDataFromCollectionSlug<'pages'> = ({
  contactForm,
}) => {
  return {
    slug: 'contact',
    _status: 'published' as const,
    title: 'Contacto',
    layout: [
      {
        blockType: 'hero',
        headline: 'Contacto',
        subheadline: '¿Tienes un proyecto en mente?',
        ctaText: '',
        layout: 'centered',
        height: 'medium',
        textColor: 'white',
        overlayOpacity: '50',
      },
      {
        blockType: 'aboutUs',
        headline: 'Escríbenos',
        subheadline: 'Formulario de contacto',
        description: {
          root: {
            type: 'root',
            children: [
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    detail: 0,
                    format: 0,
                    mode: 'normal',
                    style: '',
                    text: 'Llena el formulario y nos pondremos en contacto contigo lo antes posible.',
                    version: 1,
                  },
                ],
                direction: 'ltr',
                format: '',
                indent: 0,
                textFormat: 0,
                version: 1,
              },
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
            version: 1,
          },
        },
        backgroundColor: 'white',
      },
    ],
  }
}