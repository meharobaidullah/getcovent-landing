"use client"
import { MapPin, Home, Settings, Sparkles } from "lucide-react"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { situations, type SituationKey } from "@/lib/content"
import { useSeller } from "./seller-provider"

const icons: Record<string, React.ReactNode> = {
  relocate: <MapPin size={18} />,
  inherit: <Home size={18} />,
  work: <Settings size={18} />,
  explore: <Sparkles size={18} />,
}

export default function SituationPicker() {
  const { situation, setSituation } = useSeller()

  const handleValueChange = (val: string[]) => {
    const v = val[0] ?? null
    const key = v as SituationKey | null
    setSituation(key === situation ? null : (key ?? null))
  }

  const matched = situations.find((s) => s.key === situation)

  return (
    <div className="mt-8">
      <label className="mb-2 block text-sm font-medium text-foreground">
        What is going on?{" "}
        <span className="font-normal text-muted-foreground">(optional)</span>
      </label>
      <ToggleGroup
        value={situation ? [situation] : []}
        onValueChange={handleValueChange}
        aria-label="Situation"
        className="flex flex-wrap gap-2"
      >
        {situations.map((s: { key: string; label: string }) => (
          <ToggleGroupItem
            key={s.key}
            value={s.key}
            className="flex h-11 items-center gap-2 rounded-full border px-4 text-sm font-medium transition-colors hover:bg-secondary focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none data-[state=on]:border-primary data-[state=on]:bg-primary data-[state=on]:text-primary-foreground"
            aria-label={s.label}
          >
            <span aria-hidden="true">{icons[s.key]}</span>
            <span>{s.label}</span>
          </ToggleGroupItem>
        ))}
      </ToggleGroup>

      <div
        aria-live="polite"
        aria-atomic="true"
        className="mt-3 h-10 text-sm leading-snug text-muted-foreground"
      >
        {matched
          ? matched.detail + " Highlights: " + matched.highlight + "."
          : "Free to request. No obligation. This demo does not save your address."}
      </div>
    </div>
  )
}
