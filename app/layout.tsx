import type React from "react"
import type { Metadata } from "next"
import localFont from "next/font/local"
import "./globals.css"
import GlassmorphNavbar from "@/components/ui/glassmorph-navbar"

const satoshi = localFont({
  src: [
    {
      path: "../fonts/Satoshi-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/Satoshi-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/Satoshi-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-satoshi",
  fallback: ["system-ui", "arial"],
})

export const metadata: Metadata = {
  title: "FTC Team 20381 ┃ Killer Instinct A",
  description: "Killer Instinct A FTC Team Page",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${satoshi.variable} font-sans antialiased bg-black`}>
        <GlassmorphNavbar />
        {children}
      </body>
    </html>
  )
}
