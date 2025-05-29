import './globals.css'
import { Righteous } from 'next/font/google'

const righteous = Righteous({ subsets: ['latin'], weight: '400' })

export const metadata = {
  title: 'Helpoow',
  description: 'Plateforme d’annonces comme Airbnb',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={righteous.className}>{children}</body>
    </html>
  )
}
