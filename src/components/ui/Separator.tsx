'use client'

import React from 'react'
import { cn } from '@/lib/utils'

interface SeparatorProps {
  text?: string
  className?: string
  orientation?: 'horizontal' | 'vertical'
}

export function Separator({ 
  text, 
  className, 
  orientation = 'horizontal' 
}: SeparatorProps) {
  if (orientation === 'vertical') {
    return (
      <div className={cn('w-px bg-gray-200', className)} />
    )
  }

  return (
    <div className={cn('relative flex items-center', className)}>
      <div className="flex-1 border-t border-gray-200" />
      {text && (
        <div className="px-4">
          <span className="text-sm text-text-muted bg-white px-2">
            {text}
          </span>
        </div>
      )}
      <div className="flex-1 border-t border-gray-200" />
    </div>
  )
}
