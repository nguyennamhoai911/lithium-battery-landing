"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { Phone, Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

const navItems = [
  { href: "#nang-luc", label: "Năng lực" },
  { href: "#oem-odm", label: "OEM/ODM" },
  { href: "#quy-trinh", label: "Quy trình" },
  { href: "#ung-dung", label: "Ứng dụng" },
  { href: "#nha-may", label: "Nhà máy" },
  { href: "#chat-luong", label: "Chất lượng" },
  { href: "#lien-he", label: "Liên hệ" },
]

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-hairline"
          : "bg-transparent border-b border-transparent",
      )}
    >
      <div className="mx-auto max-w-[1280px] px-5 lg:px-10 h-16 flex items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-2.5 shrink-0" aria-label="PKGBattery">
          <span className="relative inline-flex h-7 w-7 items-center justify-center">
            <span className="absolute inset-0 rounded-sm bg-ink" aria-hidden />
            <span className="absolute -right-0.5 -bottom-0.5 h-2 w-2 rounded-[2px] bg-brand" aria-hidden />
            <span className="relative font-mono text-[11px] font-semibold tracking-tight text-ink-foreground">
              PKG
            </span>
          </span>
          <span className="flex flex-col leading-none">
            <span className="text-[15px] font-semibold tracking-tight">PKGBattery</span>
            <span className="text-[10px] font-mono uppercase tracking-[0.18em] text-muted-foreground">
              Industrial Lithium · OEM/ODM
            </span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-7" aria-label="Điều hướng chính">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative text-[13px] tracking-tight text-foreground/80 hover:text-foreground transition-colors group"
            >
              {item.label}
              <span className="pointer-events-none absolute -bottom-1 left-0 h-px w-0 bg-brand transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="tel:+842871000000"
            className="hidden sm:inline-flex items-center gap-2 text-[13px] font-medium text-foreground hover:text-brand transition-colors"
          >
            <Phone className="h-4 w-4" aria-hidden />
            <span className="font-mono tracking-tight">+84 28 7100 0000</span>
          </a>
          <a
            href="#lien-he"
            className="hidden md:inline-flex items-center gap-2 h-9 px-4 rounded-sm bg-ink text-ink-foreground text-[13px] font-medium tracking-tight hover:bg-brand transition-colors"
          >
            Tư vấn dự án
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden inline-flex items-center justify-center h-9 w-9 rounded-sm border border-hairline text-foreground"
            aria-label={open ? "Đóng menu" : "Mở menu"}
            aria-expanded={open}
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-hairline bg-background">
          <nav className="mx-auto max-w-[1280px] px-5 py-4 flex flex-col" aria-label="Điều hướng di động">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-3 border-b border-hairline text-[14px] text-foreground/85 hover:text-brand transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <a
              href="#lien-he"
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex items-center justify-center h-11 rounded-sm bg-ink text-ink-foreground text-[14px] font-medium"
            >
              Tư vấn dự án
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
