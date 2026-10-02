import { gurus } from '../../data/profile'
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
    <section id="lineage" className="mx-3 rounded-[2rem] bg-gradient-to-br from-terracotta-dark via-charcoal to-charcoal py-16 text-ivory lg:mx-6 lg:rounded-[3.5rem] lg:py-24">
      <Container className="flex flex-col gap-6">
        <RhythmBars />
        <SectionHeading
          eyebrow={siteInfo.gharana}
          title="Rooted in Tradition"
          light
          subtitle={undefined}
        />
        <p className="max-w-[48ch] text-[0.98rem] leading-relaxed text-ivory/75">
          {siteInfo.founderName} is trained in both the Jaipur and Lucknow gharanas of Kathak. Her
          artistic upbringing is shaped by guidance from eminent gurus:
        </p>
        <ul className="grid gap-5 lg:grid-cols-2">
          {gurus.map((guru) => (
            <li key={guru.name} className="border-l border-gold-soft/50 pl-4">
              <p className="font-serif text-lg font-semibold text-ivory">{guru.name}</p>
              {guru.role && <p className="text-sm text-ivory/70">{guru.role}</p>}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
