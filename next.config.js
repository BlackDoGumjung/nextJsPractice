/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images:{
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 's3.amazonaws.com', // 도메인
        port: '',
        pathname: '/my-bucket/**', // 경로 등록
      }
    ]
  }
}

module.exports = nextConfig
