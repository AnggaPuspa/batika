# Batika - Platform Ekspor UMKM Batik

Platform ekspor untuk UMKM batik Indonesia dengan akses ke dashboard dan katalog global.

## 🎨 Design System

### Brand Colors
- **Primary**: #68B4F6 (Biru)
- **Accent**: #D4AF37 (Emas)
- **Surface**: #F5F5F5 (Abu terang)
- **Text**: #0F172A (Slate-900)
- **Text Muted**: #475569 (Slate-600)

### Typography
- **Font**: Poppins (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm atau yarn

### Installation

1. Clone repository
```bash
git clone <repository-url>
cd batika
```

2. Install dependencies
```bash
npm install
```

3. Run development server
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📁 Project Structure

```
src/
├── app/
│   ├── (auth)/
│   │   ├── login/
│   │   │   └── page.tsx
│   │   └── register/
│   │       └── page.tsx
│   ├── globals.css
│   └── layout.tsx
├── components/
│   └── ui/
│       ├── AuthCard.tsx
│       ├── Button.tsx
│       ├── FormHint.tsx
│       ├── OAuthButtons.tsx
│       ├── PasswordField.tsx
│       ├── Separator.tsx
│       └── TextField.tsx
└── lib/
    └── utils.ts
```

## 🎯 Features

### Authentication Pages
- **Login Page** (`/login`)
  - Email & password authentication
  - OAuth integration (Google, GitHub)
  - Remember me functionality
  - Forgot password link
  - Form validation with Zod

- **Register Page** (`/register`)
  - Full registration form
  - Password strength meter
  - Terms & conditions acceptance
  - OAuth registration
  - Real-time validation

### UI Components

#### AuthCard
- Clean, Supabase-style card design
- Responsive layout
- Smooth animations

#### Form Components
- **TextField**: Input dengan label, error states, icons
- **PasswordField**: Password input dengan show/hide toggle & strength meter
- **Button**: Multiple variants (primary, outline, ghost) dengan loading states
- **OAuthButtons**: Google & GitHub authentication buttons
- **FormHint**: Helper text dengan multiple types (info, success, warning, error)
- **Separator**: Divider dengan optional text

### Accessibility Features
- ✅ Proper ARIA labels and descriptions
- ✅ Focus management and keyboard navigation
- ✅ Screen reader support
- ✅ High contrast focus rings
- ✅ Minimum 44px tap targets
- ✅ Semantic HTML structure

### Responsive Design
- ✅ Mobile-first approach
- ✅ Breakpoints: sm (640px), md (768px), lg (1024px)
- ✅ Touch-friendly interface
- ✅ Optimized for all screen sizes

## 🛠 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Forms**: React Hook Form + Zod validation
- **Icons**: Lucide React
- **Font**: Poppins (Google Fonts)
- **TypeScript**: Full type safety

## 📱 Pages

### Login Page (`/login`)
- Clean sign-in interface
- Email/password authentication
- OAuth options
- Remember me checkbox
- Forgot password link

### Register Page (`/register`)
- Complete registration form
- Real-time password validation
- Terms acceptance
- OAuth registration options

## 🎨 Design Principles

1. **Clean & Minimal**: Supabase-inspired design
2. **Accessible**: WCAG 2.1 AA compliant
3. **Responsive**: Mobile-first approach
4. **Consistent**: Design system with reusable components
5. **Professional**: Business-focused tone and copy

## 🔧 Development

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript checks
```

### Code Style
- ESLint configuration
- Prettier formatting
- TypeScript strict mode
- Consistent naming conventions

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Support

For support, email support@batikglobal.com or join our Discord community.