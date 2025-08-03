import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Florelyn Gregorio | Portfolio",
  description: "Personal portfolio website showcasing my projects and skills",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <base href="/modern-portfolio/" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
