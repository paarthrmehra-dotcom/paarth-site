/**
 * Everything personal lives here. Change these values and the whole site follows.
 */

export const site = {
  name: 'Paarth Mehra',
  role: 'VC at Merak Capital · Ex-Bain · CFA Charterholder',
  location: 'New Delhi & Riyadh',

  /** Shown in the hero, under your name. */
  intro:
    'I invest in tech and gaming companies across the GCC. Before that, seven years at Bain advising private equity funds and sovereign wealth on where to put their money. I write about both — and I coach people trying to get in.',

  /** Set to false when your coaching calendar is full. */
  available: true,
  availabilityNote: 'Coaching slots open this month',

  email: 'paarth.r.mehra@gmail.com',
  calendly: 'https://calendly.com/paarth-r-mehra/30min',

  description:
    'Paarth Mehra is a venture capital investor at Merak Capital and a former Bain & Company Senior Project Leader. He writes on venture capital, management consulting and portfolio management, and coaches candidates through consulting interviews, MBA admissions and resumes.',

  links: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/paarthmehra/' },
    { label: 'Instagram', href: 'https://www.instagram.com/pm_decodes/' },
    { label: 'Topmate', href: 'https://topmate.io/paarth_mehra' },
    { label: 'Email', href: 'mailto:paarth.r.mehra@gmail.com' },
  ],

  nav: [
    { label: 'Writing', href: '/writing' },
    { label: 'Coaching', href: '/coaching' },
    { label: 'About', href: '/about' },
  ],

  /**
   * The credentials strip on the homepage. Facts, not adjectives — this is what
   * a prospective coaching client scans before deciding whether to book.
   */
  credentials: [
    { label: 'Now', value: 'AVP, Merak Capital — Tech & Gaming funds, Riyadh' },
    { label: 'Before', value: 'Bain & Company, 6+ years to Senior Project Leader' },
    { label: 'Coverage', value: 'KSA, UAE and the wider GCC' },
    { label: 'Qualified', value: 'CFA Charterholder · MBA, IIM Udaipur' },
    { label: 'Coached', value: '20+ IIM graduates on resumes and interviews' },
  ],

  /**
   * Free access key from web3forms.com. Until you add one, the contact
   * section shows your Calendly link and email only.
   */
  web3formsKey: '',
} as const;

/** The two streams the writing is split into. Used for filtering and labels. */
export const topics = {
  practice: {
    label: 'Investing & Strategy',
    slug: 'investing-strategy',
    blurb:
      'Venture capital in the GCC, commercial due diligence, and what actually happens to a portfolio company after the wire clears.',
  },
  careers: {
    label: 'Careers',
    slug: 'careers',
    blurb:
      'Consulting and VC interviews, MBA admissions, and resumes that survive a real screen — from someone who has run both sides of it.',
  },
} as const;

export type TopicKey = keyof typeof topics;
