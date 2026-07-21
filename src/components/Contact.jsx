import { profile, flags } from '../data/content'

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact-inner">
        <h6 className="contact-kicker">05 · Get in touch</h6>
        <h2>Have a role or project in mind? Let's talk.</h2>
        <a className="contact-email" href={`mailto:${profile.email}`}>
          {profile.email}
        </a>
        <div className="contact-meta">
          {flags.showPhone && <span>{profile.phone}</span>}
          <span>{profile.location}</span>
          <a href={profile.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href={profile.resume} download>
            Download resume ↓
          </a>
        </div>
        <p className="footer-note">
          © {new Date().getFullYear()} {profile.name} · {profile.role} · {profile.location}
        </p>
      </div>
    </section>
  )
}
