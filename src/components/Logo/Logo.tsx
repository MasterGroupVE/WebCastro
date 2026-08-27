import clsx from 'clsx'
import Image from 'next/image'
import React from 'react'

interface Props {
  className?: string
  loading?: 'lazy' | 'eager'
  priority?: boolean
  width?: number
  height?: number
  variant?: 'default' | 'inverse'
}

export const Logo = (props: Props) => {
  const { className, width = 180, height = 40, variant = 'default', priority, loading = 'lazy', ...rest } = props

  const shouldPriority = priority ?? width > 100

  return (
    <Image
      {...rest}
      src="/logo-de-los-Castro.png"
      alt="Construcciones Los Castros"
      width={width}
      height={height}
      className={clsx('max-w-[12rem] w-full', className)}
      style={{
        filter: variant === 'inverse' ? 'brightness(0) invert(1)' : 'none',
      }}
      priority={shouldPriority}
      loading={shouldPriority ? undefined : loading}
    />
  )
}
