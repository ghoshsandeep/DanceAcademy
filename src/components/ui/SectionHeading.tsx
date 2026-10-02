type SectionHeadingProps = {
  eyebrow?: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  light?: boolean
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'left',
  light = false,
}: SectionHeadingProps) {
  const centered = align === 'center'
  const alignment = centered ? 'text-center items-center' : 'text-left items-start'

  return (
    <div className={`flex flex-col gap-3 ${alignment}`}>
      {eyebrow && (
        <span
          className={`text-xs font-semibold uppercase tracking-[0.2em] ${
            light ? 'text-gold-soft' : 'text-terracotta'
          }`}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={`font-serif text-[2.1rem] font-semibold leading-[1.1] lg:text-5xl ${
          light ? 'text-ivory' : 'text-charcoal'
        }`}
      >
        {title}
      </h2>
      {/* Small rose-gold ornament rule */}
      <span className="flex items-center gap-2" aria-hidden="true">
        <span className="h-px w-8 bg-gold" />
        <span className="h-1.5 w-1.5 rotate-45 bg-gold" />
        <span className="h-px w-8 bg-gold" />
      </span>
      {subtitle && (
        <p
          className={`max-w-[44ch] text-[0.95rem] leading-relaxed ${
            light ? 'text-ivory/80' : 'text-charcoal-soft'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
