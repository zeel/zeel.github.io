// All the portfolio's content lives in this one file.
// To update the site, edit the text here — no need to touch the components.

export const profile = {
  name: 'Zeel Shah',
  navRole: 'FRONTEND', // shown after your name in the nav: ZEEL SHAH / FRONTEND
  role: 'Staff Frontend Engineer',
  location: 'Bangalore, India',
  headline: 'Building web products that are fast, scalable, and dependable.',
  intro:
    "I'm Zeel — a frontend engineer with 12+ years of experience building scalable web and mobile applications, leading engineering teams, and driving projects from conception to deployment.",
  email: 'Kshah215@gmail.com',
  phone: '+91-9560935248',
  github: 'https://github.com/zeel',
  linkedin: 'https://www.linkedin.com/in/zeel-shah-39620549',
  photo: '/photo.jpg', // file lives in public/
  resume: '/Zeel-Shah-Resume.pdf', // file lives in public/
}

// Toggles carried over from the design's props.
export const flags = {
  showProjects: true,
  showPhone: true,
}

export const navLinks = [
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]

export const experience = [
  {
    dates: 'May 2025 — Present',
    title: 'Staff Frontend Engineer',
    company: 'Lightup Data',
    description:
      'Redesigned the monitor page and built LLM CRUD UI in React with Ant Design; created core components of the Energy design system.',
  },
  {
    dates: 'Nov 2020 — Sept 2024',
    title: 'Senior Software Engineer, Frontend',
    company: 'Tekion',
    description:
      'Led CRM module development end to end — planning, scrum facilitation, and cross-functional coordination. Built the CRM Reports module from scratch, contributed to the Template Builder in React, and shipped mobile features across 1.5+ years of React Native work.',
  },
  {
    dates: 'May 2019 — Oct 2020',
    title: 'Software Engineer 2, Frontend',
    company: 'Swiggy',
    description:
      'Built the Swiggy Super landing page with server-side rendering on Express.js; developed and maintained web features in React and TypeScript following TDD practices.',
  },
  {
    dates: 'Oct 2017 — May 2019',
    title: 'Member of Technical Staff',
    company: 'Qubole',
    description:
      "Integrated Google Cloud support into Qubole's data platform using Ruby on Rails and vanilla JavaScript.",
  },
  {
    dates: 'Oct 2015 — Oct 2017',
    title: 'Product Engineer, Frontend',
    company: 'Sprinklr',
    description:
      'Maintained a Backbone-based MVC architecture and led the transition of the publishing module to React, developing new features along the way.',
  },
  {
    dates: 'Jan 2014 — Sep 2015',
    title: 'Software Developer, Full Stack',
    company: 'Aspiring Minds',
    description:
      'Designed a normalized question-bank database in MySQL and developed internal tools with PHP, Bootstrap, and Python.',
  },
]

export const projects = [
  {
    kicker: 'Mobile · Auth',
    title: 'OTP Sign-in / Sign-up',
    description:
      'Phone-number OTP verification for a mobile app: three Firebase Functions handle OTP generation and validation, with SMS delivery via Twilio and a UI built in Expo on Firebase Auth.',
    tags: ['React Native', 'Firebase', 'Twilio'],
    links: [],
  },
  {
    kicker: 'Web · Full stack',
    title: 'Discussion Forum',
    description:
      'A Reddit-style forum where users create topics, posts, and comments — GitHub sign-in with NextAuth, UI in Headless UI, data layer with Prisma on the Next.js framework.',
    tags: ['Next.js', 'React', 'Prisma'],
    links: [
      { label: 'Live site ↗', href: 'https://udemy-next-discuss.vercel.app' },
      { label: 'GitHub ↗', href: 'https://github.com/zeel/udemy-next-discuss' },
    ],
  },
  {
    kicker: 'Web · Learning',
    title: 'Next.js Course Project',
    description:
      "Built as part of Stephen Grider's Udemy course — a hands-on exploration of Next.js concepts: routing, server components, caching, and deployment on Vercel.",
    tags: ['Next.js', 'React'],
    links: [{ label: 'Live site ↗', href: 'https://udemy-next-course-one.vercel.app' }],
  },
]

// featured: true renders the filled accent tag; everything else is outlined
export const skills = [
  { label: 'React', featured: true },
  { label: 'TypeScript', featured: true },
  { label: 'React Native', featured: true },
  { label: 'JavaScript' },
  { label: 'Redux / Redux Toolkit' },
  { label: 'Server-Side Rendering' },
  { label: 'Node.js' },
  { label: 'CSS' },
  { label: 'Tailwind CSS' },
  { label: 'HTML' },
  { label: 'Firebase' },
]

export const education = [
  { title: 'MBA, Operations — Amrita Online', meta: '2023 — 2025 · Distinction' },
  { title: 'B.Tech, ICT — DA-IICT, Gujarat', meta: '2010 — 2014 · 8.46 CPI' },
  { title: 'Summer Intern — IIT Bombay, Maharashtra', meta: '2013' },
]
