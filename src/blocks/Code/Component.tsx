'use client'

import React from 'react'

import { cn } from '@/utilities/ui'

export interface CodeBlockProps {
  className?: string
  code?: string
  language?: string
}

export const CodeBlock: React.FC<CodeBlockProps> = ({
  className,
  code = '',
  language = 'typescript',
}) => {
  return (
    <pre className={cn('bg-gray-900 rounded-xl p-6 overflow-x-auto text-sm', className)}>
      <code className={cn('language-', language)}>
        {code}
      </code>
    </pre>
  )
}