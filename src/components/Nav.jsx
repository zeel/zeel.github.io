import { profile, navLinks } from '../data/content'
import Corners from './Corners'

export default function Nav() {
  return (
    <nav className="nav site-nav">
      <span className="nav-brand">
        {profile.name.toUpperCase()}{' '}
        <span className="brand-role">/ {profile.navRole}</span>
      </span>
      {navLinks.map((link) => (
        <a key={link.href} href={link.href}>
          {link.label}
        </a>
      ))}
      <a className="btn btn-primary blueprint" href={profile.resume} download>
        Resume ↓
        <Corners />
      </a>
    </nav>
  )
}
