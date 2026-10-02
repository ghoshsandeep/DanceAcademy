import { galleryItems } from '../../data/gallery'
import { Container } from '../ui/Container'
import { PlaceholderImage } from '../ui/PlaceholderImage'
import { SectionHeading } from '../ui/SectionHeading'

export function Gallery() {
  const [featured, ...rest] = galleryItems

  return (
    <section id="gallery" className="py-16 lg:py-20">
      <div className="flex flex-col gap-8">
        <Container>
          <SectionHeading eyebrow="In Motion" title="Performance & Academy Life" />
        </Container>

        <Container>
          <PlaceholderImage
            src={featured.src}
            alt={featured.alt}
            aspect="aspect-[4/5] lg:aspect-[21/9]"
            className="w-full shadow-card"
          />
        </Container>

        <Container>
          <div className="no-scrollbar -mx-5 flex gap-4 overflow-x-auto px-5 pb-2 lg:mx-0 lg:grid lg:grid-cols-5 lg:overflow-visible lg:px-0">
            {rest.map((item) => (
              <div key={item.src} className="w-40 shrink-0 sm:w-52 lg:w-auto">
                <PlaceholderImage src={item.src} alt={item.alt} aspect="aspect-square" />
              </div>
            ))}
          </div>
        </Container>
      </div>
    </section>
  )
}
