import Container from "@/components/common/container"
import Section from "@/components/common/section"
import AddressForm from "@/components/seller/address-form"
import { Check } from "lucide-react"

export default function FinalCta() {
  return (
    <Section id="final-cta" className="bg-background">
      <Container className="py-16 md:py-24">
        <div className="relative overflow-hidden rounded-[2rem] bg-surface-dark shadow-2xl">
          <div
            className="pointer-events-none absolute top-0 left-0 h-full w-full"
            aria-hidden="true"
            style={{
              background:
                "radial-gradient(60% 60% at 20% 10%, rgb(226 123 84 / 0.12), transparent 70%)",
            }}
          />
          <div
            className="pointer-events-none absolute right-0 bottom-0 h-full w-full"
            aria-hidden="true"
            style={{
              background:
                "radial-gradient(50% 50% at 85% 20%, rgb(31 92 74 / 0.12), transparent 70%)",
            }}
          />
          <div className="relative mx-auto max-w-4xl px-6 py-14 text-center md:px-12 md:py-20 lg:px-16 lg:py-24">
            <p className="mb-3 text-sm font-medium tracking-widest text-surface-dark-foreground/70 uppercase">
              Ready when you are
            </p>
            <h2 className="text-3xl leading-[1.05] font-semibold tracking-tight text-surface-dark-foreground md:text-6xl">
              See your number in under a minute.
            </h2>
            <p className="mt-4 text-base text-surface-dark-foreground/80 lg:text-lg">
              It starts with your address. No obligation, no spam, nothing saved
              in this demo.
            </p>
            <div className="mt-8">
              <AddressForm variant="band" />
            </div>
            <div className="mt-6 flex flex-wrap justify-center gap-6 text-sm text-surface-dark-foreground/80">
              <span className="flex items-center gap-2">
                <Check size={16} className="text-success" /> No showings
              </span>
              <span className="flex items-center gap-2">
                <Check size={16} /> Sell as-is
              </span>
              <span className="flex items-center gap-2">
                <Check size={16} /> You choose the date
              </span>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
