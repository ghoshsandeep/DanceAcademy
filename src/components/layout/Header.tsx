import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { navItems } from '../../data/navigation'
import { siteInfo } from '../../data/site'
import { Button } from '../ui/Button'
import { Container } from '../ui/Container'

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  // Close the mobile menu on Escape and lock body scroll while it's open.
  useEffect(() => {
    if (!menuOpen) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }
    document.addEventListener('keydown', onKeyDown)
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = previousOverflow
    }
  }, [menuOpen])

  return (
    <header className="fixed inset-x-0 top-3 z-40">
      <Container>
        <div className="flex h-14 items-center justify-between rounded-full border border-white/60 bg-ivory/85 pl-5 pr-1.5 shadow-floating backdrop-blur-md lg:h-16 lg:pl-7">
        <a href="#home" aria-label={siteInfo.academyName} className="flex flex-col leading-none text-charcoal">
          <span className="font-serif text-xl font-semibold uppercase tracking-[0.3em]">
            {siteInfo.academyShortName}
          </span>
          <span className="mt-1 text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-charcoal-soft">
            {siteInfo.academyDescriptor}
          </span>
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          <nav aria-label="Primary">
            <ul className="flex items-center gap-6">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm font-medium text-charcoal-soft transition-colors hover:text-terracotta"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <Button href="#contact" variant="primary" arrow className="!min-h-[44px]">
            Enquire
          </Button>
        </div>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-full text-charcoal lg:hidden"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M4 7h16M4 12h16M4 17h16"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>
          )}
        </button>
        </div>
      </Container>

      {menuOpen &&
        createPortal(
          <div
            id="mobile-menu"
            className="fixed inset-x-0 top-[4.75rem] bottom-0 z-50 overflow-y-auto bg-ivory lg:hidden"
          >
            <nav aria-label="Mobile" className="flex h-full flex-col px-5 pt-6">
              <ul className="flex flex-col gap-1">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      className="flex min-h-[52px] items-center border-b border-charcoal/8 font-serif text-xl text-charcoal"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
              <Button href="#contact" onClick={() => setMenuOpen(false)} className="mt-8 w-full">
                Enquire
              </Button>
            </nav>
          </div>,
          document.body,
        )}
    </header>
  )
}
