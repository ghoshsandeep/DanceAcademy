export type GalleryItem = {
  src: string
  alt: string
  featured?: boolean
}

// Filenames match public/images/README.md. If the file doesn't exist yet,
// PlaceholderImage (src/components/ui/PlaceholderImage.tsx) renders an
// elegant placeholder instead of a broken image.
export const galleryItems: GalleryItem[] = [
  { src: '/images/suji-performance.jpg', alt: 'Suji performing Kathak on stage', featured: true },
  { src: '/images/suji-teaching.jpg', alt: 'Suji teaching a Kathak class' },
  { src: '/images/students-01.jpg', alt: 'Students practicing Kathak footwork' },
  { src: '/images/gallery-01.jpg', alt: 'Kathak performance moment' },
  { src: '/images/workshop-01.jpg', alt: 'Students at a Kathak workshop' },
  { src: '/images/gallery-02.jpg', alt: 'Academy activity' },
]

export const heroImage: GalleryItem = {
  src: '/images/suji-hero.jpg',
  alt: 'Suji, founder of Next Gen Dance Academy, in Kathak performance costume',
}

export const portraitImage: GalleryItem = {
  src: '/images/suji-portrait.jpg',
  alt: 'Portrait of Suji, Kathak artist and teacher',
}
