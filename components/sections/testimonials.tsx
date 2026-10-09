import Container from "@/components/common/container"
import Section from "@/components/common/section"
import SectionHeading from "@/components/common/section-heading"
import SampleBadge from "@/components/common/sample-badge"
import { testimonials } from "@/lib/content"
import { Star } from "lucide-react"

export default function TestimonialsSection() {
  return (
    <Section id="stories" className="bg-background">
      <Container className="py-16 md:py-24">
        <div className="mb-6 flex items-center gap-3">
          <SectionHeading
            eyebrow="Stories"
            title="Sellers who wanted it simple"
          />
          <SampleBadge text="Sample testimonials" />
        </div>
        <div
          className="relative -mx-2 flex snap-x snap-mandatory scrollbar-thin gap-4 overflow-x-auto px-2 pb-4"
          role="region"
          aria-label="Testimonials"
          tabIndex={0}
        >
          {testimonials.map((t) => (
            <article
              key={t.name}
              className="flex w-[85%] shrink-0 snap-start flex-col rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-card)] sm:w-[70%] md:w-[33%] md:p-7"
            >
              <div aria-hidden="true" className="mb-3 flex gap-0.5">
                <Star size={14} className="fill-amber-400 text-amber-400" />
                <Star size={14} className="fill-amber-400 text-amber-400" />
                <Star size={14} className="fill-amber-400 text-amber-400" />
                <Star size={14} className="fill-amber-400 text-amber-400" />
                <Star size={14} className="fill-amber-400 text-amber-400" />
              </div>
              <p className="sr-only">5 out of 5 stars</p>
              <blockquote className="text-base leading-relaxed font-medium">
                {`"${t.quote}"`}
              </blockquote>
              <div className="mt-4 flex items-center gap-3 border-t border-border pt-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-sm font-semibold text-secondary-foreground">
                  {t.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <div className="text-sm font-semibold">{t.name}</div>
                  <div className="text-xs text-muted-foreground">
                    {t.detail}
                  </div>
                </div>
                <SampleBadge text="Sample" />
              </div>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  )
}
