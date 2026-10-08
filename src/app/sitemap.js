import { profile } from '../data/content'

export const dynamic = 'force-static'

export default function sitemap() {
  return [
    {
      url: `${profile.url}/`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ]
}
