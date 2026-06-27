import type { Metadata } from "next"
import { Icon } from "@/components/icon"
import { PageHeader, CTA } from "@/components/ui-bits"
import { caseCards } from "@/lib/site-content"

export const metadata: Metadata = {
  title: "实践案例",
  description: "L8AI 在零售、制造、金融等行业的企业 AI 落地实践案例，用可度量的业务价值证明 AI 工程化的力量。",
}

export default function CasesPage() {
  return (
    <main>
      <PageHeader
        eyebrow="实践案例"
        title="用可度量的业务价值证明 AI 工程化"
        desc="覆盖智能客服、流程提效、营销增长与知识管理等场景，每个案例都遵循 6L 方法论交付，并用真实数据验证效果。"
      />

      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
        <div className="grid gap-6 md:grid-cols-2">
          {caseCards.map((c) => (
            <article
              key={c.id}
              className="flex flex-col rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-lg lg:p-8"
            >
              <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 font-mono text-xs font-semibold text-primary">
                <Icon name="activity" size={13} />
                {c.tag}
              </span>
              <h2 className="mt-4 text-xl font-bold text-foreground">{c.title}</h2>
              <p className="mt-3 flex-1 text-base leading-relaxed text-muted-foreground">{c.desc}</p>
              <div className="mt-6 grid grid-cols-2 gap-4 border-t border-border pt-6">
                {c.metrics.map(([value, label]) => (
                  <div key={label}>
                    <div className="text-2xl font-bold text-primary">{value}</div>
                    <div className="mt-1 text-sm text-muted-foreground">{label}</div>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <CTA />
    </main>
  )
}
