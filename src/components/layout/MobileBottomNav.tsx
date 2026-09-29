import type { ReactNode } from 'react'
import { bottomNavItems, type BottomNavItem } from '../../data/navigation'

const icons: Record<BottomNavItem['icon'], ReactNode> = {
  home: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M4 11.5L12 4l8 7.5M6 9.5V20h12V9.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  classes: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M4 6h16M4 12h16M4 18h10"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  ),
  gallery: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3.5" y="4.5" width="17" height="15" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="8.5" cy="9.5" r="1.4" stroke="currentColor" strokeWidth="1.4" />
      <path d="M5 17l4.5-4.5 3 3L18 10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  contact: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M4 6l8 6 8-6M4 6h16v12H4V6z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
}

export function MobileBottomNav() {
  return (
    <nav
      aria-label="Bottom"
      className="fixed inset-x-0 bottom-0 z-40 border-t border-charcoal/10 bg-ivory/95 backdrop-blur-sm lg:hidden"
      style={{ paddingBottom: 'var(--safe-bottom)' }}
    >
      <ul className="flex h-[var(--bottom-nav-height)] items-stretch justify-around">
        {bottomNavItems.map((item) => (
          <li key={item.href} className="flex-1">
            <a
              href={item.href}
              className="flex h-full min-w-[44px] flex-col items-center justify-center gap-1 text-charcoal-soft transition-colors hover:text-terracotta"
            >
              {icons[item.icon]}
              <span className="text-[0.68rem] font-medium">{item.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
