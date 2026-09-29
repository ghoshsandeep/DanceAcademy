import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'

type Variant = 'primary' | 'secondary' | 'ghost'

const baseClasses =
  'inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full px-6 text-[0.95rem] font-semibold transition-colors duration-150 active:scale-[0.98]'

const variantClasses: Record<Variant, string> = {
  primary: 'bg-terracotta text-ivory hover:bg-terracotta-dark',
  secondary: 'border border-charcoal/20 bg-transparent text-charcoal hover:border-charcoal/40',
  ghost: 'text-terracotta hover:text-terracotta-dark',
}

type AnchorButtonProps = {
  as?: 'a'
  variant?: Variant
} & AnchorHTMLAttributes<HTMLAnchorElement>

type NativeButtonProps = {
  as: 'button'
  variant?: Variant
} & ButtonHTMLAttributes<HTMLButtonElement>

type ButtonProps = AnchorButtonProps | NativeButtonProps

export function Button({ variant = 'primary', className = '', as = 'a', ...props }: ButtonProps) {
  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`

  if (as === 'button') {
    const { children, ...rest } = props as NativeButtonProps
    return (
      <button className={classes} {...rest}>
        {children}
      </button>
    )
  }

  const { children, ...rest } = props as AnchorButtonProps
  return (
    <a className={classes} {...rest}>
      {children}
    </a>
  )
}
