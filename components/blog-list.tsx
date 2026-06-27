"use client"

import { useState } from "react"
import Link from "next/link"
import { Icon } from "@/components/icon"
import { blogPosts, blogCategories } from "@/lib/blog"

function formatDate(d: string) {
  const date = new Date(d)
  return `${date.getFullYear()} 年 ${date.getMonth() + 1} 月 ${date.getDate()} 日`
}

export function BlogList() {
  const [active, setActive] = useState("全部")
  const filtered = active === "全部" ? blogPosts : blogPosts.filter((p) => p.category === active)
  const [featured, ...rest] = filtered

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {blogCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
              active === cat
                ? "bg-primary text-primary-foreground"
                : "border border-border bg-card text-ink-2 hover:border-primary/40"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {featured && (
        <Link
          href={`/blog/${featured.slug}`}
          className="group mt-8 block overflow-hidden rounded-2xl border border-border bg-card transition-all hover:border-primary/40 hover:shadow-lg"
        >
          <div className="grid gap-0 md:grid-cols-2">
            <div className="flex flex-col justify-center p-7 lg:p-10">
              <div className="flex items-center gap-3 text-xs">
                <span className="rounded-full bg-primary/10 px-3 py-1 font-mono font-semibold text-primary">
                  {featured.category}
                </span>
                <span className="font-mono text-muted-foreground">最新</span>
              </div>
              <h2 className="mt-4 text-balance text-2xl font-bold tracking-tight text-foreground">{featured.title}</h2>
              <p className="mt-3 text-pretty text-base leading-relaxed text-muted-foreground">{featured.excerpt}</p>
              <div className="mt-5 flex items-center gap-3 text-sm text-muted-foreground">
                <span>{featured.author}</span>
                <span aria-hidden="true">·</span>
                <span>{formatDate(featured.date)}</span>
                <span aria-hidden="true">·</span>
                <span>{featured.readTime}</span>
              </div>
              <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                阅读全文
                <Icon name="arrowRight" size={15} className="transition-transform group-hover:translate-x-1" />
              </span>
            </div>
            <div className="relative hidden min-h-full bg-soft md:block">
              <div className="grid-backdrop absolute inset-0 opacity-50" aria-hidden="true" />
              <div className="absolute inset-0 flex items-center justify-center">
                <Icon name="book" size={64} className="text-primary/30" />
              </div>
            </div>
          </div>
        </Link>
      )}

      <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {rest.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group flex flex-col rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/40 hover:shadow-lg"
          >
            <span className="inline-flex w-fit items-center rounded-full bg-primary/10 px-3 py-1 font-mono text-xs font-semibold text-primary">
              {post.category}
            </span>
            <h3 className="mt-4 text-lg font-bold leading-snug text-foreground">{post.title}</h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{post.excerpt}</p>
            <div className="mt-5 flex items-center gap-2 border-t border-border pt-4 text-xs text-muted-foreground">
              <span>{formatDate(post.date)}</span>
              <span aria-hidden="true">·</span>
              <span>{post.readTime}</span>
            </div>
          </Link>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="mt-12 text-center text-muted-foreground">该分类暂无文章。</p>
      )}
    </div>
  )
}
