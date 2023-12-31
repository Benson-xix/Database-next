import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'

const poppins = Poppins({
   weight:[ "400", "600"],
   subsets: ["latin"]
  })

export const metadata: Metadata = {
  title: 'Manhwa Database',
  description: 'Manhwa Database',
  keywords: ["books", "manhwa", "database", "manga" ]
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
