'use client'

import React, { forwardRef, useState } from 'react'
import { Eye, EyeOff, Lock } from 'lucide-react'
import { cn } from '@/lib/utils'
import styles from './PasswordStrengthMeter.module.css'

interface PasswordFieldProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string
  error?: string
  helperText?: string
  required?: boolean
  showStrengthMeter?: boolean
}

export const PasswordField = forwardRef<HTMLInputElement, PasswordFieldProps>(
  ({ 
    label, 
    error, 
    helperText, 
    required, 
    showStrengthMeter = false,
    className, 
    id,
    ...props 
  }, ref) => {
    const [showPassword, setShowPassword] = useState(false)
    const [password, setPassword] = useState('')
    
    const inputId = id || `password-${Math.random().toString(36).substr(2, 9)}`
    const hasError = !!error
    const hasHelperText = !!helperText && !hasError

    const getPasswordStrength = (password: string) => {
      if (password.length === 0) return { score: 0, label: '', color: '' }
      
      let score = 0
      if (password.length >= 8) score++
      if (/[a-z]/.test(password)) score++
      if (/[A-Z]/.test(password)) score++
      if (/[0-9]/.test(password)) score++
      if (/[^A-Za-z0-9]/.test(password)) score++
      
      const strength = [
        { score: 0, label: 'Sangat Lemah', color: 'bg-red-500' },
        { score: 1, label: 'Lemah', color: 'bg-red-400' },
        { score: 2, label: 'Cukup', color: 'bg-yellow-500' },
        { score: 3, label: 'Baik', color: 'bg-blue-500' },
        { score: 4, label: 'Sangat Baik', color: 'bg-green-500' },
        { score: 5, label: 'Sempurna', color: 'bg-green-600' },
      ]
      
      return strength[Math.min(score, 5)]
    }

    const strength = getPasswordStrength(password)

    return (
      <div className="w-full">
        {label && (
          <label 
            htmlFor={inputId}
            className={cn(
              'label-base',
              hasError && 'label-error'
            )}
          >
            {label}
            {required && <span className="text-red-500 ml-1">*</span>}
          </label>
        )}
        
        <div className="relative">
          <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted w-4 h-4" />
          
          <input
            ref={ref}
            id={inputId}
            type={showPassword ? 'text' : 'password'}
            className={cn(
              'input-base pl-10 pr-12',
              hasError && 'input-error',
              className
            )}
            aria-invalid={hasError ? 'true' : 'false'}
            aria-describedby={
              hasError ? `${inputId}-error` : 
              hasHelperText ? `${inputId}-helper` : 
              showStrengthMeter ? `${inputId}-strength` :
              undefined
            }
            onChange={(e) => {
              setPassword(e.target.value)
              props.onChange?.(e)
            }}
            {...props}
          />
          
          <button
            type="button"
            className="absolute right-3 top-1/2 -translate-y-1/2 text-text-muted hover:text-text transition-colors duration-200 tap-target"
            onClick={() => setShowPassword(!showPassword)}
            aria-label={showPassword ? 'Sembunyikan password' : 'Tampilkan password'}
            tabIndex={-1}
          >
            {showPassword ? (
              <EyeOff className="w-4 h-4" />
            ) : (
              <Eye className="w-4 h-4" />
            )}
          </button>
        </div>
        
        {showStrengthMeter && password && (
          <div 
            id={`${inputId}-strength`}
            className="mt-2"
            aria-live="polite"
          >
            <div className="flex items-center gap-2 mb-1">
              <div className={cn('flex-1', styles.strengthBar)}>
                <div 
                  className={cn(
                    styles.strengthFill,
                    strength.score <= 1 && styles.strengthFillWeak,
                    strength.score === 2 && styles.strengthFillFair,
                    strength.score === 3 && styles.strengthFillGood,
                    strength.score === 4 && styles.strengthFillStrong,
                    strength.score === 5 && styles.strengthFillVeryStrong
                  )}
                  style={{ width: `${(strength.score / 5) * 100}%` }}
                />
              </div>
              <span className="text-xs text-text-muted">
                {strength.label}
              </span>
            </div>
          </div>
        )}
        
        {hasError && (
          <p 
            id={`${inputId}-error`}
            className="error-text"
            role="alert"
            aria-live="polite"
          >
            {error}
          </p>
        )}
        
        {hasHelperText && (
          <p 
            id={`${inputId}-helper`}
            className="helper-text"
          >
            {helperText}
          </p>
        )}
      </div>
    )
  }
)

PasswordField.displayName = 'PasswordField'
