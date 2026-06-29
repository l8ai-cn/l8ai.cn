import Link from "next/link"
import Image from "next/image"
import { company, footerColumns } from "@/lib/site-content"

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-soft">
      <div className="mx-auto max-w-7xl px-5 py-14 lg:px-8">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-3 lg:grid-cols-6">
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <Image src="/l8ai-logo.svg" alt="L8AI" width={92} height={30} />
            <p className="mt-4 text-sm font-semibold text-foreground">{company.legalNameCn}</p>
            <p className="mt-1 text-xs text-muted-foreground">{company.legalNameEn}</p>
          </div>
          {footerColumns.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-semibold text-foreground">{col.title}</h3>
              <ul className="mt-3 space-y-2">
                {col.links.map((link) => {
                  const isExternal = link.href.startsWith("http")

                  return (
                    <li key={link.href + link.label}>
                      {isExternal ? (
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noreferrer"
                          className="text-sm text-muted-foreground transition-colors hover:text-primary"
                        >
                          {link.label}
                        </a>
                      ) : (
                        <Link href={link.href} className="text-sm text-muted-foreground transition-colors hover:text-primary">
                          {link.label}
                        </Link>
                      )}
                    </li>
                  )
                })}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <span>© 2026 {company.brand}. All rights reserved.</span>
          <span>{company.email}</span>
        </div>
      </div>
    </footer>
  )
}
