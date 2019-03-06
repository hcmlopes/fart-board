module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ?
    '/WhatStinks/' : '/',

  pwa: {
    themeColor: '#EE7370',
    msTileColor: '#EE7370',
    appleMobileWebAppStatusBarStyle: 'default',
    name: 'WhatStinks'
  }
}