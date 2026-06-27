import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Icon } from "@/components/icon"
import { Markdown } from "@/components/markdown"
import { CTA } from "@/components/ui-bits"
import { whitepapers, getWhitepaper } from "@/lib/whitepapers"

function formatDate(d: string) {
  const date = new Date(d)
  return `${date.getFullYear()} 年 ${date.getMonth() + 1} 月 ${date.getDate()} 日`
}

export function generateStaticParams() {
  return whitepapers.map((w) => ({ slug: w.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const w = getWhitepaper(slug)
  if (!w) return { title: "白皮书" }
  return { title: w.title, description: w.abstract }
}

export default async function WhitepaperPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const paper = getWhitepaper(slug)
  if (!paper) notFound()

  const others = whitepapers.filter((w) => w.slug !== paper.slug)

  return (
    <main>
      <section className="relative overflow-hidden border-b border-border bg-soft">
        <div className="dot-backdrop absolute inset-0 opacity-50" aria-hidden="true" />
        <div className="relative mx-auto max-w-3xl px-5 py-14 lg:py-20">
          <Link
            href="/whitepapers"
            className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold text-primary hover:underline"
          >
            <Icon name="arrowRight" size={14} className="rotate-180" />
            返回白皮书
          </Link>

          <div className="mt-6 flex flex-wrap items-center gap-2 text-xs">
            <span className="rounded-full bg-primary/10 px-3 py-1 font-mono font-semibold text-primary">
              {paper.category}
            </span>
            <span className="font-mono text-muted-foreground">{paper.version}</span>
            <span aria-hidden="true" className="text-muted-foreground">
              ·
            </span>
            <span className="text-muted-foreground">更新于 {formatDate(paper.updated)}</span>
            <span aria-hidden="true" className="text-muted-foreground">
              ·
            </span>
            <span className="text-muted-foreground">{paper.readTime}</span>
          </div>

          <h1 className="mt-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {paper.title}
          </h1>
          <p className="mt-3 text-lg font-medium text-ink-2">{paper.subtitle}</p>
          <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground">{paper.abstract}</p>
        </div>
      </section>

      <article className="mx-auto max-w-3xl px-5 py-14 lg:py-16">
        <Markdown content={paper.content} />
      </article>

      {others.length > 0 && (
        <section className="border-t border-border bg-soft">
          <div className="mx-auto max-w-5xl px-5 py-14 lg:px-8">
            <h2 className="text-lg font-bold text-foreground">更多白皮书</h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              {others.map((w) => (
                <Link
                  key={w.slug}
                  href={`/whitepapers/${w.slug}`}
                  className="group rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/40 hover:shadow-lg"
                >
                  <span className="inline-flex w-fit items-center rounded-full bg-primary/10 px-3 py-1 font-mono text-xs font-semibold text-primary">
                    {w.category}
                  </span>
                  <h3 className="mt-3 text-base font-bold text-foreground">{w.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{w.subtitle}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTA />
    </main>
  )
}
