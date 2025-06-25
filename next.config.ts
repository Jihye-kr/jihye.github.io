import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  basePath: isProd ? "/jihye.github.io" : "",
  assetPrefix: isProd ? "/jihye.github.io/" : "",
  trailingSlash: true,
};

export default nextConfig;
