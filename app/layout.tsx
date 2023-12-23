import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute='class' defaultTheme='dark'>
        <main className="flex min-h-screen flex-col items-center p-24">
          <div className="z-10 max-w-5xl w-full items-center justify-between text-sm lg:flex">
            <h1 className='text-2xl text-bold'>PokedexApp</h1>
          </div>
          {children}
        </main>
        </ThemeProvider>
      </body>
    </html>
  )
}
