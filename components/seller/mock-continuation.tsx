"use client"
import { ArrowLeft } from "lucide-react"
import { useSeller } from "./seller-provider"

export default function MockContinuation({
  address,
  situation,
  onReset,
}: {
  address: string
  situation: string | null
  onReset: () => void
}) {
  return (
    <div
      className="shadow-pop mt-6 rounded-2xl border border-border bg-surface-tint p-6"
      role="region"
      aria-label="Demo continuation"
    >
      <div className="mb-3 flex items-center gap-2">
        <span className="inline-flex items-center rounded-full bg-success/10 px-2 py-0.5 text-xs font-semibold text-success">
          Demo only: nothing was sent or saved
        </span>
      </div>
      <p className="text-base font-medium">
        Address:{" "}
        <span className="font-normal text-muted-foreground">
          {address || "(none)"}
        </span>
      </p>
      {situation && (
        <p className="mt-1 text-sm text-muted-foreground">
          Situation (demo only):{" "}
          {situation.replace(/\b\w/, (c) => c.toUpperCase())}
        </p>
      )}
      <p className="mt-2 text-sm text-muted-foreground">
        In the real flow, we would ask a few quick questions about your home
        next.
      </p>
      <button
        onClick={() => {
          onReset()
          setTimeout(
            () => document.getElementById("address-input")?.focus(),
            100
          )
        }}
        className="mt-4 inline-flex items-center gap-2 rounded text-sm font-medium text-primary hover:underline focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
      >
        Use a different address <ArrowLeft size={14} />
      </button>
    </div>
  )
}
