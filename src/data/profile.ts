// Source: founder's profile PDF. Wording is kept as close to the PDF as possible.
// Do not add dates, roles or claims that the PDF does not state.

export type Guru = { name: string; role?: string }

export const gurus: Guru[] = [
  { name: 'Guru Smt. Shama Bhate', role: 'Founder-Director, Nad Roop, Pune' },
  {
    name: 'Prof. Ranjana Srivastava',
    role: 'Former Dean/HOD, Department of Dance, Banaras Hindu University',
  },
  { name: 'Shri Vinod Gangani', role: 'Founder-Director, Gorakhpur Kathak Kendra' },
  { name: 'Shri Hemanth Gangani', role: 'Gorakhpur' },
]

export type Qualification = { title: string; institution?: string; year?: string }

export const education: Qualification[] = [
  { title: 'Ph.D. Performing Arts (Kathak)', institution: 'Bangalore University', year: '2022' },
  { title: 'M.Music (Kathak Dance)', institution: 'Banaras Hindu University', year: '2007–09' },
  { title: 'B.Music (Kathak Dance)', institution: 'Banaras Hindu University', year: '2004–07' },
  { title: 'UGC-NET Qualified' },
  { title: 'B.A. (English Literature)', institution: 'Gorakhpur University' },
  { title: 'M.A.', institution: 'Gorakhpur University' },
]

export const certifications: Qualification[] = [
  { title: 'Sangeet Prabhakar', institution: 'Prayag Sangeet Samiti (PSS)' },
  { title: 'Senior Diploma', institution: 'Prayag Sangeet Samiti (PSS)' },
  { title: 'Nritya Visharad', institution: 'Pracheen Kala Kendra (PKK)' },
  { title: 'Nritya Bhushan (3-year course)', institution: 'Pracheen Kala Kendra (PKK)' },
]

export const teachingRoles: string[] = [
  'Diploma Course Faculty — Banaras Hindu University (BHU)',
  'Dance Teacher — Sunbeam School, Varanasi',
  'Dance Teacher — BGS School, Bengaluru',
  'Dance Teacher — Shubham School of Performing Arts, Bengaluru',
  'Registered Examiner (Kathak) — Dr. Gangubai Hangal University of Music & Performing Arts, Mysore, Karnataka',
]

export const performances: string[] = [
  'Sawai Gandharv Mahotsav, Pune',
  'Kala Ghoda Arts Festival, Mumbai',
  'International Youth Festival – Ghoomar, representing Gorakhpur University',
  'Doordarshan, Uttar Pradesh',
  'Colors of India, Swaranjali Kochi & Coimbatore',
  'E.TV Uttar Pradesh, Lucknow',
  'Aakashvani, Gorakhpur',
  'Bhimsen Joshi Kaladalan, Pune',
  'World Peace Society, Varanasi',
  'Sangeet Sabha, Kashi',
  'Maru Utsav, Gorakhpur',
  'Pratibha Utsav, Lucknow',
  'Sanskar Bharti',
  'Nadam Workshop, Bengaluru',
  'Bharatiya Vidya Bhavan',
  'Balgandharva Kaladalan, Pune',
  'Gharana Festival',
]

export type Workshop = { title: string; host: string }

export const workshops: Workshop[] = [
  {
    title: 'Indian Heritage in a Changing World: Challenges and Prospects',
    host: 'International Seminar organised by the Ministry of Tourism & Lalit Kala Akademi, New Delhi',
  },
  {
    title: 'Music & Emotion: A Philosophical Study',
    host: '24th International Symposium, Frontiers of Research in Speech & Music, Allenhouse Institute of Technology, Kanpur',
  },
  {
    title: 'Intermediate Kathak Workshops',
    host: 'Kala Academy, Goa — associated with Guru Smt. Shama Tai Bhate',
  },
  {
    title: 'One-Day National Workshop on Prabhata Samhita',
    host: 'Renaissance Universal (RU)',
  },
  { title: 'Kathak Karya Shaala — A Creative Kathak Workshop', host: 'BHU, Varanasi' },
  { title: 'Kathak: Technique to Expression', host: 'Fullinfaws College, Bengaluru' },
  { title: 'Parampara — Kathak Series', host: 'Sri Krishna Royal Woods' },
  {
    title: 'Tatkar — The Language of Footwork',
    host: 'Shubham School of Performing Arts',
  },
]

export const trainingPillars = [
  {
    title: 'Structured Training',
    description: 'Disciplined Kathak training that respects lineage and builds strong foundations.',
  },
  {
    title: 'Taal & Laya',
    description: 'Deep engagement with rhythm, technique and footwork.',
  },
  {
    title: 'Abhinaya',
    description: 'Expression and storytelling as an essential part of Kathak.',
  },
  {
    title: 'Examination Guidance',
    description:
      'Mentoring for graded examinations, certification courses and university-level practical and theory exams.',
  },
]
