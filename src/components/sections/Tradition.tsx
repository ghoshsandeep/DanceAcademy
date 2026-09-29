import { siteInfo } from '../../data/site'
import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'

// A subtle row of bars evoking rhythmic taal counts, without leaning on
// literal Indian motifs (no mandalas/paisley).
function RhythmBars() {
  const heights = [10, 18, 12, 24, 14, 20, 10, 16, 22, 12]
  return (
    <div className="flex items-end gap-1.5" aria-hidden="true">
      {heights.map((h, i) => (
        <span
          key={i}
          className="w-1 rounded-full bg-gold-soft/70"
          style={{ height: `${h}px` }}
        />
      ))}
    </div>
  )
}

export function Tradition() {
  return (
    <section className="bg-charcoal py-16 text-ivory">
      <Container className="flex flex-col gap-6">
        <RhythmBars />
        <SectionHeading
          eyebrow={siteInfo.gharana}
          title="Rooted in Tradition"
          light
          subtitle={undefined}
        />
        <p className="max-w-[48ch] text-[0.98rem] leading-relaxed text-ivory/75">
          Next Gen Dance Academy carries forward the {siteInfo.gharana} tradition of Kathak —
          honouring its footwork, rhythm and storytelling while nurturing the next generation of
          dancers in {siteInfo.city}.
        </p>
      </Container>
    </section>
  )
}
