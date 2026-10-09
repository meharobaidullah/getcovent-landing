import { SellerProvider } from "@/components/seller/seller-provider"
import SiteHeader from "@/components/layout/site-header"
import SiteFooter from "@/components/layout/site-footer"
import HeroSection from "@/components/sections/hero"
import TrustStrip from "@/components/sections/trust-strip"
import HowItWorks from "@/components/sections/how-it-works"
import CompareSection from "@/components/sections/compare"
import BenefitsSection from "@/components/sections/benefits"
import TestimonialsSection from "@/components/sections/testimonials"
import FaqSection from "@/components/sections/faq"
import FinalCta from "@/components/sections/final-cta"

export default function HomePage() {
  return (
    <SellerProvider>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-60 focus:rounded-md focus:bg-primary focus:px-3 focus:py-2 focus:text-primary-foreground"
      >
        Skip to main content
      </a>

      <SiteHeader />

      <main id="main">
        <HeroSection />
        <TrustStrip />
        <HowItWorks />
        <CompareSection />
        <BenefitsSection />
        <TestimonialsSection />
        <FaqSection />
        <FinalCta />
      </main>

      <SiteFooter />
    </SellerProvider>
  )
}
