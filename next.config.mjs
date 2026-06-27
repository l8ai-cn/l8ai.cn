import { fileURLToPath } from "node:url"
import { dirname } from "node:path"

const __dirname = dirname(fileURLToPath(import.meta.url))

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  turbopack: {
    root: __dirname,
  },
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: "/whitepapers/6l-methodology",
        destination: "/whitepapers/xl-methodology",
        permanent: true,
      },
      {
        source: "/whitepapers/3do-engineering-engine",
        destination: "/whitepapers/xdo-engineering-engine",
        permanent: true,
      },
      {
        source: "/blog/6l-delivery-rhythm",
        destination: "/blog/xl-delivery-rhythm",
        permanent: true,
      },
      {
        source: "/blog/3do-engineering-engine",
        destination: "/blog/xdo-engineering-engine",
        permanent: true,
      },
    ]
  },
}

export default nextConfig
