import { certifications, education, teachingRoles, type Qualification } from '../../data/profile'
import { siteInfo } from '../../data/site'
import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'

function QualificationList({ title, items }: { title: string; items: Qualification[] }) {
  return (
    <div className="card p-6">
      <h3 className="font-serif text-lg font-semibold text-charcoal">{title}</h3>
      <ul className="mt-3 flex flex-col gap-3">
        {items.map((item) => (
          <li key={item.title} className="text-sm leading-snug text-charcoal-soft">
            <span className="font-medium text-charcoal">{item.title}</span>
            {item.institution && <span> — {item.institution}</span>}
            {item.year && <span>, {item.year}</span>}
          </li>
        ))}
      </ul>
    </div>
  )
}

export function Qualifications() {
  return (
    <section id="qualifications" className="py-16 lg:py-20">
      <Container className="flex flex-col gap-8">
        <SectionHeading align="center" eyebrow="Scholar & Educator" title="Education & Teaching" />

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          <QualificationList title="Academic Qualifications" items={education} />
          <QualificationList title="Certifications & Diplomas" items={certifications} />
          <div className="card p-6">
            <h3 className="font-serif text-lg font-semibold text-charcoal">Teaching Roles</h3>
            <ul className="mt-3 flex flex-col gap-3">
              {teachingRoles.map((role) => (
                <li key={role} className="text-sm leading-snug text-charcoal-soft">
                  {role}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm leading-snug text-charcoal-soft">
              <span className="font-medium text-charcoal">Founder &amp; Director</span> —{' '}
              {siteInfo.academyName}. A platform for disciplined Kathak training, mentoring
              students across levels and promoting classical dance through performances and
              workshops.
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}
