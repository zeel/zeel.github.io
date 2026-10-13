import { Barlow, Barlow_Condensed } from 'next/font/google'
import Script from 'next/script'
import { profile, analytics } from '../data/content'
import '../styles/design-system.css'
import '../styles/portfolio.css'
import '../styles/twin.css'

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
  metadataBase: new URL(profile.url),
  title,
  description: `${profile.name} — frontend engineer with 12+ years of experience building scalable web and mobile applications with React, TypeScript, and React Native. Based in ${profile.location}.${profile.status ? ` ${profile.status}.` : ''}`,
  icons: {
    icon: { url: '/favicon.svg', type: 'image/svg+xml' },
  },
  openGraph: {
    type: 'website',
    siteName: profile.name,
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
      <body>
        {children}
        {analytics.goatcounterCode && (
          <Script
            src="https://gc.zgo.at/count.js"
            data-goatcounter={`https://${analytics.goatcounterCode}.goatcounter.com/count`}
            strategy="afterInteractive"
          />
        )}
      </body>
    </html>
  )
}
