import { trainingPillars } from '../../data/profile'
import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'

export function Training() {
  return (
    <section id="training" className="py-14">
      <Container className="flex flex-col gap-8">
        <SectionHeading
          eyebrow="Our Approach"
          title="Training in Kathak"
          subtitle="Students are guided to understand the essence of Indian classical arts in its authentic form."
        />

        <ul className="flex flex-col divide-y divide-charcoal/8 rounded-xl2 border border-charcoal/8 bg-ivory-soft shadow-card">
          {trainingPillars.map((item, index) => (
            <li key={item.title} className="flex items-start gap-4 px-5 py-4">
              <span className="font-serif text-lg font-medium text-terracotta/70">
                {String(index + 1).padStart(2, '0')}
              </span>
              <span className="flex-1">
                <span className="block font-serif text-lg font-semibold text-charcoal">
                  {item.title}
                </span>
                <span className="mt-0.5 block text-sm leading-snug text-charcoal-soft">
                  {item.description}
                </span>
              </span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
