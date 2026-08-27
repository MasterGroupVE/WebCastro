'use client'

import React from 'react'

interface ColorPickerProps {
  value?: string
  onChange?: (value: string) => void
  field?: {
    value?: string
    onChange?: (value: string) => void
  }
  className?: string
  disabled?: boolean
}

const ColorPicker: React.FC<ColorPickerProps> = ({
  value = '#092F56',
  onChange,
  field,
  className = '',
  disabled = false,
}) => {
  const currentValue = value || field?.value || '#092F56'

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value
    onChange?.(newValue)
    field?.onChange?.(newValue)
  }

  return (
    <div className={className}>
      <div className="flex items-center gap-3">
        <input
          type="text"
          value={currentValue}
          onChange={handleChange}
          placeholder="#092F56"
          disabled={disabled}
          className={`
            w-28 px-3 py-2.5
            border border-gray-300 dark:border-gray-600
            rounded-lg bg-white dark:bg-gray-800
            text-sm font-mono text-center text-gray-900 dark:text-white
            placeholder-gray-500
            focus:outline-none focus:ring-2 focus:ring-brand-gold/50
            disabled:opacity-50 disabled:cursor-not-allowed
          `}
          spellCheck={false}
          maxLength={7}
        />
        <div
          className="w-8 h-8 rounded-lg border border-gray-300 dark:border-gray-600 flex-shrink-0"
          style={{ backgroundColor: currentValue }}
          title={currentValue}
        />
      </div>
      <p className="mt-1 font-body text-xs text-gray-500 dark:text-gray-400">
        Color: <code className="font-mono">{currentValue.toUpperCase()}</code>
      </p>
    </div>
  )
}

export default ColorPicker