"use client"
import { useState, useRef } from "react"
import { MapPin, ArrowRight, Check } from "lucide-react"
import { useSeller } from "./seller-provider"
import MockContinuation from "./mock-continuation"
import { cn } from "@/lib/utils"

export default function AddressForm({
  variant = "hero",
}: {
  variant?: "hero" | "band"
}) {
  const {
    address,
    setAddress,
    submitted,
    setSubmitted,
    loading,
    setLoading,
    situation,
    reset,
  } = useSeller()
  const [error, setError] = useState("")
  const inputRef = useRef<HTMLInputElement>(null)

  const validate = (v: string) => {
    const trimmed = v.trim()
    if (!trimmed) return "Enter your home address to continue."
    if (!/\d/.test(trimmed))
      return "Add your street number, like 123 Maple Street."
    return ""
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const msg = validate(address)
    if (msg) {
      setError(msg)
      setSubmitted(false)
      inputRef.current?.focus()
      return
    }
    setError("")
    setLoading(true)
    setSubmitted(false)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 700)
  }

  const handleChange = (v: string) => {
    setAddress(v)
    if (error) setError("")
  }

  const isHero = variant === "hero"

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        noValidate
        className="flex flex-col items-stretch gap-3 sm:flex-row sm:gap-2"
        aria-label="Address form"
      >
        <label htmlFor="address-input" className="sr-only">
          Enter your home address
        </label>

        <div
          className={cn(
            isHero
              ? "shadow-pop relative h-14 flex-1 overflow-hidden rounded-full border border-border/60 bg-white transition-all focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-1 sm:h-16"
              : "relative h-14 flex-1 overflow-hidden rounded-full border border-white/20 bg-white/10 focus-within:ring-2 focus-within:ring-white/60"
          )}
        >
          <span
            className="pointer-events-none absolute top-1/2 left-4 -translate-y-1/2 text-muted-foreground"
            aria-hidden="true"
          >
            <MapPin size={18} />
          </span>
          <input
            id="address-input"
            ref={inputRef}
            value={address}
            onChange={(e) => handleChange(e.target.value)}
            placeholder="Enter your home address"
            autoComplete="street-address"
            name="address"
            aria-invalid={!!error}
            aria-describedby={error ? "address-error" : undefined}
            className={cn(
              "h-full min-h-14 w-full bg-transparent pr-4 pl-11 text-base outline-none placeholder:text-muted-foreground",
              !isHero && "text-white"
            )}
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          aria-busy={loading}
          aria-live="polite"
          aria-describedby={loading ? "address-loading" : undefined}
          className={cn(
            "flex h-14 items-center justify-center gap-2 rounded-full px-7 font-medium",
            isHero
              ? "bg-primary text-primary-foreground shadow-card transition-colors hover:bg-primary-hover focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none sm:h-16"
              : "bg-white text-surface-dark shadow-card transition-colors hover:bg-secondary focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:outline-none"
          )}
        >
          {loading ? (
            <>
              <Check size={18} /> Checking
            </>
          ) : (
            <>
              Get my offer <ArrowRight size={18} />
            </>
          )}
        </button>
      </form>

      <div id="address-loading" aria-live="polite" className="sr-only">
        {loading ? "Checking address" : ""}
      </div>
      <div
        id="address-error"
        aria-live="polite"

        className={cn(
          "mt-2 text-sm font-medium",
          error ? "text-destructive" : "hidden"
        )}
      >
        {error}
      </div>

      {loading && (
        <p className="mt-3 text-sm text-muted-foreground">
          Checking address...
        </p>
      )}
      {submitted && (
        <MockContinuation
          address={address}
          situation={situation}
          onReset={reset}
        />
      )}
    </div>
  )
}
