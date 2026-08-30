import { CastroHeader } from './CastroHeader'
import React from 'react'
import { getCachedGlobal } from '@/utilities/getGlobals'

export async function Header() {
  let headerData = null
  try {
    headerData = await getCachedGlobal('header', 1)()
  } catch (error) {
    console.error('Error fetching header global:', error)
  }

  return <CastroHeader data={headerData as any} />
}
