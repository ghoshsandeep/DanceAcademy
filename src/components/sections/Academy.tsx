import { siteInfo } from '../../data/site'
import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'

const points = [
  'Structured training with respect for lineage',
  'Deep engagement with taal, laya and abhinaya',
  'Understanding Indian classical arts in their authentic form',
  'Kathak as both heritage and an evolving practice',
]

export function Academy() {
  return (
    <section id="academy" className="py-14">
      <Container className="flex flex-col gap-8">
        <SectionHeading
          eyebrow={siteInfo.tagline}
          title={`Welcome to ${siteInfo.academyName}`}
          subtitle="At Tatkar, tradition is not taught — it is lived."
        />

        <ul className="grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2">
          {points.map((point) => (
            <li key={point} className="flex items-start gap-2.5 text-[0.95rem] text-charcoal-soft">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-terracotta" aria-hidden="true" />
              {point}
            </li>
          ))}
        </ul>

        <p className="font-serif text-xl font-medium italic text-terracotta">
          Rooted in tradition. Guided by discipline.
        </p>
      </Container>
    </section>
  )
}
