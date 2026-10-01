import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false,
  poweredByHeader: false,
  /* نطاقات البريفيو في الساندبوكس — عشان الـ JS chunks تتحمل من دومين المعاينة */
  allowedDevOrigins: ["localhost", "127.0.0.1", "**.space-z.ai", "*.space-z.ai", "space-z.ai"],
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
};

export default nextConfig;
