import type { Metadata } from "next"
import Link from "next/link"
import { Icon } from "@/components/icon"
import { PageHeader, CTA, SectionTitle } from "@/components/ui-bits"
import { methodDimensions } from "@/lib/site-content"

export const metadata: Metadata = {
  title: "八维方法",
  description:
    "L8AI 八维方法把 8L 产品矩阵转化为企业 AI 落地方法论，每一维都有问题、输入、动作、产出和验收标准。",
}

const phases = [
  {
    title: "定义价值",
    desc: "先确定业务问题、机会优先级和可验收目标，避免 AI 项目停留在演示层。",
    items: ["Landscape", "Logic"],
  },
  {
    title: "验证能力",
    desc: "用知识实验和系统连接验证 AI 是否能处理真实数据、权限和流程。",
    items: ["Lab", "Link"],
  },
  {
    title: "交付系统",
    desc: "把试点应用、评测学习和生产运营连成可上线、可观测、可治理的系统。",
    items: ["Launchpad", "Learn", "Live"],
  },
  {
    title: "沉淀复用",
    desc: "把一次项目的经验转成模板、课程、连接器和行业包，服务下一次交付。",
    items: ["Loop"],
  },
]

export default function MethodPage() {
  return (
    <main>
      <PageHeader
        eyebrow="八维方法"
        title="八维方法：把产品矩阵变成落地路径"
        desc="八维方法回答“企业 AI 应该怎么落地”。它不是另起一套概念，而是把 8L 产品矩阵转成可执行的工程方法：每一维都有问题、输入、动作、产出和验收标准。"
      />

      <section className="mx-auto max-w-7xl px-5 py-14 lg:px-8">
        <div className="grid gap-4 lg:grid-cols-4">
          {phases.map((phase, index) => (
            <article key={phase.title} className="rounded-xl border border-border bg-card p-5">
              <span className="font-mono text-xs font-semibold text-primary">PHASE {index + 1}</span>
              <h2 className="mt-2 text-lg font-bold text-foreground">{phase.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{phase.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {phase.items.map((item) => (
                  <span key={item} className="rounded-full bg-primary/10 px-2.5 py-1 font-mono text-xs font-semibold text-primary">
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-soft">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
          <SectionTitle
            eyebrow="Method Canvas"
            title="每一维都按五个问题推进"
            desc="八维方法的关键不是记住名词，而是把业务问题推进到可验证产出。每个维度都必须回答：问什么、带什么、做什么、交什么、怎么验。"
          />

          <div className="mt-12 grid gap-5">
            {methodDimensions.map((item) => (
              <article
                key={item.id}
                id={item.id}
                className="scroll-mt-24 overflow-hidden rounded-2xl border border-border bg-card"
              >
                <div className="grid lg:grid-cols-[18rem_1fr]">
                  <div className="border-b border-border bg-background p-6 lg:border-b-0 lg:border-r">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                      <Icon name={item.icon} size={24} />
                    </span>
                    <p className="mt-4 font-mono text-xs font-semibold text-muted-foreground">
                      {item.no} / {item.code}
                    </p>
                    <h2 className="mt-1 text-xl font-bold text-foreground">{item.title}</h2>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.question}</p>
                  </div>
                  <div className="grid gap-px bg-border md:grid-cols-2 xl:grid-cols-4">
                    {[
                      ["输入", item.input],
                      ["动作", item.action],
                      ["产出", item.output],
                      ["验收", item.validation],
                    ].map(([label, desc]) => (
                      <div key={label} className="bg-card p-5">
                        <h3 className="text-sm font-bold text-primary">{label}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
        <div className="grid gap-8 rounded-2xl border border-border bg-card p-6 lg:grid-cols-[1fr_auto] lg:p-8">
          <div>
            <span className="font-mono text-xs font-semibold tracking-widest text-primary">从方法到页面</span>
            <h2 className="mt-3 text-2xl font-bold text-foreground">八维方法和产品矩阵一一对应</h2>
            <p className="mt-3 max-w-3xl text-base leading-relaxed text-muted-foreground">
              产品矩阵定义“建设哪些能力”，八维方法定义“如何把能力落到项目”。课程体系会把这套方法拆成可训练任务，工程引擎负责支撑真实环境中的发布、执行和入口治理。
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 lg:justify-end">
            <Link href="/products" className="rounded-lg border border-border px-4 py-2 text-sm font-semibold text-foreground hover:border-primary hover:text-primary">
              产品矩阵
            </Link>
            <Link href="/courses" className="rounded-lg border border-border px-4 py-2 text-sm font-semibold text-foreground hover:border-primary hover:text-primary">
              课程体系
            </Link>
            <Link href="/tools" className="rounded-lg border border-border px-4 py-2 text-sm font-semibold text-foreground hover:border-primary hover:text-primary">
              工程引擎
            </Link>
          </div>
        </div>
      </section>

      <CTA />
    </main>
  )
}
