/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: true,
  // هذا السطر يساعد في تقليل الـ JavaScript المرسل للمتصفح
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },
};

export default nextConfig;
