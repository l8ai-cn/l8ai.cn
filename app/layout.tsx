import type { Metadata, Viewport } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { AiAssistant } from "@/components/ai-assistant"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
})

export const metadata: Metadata = {
  title: {
    default: "L8AI 企业 AI 实战 | 8L 核心产品 · 6L 方法论 · 3Do 工具",
    template: "%s | L8AI",
  },
  description:
    "L8AI（杭州来八数智）以 8L 核心产品、6L 方法论、3Do 工程引擎与企业 AI 课程体系，帮助企业把 AI 从 Demo 推进到可运营、可度量、可持续进化的真实业务系统。",
  keywords: ["企业 AI 落地", "8L", "6L 方法论", "3Do", "FDE", "AI Agent", "L8AI", "来八数智"],
  metadataBase: new URL("https://l8ai.cn"),
  openGraph: {
    title: "L8AI 企业 AI 实战",
    description: "8L 核心产品 · 6L 方法论 · 3Do 工具，帮助企业把 AI 落到真实业务系统。",
    type: "website",
    locale: "zh_CN",
  },
}

export const viewport: Viewport = {
  themeColor: "#10bfd0",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN" className={`bg-background ${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans antialiased">
        <SiteHeader />
        {children}
        <SiteFooter />
        <AiAssistant />
      </body>
    </html>
  )
}
