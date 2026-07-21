import { education } from '../data/content'

export default function Education() {
  return (
    <section id="education" className="section">
      <div className="section-inner split">
        <div className="split-head">
          <h6 className="section-num">04</h6>
          <h2>Education</h2>
        </div>
        <div className="edu-list">
          {education.map((item) => (
            <div className="edu-item" key={item.title}>
              <h4>{item.title}</h4>
              <p className="edu-meta text-muted">{item.meta}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
