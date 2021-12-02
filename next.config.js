module.exports = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://gallery-portfolio.vercel.app/:path*',
      },
    ]
  },
}
