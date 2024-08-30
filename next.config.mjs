/** @type {import('next').NextConfig} */

const nextConfig = {
  experimental: {
    // Enable Partial Prerendering (see usage example in app/dashboard/layout.tsx)
    ppr: 'incremental',
  },
};

export default nextConfig;
