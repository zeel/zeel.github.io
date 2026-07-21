import { flags } from './data/content'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Education from './components/Education'
import Contact from './components/Contact'

export default function App() {
  return (
    <div className="page">
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
