'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Mail, Lock, User, Phone, ArrowRight } from 'lucide-react'

import { AuthCard, AuthCardHeader, AuthCardFooter } from '@/components/ui/AuthCard'
import { TextField } from '@/components/ui/TextField'
import { PasswordField } from '@/components/ui/PasswordField'
import { Button } from '@/components/ui/Button'
import { OAuthButtons } from '@/components/ui/OAuthButtons'
import { Separator } from '@/components/ui/Separator'
import { FormHint } from '@/components/ui/FormHint'
import { authApi, setAuthToken, ApiError } from '@/lib/api'

const registerSchema = z.object({
  nama_lengkap: z
    .string()
    .min(1, 'Nama lengkap wajib diisi')
    .min(2, 'Nama lengkap minimal 2 karakter'),
  email: z
    .string()
    .min(1, 'Email wajib diisi')
    .email('Format email tidak valid'),
  telepon: z
    .string()
    .min(1, 'Nomor telepon wajib diisi')
    .regex(/^[0-9+\-\s()]+$/, 'Format nomor telepon tidak valid'),
  password: z
    .string()
    .min(1, 'Password wajib diisi')
    .min(8, 'Password minimal 8 karakter')
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/, 'Password harus mengandung huruf kecil, huruf besar, dan angka'),
  confirmPassword: z
    .string()
    .min(1, 'Konfirmasi password wajib diisi'),
  adalah_penjual: z
    .string()
    .transform(val => val === 'true')
    .default('false'),
  terms: z
    .boolean()
    .refine(val => val === true, 'Anda harus menyetujui syarat dan ketentuan'),
}).refine(data => data.password === data.confirmPassword, {
  message: 'Password tidak cocok',
  path: ['confirmPassword'],
})

type RegisterFormData = z.infer<typeof registerSchema>

export default function RegisterPage() {
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
    watch,
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      adalah_penjual: 'false',
    },
  })

  const password = watch('password')

  const onSubmit = async (data: RegisterFormData) => {
    setIsLoading(true)
    try {
      const response = await authApi.register({
        nama_lengkap: data.nama_lengkap,
        email: data.email,
        telepon: data.telepon,
        password: data.password,
        adalah_penjual: data.adalah_penjual,
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
      console.error('Registration error:', error)
      
      if (error instanceof ApiError) {
        if (error.status === 409) {
          setError('email', {
            message: 'Email sudah terdaftar'
          })
        } else if (error.status === 400) {
          setError('root', {
            message: 'Data yang dimasukkan tidak valid'
          })
        } else if (error.status === 429) {
          setError('root', {
            message: 'Terlalu banyak percobaan registrasi. Silakan coba lagi nanti.'
          })
        } else {
          setError('root', {
            message: error.message || 'Terjadi kesalahan saat mendaftar'
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
      console.log('Google registration initiated')
    } catch (error) {
      console.error('Google registration error:', error)
    } finally {
      setOauthLoading(prev => ({ ...prev, google: false }))
    }
  }

  const handleGitHubLogin = async () => {
    setOauthLoading(prev => ({ ...prev, github: true }))
    try {
      // Simulate OAuth flow
      await new Promise(resolve => setTimeout(resolve, 2000))
      console.log('GitHub registration initiated')
    } catch (error) {
      console.error('GitHub registration error:', error)
    } finally {
      setOauthLoading(prev => ({ ...prev, github: false }))
    }
  }

  return (
    <div className="min-h-screen-safe flex items-center justify-center bg-surface p-4">
      <div className="w-full max-w-md">
        <AuthCard>
          <AuthCardHeader
            title="Create your account"
            subtitle="Access dashboard UMKM & katalog ekspor"
          />

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {errors.root && (
              <FormHint type="error">
                {errors.root.message}
              </FormHint>
            )}

            <TextField
              {...register('nama_lengkap')}
              label="Nama Lengkap"
              type="text"
              placeholder="Masukkan nama lengkap Anda"
              leftIcon={<User className="w-4 h-4" />}
              error={errors.nama_lengkap?.message}
              required
              autoComplete="name"
              autoFocus
            />

            <TextField
              {...register('email')}
              label="Email"
              type="email"
              placeholder="nama@email.com"
              leftIcon={<Mail className="w-4 h-4" />}
              error={errors.email?.message}
              required
              autoComplete="email"
            />

            <TextField
              {...register('telepon')}
              label="Nomor Telepon"
              type="tel"
              placeholder="+62 812 3456 7890"
              leftIcon={<Phone className="w-4 h-4" />}
              error={errors.telepon?.message}
              required
              autoComplete="tel"
            />

            <PasswordField
              {...register('password')}
              label="Password"
              placeholder="Buat password yang kuat"
              error={errors.password?.message}
              required
              autoComplete="new-password"
              showStrengthMeter
            />

            <PasswordField
              {...register('confirmPassword')}
              label="Konfirmasi Password"
              placeholder="Ulangi password Anda"
              error={errors.confirmPassword?.message}
              required
              autoComplete="new-password"
            />

            <div className="space-y-4">
              <div className="p-4 border border-gray-200 rounded-xl bg-gray-50">
                <h3 className="text-sm font-medium text-text mb-3">
                  Tipe Akun
                </h3>
                <div className="space-y-3">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      {...register('adalah_penjual')}
                      type="radio"
                      value="false"
                      className="w-4 h-4 text-brand-primary bg-gray-100 border-gray-300 focus:ring-brand-primary focus:ring-2 mt-0.5"
                    />
                    <div>
                      <div className="text-sm font-medium text-text">
                        Pembeli
                      </div>
                      <div className="text-xs text-text-muted">
                        Membeli produk batik untuk kebutuhan pribadi atau bisnis
                      </div>
                    </div>
                  </label>
                  
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      {...register('adalah_penjual')}
                      type="radio"
                      value="true"
                      className="w-4 h-4 text-brand-primary bg-gray-100 border-gray-300 focus:ring-brand-primary focus:ring-2 mt-0.5"
                    />
                    <div>
                      <div className="text-sm font-medium text-text">
                        Penjual
                      </div>
                      <div className="text-xs text-text-muted">
                        Menjual produk batik dan mengelola toko online
                      </div>
                    </div>
                  </label>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <label className="flex items-start gap-3">
                <input
                  {...register('terms')}
                  type="checkbox"
                  className="w-4 h-4 text-brand-primary bg-gray-100 border-gray-300 rounded focus:ring-brand-primary focus:ring-2 mt-0.5"
                />
                <span className="text-sm text-text-muted">
                  Saya menyetujui{' '}
                  <Link href="/terms" className="link-primary hover:underline">
                    Syarat dan Ketentuan
                  </Link>
                  {' '}dan{' '}
                  <Link href="/privacy" className="link-primary hover:underline">
                    Kebijakan Privasi
                  </Link>
                </span>
              </label>
              
              {errors.terms && (
                <p className="text-sm text-red-600">
                  {errors.terms.message}
                </p>
              )}
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
              {isLoading ? 'Creating account...' : 'Create account'}
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
              Already have an account?{' '}
              <Link href="/login" className="link-primary font-medium">
                Sign in
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
