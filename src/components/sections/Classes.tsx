import { classes } from '../../data/classes'
import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'

export function Classes() {
  return (
    <section id="classes" className="py-14">
      <Container className="flex flex-col gap-8">
        <SectionHeading
          eyebrow="Find Your Rhythm"
          title="Classes for Every Stage"
          subtitle="Classes designed for every stage of your Kathak journey."
        />

        <ul className="flex flex-col divide-y divide-charcoal/8 rounded-xl2 border border-charcoal/8 bg-ivory-soft shadow-card">
          {classes.map((item) => (
            <li key={item.title}>
              <a
                href="#contact"
                className="flex min-h-[76px] items-center gap-4 px-5 py-4 transition-colors hover:bg-terracotta/5"
              >
                <span className="font-serif text-lg font-medium text-terracotta/70">
                  {item.index}
                </span>
                <span className="flex-1">
                  <span className="block font-serif text-lg font-semibold text-charcoal">
                    {item.title}
                  </span>
                  <span className="mt-0.5 block text-sm leading-snug text-charcoal-soft">
                    {item.description}
                  </span>
                </span>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                  className="shrink-0 text-charcoal/30"
                >
                  <path
                    d="M9 5l7 7-7 7"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
