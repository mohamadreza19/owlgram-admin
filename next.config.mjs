/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  output: "build",

  // Optional: Change links `/me` -> `/me/` and emit `/me.html` -> `/me/index.html`
  // trailingSlash: true,

  // Optional: Prevent automatic `/me` -> `/me/`, instead preserve `href`
  // skipTrailingSlashRedirect: true,

  // Optional: Change the output directory `out` -> `dist`
  // distDir: "dist",

  images: {
    domains: [
      'encrypted-tbn0.gstatic.com',
      'other-hostname.com',
      'www.worldometers.info',
      'owlegram.com',
      '127.0.0.1',
    ],
    disableStaticImages: false,
    unoptimized: true,
  },
};

export default nextConfig;
