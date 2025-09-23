import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Batik Global - Platform Ekspor UMKM',
  description: 'Platform ekspor untuk UMKM batik Indonesia dengan akses ke dashboard dan katalog global',
  keywords: 'batik, ekspor, UMKM, Indonesia, platform',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id" className={poppins.variable}>
      <head>
        <style jsx global>{`
          :root {
            --brand-primary: #68B4F6;
            --brand-accent: #D4AF37;
            --surface: #F5F5F5;
            --text: #0F172A;
            --text-muted: #475569;
          }
          
          * {
            box-sizing: border-box;
          }
          
          html {
            scroll-behavior: smooth;
          }
          
          body {
            font-family: var(--font-poppins), system-ui, sans-serif;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }
          
          /* Focus ring untuk accessibility */
          *:focus-visible {
            outline: 2px solid var(--brand-primary);
            outline-offset: 2px;
          }
          
          /* Smooth transitions */
          * {
            transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
            transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
            transition-duration: 150ms;
          }
        `}</style>
      </head>
      <body className="min-h-screen bg-surface text-text antialiased">
        <div className="relative min-h-screen">
          {children}
        </div>
      </body>
    </html>
  )
}