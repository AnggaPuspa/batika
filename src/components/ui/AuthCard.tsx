import React from 'react'
import { cn } from '@/lib/utils'

interface AuthCardProps {
  children: React.ReactNode
  className?: string
}

export function AuthCard({ children, className }: AuthCardProps) {
  return (
    <div className={cn(
      'card card-hover w-full max-w-md mx-auto p-8',
      'animate-slide-up',
      className
    )}>
      {children}
    </div>
  )
}

interface AuthCardHeaderProps {
  title: string
  subtitle?: string
  className?: string
}

export function AuthCardHeader({ title, subtitle, className }: AuthCardHeaderProps) {
  return (
    <div className={cn('text-center mb-8', className)}>
      <h1 className="text-2xl font-semibold text-text mb-2">
        {title}
      </h1>
      {subtitle && (
        <p className="text-sm text-text-muted">
          {subtitle}
        </p>
      )}
    </div>
  )
}

interface AuthCardFooterProps {
  children: React.ReactNode
  className?: string
}

export function AuthCardFooter({ children, className }: AuthCardFooterProps) {
  return (
    <div className={cn('text-center mt-8 pt-6 border-t border-gray-100', className)}>
      {children}
    </div>
  )
}
