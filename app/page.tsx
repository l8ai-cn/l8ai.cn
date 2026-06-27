import Link from "next/link"
import { Hero } from "@/components/home/hero"
import { Icon } from "@/components/icon"
import { SectionTitle, CTA } from "@/components/ui-bits"
import { productLayers, methodSteps, doTools, caseCards } from "@/lib/site-content"

export default function HomePage() {
  return (
    <main>
      <Hero />

      {/* 8L 核心产品 */}
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <SectionTitle
          eyebrow="8L 核心产品"
          title="八层结构，构建企业 AI 落地操作系统"
          desc="从机会识别到持续运营，覆盖 AI 落地的全生命周期。"
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {productLayers.map((layer) => (
            <Link
              key={layer.id}
              href={`/products#${layer.id}`}
              className="group relative flex flex-col rounded-xl border border-border bg-card p-5 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_18px_45px_rgba(12,41,92,0.1)]"
            >
              <div className="flex items-center justify-between">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Icon name={layer.icon} size={20} />
                </span>
                <span className="font-mono text-xs font-semibold text-muted-foreground">{layer.no}</span>
              </div>
              <h3 className="mt-4 text-base font-bold text-foreground">{layer.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{layer.desc}</p>
              <span className="mt-3 font-mono text-[11px] font-semibold uppercase tracking-wide text-primary/70">
                {layer.code}
              </span>
            </Link>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            href="/products"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
          >
            查看 8L 产品体系详情 <Icon name="arrow" size={16} />
          </Link>
        </div>
      </section>

      {/* 6L 方法论 */}
      <section className="border-y border-border bg-soft">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <SectionTitle
            eyebrow="6L 方法论"
            title="从问题到价值的工程化路径"
            desc="Locate、Learn、Layer、Link、Launch、Loop，让 AI 真正产生业务价值。"
          />
          <div className="mt-12 grid gap-4 md:grid-cols-3 lg:grid-cols-6">
            {methodSteps.map((step, i) => (
              <div
                key={step.id}
                className="relative flex flex-col rounded-xl border border-border bg-card p-5"
              >
                <div className="flex items-center gap-2">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                    {step.no}
                  </span>
                  <Icon name={step.icon} size={18} className="text-primary" />
                </div>
                <h3 className="mt-3 text-sm font-bold text-foreground">{step.title}</h3>
                <p className="mt-1 font-mono text-[11px] font-semibold uppercase tracking-wide text-primary/70">
                  {step.code}
                </p>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{step.desc}</p>
                {i < methodSteps.length - 1 && (
                  <span className="absolute -right-2 top-8 hidden text-border lg:block" aria-hidden="true">
                    <Icon name="arrow" size={16} />
                  </span>
                )}
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/method"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
            >
              了解 6L 方法论 <Icon name="arrow" size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* 3Do 工具 */}
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <SectionTitle
          eyebrow="3Do 工具"
          title="Do 系列工程引擎支撑真实交付"
          desc="Doops、DoAgent、DoDNS 组成部署、执行、网络与治理的工程底座。"
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {doTools.map((tool) => (
            <Link
              key={tool.id}
              href={`/tools#${tool.id}`}
              className="group flex flex-col rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_18px_45px_rgba(12,41,92,0.1)]"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <Icon name={tool.icon} size={24} />
              </span>
              <h3 className="mt-4 text-xl font-bold text-foreground">{tool.name}</h3>
              <p className="mt-1 font-mono text-xs font-semibold text-primary/70">{tool.tagline}</p>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{tool.desc}</p>
              <ul className="mt-4 space-y-1.5">
                {tool.bullets.map((b) => (
                  <li key={b} className="flex items-center gap-2 text-sm text-ink-2">
                    <Icon name="check" size={14} className="text-accent" />
                    {b}
                  </li>
                ))}
              </ul>
            </Link>
          ))}
        </div>
      </section>

      {/* 案例 */}
      <section className="border-y border-border bg-soft">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <SectionTitle
            eyebrow="实践案例"
            title="与领先企业共创真实价值"
            desc="深入业务一线，交付可衡量的结果。"
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {caseCards.map((card) => (
              <article key={card.id} className="flex flex-col rounded-xl border border-border bg-card p-5">
                <span className="w-fit rounded-full bg-primary/10 px-2.5 py-1 text-xs font-semibold text-primary">
                  {card.tag}
                </span>
                <h3 className="mt-3 text-base font-bold leading-snug text-foreground">{card.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{card.desc}</p>
                <div className="mt-4 grid grid-cols-2 gap-3 border-t border-border pt-4">
                  {card.metrics.map(([value, label]) => (
                    <div key={label}>
                      <p className="text-lg font-bold text-primary">{value}</p>
                      <p className="text-[11px] text-muted-foreground">{label}</p>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/cases"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
            >
              查看更多案例 <Icon name="arrow" size={16} />
            </Link>
          </div>
        </div>
      </section>

      <CTA />
    </main>
  )
}
