import type { Metadata } from "next"
import { Icon } from "@/components/icon"
import { PageHeader, CTA } from "@/components/ui-bits"
import { productLayers } from "@/lib/site-content"

export const metadata: Metadata = {
  title: "8L 产品分层",
  description: "8L 产品分层构建企业 AI 生产化操作系统：场景雷达、方案工作台、知识与 RAG、Agent/MCP 集成、应用脚手架、Eval、LiveOps、资产闭环。",
}

export default function ProductsPage() {
  return (
    <main>
      <PageHeader
        eyebrow="8L 产品分层"
        title="构建企业 AI 生产化操作系统"
        desc="从机会识别、知识实验、系统连接到上线治理，8L 覆盖企业 AI 的全生命周期，每一层都有明确的输入、输出与验收标准。"
      />

      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
        <div className="space-y-5">
          {productLayers.map((layer, i) => (
            <article
              key={layer.id}
              id={layer.id}
              className="scroll-mt-24 grid gap-6 rounded-2xl border border-border bg-card p-6 md:grid-cols-[auto_1fr] lg:p-8"
            >
              <div className="flex items-start gap-4 md:w-64">
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                  <Icon name={layer.icon} size={26} />
                </span>
                <div>
                  <span className="font-mono text-xs font-semibold text-muted-foreground">L{layer.no}</span>
                  <h2 className="text-lg font-bold text-foreground">{layer.title}</h2>
                  <p className="font-mono text-xs font-semibold text-primary/70">{layer.code}</p>
                </div>
              </div>
              <div className="md:border-l md:border-border md:pl-8">
                <p className="text-base leading-relaxed text-muted-foreground">{layer.desc}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {layer.bullets.map((b) => (
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
      </section>

      <CTA />
    </main>
  )
}
