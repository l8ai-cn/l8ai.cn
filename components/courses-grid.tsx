"use client"

import { useState } from "react"
import Link from "next/link"
import { Icon } from "@/components/icon"
import { courses, courseTracks, type Course } from "@/lib/courses"

const trackLabel: Record<Course["track"], string> = {
  "8L": "产品矩阵课",
  xL: "八维方法课",
  xDo: "Do 引擎课",
  Operations: "运营治理课",
}

export function CoursesGrid() {
  const [active, setActive] = useState<"all" | Course["track"]>("all")
  const filtered = active === "all" ? courses : courses.filter((c) => c.track === active)

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => setActive("all")}
          className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
            active === "all"
              ? "bg-primary text-primary-foreground"
              : "border border-border bg-card text-ink-2 hover:border-primary/40"
          }`}
        >
          全部课程
        </button>
        {courseTracks.map((t) => (
          <button
            key={t.track}
            onClick={() => setActive(t.track)}
            className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
              active === t.track
                ? "bg-primary text-primary-foreground"
                : "border border-border bg-card text-ink-2 hover:border-primary/40"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((c) => (
          <Link
            key={c.id}
            href={`/courses/${c.id}`}
            className="group flex flex-col rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/40 hover:shadow-lg"
          >
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 font-mono text-xs font-semibold text-primary">
                {trackLabel[c.track]}
              </span>
              <span className="font-mono text-xs text-muted-foreground">{c.level}</span>
            </div>
            <h3 className="mt-4 text-lg font-bold text-foreground">{c.title}</h3>
            <p className="mt-1 text-sm font-medium text-primary/70">{c.subtitle}</p>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{c.summary}</p>
            <dl className="mt-5 grid grid-cols-2 gap-3 border-t border-border pt-4 text-sm">
              <div>
                <dt className="text-xs text-muted-foreground">时长</dt>
                <dd className="mt-0.5 font-semibold text-foreground">{c.duration}</dd>
              </div>
              <div>
                <dt className="text-xs text-muted-foreground">适合人群</dt>
                <dd className="mt-0.5 line-clamp-1 font-semibold text-foreground">{c.audience.split("、")[0]} 等</dd>
              </div>
            </dl>
            <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
              查看课程详情
              <Icon name="arrowRight" size={15} className="transition-transform group-hover:translate-x-1" />
            </span>
          </Link>
        ))}
      </div>
    </div>
  )
}
