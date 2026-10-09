import { cn } from "@/lib/utils"
export default function Section({
  children,
  id,
  className,
  dark,
}: {
  children: React.ReactNode
  id?: string
  className?: string
  dark?: boolean
}) {
  return (
    <section
      id={id}
      className={cn(
        "scroll-mt-24",
        dark ? "bg-surface-dark text-surface-dark-foreground" : "",
        className
      )}
    >
      {children}
    </section>
  )
}
