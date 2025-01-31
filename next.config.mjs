/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cms-webserver-statics.s3.amazonaws.com',
      },
    ],
  },
};

export default nextConfig;
