import Link from "next/link"
import { Hero } from "@/components/home/hero"
import { Icon } from "@/components/icon"
import { SectionTitle, CTA } from "@/components/ui-bits"
import { productLayers, methodDimensions, doTools, caseCards } from "@/lib/site-content"

export default function HomePage() {
  return (
    <main>
      <Hero />

      {/* 产品矩阵 */}
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <SectionTitle
          eyebrow="产品矩阵"
          title="8L 产品矩阵：构建企业 AI 生产化操作系统"
          desc="从机会识别、知识实验、系统连接到上线治理，定义企业 AI 系统应该具备的八个产品能力层。"
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
              <span className="mt-3 font-mono text-[11px] font-semibold tracking-wide text-primary/70">
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
            查看产品矩阵详情 <Icon name="arrow" size={16} />
          </Link>
        </div>
      </section>

      {/* 八维方法 */}
      <section className="border-y border-border bg-soft">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <SectionTitle
            eyebrow="八维方法"
            title="八维方法：每一维都有输入、动作、产出与验收"
            desc="Landscape、Logic、Lab、Link、Launchpad、Learn、Live、Loop，把产品矩阵转成可执行的企业 AI 落地路径。"
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {methodDimensions.map((step, i) => (
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
                <p className="mt-1 font-mono text-[11px] font-semibold tracking-wide text-primary/70">
                  {step.code}
                </p>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{step.question}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/method"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
            >
              查看八维方法 <Icon name="arrow" size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* 工程引擎 */}
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <SectionTitle
          eyebrow="工程引擎"
          title="Do 系列工程引擎支撑真实交付"
          desc="Doops、DoAgent、DoDNS、DoSecurity、DoProject 组成部署运维、任务执行、入口治理、安全审计和项目交付的工程底座。"
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
            title="把方法落到可交付业务系统"
            desc="用 FDE 方式拆解典型企业 AI 场景，明确数据、权限、集成、评测和运营边界。"
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
              查看实践案例 <Icon name="arrow" size={16} />
            </Link>
          </div>
        </div>
      </section>

      <CTA />
    </main>
  )
}
