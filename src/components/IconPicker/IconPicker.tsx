'use client'

import React from 'react'

interface IconPickerProps {
  value?: string
  onChange?: (value: string) => void
  field?: {
    value?: string
    onChange?: (value: string) => void
  }
  className?: string
  disabled?: boolean
}

const IconPicker: React.FC<IconPickerProps> = ({
  value = '',
  onChange,
  field,
  className = '',
  disabled = false,
}) => {
  const currentValue = value || field?.value || ''

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value
    onChange?.(newValue)
    field?.onChange?.(newValue)
  }

  return (
    <div className={className}>
      <input
        type="text"
        value={currentValue}
        onChange={handleChange}
        placeholder="Nombre del icono (ej: Building2, Wrench, HardHat)"
        disabled={disabled}
        className={`
          w-full px-3 py-2.5
          border border-gray-300 dark:border-gray-600
          rounded-lg bg-white dark:bg-gray-800
          text-sm font-mono text-gray-900 dark:text-white
          placeholder-gray-500
          focus:outline-none focus:ring-2 focus:ring-brand-gold/50
          disabled:opacity-50 disabled:cursor-not-allowed
        `}
        spellCheck={false}
      />
      {currentValue && (
        <p className="mt-1 font-body text-xs text-gray-500 dark:text-gray-400">
          Icono: <code className="font-mono">{currentValue}</code>
        </p>
      )}
    </div>
  )
}

export default IconPicker