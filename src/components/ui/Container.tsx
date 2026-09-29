import type { PropsWithChildren } from 'react'

export function Container({ children, className = '' }: PropsWithChildren<{ className?: string }>) {
  return (
    <div className={`mx-auto w-full max-w-content px-5 lg:max-w-6xl lg:px-8 ${className}`}>
      {children}
    </div>
  )
}
