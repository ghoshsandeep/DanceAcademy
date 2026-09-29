import { achievements } from '../../data/achievements'
import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'

export function Achievements() {
  return (
    <section id="achievements" className="py-14">
      <Container className="flex flex-col gap-8">
        <SectionHeading eyebrow="A Journey of Dedication" title="Achievements" />

        <ol className="relative flex flex-col gap-8 border-l border-charcoal/12 pl-6">
          {achievements.map((item) => (
            <li key={item.title} className="relative">
              <span
                className="absolute -left-[29px] top-1 h-2.5 w-2.5 rounded-full border-2 border-ivory bg-terracotta"
                aria-hidden="true"
              />
              <h3 className="font-serif text-lg font-semibold text-charcoal">{item.title}</h3>
              {item.description && (
                <p className="mt-1 text-sm leading-relaxed text-charcoal-soft">
                  {item.description}
                </p>
              )}
            </li>
          ))}
        </ol>
      </Container>
    </section>
  )
}
