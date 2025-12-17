/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  // reactCompiler: true,

   async rewrites() {
    return [
      {
        source: "/admin",
        destination: "https://adminayatiworks.vercel.app",
      },
      {
        source: "/admin/:path*",
        destination: "https://adminayatiworks.vercel.app/:path*",
      },
    ];
  },
};

export default nextConfig;
