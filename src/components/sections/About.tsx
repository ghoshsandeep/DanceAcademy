import { portraitImage } from '../../data/gallery'
import { siteInfo } from '../../data/site'
import { Button } from '../ui/Button'
import { Container } from '../ui/Container'
import { PlaceholderImage } from '../ui/PlaceholderImage'
import { SectionHeading } from '../ui/SectionHeading'

export function About() {
  return (
    <section id="about" className="py-14">
      <Container className="flex flex-col gap-8 lg:flex-row-reverse lg:items-center lg:gap-16">
        <div className="lg:w-1/2">
          <PlaceholderImage
            src={portraitImage.src}
            alt={portraitImage.alt}
            aspect="aspect-[4/5]"
            className="w-full max-w-xs shadow-card lg:max-w-none"
          />
        </div>

        <div className="flex flex-col gap-5 lg:w-1/2">
          <SectionHeading
            eyebrow="A lifelong journey with Kathak"
            title="Meet Suji"
            subtitle={`With more than two decades dedicated to Kathak and dance education, ${siteInfo.founderName} brings together traditional knowledge, performance experience and a passion for teaching the next generation.`}
          />
          <div>
            <Button href="#achievements" variant="ghost" className="!min-h-0 !px-0">
              Read Suji's Story →
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
