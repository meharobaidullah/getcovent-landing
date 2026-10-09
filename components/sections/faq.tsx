import Container from "@/components/common/container"
import Section from "@/components/common/section"
import { faqTabs } from "@/lib/content"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion"

export default function FaqSection() {
  return (
    <Section id="faq" className="bg-background">
      <Container className="py-16 md:py-24">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:col-span-4 lg:self-start">
            <p className="mb-3 text-sm font-medium tracking-widest text-muted-foreground uppercase">
              FAQ
            </p>
            <h2 className="text-3xl leading-tight font-semibold tracking-tight md:text-4xl">
              Questions, answered
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Still unsure? Start with your address and see a number. There is
              no obligation.
            </p>
            <a
              href="#hero"
              className="mt-6 inline-flex h-11 items-center rounded-full bg-primary px-6 text-sm font-medium text-primary-foreground shadow-card transition-colors hover:bg-primary-hover"
            >
              Start with your address
            </a>
            <p className="mt-4 text-xs text-muted-foreground">
              Sample answers for this demo.
            </p>
          </div>
          <div className="lg:col-span-8">
            <Tabs defaultValue="pricing" className="w-full">
              <TabsList className="mb-6 w-full rounded-full bg-secondary/60 p-1 md:w-auto">
                {faqTabs.map((t) => (
                  <TabsTrigger
                    key={t.id}
                    value={t.id}
                    className="rounded-full px-4 py-1.5 text-sm font-medium data-[state=active]:bg-card data-[state=active]:text-foreground data-[state=active]:shadow-card"
                  >
                    {t.label}
                  </TabsTrigger>
                ))}
              </TabsList>
              {faqTabs.map((t) => (
                <TabsContent key={t.id} value={t.id}>
                  <Accordion
                    type="single"
                    collapsible
                    defaultValue="0"
                    className="w-full divide-y divide-border"
                  >
                    {t.items.map((item, idx) => (
                      <AccordionItem
                        key={item.q}
                        value={String(idx)}
                        className="border-none"
                      >
                        <AccordionTrigger className="py-4 text-left text-base font-medium hover:no-underline">
                          {item.q}
                        </AccordionTrigger>
                        <AccordionContent className="pb-4 text-sm leading-relaxed text-muted-foreground">
                          {item.a}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
      </Container>
    </Section>
  )
}
