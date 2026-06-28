import type { Metadata } from "next"
import { Icon } from "@/components/icon"
import { PageHeader, CTA } from "@/components/ui-bits"
import { doTools } from "@/lib/site-content"

export const metadata: Metadata = {
  title: "工程引擎",
  description:
    "工程引擎由 Doops、DoAgent、DoDNS、DoSQL、DoSecurity、DoProject 组成，为企业 AI 应用提供部署运维、任务执行、入口治理、数据查询、安全审计与项目交付能力。",
}

export default function ToolsPage() {
  return (
    <main>
      <PageHeader
        eyebrow="工程引擎"
        title="工程引擎：支撑 AI 应用从开发到生产"
        desc="工程引擎也称 Do 引擎，回答“系统如何真实跑起来、如何安全运行、如何持续交付”。Doops、DoAgent、DoDNS、DoSQL、DoSecurity、DoProject 分别处理部署运维、任务执行、入口路由、数据查询、安全治理和项目闭环。"
      />

      <section className="mx-auto max-w-7xl px-5 py-14 lg:px-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            ["部署运维", "从代码、镜像、Kubernetes 到运行诊断，形成发布闭环。"],
            ["任务执行", "让 Agent 通过工具、队列和权限边界执行真实任务。"],
            ["入口治理", "统一域名、证书、Ingress、流量路由和可访问性验证。"],
            ["数据查询", "把自然语言问题转成受控 SQL，统一指标口径和查询审计。"],
            ["安全审计", "统一权限、密钥、调用审计、风险策略和事件响应。"],
            ["项目交付", "把计划、任务、验收证据和复盘资产沉淀为项目闭环。"],
          ].map(([title, desc]) => (
            <div key={title} className="rounded-xl border border-border bg-card p-5">
              <h2 className="text-base font-bold text-foreground">{title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </section>

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
                    <span className="font-mono text-xs font-semibold text-muted-foreground">0{i + 1} / Do Engine</span>
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
                {[
                  ["使用场景", tool.features[0]?.desc ?? tool.desc],
                  ["交付物", tool.features[1]?.desc ?? tool.bullets.join("、")],
                  ["验收方式", tool.features[2]?.desc ?? "能在真实环境中稳定运行并可追踪。"],
                ].map(([title, desc]) => (
                    <div key={title} className="bg-card p-6 lg:p-8">
                      <Icon name="circleCheck" size={22} className="text-primary" />
                      <h3 className="mt-3 text-base font-bold text-foreground">{title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
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
