import { siteInfo } from '../../data/site'
import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'

const points = [
  'Discover Kathak',
  'Develop discipline',
  'Build confidence',
  'Learn rhythm and movement',
  'Experience Indian classical dance',
  'Progress toward performance',
]

export function Academy() {
  return (
    <section id="academy" className="py-14">
      <Container className="flex flex-col gap-8">
        <SectionHeading title={`Welcome to ${siteInfo.academyName}`} />

        <ul className="grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2">
          {points.map((point) => (
            <li key={point} className="flex items-start gap-2.5 text-[0.95rem] text-charcoal-soft">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-terracotta" aria-hidden="true" />
              {point}
            </li>
          ))}
        </ul>

        <p className="font-serif text-xl font-medium italic text-terracotta">
          Learn. Practice. Perform. Grow.
        </p>
      </Container>
    </section>
  )
}
