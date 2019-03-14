module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ?
    '/fart-machine/' : '/',

  pwa: {
    themeColor: '#EE7370',
    msTileColor: '#EE7370',
    appleMobileWebAppStatusBarStyle: 'default',
    name: 'Fart Machine'
  }
}