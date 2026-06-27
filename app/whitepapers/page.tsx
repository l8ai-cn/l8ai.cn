import type { Metadata } from "next"
import Link from "next/link"
import { Icon } from "@/components/icon"
import { PageHeader, CTA } from "@/components/ui-bits"
import { whitepapers } from "@/lib/whitepapers"

export const metadata: Metadata = {
  title: "白皮书",
  description: "L8AI 产品矩阵、八维方法、课程体系和 Do 引擎的完整白皮书文档。",
}

function formatDate(d: string) {
  const date = new Date(d)
  return `${date.getFullYear()} 年 ${date.getMonth() + 1} 月`
}

export default function WhitepapersPage() {
  return (
    <main>
      <PageHeader
        eyebrow="WHITEPAPERS"
        title="白皮书与技术文档"
        desc="深入了解 L8AI 的产品矩阵、八维方法、课程体系与 Do 引擎。每一份白皮书都凝结了我们在企业 AI 生产化一线的实践与思考。"
      />

      <section className="mx-auto max-w-5xl px-5 py-16 lg:px-8 lg:py-20">
        <div className="grid gap-6">
          {whitepapers.map((w) => (
            <Link
              key={w.slug}
              href={`/whitepapers/${w.slug}`}
              className="group flex flex-col gap-5 rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/40 hover:shadow-lg sm:flex-row sm:items-center sm:p-8"
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Icon name="book" size={26} />
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2 text-xs">
                  <span className="rounded-full bg-primary/10 px-3 py-1 font-mono font-semibold text-primary">
                    {w.category}
                  </span>
                  <span className="font-mono text-muted-foreground">{w.version}</span>
                  <span aria-hidden="true" className="text-muted-foreground">
                    ·
                  </span>
                  <span className="text-muted-foreground">更新于 {formatDate(w.updated)}</span>
                  <span aria-hidden="true" className="text-muted-foreground">
                    ·
                  </span>
                  <span className="text-muted-foreground">{w.readTime}</span>
                </div>
                <h2 className="mt-3 text-balance text-xl font-bold tracking-tight text-foreground">{w.title}</h2>
                <p className="mt-1 text-sm font-medium text-ink-2">{w.subtitle}</p>
                <p className="mt-3 text-pretty text-sm leading-relaxed text-muted-foreground">{w.abstract}</p>
              </div>
              <span className="hidden shrink-0 items-center gap-1.5 font-mono text-sm font-semibold text-primary group-hover:underline sm:inline-flex">
                阅读全文
                <Icon name="arrowRight" size={16} className="transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <CTA />
    </main>
  )
}
