export type DanceClass = {
  index: string
  title: string
  description: string
  audience: string
}

// No pricing or schedules are included — those are not yet finalized by the client.
export const classes: DanceClass[] = [
  {
    index: '01',
    title: 'Kathak Beginners',
    description:
      'A gentle introduction to Kathak fundamentals — posture, footwork and rhythm — for students starting their journey.',
    audience: 'New to Kathak',
  },
  {
    index: '02',
    title: "Kids' Classes",
    description:
      'A joyful, age-appropriate space for children to build discipline, coordination and confidence through dance.',
    audience: 'Children',
  },
  {
    index: '03',
    title: 'Intermediate & Advanced',
    description:
      'Deepen technique, expression and repertoire for students ready to progress beyond the basics.',
    audience: 'Continuing students',
  },
  {
    index: '04',
    title: 'Adult Classes',
    description:
      'A welcoming space for adults to learn Kathak at their own pace, regardless of prior dance experience.',
    audience: 'Adults',
  },
  {
    index: '05',
    title: 'Private Lessons',
    description:
      'One-on-one sessions with focused, personalised guidance tailored to individual goals and pace.',
    audience: 'All levels',
  },
  {
    index: '06',
    title: 'Online Classes',
    description:
      'Learn Kathak from anywhere with live, guided online sessions designed for remote students.',
    audience: 'Remote students',
  },
  {
    index: '07',
    title: 'Performance & Choreography',
    description:
      'For students looking to take their training further — developing pieces for stage and performance.',
    audience: 'Performance-track students',
  },
  {
    index: '08',
    title: 'Workshops',
    description:
      'Periodic focused sessions exploring specific aspects of Kathak technique, rhythm or storytelling.',
    audience: 'Open to all',
  },
]
