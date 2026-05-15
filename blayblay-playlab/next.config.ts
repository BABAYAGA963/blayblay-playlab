import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/playlab",
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
