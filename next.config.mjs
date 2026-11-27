/** @type {import('next').NextConfig} */
const isStatic = process.env.STATIC_EXPORT === "1";

const nextConfig = {
  reactStrictMode: true,
  // Optional: `STATIC_EXPORT=1 npm run build` produces a plain /out folder
  // (handy for GitHub Pages). Set NEXT_PUBLIC_BASE_PATH if the site lives
  // under a sub-path, e.g. /Rotaract_Prestige.github.io
  ...(isStatic
    ? {
        output: "export",
        trailingSlash: true,
        images: { unoptimized: true },
        basePath: process.env.NEXT_PUBLIC_BASE_PATH || "",
      }
    : {}),
};

export default nextConfig;
