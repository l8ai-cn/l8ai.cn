import type { Metadata } from "next"
import { Icon } from "@/components/icon"
import { PageHeader, CTA } from "@/components/ui-bits"
import { methodSteps } from "@/lib/site-content"

export const metadata: Metadata = {
  title: "6L 方法论",
  description:
    "6L 方法论：Locate 定位、Learn 学习、Layer 分层、Link 连接、Launch 上线、Loop 闭环，构建从问题到价值闭环的工程化交付路径。",
}

export default function MethodPage() {
  return (
    <main>
      <PageHeader
        eyebrow="6L 方法论"
        title="从定位到闭环的工程化交付路径"
        desc="6L 方法论将企业 AI 落地拆解为六个可执行阶段，每个阶段都有清晰的目标、动作与交付物，让 AI 项目可规划、可推进、可验收。"
      />

      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
        <div className="relative">
          <div
            className="absolute left-[27px] top-2 bottom-2 hidden w-px bg-border md:block"
            aria-hidden="true"
          />
          <div className="space-y-6">
            {methodSteps.map((step) => (
              <article
                key={step.id}
                id={step.id}
                className="scroll-mt-24 relative grid gap-5 rounded-2xl border border-border bg-card p-6 md:grid-cols-[auto_1fr] md:pl-20 lg:p-8 lg:pl-24"
              >
                <span className="absolute left-4 top-6 z-10 hidden h-14 w-14 items-center justify-center rounded-xl bg-primary text-primary-foreground md:flex lg:left-6">
                  <Icon name={step.icon} size={26} />
                </span>
                <div className="flex items-center gap-4 md:block">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground md:hidden">
                    <Icon name={step.icon} size={24} />
                  </span>
                  <div>
                    <span className="font-mono text-xs font-semibold text-muted-foreground">STEP {step.no}</span>
                    <h2 className="text-lg font-bold text-foreground">
                      {step.title}
                      <span className="ml-2 font-mono text-sm font-semibold text-primary/70">{step.code}</span>
                    </h2>
                  </div>
                </div>
                <div>
                  <p className="text-base leading-relaxed text-muted-foreground">{step.desc}</p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {step.bullets.map((b) => (
                      <li
                        key={b}
                        className="inline-flex items-center gap-1.5 rounded-full bg-muted px-3 py-1.5 text-sm text-ink-2"
                      >
                        <Icon name="check" size={14} className="text-accent" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </main>
  )
}
