export type GalleryItem = {
  src: string
  alt: string
  featured?: boolean
}

// Filenames match public/images/README.md. If the file doesn't exist yet,
// PlaceholderImage (src/components/ui/PlaceholderImage.tsx) renders an
// elegant placeholder instead of a broken image.
export const galleryItems: GalleryItem[] = [
  { src: '/images/suji-performance.jpg', alt: 'Dr. Sujaya Ghosh performing Kathak on stage', featured: true },
  { src: '/images/suji-teaching.jpg', alt: 'Dr. Sujaya Ghosh teaching a Kathak class' },
  { src: '/images/students-01.jpg', alt: 'Students practicing Kathak footwork' },
  { src: '/images/gallery-01.jpg', alt: 'Kathak performance moment' },
  { src: '/images/workshop-01.jpg', alt: 'Students at a Kathak workshop' },
  { src: '/images/gallery-02.jpg', alt: 'Academy activity at Tatkar School of Performing Arts' },
]

export const heroImage: GalleryItem = {
  src: '/images/suji-hero.jpg',
  alt: 'Dr. Sujaya Ghosh, founder of Tatkar School of Performing Arts, in Kathak performance costume',
}

export const portraitImage: GalleryItem = {
  src: '/images/suji-portrait.jpg',
  alt: 'Portrait of Dr. Sujaya Ghosh, Kathak educator and scholar',
}
