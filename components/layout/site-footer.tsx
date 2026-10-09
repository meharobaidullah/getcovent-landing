import Logo from "@/components/common/logo"
export default function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3 md:gap-16">
          <div>
            <Logo />
            <p className="mt-3 text-sm text-muted-foreground">
              Covent helps homeowners sell with less stress.
            </p>
          </div>
          <div>
            <h3 className="mb-3 text-sm font-semibold">Explore</h3>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <a href="#how-it-works" className="hover:text-foreground">
                How it works
              </a>
              <a href="#compare" className="hover:text-foreground">
                Compare
              </a>
              <a href="#stories" className="hover:text-foreground">
                Stories
              </a>
              <a href="#faq" className="hover:text-foreground">
                FAQ
              </a>
            </div>
          </div>
          <div>
            <h3 className="mb-3 text-sm font-semibold">Company</h3>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <span>About</span>
              <span>
                Careers{" "}
                <span className="ml-1 rounded bg-secondary px-1 text-[10px]">
                  Demo
                </span>
              </span>
            </div>
          </div>
        </div>
        <div className="mt-10 flex flex-col gap-3 border-t border-border pt-8 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>
            Demo page built for an engineering assessment. Stats, offers, and
            testimonials are sample content.
          </p>
          <p>2026</p>
        </div>
      </div>
    </footer>
  )
}
