## Setup

```bash
pnpm install
pnpm dev
```

## Tech stack

Next.js, shadcn/ui (Base UI), Tailwind, Geist + Fraunces. Server components, in-memory seller context, no real lead data.

## Three UX improvements

### 1. Set expectations before the address field

- **Seller problem:** Sellers hesitate to type their address into a form when they do not know what happens next or how the address will be used.
- **What I built:** A short "1 Address, 2 A few quick questions, 3 Your offer" line and a privacy note directly under the input.
- **Tradeoff:** More text next to the main button. I kept it to one compact line so the form stays the focal point.

### 2. Honest comparison with a "who this fits" note

- **Seller problem:** Sellers cannot tell whether a direct offer beats listing their home, and one-sided pages feel pushy.
- **What I built:** A side-by-side table that includes the downsides of selling to Covent, plus two cards: "Covent may fit you if" and "Listing may fit you better if". On mobile the table becomes stacked cards.
- **Tradeoff:** Admitting limits may cost a few conversions. In return it builds trust and filters out sellers who are a poor fit.

### 3. Situation picker that tailors reassurance

- **Seller problem:** Sellers arrive with very different worries: a deadline, an inherited house, a house that needs work, or plain curiosity. A generic page answers none of them directly.
- **What I built:** An optional one-tap picker under the form (Relocating soon, Inherited a home, Home needs work, Just exploring). It swaps the reassurance line and highlights the most relevant benefit card. "Just exploring" is the low-commitment option.
- **Tradeoff:** Extra UI and state next to the main button, and a risk of wrong assumptions. So it stays optional, the page works fully without it, it can be cleared with one tap, and nothing is stored or sent.
