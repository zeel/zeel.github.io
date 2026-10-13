import Image from 'next/image'
import { profile } from '../data/content'
import Corners from './Corners'

export default function Hero() {
  return (
    <header id="top" className="hero">
      <div>
        {profile.status && (
          <p className="hero-status">
            <span className="hero-status-dot" aria-hidden="true" />
            {profile.status}
          </p>
        )}
        <h6 className="hero-kicker">
          {profile.role} · {profile.location}
        </h6>
        <h1>{profile.headline}</h1>
        <p className="hero-intro">{profile.intro}</p>
        <div className="hero-actions">
          <a className="btn btn-primary blueprint" href={`mailto:${profile.email}`} data-goatcounter-click="email-hero">
            Email me
            <Corners />
          </a>
          <a className="btn btn-secondary" href={profile.github} target="_blank" rel="noreferrer" data-goatcounter-click="github-hero">
            GitHub
          </a>
          <a className="btn btn-secondary" href={profile.linkedin} target="_blank" rel="noreferrer" data-goatcounter-click="linkedin-hero">
            LinkedIn
          </a>
        </div>
      </div>
      <figure className="hero-photo blueprint duotone">
        <Image src={profile.photo} alt={profile.name} width={1200} height={1600} loading="eager" />
        <Corners />
      </figure>
    </header>
  )
}
