export type SituationKey = "relocate" | "inherit" | "work" | "explore"

export const situations = [
  {
    key: "relocate" as SituationKey,
    label: "Relocating soon",
    highlight: "You pick the date",
    detail:
      "On a deadline? You choose the closing date, from about two weeks out.",
  },
  {
    key: "inherit" as SituationKey,
    label: "Inherited a home",
    highlight: "No showings, ever",
    detail: "No cleanouts, no staging, no showings. Sell it as it stands.",
  },
  {
    key: "work" as SituationKey,
    label: "Home needs work",
    highlight: "Sell as-is",
    detail: "Skip the contractors. Sell as-is and keep the repair budget.",
  },
  {
    key: "explore" as SituationKey,
    label: "Just exploring",
    highlight: "One clear number",
    detail:
      "Curious, not committed? See how an offer is built first. Nothing here is saved.",
  },
]

export const faqTabs = [
  {
    id: "pricing",
    label: "Pricing",
    items: [
      {
        q: "How is my offer calculated?",
        a: "Sample answer: we review comparable sales, condition, and location. This is a demo. Nothing is saved.",
      },
      {
        q: "Are there fees?",
        a: "Sample answer: one clear service fee is shown in the offer breakdown. This page uses sample numbers.",
      },
      {
        q: "Is the offer final?",
        a: "Sample answer: the sample is fixed for this demo. Real offers may adjust after review.",
      },
    ],
  },
  {
    id: "process",
    label: "Process",
    items: [
      {
        q: "Do I have to accept the offer?",
        a: "Sample answer: no obligation. You can decline or list instead.",
      },
      {
        q: "Do I need to make repairs?",
        a: "Sample answer: you can sell as-is. No repair list required.",
      },
      {
        q: "What happens to the address I enter?",
        a: "In this demo, nothing. It is not saved or sent anywhere.",
      },
    ],
  },
  {
    id: "timing",
    label: "Timing",
    items: [
      {
        q: "How fast can I close?",
        a: "Sample answer: from about two weeks, if you choose. You pick the date.",
      },
      {
        q: "Can I still list my home instead?",
        a: "Sample answer: yes. The comparison section shows when listing may fit better.",
      },
    ],
  },
]

export const comparisonRows = [
  {
    label: "Time to close",
    covent: "About 2 weeks",
    list: "Often 2 months or more",
    icon: "clock",
  },
  {
    label: "Showings",
    covent: "None",
    list: "Open houses and private tours",
    icon: "eye-off",
  },
  {
    label: "Repairs",
    covent: "Sell as-is",
    list: "Inspections often lead to repair requests",
    icon: "wrench",
  },
  {
    label: "Costs",
    covent: "One clear service fee",
    list: "Agent commissions, closing costs, carrying costs",
    icon: "tag",
  },
  {
    label: "Price",
    covent: "A fixed offer, no bidding",
    list: "Could be higher, not guaranteed",
    icon: "trending-up",
  },
  {
    label: "Best if",
    covent: "You want speed and certainty",
    list: "You can wait and want to maximize price",
    icon: "check-circle",
  },
]

export const testimonials = [
  {
    quote:
      "I had a new job starting in three weeks. A fixed closing date took a huge weight off.",
    name: "Maya R.",
    detail: "Relocating for work",
    stars: 5,
  },
  {
    quote:
      "No staging and no strangers walking through the kitchen. I picked a day and moved.",
    name: "Daniel K.",
    detail: "Sold as-is",
    stars: 5,
  },
  {
    quote:
      "The offer breakdown was clear. I knew exactly what I would receive before I said yes.",
    name: "Sara A.",
    detail: "First-time seller",
    stars: 5,
  },
]

export const heroSteps = [
  { step: "1", label: "Address" },
  { step: "2", label: "A few quick questions" },
  { step: "3", label: "Your offer" },
]
