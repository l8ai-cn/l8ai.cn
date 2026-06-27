import type { Metadata } from "next"
import Link from "next/link"
import { Icon } from "@/components/icon"
import { CTA } from "@/components/ui-bits"
import { Reveal } from "@/components/reveal"
import { methodSteps, company } from "@/lib/site-content"

export const metadata: Metadata = {
  title: "6L 方法论",
  description:
    "6L 方法论：Locate 定位、Learn 学习、Layer 分层、Link 连接、Launch 上线、Loop 闭环，构建从问题到价值闭环的工程化交付路径。",
}

export default function MethodPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border bg-soft">
        <div className="dot-backdrop absolute inset-0 opacity-60" aria-hidden="true" />
        <div
          className="animate-float-slow absolute -right-24 -top-24 h-72 w-72 rounded-full bg-primary/10 blur-3xl"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
          <Reveal>
            <span className="font-mono text-xs font-semibold uppercase tracking-widest text-primary">
              6L 方法论
            </span>
            <h1 className="mt-4 max-w-3xl text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              从定位到闭环的工程化交付路径
            </h1>
            <p className="mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
              6L 方法论将企业 AI 落地拆解为六个可执行阶段，每个阶段都有清晰的目标、动作与交付物，让 AI 项目可规划、可推进、可验收。
            </p>
          </Reveal>

          {/* 6L 流程带 */}
          <Reveal delay={120}>
            <div className="mt-12 flex flex-wrap items-center gap-x-2 gap-y-4">
              {methodSteps.map((step, i) => (
                <div key={step.id} className="flex items-center">
                  <Link
                    href={`#${step.id}`}
                    className="group flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3 transition-all hover:border-primary hover:shadow-[0_12px_30px_rgba(16,191,208,0.18)]"
                  >
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 font-mono text-base font-bold text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                      L
                    </span>
                    <span className="leading-tight">
                      <span className="block font-mono text-[11px] font-semibold uppercase tracking-wide text-primary/80">
                        {step.code}
                      </span>
                      <span className="block text-sm font-semibold text-foreground">{step.title}</span>
                    </span>
                  </Link>
                  {i < methodSteps.length - 1 && (
                    <Icon name="arrowRight" size={18} className="mx-1 shrink-0 text-muted-foreground/50" />
                  )}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* 时间线 */}
      <section className="relative mx-auto max-w-5xl px-5 py-16 lg:px-8 lg:py-24">
        <div className="relative">
          {/* 中轴线 */}
          <div
            className="absolute left-7 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/40 to-transparent md:left-1/2 md:-translate-x-1/2"
            aria-hidden="true"
          />

          <div className="space-y-10 md:space-y-16">
            {methodSteps.map((step, i) => {
              const isLeft = i % 2 === 0
              return (
                <Reveal key={step.id} delay={60}>
                  <article
                    id={step.id}
                    className={`relative scroll-mt-28 md:grid md:grid-cols-2 md:items-center md:gap-12 ${
                      isLeft ? "" : "md:[direction:rtl]"
                    }`}
                  >
                    {/* 节点圆点 */}
                    <span
                      className="absolute left-7 top-7 z-10 flex h-3.5 w-3.5 -translate-x-1/2 items-center justify-center rounded-full bg-primary ring-4 ring-background md:left-1/2"
                      aria-hidden="true"
                    >
                      <span className="absolute h-full w-full animate-ping rounded-full bg-primary/40" />
                    </span>

                    {/* 卡片 */}
                    <div
                      className={`ml-16 [direction:ltr] md:ml-0 ${isLeft ? "md:pr-12 md:text-right" : "md:pl-12"}`}
                    >
                      <div className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/50 hover:shadow-[0_22px_55px_rgba(12,41,92,0.12)] lg:p-7">
                        <span
                          className="pointer-events-none absolute -right-6 -top-8 font-mono text-[88px] font-bold leading-none text-primary/[0.06] transition-colors group-hover:text-primary/10"
                          aria-hidden="true"
                        >
                          {step.no}
                        </span>
                        <div
                          className={`flex items-center gap-3 ${isLeft ? "md:flex-row-reverse" : ""}`}
                        >
                          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                            <Icon name={step.icon} size={24} />
                          </span>
                          <div className={isLeft ? "md:text-right" : ""}>
                            <span className="font-mono text-xs font-semibold text-muted-foreground">
                              STEP {step.no} · {step.code}
                            </span>
                            <h2 className="text-lg font-bold text-foreground">{step.title}</h2>
                          </div>
                        </div>
                        <p className="mt-4 text-base leading-relaxed text-muted-foreground">{step.desc}</p>
                        <ul className={`mt-4 flex flex-wrap gap-2 ${isLeft ? "md:justify-end" : ""}`}>
                          {step.bullets.map((b) => (
                            <li
                              key={b}
                              className="inline-flex items-center gap-1.5 rounded-full bg-muted px-3 py-1.5 text-sm text-ink-2"
                            >
                              <Icon name="check" size={14} className="text-primary" />
                              {b}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* 占位（另一侧） */}
                    <div className="hidden md:block" aria-hidden="true" />
                  </article>
                </Reveal>
              )
            })}
          </div>
        </div>

        {/* 闭环回路提示 */}
        <Reveal>
          <div className="mt-14 flex items-center justify-center gap-3 rounded-2xl border border-dashed border-primary/40 bg-primary/5 px-6 py-5 text-center">
            <Icon name="activity" size={20} className="shrink-0 text-primary" />
            <p className="text-sm leading-relaxed text-ink-2">
              <span className="font-semibold text-foreground">Loop 不是终点</span>
              ——闭环阶段的反馈会回流到 Locate，驱动方法论持续循环，让 AI 系统长期进化。
            </p>
          </div>
        </Reveal>
      </section>

      <CTA />
    </main>
  )
}
