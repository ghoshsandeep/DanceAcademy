import { credentials } from '../../data/achievements'
import { Container } from '../ui/Container'

export function Credentials() {
  return (
    <section aria-label="Credentials" className="py-10">
      <Container>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {credentials.map((item) => (
            <div
              key={item.label}
              className="rounded-xl2 border border-charcoal/8 bg-ivory-soft px-4 py-6 text-center shadow-card"
            >
              <p className="font-serif text-2xl font-semibold text-terracotta">{item.value}</p>
              <p className="mt-1 text-xs font-medium leading-snug text-charcoal-soft">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
