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
            eyebrow="Kathak educator and scholar"
            title={`Meet ${siteInfo.founderName}`}
            subtitle={`${siteInfo.founderName} is dedicated to nurturing strong foundations in Indian classical dance. With over 25 years of training and performance experience and 300+ students trained, she is known for her structured pedagogy, strong emphasis on technique, rhythm and abhinaya, and a student-centred approach.`}
          />
          <p className="max-w-[48ch] text-[0.95rem] leading-relaxed text-charcoal-soft">
            Her teaching bridges traditional parampara methods with academic clarity, enabling
            learners to understand Kathak as both heritage and an evolving practice.
          </p>
          <div>
            <Button href="#lineage" variant="ghost" className="!min-h-0 !px-0">
              Explore her lineage and training →
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
