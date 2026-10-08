import { flags, profile, experience, skills } from '../data/content'
import Nav from '../components/Nav'
import Hero from '../components/Hero'
import Experience from '../components/Experience'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import Education from '../components/Education'
import Contact from '../components/Contact'

export const metadata = {
  alternates: {
    canonical: '/',
  },
}

const currentJob = experience.find((job) => /present/i.test(job.dates))

// Structured data (schema.org) that tells search engines who this site is about
// and links it to the same person's GitHub and LinkedIn profiles.
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': `${profile.url}/#website`,
      url: `${profile.url}/`,
      name: profile.name,
      publisher: { '@id': `${profile.url}/#person` },
    },
    {
      '@type': 'Person',
      '@id': `${profile.url}/#person`,
      name: profile.name,
      url: `${profile.url}/`,
      image: new URL(profile.photo, profile.url).href,
      jobTitle: profile.role,
      ...(currentJob && {
        worksFor: { '@type': 'Organization', name: currentJob.company },
      }),
      homeLocation: { '@type': 'Place', name: profile.location },
      sameAs: [profile.github, profile.linkedin],
      knowsAbout: skills.map((skill) => skill.label),
    },
  ],
}

export default function Home() {
  return (
    <div className="page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }}
      />
      <Nav />
      <Hero />
      <Experience />
      {flags.showProjects && <Projects />}
      <Skills />
      <Education />
      <Contact />
    </div>
  )
}
