import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'

const benefits = [
  {
    title: '25+ Years of Experience',
    description: 'Over 25 years of training and performance experience in Kathak.',
  },
  {
    title: 'Traditional Foundation',
    description: 'Trained in both the Jaipur and Lucknow gharanas.',
  },
  {
    title: 'Student-Centred Approach',
    description: 'Structured pedagogy with a strong emphasis on technique, rhythm and abhinaya.',
  },
  {
    title: 'Examination Success',
    description:
      '100+ students trained and mentored for graded examinations, certification courses and university-level exams.',
  },
]

export function MoreThanDance() {
  return (
    <section className="py-14">
      <Container className="flex flex-col gap-8">
        <SectionHeading title="Why Learn Here" />

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
