import type { Metadata, Viewport } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { AiAssistant } from "@/components/ai-assistant"
import "./globals.css"

export const metadata: Metadata = {
  title: {
    default: "L8AI 企业 AI 实战 | 企业 AI 生产化与 FDE",
    template: "%s | L8AI",
  },
  description:
    "L8AI（杭州来八数智有限公司）专注企业 AI 生产化，以 FDE 现场工程、8L 产品矩阵、八维方法、课程体系和工程引擎，帮助企业把 AI 从 Demo、POC 推进到可上线、可评测、可运营的生产系统。",
  keywords: ["企业 AI 生产化", "企业 AI 落地", "8L", "产品矩阵", "八维方法", "工程引擎", "Do 引擎", "FDE", "AI Agent", "L8AI", "杭州来八数智有限公司"],
  metadataBase: new URL("https://l8ai.cn"),
  openGraph: {
    title: "L8AI 企业 AI 实战",
    description: "FDE 现场工程、产品矩阵、八维方法、课程体系和工程引擎，帮助企业把 AI 推进到可运营生产系统。",
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
    <html lang="zh-CN" className="bg-background">
      <body className="font-sans antialiased">
        <SiteHeader />
        {children}
        <SiteFooter />
        <AiAssistant />
      </body>
    </html>
  )
}
