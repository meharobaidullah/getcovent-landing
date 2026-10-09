Design brief (10 lines): Audience: homeowners facing stress/uncertainty (relocate, inherit, repair, explore). Feeling: calm, confident, product-led. Focal idea: page shows a real-looking sample offer (not stock photos). Typography: Geist sans, one Fraunces italic accent in H1. Layout: split hero, timeline, table, bento, scroll row, tabbed FAQ, dark CTA. Avoid: generic gradients, identical card grids, stock imagery, neon, heavy glass.

3 UX improvements:
1. Set expectations before address: "what happens next" 3-step line + privacy note under input. Tradeoff: more text near CTA, kept to one line.
2. Honest comparison + "who this fits" note: side-by-side table with Covent downsides, plus two-card fit block. Tradeoff: admits limits, builds trust.
3. Situation picker: optional 1-tap (ToggleGroup) swaps reassurance line + highlights relevant benefit; "Just exploring" low-commitment option. Tradeoff: extra UI, stays optional, resets clean.

Tools: shadcn (Base UI, nova, button only), frontend-design, apple-design (brief + layout), better-colors (tokens), better-typography (scale/wrap), better-layout (grouping), better-ui (radius/shadow/hover), emil-design-eng (motion gate), better-accessibility (keyboard/ARIA). MCP not used (no shadcn MCP installed; using CLI). Verified: shadcn info output, skills list, components.json.

Tech decisions: server components by default; SellerProvider context (in-memory only, no send); Base UI Accordion/Tabs/ToggleGroup/Sheet (not Radix). Content in lib/content.ts. All sample claims labeled with SampleBadge or visible "Sample" tag. No em dashes in copy or comments (checked). No real lead data sent.
