import { heroImage } from '../../data/gallery'
import { siteInfo } from '../../data/site'
import { Button } from '../ui/Button'
import { Container } from '../ui/Container'
import { PlaceholderImage } from '../ui/PlaceholderImage'

// Faint concentric arcs, a quiet nod to the cyclical structure of taal.
function TaalRings() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 600 600"
      className="pointer-events-none absolute -right-40 top-10 h-[34rem] w-[34rem] text-gold-soft/20 lg:-right-20 lg:h-[46rem] lg:w-[46rem]"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
    >
      {[80, 140, 200, 260, 320].map((r) => (
        <circle key={r} cx="300" cy="300" r={r} />
      ))}
    </svg>
  )
}

export function Hero() {
  return (
    <section id="home" className="relative">
      <div className="relative overflow-hidden bg-gradient-to-br from-terracotta-dark via-[#4a1a38] to-charcoal pb-28 pt-28 text-ivory lg:pb-40 lg:pt-36">
        <TaalRings />

        <Container className="relative flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-16">
          <div className="order-2 flex flex-col gap-6 lg:order-1 lg:w-[55%]">
            <span className="w-fit rounded-full border border-gold-soft/40 px-4 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-gold-soft">
              {siteInfo.academyName}
            </span>
            <h1 className="font-serif text-[2.6rem] font-medium leading-[1.08] lg:text-[3.6rem]">
              The Art of Kathak.
              <br />
              Rooted in Tradition.
              <br />
              <span className="italic text-gold-soft">Guided by Discipline.</span>
            </h1>
            <p className="max-w-[46ch] text-[1rem] italic leading-relaxed text-ivory/80">
              Founded by Kathak educator and scholar {siteInfo.founderName}, with{' '}
              {siteInfo.yearsExperience} years of training and performance experience, trained in
              the {siteInfo.gharana}. Based in {siteInfo.city}.
            </p>
            <div className="mt-2 flex flex-col gap-3 sm:flex-row">
              <Button href="#contact" variant="light" arrow>
                Enquire
              </Button>
              <Button href="#about" variant="outline-light">
                Meet Dr. Ghosh
              </Button>
            </div>
          </div>

          <div className="order-1 mx-auto w-full max-w-[17rem] lg:order-2 lg:mx-0 lg:w-[45%] lg:max-w-md lg:justify-self-end">
            <div className="rounded-t-[999px] rounded-b-[2rem] border border-gold-soft/30 p-2.5">
              <PlaceholderImage
                src={heroImage.src}
                alt={heroImage.alt}
                aspect="aspect-[4/5]"
                loading="eager"
                className="w-full !rounded-t-[999px] !rounded-b-[1.5rem] shadow-floating"
              />
            </div>
          </div>
        </Container>
      </div>

      {/* Soft curve that lets the hero flow into the light page */}
      <svg
        aria-hidden="true"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className="absolute inset-x-0 bottom-[-1px] h-14 w-full text-ivory lg:h-24"
      >
        <path d="M0 120V70C240 10 520 0 760 20c260 22 480 60 680 20v80z" fill="currentColor" />
      </svg>
    </section>
  )
}
