"use client"
import { useEffect, useRef, useState } from "react"
export default function CountUp({
  value,
  suffix = "",
}: {
  value: number
  suffix?: string
}) {
  const [display, setDisplay] = useState(value)
  const ref = useRef<HTMLSpanElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setDisplay(value)
          obs.disconnect()
        }
      },
      { threshold: 0.3 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [value])
  return (
    <span ref={ref} className="tabular-nums" aria-label={`${value}${suffix}`}>
      {display.toLocaleString()}
      {suffix}
    </span>
  )
}
