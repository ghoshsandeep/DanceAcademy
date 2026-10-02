// Central place for editable site-wide facts.
// IMPORTANT: Only facts verified against the founder's profile PDF belong here.
// Privacy (GDPR): do NOT add date of birth, parents' names or personal contact
// details to the site until the client explicitly provides them for publication.

export const siteInfo = {
  academyName: 'Tatkar School of Performing Arts',
  academyShortName: 'Tatkar',
  academyDescriptor: 'School of Performing Arts',
  founderName: 'Dr. Sujaya Ghosh',
  tagline: 'Rooted in tradition. Guided by discipline.',
  city: 'Bengaluru, India',
  discipline: 'Kathak',
  gharana: 'Jaipur and Lucknow Gharanas',
  yearsExperience: '25+',
}

// Contact details are intentionally empty until the client confirms what may be
// published. Nothing in this object is rendered on the site at the moment.
export const contactInfo = {
  phone: '',
  whatsapp: '',
  email: '',
  instagram: '',
  youtube: '',
  facebook: '',
  address: '',
  googleMapsUrl: '',
}

export type LanguageOption = {
  code: 'en' | 'hi' | 'mr' | 'kn'
  label: string
}

export const languageOptions: LanguageOption[] = [
  { code: 'en', label: 'English' },
  { code: 'hi', label: 'हिंदी' },
  { code: 'mr', label: 'मराठी' },
  { code: 'kn', label: 'ಕನ್ನಡ' },
]
