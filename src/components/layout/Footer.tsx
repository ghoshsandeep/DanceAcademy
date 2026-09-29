import { navItems } from '../../data/navigation'
import { languageOptions, siteInfo } from '../../data/site'
import { Container } from '../ui/Container'

const footerLinks = navItems.filter((item) =>
  ['About Suji', 'Classes', 'Gallery', 'Contact'].includes(item.label),
)

export function Footer() {
  return (
    <footer className="bg-charcoal text-ivory/85">
      <Container className="flex flex-col gap-10 py-14">
        <div>
          <p className="font-serif text-2xl font-semibold text-ivory">{siteInfo.academyName}</p>
          <p className="mt-2 text-sm text-ivory/60">{siteInfo.tagline}</p>
        </div>

        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium">
            {footerLinks.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="text-ivory/80 hover:text-gold-soft">
                  {item.label.replace(' Suji', '')}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-ivory/50">
            Language
          </p>
          <ul className="flex flex-wrap gap-3">
            {languageOptions.map((lang) => (
              <li key={lang.code}>
                <button
                  type="button"
                  className="rounded-full border border-ivory/20 px-3.5 py-1.5 text-sm text-ivory/80 transition-colors hover:border-gold-soft hover:text-gold-soft"
                  aria-label={`Switch language to ${lang.label}`}
                >
                  {lang.label}
                </button>
              </li>
            ))}
          </ul>
          <p className="mt-2 text-xs text-ivory/40">
            Full multilingual support is coming soon.
          </p>
        </div>

        <div className="flex items-center gap-4 border-t border-ivory/10 pt-6 text-sm text-ivory/50">
          <p>© {siteInfo.academyName}</p>
        </div>
      </Container>
    </footer>
  )
}
