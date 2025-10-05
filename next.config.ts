import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // A raiz do workspace (monorepo) para evitar detecção incorreta pelo Next
  outputFileTracingRoot: path.resolve(__dirname, ".."), // C:\Users\PC\Desktop\MAPSCLEAN
  experimental: {}
};

export default nextConfig;
