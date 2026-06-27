import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Icon } from "@/components/icon"
import { CTA } from "@/components/ui-bits"
import { company } from "@/lib/site-content"
import { courses } from "@/lib/courses"

const trackLabel: Record<string, string> = {
  "8L": "产品矩阵课",
  xL: "八维方法课",
  xDo: "Do 引擎课",
  Operations: "运营治理课",
}

export function generateStaticParams() {
  return courses.map((c) => ({ id: c.id }))
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params
  const course = courses.find((c) => c.id === id)
  if (!course) return { title: "课程" }
  return { title: course.pageTitle, description: course.summary }
}

export default async function CourseDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const course = courses.find((c) => c.id === id)
  if (!course) notFound()

  const facts = [
    { label: "适合人群", value: course.audience },
    { label: "课程时长", value: course.duration },
    { label: "难度级别", value: course.level },
  ]

  return (
    <main>
      <section className="relative overflow-hidden border-b border-border bg-soft">
        <div className="dot-backdrop absolute inset-0 opacity-60" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
          <Link
            href="/courses"
            className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold text-primary hover:underline"
          >
            <Icon name="arrowRight" size={14} className="rotate-180" />
            返回课程列表
          </Link>
          <span className="mt-6 inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 font-mono text-xs font-semibold text-primary">
            {trackLabel[course.track]}
          </span>
          <h1 className="mt-4 max-w-3xl text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {course.title}
          </h1>
          <p className="mt-2 text-lg font-medium text-primary/80">{course.subtitle}</p>
          <p className="mt-5 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground">{course.summary}</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[1.6fr_1fr]">
          <div>
            <h2 className="text-xl font-bold text-foreground">课程模块</h2>
            <div className="mt-6 space-y-4">
              {course.modules.map((m, i) => (
                <article key={m.title} className="rounded-2xl border border-border bg-card p-5 lg:p-6">
                  <div className="flex items-start gap-4">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary font-mono text-sm font-bold text-primary-foreground">
                      {i + 1}
                    </span>
                    <div className="flex-1">
                      <h3 className="text-base font-bold text-foreground">{m.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        <span className="font-semibold text-ink-2">目标：</span>
                        {m.objective}
                      </p>
                      <p className="mt-1.5 inline-flex items-center gap-1.5 text-sm text-accent">
                        <Icon name="check" size={14} />
                        <span className="font-semibold">交付物：</span>
                        <span className="text-muted-foreground">{m.deliverable}</span>
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <h2 className="mt-12 text-xl font-bold text-foreground">学习成果</h2>
            <div className="mt-4 flex items-start gap-3 rounded-2xl border border-accent/30 bg-accent/5 p-5">
              <Icon name="rocket" size={22} className="mt-0.5 shrink-0 text-accent" />
              <p className="text-base leading-relaxed text-ink-2">{course.outcome}</p>
            </div>
          </div>

          <aside>
            <div className="sticky top-24 space-y-6">
              <div className="rounded-2xl border border-border bg-card p-6">
                <h2 className="text-base font-bold text-foreground">课程信息</h2>
                <dl className="mt-4 space-y-4 text-sm">
                  {facts.map((f) => (
                    <div key={f.label}>
                      <dt className="font-mono text-xs uppercase tracking-wide text-muted-foreground">{f.label}</dt>
                      <dd className="mt-1 leading-relaxed text-foreground">{f.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              <div className="rounded-2xl border border-border bg-card p-6">
                <h2 className="text-base font-bold text-foreground">配套工具</h2>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {course.tools.map((t) => (
                    <li
                      key={t}
                      className="inline-flex items-center gap-1.5 rounded-full bg-muted px-3 py-1.5 font-mono text-xs text-ink-2"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href={`mailto:${company.email}?subject=课程咨询：${course.title}`}
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-strong"
              >
                <Icon name="chat" size={16} />
                咨询报名
              </a>
            </div>
          </aside>
        </div>
      </section>

      <CTA />
    </main>
  )
}
