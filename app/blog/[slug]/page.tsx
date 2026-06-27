import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Icon } from "@/components/icon"
import { Markdown } from "@/components/markdown"
import { CTA } from "@/components/ui-bits"
import { blogPosts, getPost } from "@/lib/blog"

function formatDate(d: string) {
  const date = new Date(d)
  return `${date.getFullYear()} 年 ${date.getMonth() + 1} 月 ${date.getDate()} 日`
}

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) return { title: "博客" }
  return { title: post.title, description: post.excerpt }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) notFound()

  const related = blogPosts.filter((p) => p.slug !== post.slug && p.category === post.category).slice(0, 2)

  return (
    <main>
      <article className="mx-auto max-w-3xl px-5 py-16 lg:py-20">
        <Link
          href="/blog"
          className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold text-primary hover:underline"
        >
          <Icon name="arrowRight" size={14} className="rotate-180" />
          返回博客
        </Link>

        <div className="mt-6 flex items-center gap-3 text-xs">
          <span className="rounded-full bg-primary/10 px-3 py-1 font-mono font-semibold text-primary">
            {post.category}
          </span>
        </div>

        <h1 className="mt-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          {post.title}
        </h1>

        <div className="mt-5 flex flex-wrap items-center gap-3 border-b border-border pb-6 text-sm text-muted-foreground">
          <span className="font-medium text-ink-2">{post.author}</span>
          <span aria-hidden="true">·</span>
          <span>{formatDate(post.date)}</span>
          <span aria-hidden="true">·</span>
          <span>{post.readTime}</span>
        </div>

        <div className="mt-8">
          <Markdown content={post.content} />
        </div>
      </article>

      {related.length > 0 && (
        <section className="border-t border-border bg-soft">
          <div className="mx-auto max-w-5xl px-5 py-14 lg:px-8">
            <h2 className="text-lg font-bold text-foreground">相关文章</h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="group rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/40 hover:shadow-lg"
                >
                  <span className="inline-flex w-fit items-center rounded-full bg-primary/10 px-3 py-1 font-mono text-xs font-semibold text-primary">
                    {p.category}
                  </span>
                  <h3 className="mt-3 text-base font-bold text-foreground">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.excerpt}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTA />
    </main>
  )
}
