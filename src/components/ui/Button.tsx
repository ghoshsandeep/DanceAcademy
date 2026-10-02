import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'

type Variant = 'primary' | 'secondary' | 'ghost' | 'light' | 'outline-light'

const baseClasses =
  'group inline-flex min-h-[48px] items-center justify-center gap-3 rounded-full px-6 text-[0.95rem] font-semibold transition-all duration-200 active:scale-[0.98]'

const variantClasses: Record<Variant, string> = {
  primary: 'bg-terracotta text-ivory shadow-card hover:bg-terracotta-dark hover:shadow-floating',
  secondary: 'border border-charcoal/20 bg-transparent text-charcoal hover:border-charcoal/40',
  ghost: 'text-terracotta hover:text-terracotta-dark',
  // For use on dark (plum) backgrounds
  light: 'bg-gold-soft text-terracotta-dark shadow-card hover:bg-white',
  'outline-light': 'border border-ivory/40 text-ivory hover:border-ivory hover:bg-ivory/10',
}

type CommonProps = {
  variant?: Variant
  /** Adds a circular arrow chip after the label */
  arrow?: boolean
}

type AnchorButtonProps = {
  as?: 'a'
} & CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement>

type NativeButtonProps = {
  as: 'button'
} & CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement>

type ButtonProps = AnchorButtonProps | NativeButtonProps

function ArrowChip({ variant }: { variant: Variant }) {
  const tone = variant === 'light' ? 'bg-terracotta text-ivory' : 'bg-ivory text-terracotta'
  return (
    <span
      aria-hidden="true"
      className={`flex h-8 w-8 items-center justify-center rounded-full transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${tone}`}
    >
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
        <path
          d="M7 17L17 7M9 7h8v8"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  )
}

export function Button({
  variant = 'primary',
  arrow = false,
  className = '',
  as = 'a',
  ...props
}: ButtonProps) {
  const classes = `${baseClasses} ${variantClasses[variant]} ${arrow ? '!pr-2' : ''} ${className}`
  const withArrow = (children: ReactNode) => (
    <>
      {children}
      {arrow && <ArrowChip variant={variant} />}
    </>
  )

  if (as === 'button') {
    const { children, ...rest } = props as NativeButtonProps
    return (
      <button className={classes} {...rest}>
        {withArrow(children)}
      </button>
    )
  }

  const { children, ...rest } = props as AnchorButtonProps
  return (
    <a className={classes} {...rest}>
      {withArrow(children)}
    </a>
  )
}
