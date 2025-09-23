'use client'

import React from 'react'
import { cn } from '@/lib/utils'
import { Info, AlertCircle, CheckCircle } from 'lucide-react'

interface FormHintProps {
  children: React.ReactNode
  type?: 'info' | 'success' | 'warning' | 'error'
  className?: string
}

const hintConfig = {
  info: {
    icon: Info,
    className: 'text-text-muted',
    iconClassName: 'text-text-muted',
  },
  success: {
    icon: CheckCircle,
    className: 'text-green-600',
    iconClassName: 'text-green-600',
  },
  warning: {
    icon: AlertCircle,
    className: 'text-yellow-600',
    iconClassName: 'text-yellow-600',
  },
  error: {
    icon: AlertCircle,
    className: 'text-red-600',
    iconClassName: 'text-red-600',
  },
}

export function FormHint({ 
  children, 
  type = 'info', 
  className 
}: FormHintProps) {
  const config = hintConfig[type]
  const Icon = config.icon

  return (
    <div className={cn(
      'flex items-start gap-2 p-3 rounded-lg text-sm',
      config.className,
      className
    )}>
      <Icon className={cn('w-4 h-4 mt-0.5 flex-shrink-0', config.iconClassName)} />
      <div className="flex-1">
        {children}
      </div>
    </div>
  )
}
