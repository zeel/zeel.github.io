import { skills } from '../data/content'

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="section-inner split">
        <div className="split-head">
          <h6 className="section-num">03</h6>
          <h2>Skills</h2>
        </div>
        <div className="skills-tags">
          {skills.map((skill) => (
            <span
              className={`tag ${skill.featured ? 'tag-accent' : 'tag-outline'}`}
              key={skill.label}
            >
              {skill.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
