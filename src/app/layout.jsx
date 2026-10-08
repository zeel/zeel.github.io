import { Barlow, Barlow_Condensed } from 'next/font/google'
import { profile } from '../data/content'
import '../styles/design-system.css'
import '../styles/portfolio.css'

// Only the weights the CSS uses are loaded — add one here before using a new
// font-weight, or the browser will fake it.
const barlow = Barlow({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-barlow',
})

const barlowCondensed = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-barlow-condensed',
})

const title = `${profile.name} — ${profile.role}`

export const metadata = {
  metadataBase: new URL('https://zeelshah.com'),
  title,
  description: `${profile.name} — frontend engineer with 12+ years of experience building scalable web and mobile applications with React, TypeScript, and React Native. Based in ${profile.location}.`,
  icons: {
    icon: { url: '/favicon.svg', type: 'image/svg+xml' },
  },
  openGraph: {
    type: 'website',
    title,
    description:
      'Frontend engineer with 12+ years of experience building scalable web and mobile applications with React, TypeScript, and React Native.',
    url: '/',
    images: ['/photo.jpg'],
  },
  twitter: {
    card: 'summary',
  },
}

export const viewport = {
  themeColor: '#f2f2f3',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${barlow.variable} ${barlowCondensed.variable}`}>
      <body>{children}</body>
    </html>
  )
}
