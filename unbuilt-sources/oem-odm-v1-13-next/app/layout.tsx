import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const geist = Geist({
  subsets: ["latin", "vietnamese"],
  variable: "--font-geist",
  display: "swap",
})

const geistMono = Geist_Mono({
  subsets: ["latin", "vietnamese"],
  variable: "--font-geist-mono",
  display: "swap",
})

export const metadata: Metadata = {
  title: "PKGBattery — Sản xuất pin lithium công nghiệp OEM/ODM tại Việt Nam",
  description:
    "PKGBattery cung cấp giải pháp pin lithium công nghiệp OEM/ODM: tư vấn kỹ thuật, thiết kế theo yêu cầu, sản xuất tại nhà máy riêng và kiểm soát chất lượng đầu vào – đầu ra.",
  generator: "v0.app",
  applicationName: "PKGBattery OEM/ODM",
  keywords: [
    "PKGBattery",
    "pin lithium công nghiệp",
    "OEM pin",
    "ODM pin",
    "battery pack tùy chỉnh",
    "nhà máy pin Việt Nam",
    "BMS",
    "industrial lithium battery",
  ],
}

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="vi"
      className={`${geist.variable} ${geistMono.variable} bg-background`}
    >
      <body className="font-sans antialiased text-foreground">
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  )
}
