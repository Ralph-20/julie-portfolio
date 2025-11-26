/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable image optimization for production
  images: {
    formats: ["image/avif", "image/webp"],
  },
}

export default nextConfig
