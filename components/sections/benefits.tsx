"use client"
import { useSeller } from "@/components/seller/seller-provider"
import { EyeOff, CalendarDays, Wrench, TrendingUp } from "lucide-react"
import { cn } from "@/lib/utils"

export default function BenefitsSection() {
  const { situation } = useSeller()
  const cards = [
    {
      title: "No showings, ever",
      body: "Your home stays private. No open houses, no lockboxes, no last-minute 'can we come by in 20 minutes?'",
      visual: (
        <div className="flex gap-1">
          <span className="flex h-6 w-6 items-center justify-center rounded bg-muted text-xs line-through">
            Sa
          </span>
          <span className="flex h-6 w-6 items-center justify-center rounded bg-muted text-xs">
            Su
          </span>
          <span className="flex h-6 w-6 items-center justify-center rounded bg-muted text-xs">
            M
          </span>
          <span className="flex h-6 w-6 items-center justify-center rounded bg-muted text-xs">
            T
          </span>
          <span className="flex h-6 w-6 items-center justify-center rounded bg-primary text-xs text-white">
            W
          </span>
        </div>
      ),
      icon: EyeOff,
      match: "inherit",
    },
    {
      title: "You pick the date",
      body: "Need two weeks? Need two months? You choose the closing day that fits your move.",
      visual: (
        <div className="rounded-xl border border-border bg-card p-3 text-xs shadow-card">
          <div className="font-medium">Selected</div>
          <div className="font-semibold text-primary">Wed, Oct 14</div>
        </div>
      ),
      icon: CalendarDays,
      match: "relocate",
    },
    {
      title: "Sell as-is",
      body: "Leave the paint, the carpet, and the repair list behind.",
      visual: (
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-xs text-muted-foreground line-through">
            <span className="h-1 w-1 rounded-full bg-muted" /> Paint
          </div>
          <div className="flex items-center gap-2 text-xs text-muted-foreground line-through">
            <span className="h-1 w-1 rounded-full bg-muted" /> Carpet
          </div>
          <div className="flex items-center gap-2 text-xs">
            <span className="h-1 w-1 rounded-full bg-success" /> No list needed
          </div>
        </div>
      ),
      icon: Wrench,
      match: "work",
    },
    {
      title: "One clear number",
      body: "See what you would receive before you decide anything.",
      visual: (
        <div className="rounded-xl border border-border bg-card p-3 text-xs shadow-card">
          <div className="text-muted-foreground">You receive</div>
          <div className="text-2xl font-semibold tabular-nums">$404,250</div>
        </div>
      ),
      icon: TrendingUp,
      match: "explore",
    },
  ]

  return (
    <section id="benefits" className="bg-muted/40">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        <div className="mb-10 max-w-3xl md:mb-14">
          <p className="mb-3 text-sm font-medium tracking-widest text-muted-foreground uppercase">
            Why Covent
          </p>
          <h2 className="text-3xl leading-[1.05] font-semibold tracking-tight md:text-5xl">
            Everything you would rather skip, handled.
          </h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-12 lg:gap-6">
          {cards.map((c, i) => {
            const matched = c.match === situation
            const spanClass =
              i === 0
                ? "md:col-span-2 lg:col-span-7"
                : i === 1
                  ? "md:col-span-2 lg:col-span-5"
                  : "md:col-span-1 lg:col-span-6"

            return (
              <div
                key={c.title}
                className={cn(
                  spanClass,
                  "hover:shadow-pop relative overflow-hidden rounded-3xl border border-border bg-card p-6 shadow-(--shadow-card) transition md:p-8"
                )}
              >
                {matched && (
                  <span className="absolute top-4 right-4 rounded-full bg-primary px-2 py-0.5 text-[10px] font-semibold text-primary-foreground">
                    Matches your situation
                  </span>
                )}
                <div
                  className={cn(
                    "mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary",
                    matched ? "ring-2 ring-primary/20" : ""
                  )}
                >
                  <c.icon size={22} />
                </div>
                <h3 className="text-xl font-semibold tracking-tight">
                  {c.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {c.body}
                </p>
                <div className="mt-5" aria-hidden="true">
                  {c.visual}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
