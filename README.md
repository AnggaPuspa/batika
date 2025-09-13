# Batika Project

## 📁 Struktur Folder

Berikut adalah struktur folder lengkap dari project Batika:

```
batika/
├── public/                     # File static (gambar, icon, dll)
│   ├── file.svg
│   ├── globe.svg
│   ├── next.svg
│   ├── vercel.svg
│   └── window.svg
├── src/                        # Kode sumber utama
│   ├── app/                    # Next.js App Router
│   │   ├── (dashboard)/        # Halaman dashboard (perlu login)
│   │   │   ├── profile/        # Halaman profil user
│   │   │   ├── settings/       # Halaman pengaturan
│   │   │   └── transactions/   # Halaman transaksi
│   │   ├── (marketing)/        # Halaman marketing (publik)
│   │   │   ├── about/          # Halaman tentang kami
│   │   │   ├── contact/        # Halaman kontak
│   │   │   └── pricing/        # Halaman harga
│   │   ├── auth/               # Halaman autentikasi
│   │   │   ├── signin/         # Halaman login
│   │   │   ├── signup/         # Halaman daftar
│   │   │   └── reset-password/ # Halaman reset password
│   │   ├── api/                # Endpoint API
│   │   │   ├── auth/           # API autentikasi
│   │   │   │   ├── signin/     # POST /api/auth/signin
│   │   │   │   ├── signup/     # POST /api/auth/signup
│   │   │   │   ├── signout/    # POST /api/auth/signout
│   │   │   │   └── refresh/    # POST /api/auth/refresh
│   │   │   ├── users/          # API manajemen user
│   │   │   │   └── [id]/       # GET, PUT, DELETE /api/users/[id]
│   │   │   └── transactions/   # API transaksi
│   │   │       └── [id]/       # GET, PUT, DELETE /api/transactions/[id]
│   │   ├── globals.css         # Style global
│   │   ├── layout.tsx          # Layout utama
│   │   ├── page.tsx            # Halaman utama
│   │   ├── loading.tsx         # UI loading
│   │   ├── error.tsx           # UI error
│   │   ├── not-found.tsx       # Halaman 404
│   │   └── favicon.ico         # Icon aplikasi
│   ├── components/             # Komponen UI global
│   │   ├── layout/             # Komponen layout
│   │   │   ├── Navbar.tsx      # Navigasi atas
│   │   │   └── Footer.tsx      # Footer bawah
│   │   ├── ui/                 # Komponen UI yang bisa dipakai ulang
│   │   │   ├── Button.tsx      # Komponen tombol
│   │   │   ├── Input.tsx       # Komponen input
│   │   │   └── Card.tsx        # Komponen kartu
│   │   └── forms/              # Komponen form
│   │       ├── LoginForm.tsx   # Form login
│   │       └── RegisterForm.tsx # Form daftar
│   ├── features/               # Modul fitur (arsitektur berbasis fitur)
│   │   ├── auth/               # Fitur autentikasi
│   │   │   ├── schemas/        # Schema validasi
│   │   │   ├── services/       # Panggilan API & logika bisnis
│   │   │   └── ui/             # Komponen khusus fitur
│   │   ├── users/              # Fitur user
│   │   │   ├── schemas/        # Schema validasi user
│   │   │   ├── services/       # Service API user
│   │   │   └── ui/             # Komponen user
│   │   └── transactions/       # Fitur transaksi
│   │       ├── schemas/        # Schema validasi transaksi
│   │       ├── services/       # Service API transaksi
│   │       └── ui/             # Komponen transaksi
│   └── lib/                    # Library TypeScript global
│       ├── api/                # Client API & service
│       ├── constants/          # Konstanta aplikasi
│       ├── hooks/              # Custom React hooks
│       ├── types/              # Definisi tipe TypeScript
│       ├── utils/              # Fungsi utility
│       └── validations/        # Schema validasi form
├── styles/                     # Style global
│   └── globals.css             # Tailwind CSS dengan variabel custom
├── next.config.ts              # Konfigurasi Next.js
├── package.json                # Dependensi dan script
├── postcss.config.mjs          # Konfigurasi PostCSS
├── tailwind.config.ts          # Konfigurasi Tailwind CSS
├── tsconfig.json               # Konfigurasi TypeScript
└── README.md                   # Dokumentasi project
```

## 📋 Penjelasan Folder

### **src/app/** - Next.js App Router
- **`(dashboard)/`** - Halaman yang memerlukan login
- **`(marketing)/`** - Halaman publik untuk marketing
- **`auth/`** - Halaman login, daftar, reset password
- **`api/`** - Endpoint API untuk backend

### **src/components/** - Komponen UI Global
- **`layout/`** - Komponen layout (Navbar, Footer)
- **`ui/`** - Komponen UI yang bisa dipakai ulang
- **`forms/`** - Komponen form

### **src/features/** - Modul Fitur
Setiap fitur berisi:
- **`schemas/`** - Schema validasi data
- **`services/`** - Panggilan API dan logika bisnis
- **`ui/`** - Komponen React khusus fitur

### **src/lib/** - Library Global
- **`api/`** - Konfigurasi client API
- **`types/`** - Definisi tipe TypeScript
- **`hooks/`** - Custom React hooks
- **`utils/`** - Fungsi utility
- **`constants/`** - Konstanta aplikasi
- **`validations/`** - Schema validasi form
