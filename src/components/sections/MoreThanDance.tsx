import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'

const benefits = [
  {
    title: '20+ Years of Experience',
    description: 'Learn from an experienced Kathak practitioner and educator.',
  },
  {
    title: 'Traditional Foundation',
    description: 'Rooted in the Banaras Gharana tradition.',
  },
  {
    title: 'Personal Guidance',
    description: "Teaching adapted to each student's stage and learning journey.",
  },
  {
    title: 'From Learning to Performance',
    description:
      'Students can develop their skills beyond the classroom and explore performance and choreography.',
  },
]

export function MoreThanDance() {
  return (
    <section className="py-14">
      <Container className="flex flex-col gap-8">
        <SectionHeading title="More Than Dance" />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="rounded-xl2 border border-charcoal/8 bg-ivory-soft p-5"
            >
              <h3 className="font-serif text-lg font-semibold text-charcoal">{benefit.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-charcoal-soft">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
