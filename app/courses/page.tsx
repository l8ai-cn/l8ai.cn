import type { Metadata } from "next"
import { Icon } from "@/components/icon"
import { PageHeader, CTA, SectionTitle } from "@/components/ui-bits"
import { CoursesGrid } from "@/components/courses-grid"
import { courseCatalogIntro, courseDesignModules } from "@/lib/courses"

export const metadata: Metadata = {
  title: "课程体系",
  description: courseCatalogIntro.desc,
}

export default function CoursesPage() {
  return (
    <main>
      <PageHeader eyebrow="课程体系" title={courseCatalogIntro.title} desc={courseCatalogIntro.desc} />

      <section className="mx-auto max-w-7xl px-5 py-14 lg:px-8">
        <div className="grid gap-4 md:grid-cols-3">
          {[
            ["反向设计", "先定义最终能力和交付物，再拆学习任务。"],
            ["任务中心", "每个模块都围绕一个真实企业 AI 任务展开。"],
            ["可验收", "课程结果不是听懂，而是能交出方案、实验、应用或 runbook。"],
          ].map(([title, desc]) => (
            <div key={title} className="rounded-xl border border-border bg-card p-5">
              <h2 className="text-base font-bold text-foreground">{title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-soft">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
          <SectionTitle
            eyebrow="8L Course Design"
            title="8L 课程设计：每一层都有实战任务和交付物"
            desc="课程不是把概念讲一遍，而是把产品矩阵和八维方法训练成团队动作。每个模块都明确学习目标、任务、提交物和验收方式。"
          />
          <div className="mt-12 grid gap-4 lg:grid-cols-2">
            {courseDesignModules.map((module) => (
              <article key={module.layer} className="rounded-2xl border border-border bg-card p-5">
                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary text-sm font-bold text-primary-foreground">
                    {module.no}
                  </span>
                  <div>
                    <p className="font-mono text-xs font-semibold text-primary">{module.layer}</p>
                    <h2 className="mt-1 text-lg font-bold text-foreground">{module.title}</h2>
                  </div>
                </div>
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {[
                    ["目标", module.goal],
                    ["任务", module.task],
                    ["交付", module.deliverable],
                    ["验收", module.assessment],
                  ].map(([label, desc]) => (
                    <div key={label} className="rounded-xl bg-muted p-4">
                      <h3 className="flex items-center gap-1.5 text-sm font-bold text-foreground">
                        <Icon name="check" size={14} className="text-primary" />
                        {label}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
        <SectionTitle
          eyebrow="Course Catalog"
          title="按角色和任务选择课程"
          desc="产品负责人、FDE、工程师、运营治理团队可以选择不同课程路径，也可以组合成企业内训计划。"
        />
        <div className="mt-10">
        <CoursesGrid />
        </div>
      </section>
      <CTA />
    </main>
  )
}
