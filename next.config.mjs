/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/resimler",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
