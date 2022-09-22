/*
 * @Author: W·S
 * @Date: 2022-09-08 14:13:17
 * @LastEditors: W·S
 * @LastEditTime: 2022-09-22 18:10:43
 * @Description: Description
 */

const securityHeaders = [
  {
    key: "X-DNS-Prefetch-Control",
    value: "on",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  {
    key: "X-XSS-Protection",
    value: "1; mode=block",
  },
  {
    key: "X-Frame-Options",
    value: "SAMEORIGIN",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "Content-Security-Policy",
    value:
      "img-src * data:; default-src 'self'; script-src 'self' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; font-src 'self'",
  },
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    baseURL: "http://10.0.10.19:18001",
    proxyURL: "http://10.0.10.19:18001",
  },
  distDir: "dist",
  output: "standalone",
  reactStrictMode: true,
  swcMinify: true,
  images: {
    formats: ["image/avif", "image/webp"],
    domains: ["tailwindui.com", "images.unsplash.com"],
  },
  i18n: {
    locales: ["en-US", "zh-CN"],
    defaultLocale: "zh-CN",
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  async rewrites() {
    return [];
  },
  async headers() {
    return [
      {
        // Apply these headers to all routes in your application.
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

module.exports = nextConfig;
