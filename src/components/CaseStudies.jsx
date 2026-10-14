import { caseStudies } from '../data/content'
import SectionHead from './SectionHead'
import Corners from './Corners'

export default function CaseStudies() {
  return (
    <section id="case-studies" className="section section--surface">
      <div className="section-inner">
        <SectionHead num="02" title="Case Studies" />
        <div className="cases">
          {caseStudies.map((study) => (
            <article className="case blueprint" key={study.title}>
              <div className="case-summary">
                <span className="card-kicker">{study.kicker}</span>
                <h3 className="case-title">{study.title}</h3>
                <dl className="case-metrics">
                  {study.metrics.map((metric) => (
                    <div key={metric.label}>
                      <dt>{metric.label}</dt>
                      <dd>{metric.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
              <div>
                <dl className="case-story">
                  <dt>Situation</dt>
                  <dd>{study.situation}</dd>
                  <dt>What I did</dt>
                  <dd>{study.approach}</dd>
                  <dt>Result</dt>
                  <dd>{study.result}</dd>
                </dl>
                <div className="case-tags">
                  {study.tags.map((tag) => (
                    <span className="tag tag-neutral" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <Corners />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
