import Link from "next/link"
import { company } from "@/lib/site-content"

export function SectionTitle({
  eyebrow,
  title,
  desc,
  align = "center",
}: {
  eyebrow?: string
  title: string
  desc?: string
  align?: "center" | "left"
}) {
  return (
    <div className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : "text-left"}`}>
      {eyebrow && (
        <span className="font-mono text-xs font-semibold tracking-widest text-primary">{eyebrow}</span>
      )}
      <h2 className="mt-3 text-balance text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
        {title}
      </h2>
      {desc && <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground">{desc}</p>}
    </div>
  )
}

export function PageHeader({
  eyebrow,
  title,
  desc,
}: {
  eyebrow: string
  title: string
  desc: string
}) {
  return (
    <section className="relative overflow-hidden border-b border-border bg-soft">
      <div className="dot-backdrop absolute inset-0 opacity-60" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
        <span className="font-mono text-xs font-semibold tracking-widest text-primary">{eyebrow}</span>
        <h1 className="mt-4 max-w-3xl text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">{desc}</p>
      </div>
    </section>
  )
}

export function CTA() {
  return (
    <section id="contact" className="relative overflow-hidden bg-primary">
      <div className="grid-backdrop absolute inset-0 opacity-30" aria-hidden="true" />
      <div className="relative mx-auto max-w-4xl px-5 py-16 text-center lg:px-8 lg:py-20">
        <h2 className="text-balance text-2xl font-bold tracking-tight text-primary-foreground sm:text-3xl">
          先选一个能上线的 AI 场景，再把能力沉淀下来
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-pretty text-base leading-relaxed text-primary-foreground/85">
          与 {company.brand} 交流业务场景、数据条件和上线约束，获得一份从 Demo 到生产系统的诊断路径
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href={`mailto:${company.email}`}
            className="rounded-lg bg-background px-6 py-3 text-sm font-semibold text-primary transition-colors hover:bg-muted"
          >
            发送场景需求
          </a>
          <Link
            href="/cases"
            className="rounded-lg border border-white/30 px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-white/10"
          >
            查看实践案例
          </Link>
        </div>
      </div>
    </section>
  )
}
