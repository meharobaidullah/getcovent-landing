import Container from "@/components/common/container"
import Section from "@/components/common/section"
import SectionHeading from "@/components/common/section-heading"
import { comparisonRows } from "@/lib/content"
import { Check, Minus } from "lucide-react"

export default function CompareSection() {
  return (
    <Section id="compare" className="bg-background">
      <Container className="py-16 md:py-24">
        <SectionHeading
          eyebrow="Compare"
          title="Two ways to sell. Choose what matters to you."
          sub="We think a direct offer is great for many sellers. It is not right for everyone, so here is the honest version."
        />

        <div
          className="mt-10 flex flex-col gap-4 md:flex-row"
          role="img"
          aria-label="Covent about 2 weeks, List traditionally often 2 months or more"
        >
          <div className="relative h-8 flex-1 rounded-full bg-primary/90">
            <span className="absolute top-0 left-2 flex h-8 items-center text-sm font-semibold text-white">
              Sell to Covent: about 2 weeks
            </span>
          </div>
          <div className="relative h-8 flex-2 rounded-full bg-muted">
            <span className="absolute top-0 left-2 flex h-8 items-center text-sm font-medium text-muted-foreground">
              List traditionally: often 2 months or more
            </span>
          </div>
        </div>
        <p className="mt-2 text-xs text-muted-foreground">
          Sample timelines for illustration.
        </p>

        <div className="mt-10 overflow-x-auto rounded-2xl border border-border shadow-(--shadow-card)">
          <table className="w-full text-sm" aria-label="Comparison">
            <thead>
              <tr className="bg-secondary/40">
                <th className="px-4 py-3 text-left font-medium text-muted-foreground">
                  Feature
                </th>
                <th className="bg-surface-tint px-4 py-3 text-left font-medium">
                  Sell to Covent
                </th>
                <th className="px-4 py-3 text-left font-medium">
                  List traditionally
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((r) => (
                <tr key={r.label} className="border-t border-border">
                  <td className="px-4 py-3 font-medium">{r.label}</td>
                  <td className="bg-surface-tint px-4 py-3">
                    <span className="inline-flex items-center gap-2">
                      <Check
                        size={14}
                        className="text-success"
                        aria-hidden="true"
                      />{" "}
                      <span className="sr-only">Included</span>
                      {r.covent}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-muted-foreground">
                    <span className="inline-flex items-center gap-2">
                      <Minus
                        size={14}
                        className="text-muted-foreground"
                        aria-hidden="true"
                      />{" "}
                      <span className="sr-only">Not included</span>
                      {r.list}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-3 text-xs text-muted-foreground">
          Sample comparison for illustration only.
        </p>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-border bg-card p-6 shadow-(--shadow-card) md:p-8">
            <h3 className="text-lg font-semibold">Covent may fit you if</h3>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li className="flex gap-2">
                <Check size={16} className="shrink-0 text-success" /> You are
                relocating or on a deadline
              </li>
              <li className="flex gap-2">
                <Check size={16} className="shrink-0 text-success" /> You do not
                want to prep or show the house
              </li>
              <li className="flex gap-2">
                <Check size={16} className="shrink-0 text-success" /> You prefer
                a certain number over a maybe
              </li>
            </ul>
          </div>
          <div className="rounded-3xl border border-border bg-card p-6 shadow-(--shadow-card) md:p-8">
            <h3 className="text-lg font-semibold">
              Listing may fit you better if
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li className="flex gap-2">
                <Minus size={16} className="shrink-0 text-muted-foreground" />{" "}
                You can wait several months
              </li>
              <li className="flex gap-2">
                <Minus size={16} className="shrink-0 text-muted-foreground" />{" "}
                Your home is move-in ready
              </li>
              <li className="flex gap-2">
                <Minus size={16} className="shrink-0 text-muted-foreground" />{" "}
                Getting the highest possible price matters most
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </Section>
  )
}
