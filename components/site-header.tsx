"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { navItems } from "@/lib/site-content"
import { Icon } from "@/components/icon"

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const close = () => setOpen(false)

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 lg:px-8">
        <Link href="/" className="flex items-center gap-2" onClick={close} aria-label="L8AI 首页">
          <Image src="/l8ai-logo.svg" alt="L8AI" width={84} height={28} priority />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="主导航">
          {navItems.map((item) => {
            const active = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href))
            return (
              <div key={item.href} className="group relative">
                <Link
                  href={item.href}
                  className={`flex items-center gap-1 rounded-md px-3 py-2 text-sm font-semibold transition-colors ${
                    active ? "text-primary" : "text-ink-2 hover:text-primary"
                  }`}
                >
                  {item.label}
                  {item.children && <span className="text-[10px] opacity-60">▾</span>}
                </Link>
                {item.children && (
                  <div className="invisible absolute left-0 top-full w-64 translate-y-1 rounded-xl border border-border bg-card p-2 opacity-0 shadow-[0_18px_45px_rgba(12,41,92,0.12)] transition-all duration-150 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                    {item.children.map((child) => (
                      <Link
                        key={child.href + child.label}
                        href={child.href}
                        className="block rounded-lg px-3 py-2 hover:bg-muted"
                      >
                        <span className="block text-sm font-semibold text-foreground">{child.label}</span>
                        {child.desc && <span className="mt-0.5 block text-xs text-muted-foreground">{child.desc}</span>}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            )
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link href="/about#contact" className="text-sm font-semibold text-ink-2 hover:text-primary">
            登录
          </Link>
          <Link
            href="/about#contact"
            className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-light"
          >
            预约咨询
          </Link>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-border text-foreground lg:hidden"
          aria-label={open ? "关闭导航" : "打开导航"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <Icon name={open ? "close" : "menu"} size={20} />
        </button>
      </div>

      {open && (
        <nav className="border-t border-border bg-card px-5 py-4 lg:hidden" aria-label="移动导航">
          {navItems.map((item) => (
            <div key={item.href} className="border-b border-border/60 py-1 last:border-0">
              <Link
                href={item.href}
                onClick={close}
                className="block py-2 text-sm font-semibold text-foreground"
              >
                {item.label}
              </Link>
              {item.children && (
                <div className="pb-2 pl-3">
                  {item.children.map((child) => (
                    <Link
                      key={child.href + child.label}
                      href={child.href}
                      onClick={close}
                      className="block py-1.5 text-sm text-muted-foreground"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link
            href="/about#contact"
            onClick={close}
            className="mt-3 block rounded-lg bg-primary px-4 py-2.5 text-center text-sm font-semibold text-primary-foreground"
          >
            预约咨询
          </Link>
        </nav>
      )}
    </header>
  )
}
