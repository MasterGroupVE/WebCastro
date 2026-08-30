import { CastroFooter } from './CastroFooter'
import React from 'react'
import { getCachedGlobal } from '@/utilities/getGlobals'

export async function Footer() {
  let footerData = null
  try {
    footerData = await getCachedGlobal('footer', 1)()
  } catch (error) {
    console.error('Error fetching footer global:', error)
  }

  return <CastroFooter data={footerData as any} />
}
