"use client"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import Logo from "@/components/common/logo"
import { cn } from "@/lib/utils"

export default function MobileNav() {
  const [open, setOpen] = useState(false)
  return (
    <>
      <button
        onClick={() => setOpen(true)}
        aria-label="Open menu"
        aria-expanded={open}
        className="flex h-10 w-10 items-center justify-center rounded-full bg-background shadow-card focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none md:hidden"
      >
        <Menu size={20} />
      </button>
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        className={cn(open ? "fixed inset-0 z-50 flex" : "hidden")}
      >
        <div
          className="absolute inset-0 bg-foreground/20 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        />
        <div className="absolute top-0 right-0 flex h-full w-[min(320px,85vw)] animate-in flex-col gap-6 bg-background p-6 shadow-2xl slide-in-from-right">
          <div className="flex items-center justify-between">
            <Logo />
            <button
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary"
            >
              <X size={20} />
            </button>
          </div>
          <nav className="flex flex-col gap-2 text-lg font-medium">
            {["How it works", "Compare", "Stories", "FAQ"].map((link) => (
              <a
                key={link}
                href="#"
                onClick={() => setOpen(false)}
                className="border-b border-border/60 py-3"
              >
                {link}
              </a>
            ))}
          </nav>
          <a
            href="#hero"
            onClick={() => setOpen(false)}
            className="mt-auto inline-flex h-12 items-center justify-center rounded-full bg-primary font-medium text-primary-foreground shadow-card"
          >
            Get my offer
          </a>
        </div>
      </div>
    </>
  )
}
