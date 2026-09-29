// Central place for editable site-wide facts.
// IMPORTANT: Only real, client-confirmed information belongs here.
// Anything not yet provided is left as an obvious placeholder string
// (wrapped in square brackets) so it's easy to find and replace later.

export const siteInfo = {
  academyName: 'Next Gen Dance Academy',
  founderName: 'Suji',
  tagline: 'Kathak • Tradition • Expression • Growth',
  city: 'Bangalore, India',
  discipline: 'Kathak',
  gharana: 'Banaras Gharana',
  yearsExperience: '20+',
}

// Contact details are intentionally placeholders until the client provides
// real values. Update these in one place and every section updates.
export const contactInfo = {
  phone: '[Phone number to be added]',
  whatsapp: '[WhatsApp number to be added]',
  email: '[Email address to be added]',
  instagram: '[Instagram handle to be added]',
  youtube: '[YouTube channel to be added]',
  address: '[Academy address to be added], Bangalore, India',
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

export const socialLinks = {
  instagram: '',
  youtube: '',
  facebook: '',
}
