import type { Metadata } from "next"
import { PageHeader } from "@/components/ui-bits"
import { BlogList } from "@/components/blog-list"

export const metadata: Metadata = {
  title: "博客",
  description: "L8AI 博客：分享企业 AI 落地的方法论、工程实践、行业洞察与产品动态。",
}

export default function BlogPage() {
  return (
    <main>
      <PageHeader
        eyebrow="博客"
        title="企业 AI 落地的方法、实践与洞察"
        desc="我们把在一线积累的方法论、工程经验和行业观察沉淀成文字，希望对每一个推进 AI 落地的团队有所帮助。"
      />
      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
        <BlogList />
      </section>
    </main>
  )
}
