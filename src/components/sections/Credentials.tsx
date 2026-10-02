import { credentials } from '../../data/achievements'
import { Container } from '../ui/Container'

export function Credentials() {
  return (
    <section aria-label="Credentials" className="relative z-10 -mt-14 pb-6 lg:-mt-16">
      <Container>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {credentials.map((item) => (
            <div
              key={item.label}
              className="card !bg-white px-4 py-6 text-center"
            >
              <p className="font-serif text-2xl font-semibold text-terracotta lg:text-3xl">{item.value}</p>
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
