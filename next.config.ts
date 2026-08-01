/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      { source: "/", destination: "/en", permanent: false },
      { source: "/about", destination: "/en#about", permanent: true },
      { source: "/experience", destination: "/en#experience", permanent: true },
      { source: "/dev", destination: "/en#skills", permanent: true },
      { source: "/contact", destination: "/en#contact", permanent: true },
    ];
  },
};

export default nextConfig;
