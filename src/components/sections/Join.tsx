import { siteInfo } from '../../data/site'
import { Button } from '../ui/Button'
import { Container } from '../ui/Container'

export function Join() {
  return (
    <section className="py-14">
      <Container>
        <div className="flex flex-col gap-5 rounded-xl2 bg-terracotta px-6 py-10 text-center text-ivory shadow-floating">
          <h2 className="font-serif text-2xl font-semibold leading-snug lg:text-3xl">
            Begin Your Kathak Journey
          </h2>
          <p className="mx-auto max-w-[42ch] text-[0.95rem] leading-relaxed text-ivory/90">
            Discover structured, disciplined Kathak training rooted in tradition with{' '}
            {siteInfo.academyName}.
          </p>
          <div className="mx-auto flex flex-col gap-3 sm:flex-row">
            <Button href="#contact" className="bg-ivory text-terracotta hover:bg-ivory/90">
              Enquire Now
            </Button>
            <Button
              href="#contact"
              variant="secondary"
              className="border-ivory/40 text-ivory hover:border-ivory/70"
            >
              Ask a Question
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
