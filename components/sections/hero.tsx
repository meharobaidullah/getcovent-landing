import Container from "@/components/common/container"
import Section from "@/components/common/section"
import SampleBadge from "@/components/common/sample-badge"
import AddressForm from "@/components/seller/address-form"
import SituationPicker from "@/components/seller/situation-picker"
import { heroSteps } from "@/lib/content"

export default function HeroSection() {
  return (
    <Section
      id="hero"
      className="relative -mt-17 overflow-hidden bg-background pt-12"
    >
      <div
        className="pointer-events-none absolute top-0 left-0 h-full w-full"
        aria-hidden="true"
        style={{ background: "var(--glow-1)" }}
      />
      <Container className="relative py-16 md:py-24 lg:py-28">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <div className="mb-6 inline-flex">
              <SampleBadge text="Sample: offers in about 2 days" />
            </div>
            <h1 className="balance text-4xl leading-[1.05] font-semibold tracking-tight text-wrap text-foreground sm:text-3xl lg:text-5xl">
              Sell on your schedule, not the market&apos;s.{" "}
              <span className="text-primary">Your schedule</span> matters.
            </h1>
            <p className="pretty mt-6 max-w-xl text-base leading-relaxed text-wrap text-muted-foreground lg:text-lg">
              Enter your address to see what Covent could offer for your home.
              No showings, no repair lists, no obligation.
            </p>

            <div className="mt-8">
              <AddressForm variant="hero" />
            </div>

            <div className="mt-4 flex items-center gap-4 text-xs text-muted-foreground sm:text-sm">
              {heroSteps.map((step: { step: string; label: string }) => (
                <span key={step.step} className="flex items-center gap-1.5">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-secondary text-[10px] font-bold text-secondary-foreground">
                    {step.step}
                  </span>{" "}
                  {step.label}
                </span>
              ))}
            </div>

            <SituationPicker />
          </div>

          <aside className="lg:sticky lg:top-28" aria-label="Sample offer">
            <div className="relative overflow-visible rounded-3xl border border-border bg-card p-6 shadow-(--shadow-card) md:p-8">
              <div className="mb-4 flex items-center justify-between">
                <span className="inline-flex items-center gap-2 rounded-full bg-success/10 px-2.5 py-0.5 text-xs font-semibold text-success">
                  Sample offer{" "}
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-success" />
                </span>
                <SampleBadge />
              </div>

              <p className="text-sm text-muted-foreground">
                128 Maple Street <span className="text-xs">(sample)</span>
              </p>

              <div className="mt-2 flex items-baseline gap-3">
                <span className="text-4xl font-semibold text-foreground tabular-nums md:text-6xl">
                  $412,500
                </span>
                <span className="text-sm text-muted-foreground">
                  Cash offer
                </span>
              </div>

              <div className="mt-4 space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">
                    Repairs you pay for
                  </span>{" "}
                  <span className="font-medium tabular-nums">$0</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">
                    Covent service fee (2%)
                  </span>{" "}
                  <span className="font-medium tabular-nums">-$8,250</span>
                </div>
                <div className="my-2 border-t border-border" />
                <div className="flex justify-between font-semibold">
                  <span>You receive</span>{" "}
                  <span className="tabular-nums">$404,250</span>
                </div>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                <span className="rounded-full bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground">
                  Close in as few as 14 days
                </span>
                <span className="rounded-full bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground">
                  No showings
                </span>
              </div>

              <p className="mt-4 text-xs text-muted-foreground">
                Sample numbers for illustration only.
              </p>
            </div>
          </aside>
        </div>
      </Container>
    </Section>
  )
}
