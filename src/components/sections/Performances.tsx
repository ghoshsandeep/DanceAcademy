import { performances, workshops } from '../../data/profile'
import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'

export function Performances() {
  return (
    <section id="performances" className="py-14">
      <Container className="flex flex-col gap-10">
        <div className="flex flex-col gap-6">
          <SectionHeading
            eyebrow="Stage & Screen"
            title="Performances & Festivals"
            subtitle="Platforms, festivals and academic circuits across India."
          />
          <ul className="grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2">
            {performances.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-[0.95rem] text-charcoal-soft">
                <span
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-terracotta"
                  aria-hidden="true"
                />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-6">
          <SectionHeading eyebrow="Learning & Sharing" title="Workshops & Seminars" />
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {workshops.map((item) => (
              <li
                key={item.title}
                className="rounded-xl2 border border-charcoal/8 bg-ivory-soft p-5"
              >
                <h3 className="font-serif text-base font-semibold text-charcoal">{item.title}</h3>
                <p className="mt-1 text-sm leading-snug text-charcoal-soft">{item.host}</p>
              </li>
            ))}
          </ul>
          <p className="max-w-[60ch] text-sm leading-relaxed text-charcoal-soft">
            Research papers and demonstrations were presented at various workshops and seminars as
            a Research Scholar from the Department of Performing Arts, Bangalore University.
          </p>
        </div>
      </Container>
    </section>
  )
}
