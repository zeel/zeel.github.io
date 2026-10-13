// All the portfolio's content lives in this one file.
// To update the site, edit the text here — no need to touch the components.

export const profile = {
  name: 'Zeel Shah',
  url: 'https://zeelshah.com', // the live site; used for SEO tags, sitemap and robots.txt
  navRole: 'FRONTEND', // shown after your name in the nav: ZEEL SHAH / FRONTEND
  role: 'Staff Frontend Engineer',
  location: 'Bangalore, India',
  status: 'Open to new roles', // badge above the headline, also in search results; '' hides it
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

// Visitor analytics via GoatCounter (free, no cookies). Sign up at
// https://www.goatcounter.com, then put the code you chose here — e.g. 'zeelshah'
// for https://zeelshah.goatcounter.com. '' turns analytics off.
export const analytics = {
  goatcounterCode: 'zeel',
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
    dates: 'May 2025 — Sept 2026',
    title: 'Staff Frontend Engineer',
    company: 'Lightup Data',
    description:
      'Sole frontend architect for the platform — built the Energy design system (48 components), redesigned the monitor page end to end, and shipped the LLM management surface (full CRUD). Led a full modernization to React 19, Ant Design v6, and Vite with route-level code splitting and RTK Query, cutting initial-load payload by 45%.',
  },
  {
    dates: 'Oct 2024 — May 2025',
    title: 'Mobile Engineer (Part-time)',
    company: 'Toast',
    description:
      'Built features for the Toast mobile app and shipped an iOS app in React Native, taking it through App Store review to release.',
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
      "Integrated Google Cloud support into Qubole's data platform using Ruby on Rails and JavaScript.",
  },
  {
    dates: 'Oct 2015 — Oct 2017',
    title: 'Product Engineer, Frontend',
    company: 'Sprinklr',
    description:
      'Migrated the publishing module from a Backbone MVC architecture to React, maintaining the legacy stack through the transition.',
  },
  {
    dates: 'Jan 2014 — Sept 2015',
    title: 'Software Developer, Full Stack',
    company: 'Aspiring Minds',
    description:
      'Designed a normalized question-bank database in MySQL and built internal tooling with PHP and Python.',
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
  { label: 'Next.js' },
  { label: 'Design Systems' },
  { label: 'Redux / Redux Toolkit' },
  { label: 'RTK Query' },
  { label: 'Server-Side Rendering' },
  { label: 'Ant Design' },
  { label: 'Vite' },
  { label: 'Node.js' },
  { label: 'Nest.js' },
  { label: 'CSS' },
  { label: 'Tailwind CSS' },
  { label: 'HTML' },
  { label: 'Firebase' },
  { label: 'Prompt Engineering' },
  { label: 'Claude Code / Cursor / Copilot' },
]

export const education = [
  { title: 'MBA, Operations — Amrita Online', meta: '2023 — 2025 · 7.47/10' },
  { title: 'B.Tech, ICT — DA-IICT, Gujarat', meta: '2010 — 2014 · 8.46/10' },
]

// The AI "digital twin" chat. The chat button only appears on the site once
// apiUrl is set — see twin/README.md for deploying the chat backend.
export const twin = {
  apiUrl: 'https://zeel-twin.zeel-twin-chat.workers.dev',
  greeting:
    "Hi! I'm Zeel's AI twin. I'm looking for my next role, so ask me anything about my work, projects or skills.",
  suggestedQuestions: [
    'Are you open to new roles?',
    'How did you cut load time by 45%?',
    "What's your React Native experience?",
    'How can I get in touch?',
  ],
  // Extra facts the twin can use beyond the sections above. It is told never
  // to go beyond what's written in this file, so keep these accurate.
  facts: [
    'At Lightup Data (May 2025 to Sept 2026) I was the sole frontend architect for the data-quality platform, on a two-person frontend team, owning architecture, the design system, build tooling and delivery across the whole product.',
    'I built and maintained the Energy design system at Lightup: 48 components, 9 of them authored from scratch, with shared component APIs, composition patterns and documentation.',
    'I led a full frontend modernization at Lightup: React 16.14 to 19, Ant Design v4 to v6, and CRA/Webpack to Vite. Route-level code splitting turned a single 7.3 MB bundle into 141 chunks and cut the initial-load payload by 45% (2,589 KB to 1,421 KB gzipped). I also migrated data fetching to RTK Query.',
    "I designed and shipped Lightup's LLM management surface (full CRUD) for configuring and operating LLM-backed data quality monitors, and led the end-to-end redesign of the monitor page.",
    'At Lightup I set frontend technical direction through design and code review, and mentored engineers on component and state management patterns.',
    'At Toast (Oct 2024 to May 2025, part-time) I built mobile app features and shipped an iOS app in React Native through App Store review.',
    'At Tekion I was Software Engineer 2 (Nov 2020 to Mar 2022) and was promoted to Senior Software Engineer (Apr 2022 to Sept 2024) for consistently owning delivery of the CRM module.',
    'At Swiggy I was promoted from Software Engineer 1 (May 2019 to Mar 2020) to Software Engineer 2 within my first year (Apr 2020 to Oct 2020) for owning high-traffic consumer surfaces.',
    'I use AI tools daily (Claude Code, Cursor, Copilot) and have shipped LLM-backed product features, including prompt engineering.',
    "I left Lightup Data in September 2026 and I'm now looking for my next role. Email is the best way to reach me about opportunities.",
  ],
}
