import { competitionResults, majorHonours, type Achievement } from '../../data/achievements'
import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'

function Timeline({ items }: { items: Achievement[] }) {
  return (
    <ol className="relative flex flex-col gap-8 border-l border-charcoal/12 pl-6">
      {items.map((item) => (
        <li key={item.title} className="relative">
          <span
            className="absolute -left-[29px] top-1 h-2.5 w-2.5 rounded-full border-2 border-ivory bg-terracotta"
            aria-hidden="true"
          />
          <h3 className="font-serif text-lg font-semibold text-charcoal">
            {item.title}
            {item.year && (
              <span className="ml-2 text-sm font-normal text-terracotta">{item.year}</span>
            )}
          </h3>
          {item.description && (
            <p className="mt-1 text-sm leading-relaxed text-charcoal-soft">{item.description}</p>
          )}
        </li>
      ))}
    </ol>
  )
}

export function Achievements() {
  return (
    <section id="achievements" className="py-16 lg:py-20">
      <Container className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="flex flex-col gap-10">
          <SectionHeading eyebrow="Awards & Recognition" title="Major Honours" />
          <Timeline items={majorHonours} />
        </div>
        <div className="flex flex-col gap-10">
          <SectionHeading eyebrow="Award-Winning Performer" title="Competition Results" />
          <Timeline items={competitionResults} />
        </div>
      </Container>
    </section>
  )
}
