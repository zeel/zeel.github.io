import { profile } from '../data/content'

export const dynamic = 'force-static'

export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${profile.url}/sitemap.xml`,
  }
}
