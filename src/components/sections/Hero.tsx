import { heroImage } from '../../data/gallery'
import { siteInfo } from '../../data/site'
import { Button } from '../ui/Button'
import { Container } from '../ui/Container'
import { PlaceholderImage } from '../ui/PlaceholderImage'

export function Hero() {
  return (
    <section id="home" className="pt-8 lg:pt-14">
      <Container className="flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-16">
        <div className="order-2 flex flex-col gap-5 lg:order-1 lg:w-1/2">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-terracotta">
            {siteInfo.academyName}
          </span>
          <h1 className="font-serif text-[2.25rem] font-semibold leading-[1.15] text-charcoal lg:text-6xl">
            The Art of Kathak.
            <br />
            The Tradition of Banaras.
            <br />
            The Next Generation.
          </h1>
          <p className="max-w-[42ch] text-[0.98rem] leading-relaxed text-charcoal-soft">
            Founded by Kathak artist and teacher {siteInfo.founderName}, bringing over{' '}
            {siteInfo.yearsExperience} years of experience, tradition and artistry to students in{' '}
            {siteInfo.city} and beyond.
          </p>
          <div className="mt-2 flex flex-col gap-3 sm:flex-row">
            <Button href="#contact" variant="primary">
              Join a Class
            </Button>
            <Button href="#about" variant="secondary">
              Discover Suji
            </Button>
          </div>
        </div>

        <div className="order-1 lg:order-2 lg:w-1/2">
          <PlaceholderImage
            src={heroImage.src}
            alt={heroImage.alt}
            aspect="aspect-[4/5]"
            loading="eager"
            className="w-full shadow-floating"
          />
        </div>
      </Container>
    </section>
  )
}
