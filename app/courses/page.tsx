import type { Metadata } from "next"
import { PageHeader, CTA } from "@/components/ui-bits"
import { CoursesGrid } from "@/components/courses-grid"
import { courseCatalogIntro } from "@/lib/courses"

export const metadata: Metadata = {
  title: "课程",
  description: courseCatalogIntro.desc,
}

export default function CoursesPage() {
  return (
    <main>
      <PageHeader eyebrow="课程体系" title={courseCatalogIntro.title} desc={courseCatalogIntro.desc} />
      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
        <CoursesGrid />
      </section>
      <CTA />
    </main>
  )
}
