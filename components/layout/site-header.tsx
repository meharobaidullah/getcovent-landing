import Logo from "@/components/common/logo"
import MobileNav from "./mobile-nav"

export default function SiteHeader() {
  return (
    <header className="sticky top-3 z-40 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
      <nav
        className="flex items-center justify-between rounded-full border border-border/50 bg-background/60 px-4 py-2.5 shadow-[var(--shadow-card)] backdrop-blur-md sm:px-5 md:px-6"
        aria-label="Primary"
      >
        <Logo />

        <div className="hidden items-center gap-6 text-sm font-medium text-foreground/90 md:flex">
          <a
            href="#how-it-works"
            className="transition-colors hover:text-primary"
          >
            How it works
          </a>
          <a href="#compare" className="transition-colors hover:text-primary">
            Compare
          </a>
          <a href="#stories" className="transition-colors hover:text-primary">
            Stories
          </a>
          <a href="#faq" className="transition-colors hover:text-primary">
            FAQ
          </a>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="#hero"
            className="hidden h-9 items-center rounded-full bg-primary px-4 text-sm font-medium text-primary-foreground shadow-card transition-colors hover:bg-primary-hover focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none sm:inline-flex"
          >
            Get my offer
          </a>
          <MobileNav />
        </div>
      </nav>
    </header>
  )
}
