import Container from "@/components/common/container"
import Section from "@/components/common/section"
import SampleBadge from "@/components/common/sample-badge"
import Reveal from "@/components/common/reveal"
import { Clock, CalendarDays, Wrench, Home } from "lucide-react"

export default function TrustStrip() {
  const tiles = [
    { value: "2 days", label: "Typical time to your offer", icon: Clock },
    {
      value: "14 days",
      label: "Fastest closing you can choose",
      icon: CalendarDays,
    },
    { value: "$0", label: "Repairs you need to make", icon: Wrench },
    { value: "0", label: "Showings or open houses", icon: Home },
  ]

  return (
    <Section id="trust" className="border-y border-border bg-background">
      <Container className="py-12 md:py-16">
        <div className="mb-8 flex items-center gap-3">
          <h2 className="text-sm font-medium tracking-widest text-muted-foreground uppercase">
            Sample stats for this demo
          </h2>
          <SampleBadge text="Sample figures" />
        </div>

        <div className="grid grid-cols-2 divide-x border-t border-b border-border/60 lg:grid-cols-4">
          {tiles.map((title, i) => (
            <Reveal key={title.label} delay={i * 160}>
              <div className="group p-6 text-center transition-colors hover:bg-secondary/40 md:p-8">
                <title.icon
                  size={22}
                  strokeWidth={1.5}
                  className="mx-auto mb-3 text-primary transition-transform duration-200 group-hover:scale-110"
                  aria-hidden="true"
                />
                <p className="text-4xl leading-none font-semibold text-foreground tabular-nums md:text-5xl">
                  {title.value}
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  {title.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  )
}
