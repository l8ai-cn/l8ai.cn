import type { Metadata } from "next"
import { Icon } from "@/components/icon"
import { PageHeader, CTA, SectionTitle } from "@/components/ui-bits"
import { productLayers } from "@/lib/site-content"

export const metadata: Metadata = {
  title: "产品矩阵",
  description: "L8AI 产品矩阵以 8L 构建企业 AI 生产化操作系统：场景雷达、方案工作台、知识与 RAG、Agent/MCP 集成、应用脚手架、Eval、LiveOps、资产闭环。",
}

export default function ProductsPage() {
  return (
    <main>
      <PageHeader
        eyebrow="产品矩阵"
        title="8L 产品矩阵：企业 AI 生产化操作系统"
        desc="产品矩阵回答“企业 AI 系统应该具备哪些能力”。8L 把 AI 从场景识别、方案设计、知识实验、系统连接、应用交付、效果学习、生产运营到资产复用拆成八个可建设、可采购、可验收的产品层。"
      />

      <section className="mx-auto max-w-7xl px-5 py-14 lg:px-8">
        <div className="grid gap-4 md:grid-cols-4">
          {[
            ["业务入口", "从真实流程和指标中筛选 AI 场景，不从模型能力倒推需求。"],
            ["工程结构", "把知识、工具、权限、评测和部署拆成清晰层级。"],
            ["上线标准", "每一层都有交付物、验收口径和运营指标。"],
            ["资产复用", "项目沉淀为模板、连接器、课程和行业包。"],
          ].map(([title, desc]) => (
            <div key={title} className="rounded-xl border border-border bg-card p-5">
              <h2 className="text-base font-bold text-foreground">{title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-16 lg:px-8 lg:pb-24">
        <SectionTitle
          eyebrow="8L Layers"
          title="八个产品层，从机会到运营闭环"
          desc="每一层既是一个产品能力，也是一组交付检查点。企业可以按层建设，也可以按场景组合成完整解决方案。"
        />
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
                  <span className="font-mono text-xs font-semibold text-muted-foreground">L{layer.no} / 8L Matrix</span>
                  <h2 className="text-lg font-bold text-foreground">{layer.title}</h2>
                  <p className="font-mono text-xs font-semibold text-primary/70">{layer.code}</p>
                </div>
              </div>
              <div className="md:border-l md:border-border md:pl-8">
                <p className="text-base leading-relaxed text-muted-foreground">{layer.desc}</p>
                <ul className="mt-4 grid gap-2 sm:grid-cols-3">
                  {layer.bullets.map((b) => (
                    <li
                      key={b}
                      className="inline-flex items-center gap-1.5 rounded-lg bg-muted px-3 py-2 text-sm text-ink-2"
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
