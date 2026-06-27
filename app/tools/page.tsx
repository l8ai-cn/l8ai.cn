import type { Metadata } from "next"
import { Icon } from "@/components/icon"
import { PageHeader, CTA } from "@/components/ui-bits"
import { doTools } from "@/lib/site-content"

export const metadata: Metadata = {
  title: "3Do 工程工具",
  description:
    "3Do 工程引擎：Doops 部署运维、DoAgent 执行引擎、DoDNS 网络治理，为企业 AI 应用提供从开发到生产的工程化支撑。",
}

export default function ToolsPage() {
  return (
    <main>
      <PageHeader
        eyebrow="3Do 工程工具"
        title="支撑 AI 应用从开发到生产的工程引擎"
        desc="3Do 是 L8AI 自研的工程工具集，覆盖部署运维、Agent 执行与网络治理三大环节，让 AI 应用真正稳定运行在生产环境。"
      />

      <section className="mx-auto max-w-7xl space-y-8 px-5 py-16 lg:px-8 lg:py-24">
        {doTools.map((tool, i) => (
          <article
            key={tool.id}
            id={tool.id}
            className="scroll-mt-24 overflow-hidden rounded-2xl border border-border bg-card"
          >
            <div className="grid gap-0 lg:grid-cols-[1fr_1.4fr]">
              <div className="border-b border-border bg-soft p-6 lg:border-b-0 lg:border-r lg:p-10">
                <div className="flex items-center gap-3">
                  <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                    <Icon name={tool.icon} size={28} />
                  </span>
                  <div>
                    <span className="font-mono text-xs font-semibold text-muted-foreground">0{i + 1} / 3Do</span>
                    <h2 className="text-2xl font-bold text-foreground">{tool.name}</h2>
                  </div>
                </div>
                <p className="mt-4 font-mono text-sm font-semibold text-primary/80">{tool.tagline}</p>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">{tool.desc}</p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {tool.bullets.map((b) => (
                    <li
                      key={b}
                      className="inline-flex items-center gap-1.5 rounded-full bg-background px-3 py-1.5 text-sm text-ink-2"
                    >
                      <Icon name="check" size={14} className="text-accent" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="grid gap-px bg-border sm:grid-cols-3">
                {tool.features.map((f) => (
                  <div key={f.title} className="bg-card p-6 lg:p-8">
                    <Icon name="circleCheck" size={22} className="text-primary" />
                    <h3 className="mt-3 text-base font-bold text-foreground">{f.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </article>
        ))}
      </section>

      <CTA />
    </main>
  )
}
