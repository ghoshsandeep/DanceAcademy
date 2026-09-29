export type Achievement = {
  title: string
  description?: string
}

// Only facts explicitly confirmed by the client. No years are included
// because exact dates were not provided — do not invent them.
export const achievements: Achievement[] = [
  {
    title: 'BHU Gold Medalist',
    description: 'Awarded Gold Medal from Banaras Hindu University.',
  },
  {
    title: "Medal Received from the Hon'ble President of India",
    description: 'Presented by the President of India at the time of the award.',
  },
  {
    title: 'Three-Time UP Visharad',
    description: 'Recognised three times with the UP Visharad qualification.',
  },
  {
    title: 'Banaras Gharana',
    description: 'Trained in and carries forward the Banaras Gharana tradition of Kathak.',
  },
  {
    title: 'Annual Performance at Pune Dance Academy',
    description: 'Invited to perform annually at Pune Dance Academy.',
  },
  {
    title: '20+ Years in Dance & Teaching',
    description: 'Over two decades of experience as a Kathak artist and educator.',
  },
]

export const credentials = [
  { value: '20+', label: 'Years of Experience' },
  { value: 'BHU', label: 'Gold Medalist' },
  { value: '3×', label: 'UP Visharad' },
  { value: 'Banaras', label: 'Gharana Tradition' },
]
