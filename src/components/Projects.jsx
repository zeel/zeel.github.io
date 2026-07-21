import { projects } from '../data/content'
import SectionHead from './SectionHead'
import Corners from './Corners'

export default function Projects() {
  return (
    <section id="projects" className="section section--surface">
      <div className="section-inner">
        <SectionHead num="02" title="Selected Projects" />
        <div className="projects-grid">
          {projects.map((project) => (
            <div className="card blueprint project-card" key={project.title}>
              <span className="card-kicker">{project.kicker}</span>
              <span className="card-title">{project.title}</span>
              <p className="card-body">{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span className="tag tag-neutral" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
              {project.links.length > 0 && (
                <div className="project-links">
                  {project.links.map((link) => (
                    <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
                      {link.label}
                    </a>
                  ))}
                </div>
              )}
              <Corners />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
