import { execSync } from "child_process";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  env: {
    NEXT_PUBLIC_LAST_UPDATED: execSync(
      'git log -1 --format=%cd --date=format:"%B %Y"',
    )
      .toString()
      .trim(),
  },
};

export default nextConfig;
