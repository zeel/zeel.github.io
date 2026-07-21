import { profile } from '../data/content'
import Corners from './Corners'

export default function Hero() {
  return (
    <header id="top" className="hero">
      <div>
        <h6 className="hero-kicker">
          {profile.role} · {profile.location}
        </h6>
        <h1>{profile.headline}</h1>
        <p className="hero-intro">{profile.intro}</p>
        <div className="hero-actions">
          <a className="btn btn-primary blueprint" href={`mailto:${profile.email}`}>
            Email me
            <Corners />
          </a>
          <a className="btn btn-secondary" href={profile.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a className="btn btn-secondary" href={profile.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
      </div>
      <figure className="hero-photo blueprint duotone">
        <img src={profile.photo} alt={profile.name} />
        <Corners />
      </figure>
    </header>
  )
}
