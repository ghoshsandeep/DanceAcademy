export type Testimonial = {
  quote: string
  name: string
  relation: string
}

// PLACEHOLDER CONTENT — for development/layout purposes only.
// These are clearly fictional and must be replaced with real, consented
// testimonials before the site goes live. Do not treat these as real quotes.
export const testimonials: Testimonial[] = [
  {
    quote:
      '[Placeholder testimonial] "My child looks forward to every class — replace with a real parent testimonial."',
    name: '[Parent name placeholder]',
    relation: 'Parent of a student',
  },
  {
    quote:
      '[Placeholder testimonial] "A wonderful introduction to Kathak — replace with a real student testimonial."',
    name: '[Student name placeholder]',
    relation: 'Adult student',
  },
  {
    quote:
      '[Placeholder testimonial] "Thoughtful, patient teaching — replace with a real testimonial before launch."',
    name: '[Student name placeholder]',
    relation: 'Teen student',
  },
]
