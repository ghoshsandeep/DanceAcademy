import { trainingPillars } from '../../data/profile'
import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'

export function Training() {
  return (
    <section id="training" className="py-16 lg:py-20">
      <Container className="flex flex-col gap-10">
        <SectionHeading
          align="center"
          eyebrow="Our Approach"
          title="Training in Kathak"
          subtitle="Students are guided to understand the essence of Indian classical arts in its authentic form."
        />

        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {trainingPillars.map((item, index) => (
            <li key={item.title} className="card relative overflow-hidden p-6 pb-16">
              <span
                aria-hidden="true"
                className="absolute bottom-1 right-4 font-serif text-[4.5rem] font-semibold leading-none text-gold/25"
              >
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="relative font-serif text-xl font-semibold text-charcoal">
                {item.title}
              </h3>
              <p className="relative mt-2 text-sm leading-relaxed text-charcoal-soft">
                {item.description}
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
