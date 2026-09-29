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
  const alignment = align === 'center' ? 'text-center items-center' : 'text-left items-start'

  return (
    <div className={`flex flex-col gap-2.5 ${alignment}`}>
      {eyebrow && (
        <span
          className={`text-xs font-semibold uppercase tracking-[0.18em] ${
            light ? 'text-gold-soft' : 'text-terracotta'
          }`}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={`font-serif text-[2rem] font-semibold leading-[1.15] ${
          light ? 'text-ivory' : 'text-charcoal'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`max-w-[32ch] text-[0.95rem] leading-relaxed ${light ? 'text-ivory/80' : 'text-charcoal-soft'}`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
