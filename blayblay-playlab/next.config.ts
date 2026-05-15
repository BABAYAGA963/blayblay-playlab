import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/playlab",
  /* config options here */
  async redirects() {
    return [
      {
        source: "/",
        destination: "/playlab",
        permanent: true,
        basePath: false,
      },
    ];
  },
};

export default nextConfig;
