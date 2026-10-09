export default function SampleBadge({ text = "Sample" }: { text?: string }) {
  return (
    <span className="inline-flex items-center rounded-full bg-secondary px-2.5 py-0.5 text-[11px] font-medium tracking-wide text-secondary-foreground uppercase">
      {text}
    </span>
  )
}
