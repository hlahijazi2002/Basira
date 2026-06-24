/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: true,
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
