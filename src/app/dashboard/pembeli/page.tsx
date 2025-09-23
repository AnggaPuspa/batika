'use client'

import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { User, LogOut, ShoppingBag, Heart, History } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { AuthCard } from '@/components/ui/AuthCard'
import { authApi, getAuthToken, removeAuthToken, User as UserType } from '@/lib/api'

export default function PembeliDashboard() {
  const router = useRouter()
  const [user, setUser] = useState<UserType | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const checkAuth = async () => {
      const token = getAuthToken()
      if (!token) {
        router.push('/login')
        return
      }

      try {
        const userData = await authApi.getProfile()
        setUser(userData)
      } catch (error) {
        console.error('Auth check failed:', error)
        removeAuthToken()
        router.push('/login')
      } finally {
        setIsLoading(false)
      }
    }

    checkAuth()
  }, [router])

  const handleLogout = async () => {
    try {
      await authApi.logout()
    } catch (error) {
      console.error('Logout error:', error)
    } finally {
      removeAuthToken()
      router.push('/login')
    }
  }

  if (isLoading) {
    return (
      <div className="min-h-screen-safe flex items-center justify-center bg-surface">
        <div className="text-center">
          <div className="spinner w-8 h-8 mx-auto mb-4"></div>
          <p className="text-text-muted">Loading...</p>
        </div>
      </div>
    )
  }

  if (!user) {
    return null
  }

  return (
    <div className="min-h-screen-safe bg-surface p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-text">
              Dashboard Pembeli
            </h1>
            <p className="text-text-muted">
              Selamat datang, {user.nama_lengkap}
            </p>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-text-muted">
              <User className="w-4 h-4" />
              <span className="text-sm">{user.email}</span>
            </div>
            
            <Button
              variant="outline"
              size="sm"
              onClick={handleLogout}
              leftIcon={<LogOut className="w-4 h-4" />}
            >
              Logout
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <AuthCard className="p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-brand-primary/10 rounded-xl">
                <ShoppingBag className="w-6 h-6 text-brand-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold text-text">0</p>
                <p className="text-sm text-text-muted">Pesanan Aktif</p>
              </div>
            </div>
          </AuthCard>

          <AuthCard className="p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-red-100 rounded-xl">
                <Heart className="w-6 h-6 text-red-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-text">0</p>
                <p className="text-sm text-text-muted">Wishlist</p>
              </div>
            </div>
          </AuthCard>

          <AuthCard className="p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-green-100 rounded-xl">
                <History className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-text">0</p>
                <p className="text-sm text-text-muted">Riwayat Belanja</p>
              </div>
            </div>
          </AuthCard>
        </div>

        {/* Quick Actions */}
        <AuthCard className="p-6">
          <h2 className="text-xl font-semibold text-text mb-4">
            Quick Actions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Button
              variant="outline"
              fullWidth
              onClick={() => router.push('/katalog')}
            >
              Jelajahi Katalog
            </Button>
            <Button
              variant="outline"
              fullWidth
              onClick={() => router.push('/dashboard/pembeli/pesanan')}
            >
              Lihat Pesanan
            </Button>
            <Button
              variant="outline"
              fullWidth
              onClick={() => router.push('/dashboard/pembeli/wishlist')}
            >
              Wishlist
            </Button>
            <Button
              variant="outline"
              fullWidth
              onClick={() => router.push('/dashboard/pembeli/profile')}
            >
              Profil Saya
            </Button>
          </div>
        </AuthCard>

        {/* Recent Activity */}
        <AuthCard className="p-6 mt-6">
          <h2 className="text-xl font-semibold text-text mb-4">
            Aktivitas Terbaru
          </h2>
          <div className="text-center py-8">
            <ShoppingBag className="w-12 h-12 text-text-muted mx-auto mb-4" />
            <p className="text-text-muted">
              Belum ada aktivitas terbaru
            </p>
            <Button
              variant="primary"
              className="mt-4"
              onClick={() => router.push('/katalog')}
            >
              Mulai Berbelanja
            </Button>
          </div>
        </AuthCard>
      </div>
    </div>
  )
}
