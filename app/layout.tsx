import './globals.css'
import { ThemeProvider } from '../components/ThemeProvider'
import Link from 'next/link'
import { ThemeSelector } from '../components/ThemeSelector'

export const metadata = {
  title: 'Enterprise Expense Approval System',
  description: 'ASE framework test proof',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen">
        <ThemeProvider>
          <nav className="app-card rounded-none border-t-0 border-x-0 p-4 flex justify-between items-center">
            <div className="font-bold text-xl"><Link href="/">Expense System</Link></div>
            <div className="flex gap-4 items-center">
              <Link href="/employee" className="hover:underline">Employee</Link>
              <Link href="/manager" className="hover:underline">Manager</Link>
              <Link href="/finance" className="hover:underline">Finance</Link>
              <ThemeSelector />
            </div>
          </nav>
          <main className="p-8 max-w-5xl mx-auto">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}
