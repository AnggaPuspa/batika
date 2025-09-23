'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Mail, Lock, ArrowRight } from 'lucide-react'

import { AuthCard, AuthCardHeader, AuthCardFooter } from '@/components/ui/AuthCard'
import { TextField } from '@/components/ui/TextField'
import { PasswordField } from '@/components/ui/PasswordField'
import { Button } from '@/components/ui/Button'
import { OAuthButtons } from '@/components/ui/OAuthButtons'
import { Separator } from '@/components/ui/Separator'
import { FormHint } from '@/components/ui/FormHint'
import { authApi, setAuthToken, ApiError } from '@/lib/api'

const loginSchema = z.object({
  email: z
    .string()
    .min(1, 'Email wajib diisi')
    .email('Format email tidak valid'),
  password: z
    .string()
    .min(1, 'Password wajib diisi')
    .min(6, 'Password minimal 6 karakter'),
})

type LoginFormData = z.infer<typeof loginSchema>

export default function LoginPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [oauthLoading, setOauthLoading] = useState<{
    google: boolean
    github: boolean
  }>({ google: false, github: false })

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  })

  const onSubmit = async (data: LoginFormData) => {
    setIsLoading(true)
    try {
      const response = await authApi.login({
        email: data.email,
        password: data.password,
      })
      
      // Simpan token ke localStorage
      if (response.token) {
        setAuthToken(response.token)
      }
      
      // Redirect berdasarkan role user
      if (response.user.adalah_penjual) {
        router.push('/dashboard/penjual')
      } else {
        router.push('/dashboard/pembeli')
      }
      
    } catch (error) {
      console.error('Login error:', error)
      
      if (error instanceof ApiError) {
        if (error.status === 401) {
          setError('root', {
            message: 'Email atau password salah'
          })
        } else if (error.status === 403) {
          setError('root', {
            message: 'Akun belum terverifikasi. Silakan cek email Anda.'
          })
        } else if (error.status === 429) {
          setError('root', {
            message: 'Terlalu banyak percobaan login. Silakan coba lagi nanti.'
          })
        } else {
          setError('root', {
            message: error.message || 'Terjadi kesalahan saat login'
          })
        }
      } else {
        setError('root', {
          message: 'Koneksi gagal. Periksa koneksi internet Anda.'
        })
      }
    } finally {
      setIsLoading(false)
    }
  }

  const handleGoogleLogin = async () => {
    setOauthLoading(prev => ({ ...prev, google: true }))
    try {
      // Simulate OAuth flow
      await new Promise(resolve => setTimeout(resolve, 2000))
      console.log('Google login initiated')
    } catch (error) {
      console.error('Google login error:', error)
    } finally {
      setOauthLoading(prev => ({ ...prev, google: false }))
    }
  }

  const handleGitHubLogin = async () => {
    setOauthLoading(prev => ({ ...prev, github: true }))
    try {
      // Simulate OAuth flow
      await new Promise(resolve => setTimeout(resolve, 2000))
      console.log('GitHub login initiated')
    } catch (error) {
      console.error('GitHub login error:', error)
    } finally {
      setOauthLoading(prev => ({ ...prev, github: false }))
    }
  }

  return (
    <div className="min-h-screen-safe flex items-center justify-center bg-surface p-4">
      <div className="w-full max-w-md">
        <AuthCard>
          <AuthCardHeader
            title="Sign in to Batik Global"
            subtitle="Access dashboard UMKM & katalog ekspor"
          />

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {errors.root && (
              <FormHint type="error">
                {errors.root.message}
              </FormHint>
            )}

            <TextField
              {...register('email')}
              label="Email"
              type="email"
              placeholder="nama@email.com"
              leftIcon={<Mail className="w-4 h-4" />}
              error={errors.email?.message}
              required
              autoComplete="email"
              autoFocus
            />

            <PasswordField
              {...register('password')}
              label="Password"
              placeholder="Masukkan password Anda"
              error={errors.password?.message}
              required
              autoComplete="current-password"
            />

            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="w-4 h-4 text-brand-primary bg-gray-100 border-gray-300 rounded focus:ring-brand-primary focus:ring-2"
                />
                <span className="ml-2 text-sm text-text-muted">
                  Ingat saya
                </span>
              </label>
              
              <Link
                href="/forgot-password"
                className="text-sm link-primary hover:underline"
              >
                Lupa password?
              </Link>
            </div>

            <Button
              type="submit"
              variant="primary"
              size="lg"
              fullWidth
              loading={isLoading}
              disabled={oauthLoading.google || oauthLoading.github}
              rightIcon={<ArrowRight className="w-4 h-4" />}
            >
              {isLoading ? 'Signing in...' : 'Sign in'}
            </Button>
          </form>

          <Separator text="or continue with" className="my-6" />

          <OAuthButtons
            onGoogleClick={handleGoogleLogin}
            onGitHubClick={handleGitHubLogin}
            googleLoading={oauthLoading.google}
            githubLoading={oauthLoading.github}
            disabled={isLoading}
          />

          <AuthCardFooter>
            <p className="text-sm text-text-muted">
              Don't have an account?{' '}
              <Link href="/register" className="link-primary font-medium">
                Sign up
              </Link>
            </p>
          </AuthCardFooter>
        </AuthCard>

        <div className="text-center mt-8">
          <p className="text-xs text-text-muted">
            Protected by reCAPTCHA or hCaptcha (placeholder) ·{' '}
            <Link href="/terms" className="link-muted hover:underline">
              Terms
            </Link>
            {' '}·{' '}
            <Link href="/privacy" className="link-muted hover:underline">
              Privacy
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
