/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  compress: true,
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
