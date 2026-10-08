/** @type {import('next').NextConfig} */
const nextConfig = {
  // GitHub Pages only serves static files, so `next build` exports plain
  // HTML/CSS/JS into out/ instead of needing a Node.js server.
  output: 'export',
  images: {
    unoptimized: true,
  },
}

export default nextConfig
