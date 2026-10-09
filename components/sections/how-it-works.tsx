import Container from "@/components/common/container"
import Section from "@/components/common/section"
import SectionHeading from "@/components/common/section-heading"
import { MapPin, Gift, CalendarCheck } from "lucide-react"

export default function HowItWorks() {
  const steps = [
    {
      n: "01",
      title: "Share your address",
      text: "Tell us where the home is. It takes less than a minute.",
      visual: (
        <div className="flex h-10 items-center gap-2 rounded-full border border-border bg-surface-tint px-3 text-xs font-medium">
          <MapPin size={14} /> 128 Maple Street
        </div>
      ),
      icon: MapPin,
    },
    {
      n: "02",
      title: "Review your offer",
      text: "See a clear number and what you would walk away with. No pressure to accept.",
      visual: (
        <div className="rounded-xl border border-border bg-card p-3 text-xs shadow-card">
          <div className="font-semibold text-foreground">Cash offer</div>
          <div className="text-muted-foreground">$412,500</div>
        </div>
      ),
      icon: Gift,
    },
    {
      n: "03",
      title: "Choose your closing date",
      text: "Pick the day that fits your move, from about two weeks out.",
      visual: (
        <div className="flex gap-1">
          <span className="flex h-7 w-7 items-center justify-center rounded-md bg-surface-tint text-[10px]">
            1
          </span>
          <span className="flex h-7 w-7 items-center justify-center rounded-md bg-surface-tint text-[10px]">
            2
          </span>
          <span className="flex h-7 w-7 items-center justify-center rounded-md bg-primary text-[10px] text-white">
            3
          </span>
          <span className="flex h-7 w-7 items-center justify-center rounded-md bg-surface-tint text-[10px]">
            4
          </span>
        </div>
      ),
      icon: CalendarCheck,
    },
  ]

  return (
    <Section id="how-it-works" className="bg-background">
      <Container className="py-16 md:py-24">
        <SectionHeading
          eyebrow="How it works"
          title="From address to closing in three steps"
          sub="No staging, no strangers in your kitchen, no guessing."
        />

        <div className="relative mt-12 md:mt-16">
          <div className="grid gap-8 md:grid-cols-3 md:gap-10">
            {steps.map((step) => (
              <div key={step.n} className="relative">
                <div className="mb-4 flex items-center justify-center gap-3 md:flex-col md:items-center">
                  <div className="z-10 flex h-10 w-10 items-center justify-center rounded-full bg-primary font-bold text-primary-foreground shadow-card">
                    {step.n}
                  </div>
                </div>

                <div className="hover:shadow-pop rounded-3xl border border-border bg-card p-6 shadow-(--shadow-card) transition-shadow md:p-8">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary">
                    <step.icon size={22} className="text-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold tracking-tight">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {step.text}
                  </p>
                  <div className="mt-5" aria-hidden="true">
                    {step.visual}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 text-center">
          <a
            href="#hero"
            className="inline-flex h-12 items-center rounded-full bg-primary px-7 font-medium text-primary-foreground shadow-card transition-colors hover:bg-primary-hover focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
          >
            Start with your address
          </a>
        </div>
      </Container>
    </Section>
  )
}
