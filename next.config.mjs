/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // This helps Next.js recognize 3D file types
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(glb|gltf)$/,
      type: 'asset/resource',
    });
    return config;
  },
};
export default nextConfig;
