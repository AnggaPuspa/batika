// API client untuk komunikasi dengan backend Batika
import { config } from '@/config/env'

const API_BASE_URL = config.apiUrl

interface ApiResponse<T = any> {
  status: 'success' | 'error'
  data?: T
  message?: string
}

interface LoginRequest {
  email: string
  password: string
}

interface RegisterRequest {
  email: string
  password: string
  nama_lengkap: string
  telepon: string
  adalah_penjual: boolean
}

interface User {
  id: string
  email: string
  nama_lengkap: string
  adalah_penjual: boolean
  is_verified: boolean
}

interface AuthResponse {
  user: User
  token?: string
}

class ApiError extends Error {
  constructor(
    message: string,
    public status: number,
    public data?: any
  ) {
    super(message)
    this.name = 'ApiError'
  }
}

async function apiRequest<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {
  const url = `${API_BASE_URL}${endpoint}`
  
  const config: RequestInit = {
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    ...options,
  }

  // Add auth token if available
  if (typeof window !== 'undefined') {
    const token = localStorage.getItem('auth_token')
    if (token) {
      config.headers = {
        ...config.headers,
        Authorization: `Bearer ${token}`,
      }
    }
  }

  try {
    const response = await fetch(url, config)
    const data: ApiResponse<T> = await response.json()

    if (!response.ok) {
      throw new ApiError(
        data.message || 'Terjadi kesalahan',
        response.status,
        data
      )
    }

    return data.data || data as T
  } catch (error) {
    if (error instanceof ApiError) {
      throw error
    }
    
    // Network or other errors
    throw new ApiError(
      'Koneksi gagal. Periksa koneksi internet Anda.',
      0
    )
  }
}

// Auth API functions
export const authApi = {
  async login(credentials: LoginRequest): Promise<AuthResponse> {
    return apiRequest<AuthResponse>('/auth/login', {
      method: 'POST',
      body: JSON.stringify(credentials),
    })
  },

  async register(userData: RegisterRequest): Promise<AuthResponse> {
    return apiRequest<AuthResponse>('/auth/register', {
      method: 'POST',
      body: JSON.stringify(userData),
    })
  },

  async logout(): Promise<void> {
    return apiRequest<void>('/auth/logout', {
      method: 'POST',
    })
  },

  async getProfile(): Promise<User> {
    return apiRequest<User>('/auth/profile')
  },

  async refreshToken(): Promise<{ token: string }> {
    return apiRequest<{ token: string }>('/auth/refresh', {
      method: 'POST',
    })
  },
}

// Utility functions
export function setAuthToken(token: string): void {
  if (typeof window !== 'undefined') {
    localStorage.setItem('auth_token', token)
  }
}

export function getAuthToken(): string | null {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('auth_token')
  }
  return null
}

export function removeAuthToken(): void {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('auth_token')
  }
}

export function isAuthenticated(): boolean {
  return !!getAuthToken()
}

export { ApiError }
export type { LoginRequest, RegisterRequest, User, AuthResponse }
