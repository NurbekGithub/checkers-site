module.exports = {
  reactStrictMode: true,

  async redirects() {
    return [{
      source: '/',
      destination: '/news',
      permanent: true,
    }]
  }
}
