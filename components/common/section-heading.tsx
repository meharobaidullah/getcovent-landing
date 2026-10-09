export default function SectionHeading({
  eyebrow,
  title,
  sub,
}: {
  eyebrow?: string
  title: string
  sub?: string
}) {
  return (
    <div className="max-w-3xl">
      {eyebrow && (
        <p className="mb-3 text-sm font-medium tracking-widest text-muted-foreground uppercase">
          {eyebrow}
        </p>
      )}
      <h2 className="balance text-3xl leading-[1.05] font-semibold tracking-tight text-wrap text-foreground md:text-5xl">
        {title}
      </h2>
      {sub && (
        <p className="pretty mt-4 max-w-2xl text-base leading-relaxed text-wrap text-muted-foreground lg:text-lg">
          {sub}
        </p>
      )}
    </div>
  )
}
