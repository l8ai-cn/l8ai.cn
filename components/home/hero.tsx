import Link from "next/link"
import { Icon } from "@/components/icon"
import { heroProof, heroMetrics, productLayers } from "@/lib/site-content"

function Workbench() {
  return (
    <div className="rounded-2xl border border-border bg-card p-5 shadow-[0_24px_60px_rgba(12,41,92,0.12)]">
      <div className="flex items-center justify-between border-b border-border pb-3">
        <span className="font-mono text-xs font-semibold text-ink-2">L8AI 企业 AI 生产化工作台</span>
        <div className="flex gap-1.5" aria-hidden="true">
          <span className="h-2.5 w-2.5 rounded-full bg-border" />
          <span className="h-2.5 w-2.5 rounded-full bg-border" />
          <span className="h-2.5 w-2.5 rounded-full bg-accent" />
        </div>
      </div>
      <div className="mt-4 grid gap-3 sm:grid-cols-5">
        <div className="space-y-1.5 sm:col-span-3">
          {productLayers.map((layer, i) => (
            <div
              key={layer.id}
              className={`flex items-center gap-2 rounded-lg border px-2.5 py-2 text-xs ${
                i === 0
                  ? "border-primary/40 bg-primary/5 text-primary"
                  : "border-border bg-soft text-ink-2"
              }`}
            >
              <span className="font-mono text-[10px] opacity-70">{layer.no}</span>
              <Icon name={layer.icon} size={14} />
              <span className="font-semibold">{layer.title}</span>
            </div>
          ))}
        </div>
        <div className="rounded-xl border border-border bg-soft p-3 sm:col-span-2">
          <span className="font-mono text-[10px] font-semibold tracking-wide text-muted-foreground">
            生产化体系看板
          </span>
          <div className="mt-3 grid grid-cols-2 gap-3">
            {heroMetrics.map((m) => (
              <div key={m.label}>
                <p className="text-lg font-bold text-primary">{m.value}</p>
                <p className="text-[11px] text-muted-foreground">{m.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="grid-backdrop absolute inset-0 opacity-70" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 font-mono text-xs font-semibold text-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Enterprise AI Productionization · FDE
            </span>
            <h1 className="mt-5 text-balance text-4xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-5xl">
              把企业 AI 从 Demo 推进到可运营的生产系统
            </h1>
            <p className="mt-5 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
              L8AI（杭州来八数智有限公司）以 FDE 现场工程、8L 产品分层、xL 交付路径和 xDo 工具链，帮助企业识别高价值场景，打通数据、权限、系统集成、评测、部署和运营闭环。
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/about#contact"
                className="rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-light"
              >
                预约落地诊断
              </Link>
              <Link
                href="/method"
                className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary hover:text-primary"
              >
                查看 xL 方法论
                <Icon name="arrow" size={16} />
              </Link>
            </div>
          </div>
          <div className="animate-fade-up [animation-delay:120ms]">
            <Workbench />
          </div>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-4 border-t border-border pt-8 lg:grid-cols-4">
          {heroProof.map((item) => (
            <div key={item.label} className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Icon name={item.icon} size={18} />
              </span>
              <span className="text-sm font-medium text-ink-2">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
