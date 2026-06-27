import type { Metadata } from "next"
import { Icon } from "@/components/icon"
import { PageHeader } from "@/components/ui-bits"
import { company, heroProof } from "@/lib/site-content"

export const metadata: Metadata = {
  title: "关于我们",
  description: `${company.legalNameCn}（${company.brand}）专注企业 AI 生产化，以 FDE 现场工程、产品矩阵、八维方法、课程体系与 Do 引擎，帮助企业构建可持续的 AI 能力。`,
}

const values = [
  { icon: "compass", title: "业务导向", desc: "一切从业务价值出发，拒绝为了 AI 而 AI。" },
  { icon: "blocks", title: "工程化交付", desc: "用工程方法保证质量、效率与可维护性。" },
  { icon: "shield", title: "安全可控", desc: "数据安全、权限治理与合规贯穿生产化全过程。" },
  { icon: "workflow", title: "长期陪伴", desc: "做企业 AI 旅程中可靠的长期伙伴。" },
]

export default function AboutPage() {
  return (
    <main>
      <PageHeader
        eyebrow="关于我们"
        title="让企业 AI 生产化变得可规划、可交付、可持续"
        desc={`${company.legalNameCn}（${company.brand}）是一家专注企业 AI 生产化的工程化服务公司，以 FDE 现场工程、产品矩阵、八维方法、课程体系与 Do 引擎，陪伴企业走完 AI 从探索到规模化的全过程。`}
      />

      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <h2 className="text-2xl font-bold text-foreground">我们的使命</h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              大模型时代，企业不缺 AI 的想象力，缺的是把 AI 真正接入业务、稳定运行并持续创造价值的工程能力。{company.brand}{" "}
              以体系化的产品、方法论与工具，帮助企业跨越从 Demo 到生产、从单点到规模的鸿沟。
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              我们相信，AI 生产化不是一次性项目，而是一段需要持续投入与迭代的旅程。{company.brand}{" "}
              既提供方法与工具，也提供长期陪伴，让 AI 成为企业可掌控的核心能力。
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {values.map((v) => (
                <div key={v.title} className="rounded-2xl border border-border bg-card p-5">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon name={v.icon} size={22} />
                  </span>
                  <h3 className="mt-3 text-base font-bold text-foreground">{v.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <aside id="contact" className="scroll-mt-24">
            <div className="sticky top-24 rounded-2xl border border-border bg-soft p-6 lg:p-8">
              <h2 className="text-lg font-bold text-foreground">联系我们</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                无论您处在 AI 生产化的哪个阶段，我们都乐意与您交流，提供专业建议与可执行的方案。
              </p>
              <dl className="mt-6 space-y-4 text-sm">
                <div>
                  <dt className="font-mono text-xs uppercase tracking-wide text-muted-foreground">公司名称</dt>
                  <dd className="mt-1 font-semibold text-foreground">{company.legalNameCn}</dd>
                </div>
                <div>
                  <dt className="font-mono text-xs uppercase tracking-wide text-muted-foreground">邮箱</dt>
                  <dd className="mt-1 font-semibold text-foreground">
                    <a href={`mailto:${company.email}`} className="text-primary hover:underline">
                      {company.email}
                    </a>
                  </dd>
                </div>
              </dl>
              <a
                href={`mailto:${company.email}`}
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-strong"
              >
                <Icon name="chat" size={16} />
                预约咨询
              </a>
            </div>
          </aside>
        </div>

        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {heroProof.map((p) => (
            <div key={p.label} className="flex items-center gap-3 bg-card p-6">
              <Icon name={p.icon} size={22} className="text-primary" />
              <span className="text-sm font-semibold text-foreground">{p.label}</span>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
