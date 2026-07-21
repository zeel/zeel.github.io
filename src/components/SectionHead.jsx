// Numbered section heading: 01 / Experience / (optional range note)
export default function SectionHead({ num, title, range }) {
  return (
    <div className="section-head">
      <h6 className="section-num">{num}</h6>
      <h2>{title}</h2>
      {range && <span className="section-range text-muted">{range}</span>}
    </div>
  )
}
