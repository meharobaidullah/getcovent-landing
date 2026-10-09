"use client"

import { useEffect, useRef, useState, type MouseEvent } from "react"
import { Menu, X } from "lucide-react"

import Logo from "@/components/common/logo"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

const links = [
  { label: "How it works", href: "#how-it-works" },
  { label: "Compare", href: "#compare" },
  { label: "Stories", href: "#stories" },
  { label: "FAQ", href: "#faq" },
]

const cta = { label: "Get my offer", href: "#hero" }

export default function MobileNav() {
  const [open, setOpen] = useState(false)
  const pendingHash = useRef<string | null>(null)

  useEffect(() => {
    if (open) return
    const hash = pendingHash.current
    if (!hash) return
    pendingHash.current = null

    // The sheet holds a page scroll lock that is released a task after closing, and
    // scrolling while it is still locked gets reverted on restore. Wait two frames
    // so the lock is gone, then navigate natively to pick up scroll-margin-top and
    // the CSS scroll-behavior (which already drops to `auto` for reduced motion).
    let inner = 0
    const outer = requestAnimationFrame(() => {
      inner = requestAnimationFrame(() => {
        window.location.hash = hash
      })
    })

    return () => {
      cancelAnimationFrame(outer)
      cancelAnimationFrame(inner)
    }
  }, [open])

  function handleNavigate(event: MouseEvent<HTMLAnchorElement>, href: string) {
    if (event.defaultPrevented) return
    // Let modified clicks (new tab, new window) keep native link behavior.
    if (
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    ) {
      return
    }
    event.preventDefault()
    pendingHash.current = href
    setOpen(false)
  }

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        aria-label="Open menu"
        className="flex size-9 items-center justify-center rounded-full bg-background shadow-[var(--shadow-card)] transition-colors hover:bg-muted focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none md:hidden"
      >
        <Menu />
      </SheetTrigger>

      <SheetContent
        side="right"
        showCloseButton={false}
        className="gap-0 overflow-y-auto overscroll-contain border-l border-border bg-background p-0 text-foreground shadow-[var(--shadow-pop)] data-[side=right]:w-[320px] data-[side=right]:max-w-[85vw] motion-reduce:transition-none"
      >
        <SheetTitle className="sr-only">Site menu</SheetTitle>

        <SheetHeader className="sticky top-0 z-10 flex-row items-center justify-between gap-4 border-b border-border/60 bg-background p-5">
          <Logo onClick={() => setOpen(false)} />
          <SheetClose
            render={
              <Button
                variant="secondary"
                size="icon-lg"
                className="rounded-full"
                aria-label="Close menu"
              />
            }
          >
            <X />
          </SheetClose>
        </SheetHeader>

        <nav aria-label="Mobile" className="flex flex-col gap-1 p-3">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(event) => handleNavigate(event, link.href)}
              className="rounded-xl px-4 py-3 text-base font-medium transition-colors hover:bg-muted focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="mt-auto border-t border-border/60 p-4">
          <a
            href={cta.href}
            onClick={(event) => handleNavigate(event, cta.href)}
            className="inline-flex h-12 w-full items-center justify-center rounded-full bg-primary font-medium text-primary-foreground shadow-[var(--shadow-card)] transition-colors hover:bg-primary-hover focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
          >
            {cta.label}
          </a>
        </div>
      </SheetContent>
    </Sheet>
  )
}
