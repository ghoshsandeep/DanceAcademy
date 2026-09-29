import { useState } from 'react'

type PlaceholderImageProps = {
  src: string
  alt: string
  className?: string
  /** Tailwind aspect-ratio utility, e.g. "aspect-[4/5]" */
  aspect?: string
  loading?: 'lazy' | 'eager'
}

/**
 * Renders a real photo when one exists at `src`. Until then, falls back to
 * an elegant on-brand placeholder instead of a broken image icon — so the
 * site always looks intentional, even with zero photography supplied.
 */
export function PlaceholderImage({
  src,
  alt,
  className = '',
  aspect = 'aspect-[4/5]',
  loading = 'lazy',
}: PlaceholderImageProps) {
  const [failed, setFailed] = useState(false)

  if (failed) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`${aspect} ${className} flex items-center justify-center overflow-hidden rounded-xl2 bg-gradient-to-br from-terracotta/15 via-gold-soft/20 to-charcoal/10`}
      >
        <div className="flex flex-col items-center gap-2 px-6 text-center">
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
            className="text-terracotta/50"
          >
            <path
              d="M4 16.5L8.5 12l3 3 4-5 4.5 6.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="8" cy="8.5" r="1.25" fill="currentColor" />
          </svg>
          <span className="text-xs font-medium tracking-wide text-charcoal-soft/70">
            Photograph coming soon
          </span>
        </div>
      </div>
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      loading={loading}
      onError={() => setFailed(true)}
      className={`${aspect} ${className} rounded-xl2 object-cover`}
    />
  )
}
