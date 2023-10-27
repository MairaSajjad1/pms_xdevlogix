/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.demo.pms.crossdevlogix.com",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
