import type { Metadata } from 'next'
import './globals.css'
import { Header } from '@/components/header'

export const metadata: Metadata = {
  title: 'Cedar FE Interview | Jake Hebert',
  description:
    'An applicationfor the Cedar FE Design Systems Interview, by Jake Hebert. Features NextJS, TypeScript, and TailwindCSS.'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}
