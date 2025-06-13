/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.corenexis.com',
        pathname: '/**', // Allow all image paths
      },
    ],
  },
};

export default nextConfig;

