import { testimonials } from '../../data/testimonials'
import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'

export function Testimonials() {
  return (
    <section className="py-14">
      <Container className="flex flex-col gap-8">
        <SectionHeading title="Stories From Our Students" />

        <div className="no-scrollbar -mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 lg:mx-0 lg:grid lg:grid-cols-3 lg:overflow-visible lg:px-0">
          {testimonials.map((item, index) => (
            <figure
              key={`${item.name}-${index}`}
              className="w-[85%] shrink-0 snap-start rounded-xl2 border border-charcoal/8 bg-ivory-soft p-5 lg:w-auto"
            >
              <blockquote className="text-[0.95rem] italic leading-relaxed text-charcoal-soft">
                {item.quote}
              </blockquote>
              <figcaption className="mt-4 text-sm font-semibold text-charcoal">
                {item.name}
                <span className="block text-xs font-normal text-charcoal-soft/70">
                  {item.relation}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
        <p className="text-xs text-charcoal-soft/60">
          Placeholder testimonials shown for layout purposes — to be replaced with real, consented
          student stories.
        </p>
      </Container>
    </section>
  )
}
