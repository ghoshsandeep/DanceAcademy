export type Achievement = {
  title: string
  description?: string
  year?: string
}

// Source: founder's profile PDF. Years are shown only where the PDF gives one.
export const majorHonours: Achievement[] = [
  {
    title: 'Gold Medal',
    description: 'Gold Medalist, Banaras Hindu University.',
    year: '2007',
  },
  {
    title: '“Srinagar Mani” Title',
    description: 'Conferred by Sur Samsad, Mumbai.',
    year: '2008',
  },
  {
    title: 'National Scholarship',
    description: 'Awarded by the Ministry of Culture, Govt. of India.',
    year: '2008',
  },
  // The three items below are confirmed by the client but are not in the profile PDF.
  // No years are given for them — do not invent any.
  {
    title: "Medal Received from the Hon'ble President of India",
    description: 'Presented by the President of India at the time of the award.',
  },
  {
    title: 'Three-Time UP Visharad',
    description: 'Recognised three times with the UP Visharad qualification.',
  },
  {
    title: 'Annual Performance at Pune Dance Academy',
    description: 'Invited to perform annually at Pune Dance Academy.',
  },
]

export const competitionResults: Achievement[] = [
  { title: '1st Place, Classical Dance', description: 'All India Radio, Gorakhpur' },
  {
    title: 'Winner, Sambhagiya Sangeet Pratiyogita',
    description: 'Uttar Pradesh Sangeet Natya Academy',
  },
  {
    title: 'Winner, Ghoomar',
    description: '7th International Youth Festival, University of Rajasthan',
  },
  {
    title: 'Runner-up, Pradedhik Sangeet Pratiyogita',
    description: 'Uttar Pradesh Sangeet Natya Academy',
  },
  {
    title: 'Runner-up, Classical Dance',
    description: 'Association of Indian Universities (Shillong)',
  },
  {
    title: '2nd Runner-up, Classical Dance',
    description: 'Annual National Youth Festival (Chennai)',
  },
]

export const credentials = [
  { value: '25+', label: 'Years of Training & Performance' },
  { value: '300+', label: 'Students Trained' },
  { value: 'Ph.D.', label: 'Performing Arts (Kathak), 2022' },
  { value: 'Gold Medal', label: 'Banaras Hindu University, 2007' },
]
