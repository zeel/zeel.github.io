import { experience } from '../data/content'
import SectionHead from './SectionHead'

const first = experience[experience.length - 1]?.dates.split(' ')[1]

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="section-inner">
        <SectionHead num="01" title="Experience" range={`${first} — present`} />
        <div className="xp-list">
          {experience.map((job) => (
            <div className="xp-row" key={`${job.company}-${job.dates}`}>
              <div className="xp-dates text-muted">{job.dates}</div>
              <div>
                <h4>
                  {job.title} <span className="xp-company">· {job.company}</span>
                </h4>
                <p className="xp-desc">{job.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
