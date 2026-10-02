import { siteInfo } from '../../data/site'
import { Button } from '../ui/Button'
import { Container } from '../ui/Container'

export function Join() {
  return (
    <section className="py-16 lg:py-20">
      <Container>
        <div className="flex flex-col gap-5 relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-terracotta to-terracotta-dark px-6 py-12 text-center text-ivory shadow-floating lg:rounded-[3rem] lg:py-16">
          <h2 className="font-serif text-3xl font-semibold leading-snug lg:text-5xl">
            Begin Your Kathak Journey
          </h2>
          <p className="mx-auto max-w-[42ch] text-[0.95rem] leading-relaxed text-ivory/90">
            Discover structured, disciplined Kathak training rooted in tradition with{' '}
            {siteInfo.academyName}.
          </p>
          <div className="mx-auto flex flex-col gap-3 sm:flex-row">
            <Button href="#contact" variant="light" arrow>
              Enquire Now
            </Button>
            <Button href="#contact" variant="outline-light">
              Ask a Question
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
