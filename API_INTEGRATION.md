# 🔗 API Integration Guide

## Overview
Frontend Batika sudah terintegrasi dengan backend API yang sudah dibuat sebelumnya. Semua endpoint authentication sudah terhubung dan siap digunakan.

## 🚀 Setup Backend

### 1. Jalankan Backend Server
```bash
cd ../backend
npm install
npm run dev
```
Backend akan berjalan di `http://localhost:3001`

### 2. Setup Database
Pastikan database sudah dikonfigurasi dengan benar di backend.

## 🔧 Frontend Configuration

### Environment Variables
Buat file `.env.local` di root project:
```env
NEXT_PUBLIC_API_URL=http://localhost:3001/api
NODE_ENV=development
```

### API Client
File `src/lib/api.ts` berisi semua fungsi untuk komunikasi dengan backend:

```typescript
// Login
const response = await authApi.login({
  email: 'user@example.com',
  password: 'password123'
})

// Register
const response = await authApi.register({
  nama_lengkap: 'John Doe',
  email: 'user@example.com',
  telepon: '+6281234567890',
  password: 'password123',
  adalah_penjual: false
})
```

## 📱 Pages & Features

### Authentication Pages

#### Login Page (`/login`)
- ✅ Email & password authentication
- ✅ Error handling untuk berbagai status code
- ✅ Redirect berdasarkan role user
- ✅ Token management
- ✅ Loading states

#### Register Page (`/register`)
- ✅ Complete registration form
- ✅ Role selection (Penjual/Pembeli)
- ✅ Password strength meter
- ✅ Real-time validation
- ✅ Terms acceptance

### Dashboard Pages

#### Penjual Dashboard (`/dashboard/penjual`)
- ✅ User profile display
- ✅ Stats cards (Produk, Penjualan, Pelanggan)
- ✅ Quick actions
- ✅ Logout functionality

#### Pembeli Dashboard (`/dashboard/pembeli`)
- ✅ User profile display
- ✅ Stats cards (Pesanan, Wishlist, Riwayat)
- ✅ Quick actions
- ✅ Recent activity

## 🔐 Authentication Flow

### 1. Login Process
```typescript
// User submits login form
const response = await authApi.login(credentials)

// Token disimpan ke localStorage
setAuthToken(response.token)

// Redirect berdasarkan role
if (response.user.adalah_penjual) {
  router.push('/dashboard/penjual')
} else {
  router.push('/dashboard/pembeli')
}
```

### 2. Registration Process
```typescript
// User submits registration form
const response = await authApi.register(userData)

// Token disimpan ke localStorage
setAuthToken(response.token)

// Redirect berdasarkan role
if (response.user.adalah_penjual) {
  router.push('/dashboard/penjual')
} else {
  router.push('/dashboard/pembeli')
}
```

### 3. Protected Routes
```typescript
// Check authentication on page load
useEffect(() => {
  const token = getAuthToken()
  if (!token) {
    router.push('/login')
    return
  }
  
  // Verify token dengan backend
  authApi.getProfile()
    .then(setUser)
    .catch(() => {
      removeAuthToken()
      router.push('/login')
    })
}, [])
```

## 🚨 Error Handling

### API Error Types
```typescript
// 401 - Unauthorized
if (error.status === 401) {
  setError('root', { message: 'Email atau password salah' })
}

// 403 - Forbidden
if (error.status === 403) {
  setError('root', { message: 'Akun belum terverifikasi' })
}

// 409 - Conflict
if (error.status === 409) {
  setError('email', { message: 'Email sudah terdaftar' })
}

// 429 - Too Many Requests
if (error.status === 429) {
  setError('root', { message: 'Terlalu banyak percobaan' })
}
```

### Network Error Handling
```typescript
catch (error) {
  if (error instanceof ApiError) {
    // Handle API errors
  } else {
    // Handle network errors
    setError('root', {
      message: 'Koneksi gagal. Periksa koneksi internet Anda.'
    })
  }
}
```

## 🔄 State Management

### Token Management
```typescript
// Set token
setAuthToken(token)

// Get token
const token = getAuthToken()

// Remove token
removeAuthToken()

// Check authentication
const isAuth = isAuthenticated()
```

### User State
```typescript
const [user, setUser] = useState<User | null>(null)
const [isLoading, setIsLoading] = useState(true)

// Load user profile
useEffect(() => {
  authApi.getProfile()
    .then(setUser)
    .finally(() => setIsLoading(false))
}, [])
```

## 🎨 UI Components

### Form Components
- **TextField**: Input dengan validation
- **PasswordField**: Password dengan strength meter
- **Button**: Loading states & variants
- **FormHint**: Error & success messages

### Layout Components
- **AuthCard**: Clean card design
- **Separator**: Divider dengan text
- **OAuthButtons**: Google/GitHub integration

## 🧪 Testing

### Manual Testing
1. **Start Backend**: `npm run dev` di folder backend
2. **Start Frontend**: `npm run dev` di folder batika
3. **Test Login**: Gunakan credentials yang ada di database
4. **Test Register**: Buat akun baru dengan role berbeda
5. **Test Dashboard**: Verify redirect dan data display

### Test Cases
- ✅ Login dengan email/password valid
- ✅ Login dengan credentials invalid
- ✅ Register dengan data valid
- ✅ Register dengan email yang sudah ada
- ✅ Logout functionality
- ✅ Protected route access
- ✅ Token expiration handling

## 🚀 Deployment

### Environment Setup
```env
# Production
NEXT_PUBLIC_API_URL=https://api.batikglobal.com/api
NODE_ENV=production
```

### Build Commands
```bash
# Build frontend
npm run build

# Start production
npm run start
```

## 📝 Notes

- Semua API calls menggunakan `fetch` dengan proper error handling
- Token disimpan di `localStorage` untuk persistence
- Automatic redirect berdasarkan user role
- Loading states untuk semua async operations
- Responsive design untuk mobile & desktop
- Accessibility features (ARIA labels, keyboard navigation)

## 🔗 Related Files

- `src/lib/api.ts` - API client
- `src/config/env.ts` - Environment config
- `src/app/(auth)/login/page.tsx` - Login page
- `src/app/(auth)/register/page.tsx` - Register page
- `src/app/dashboard/penjual/page.tsx` - Penjual dashboard
- `src/app/dashboard/pembeli/page.tsx` - Pembeli dashboard
