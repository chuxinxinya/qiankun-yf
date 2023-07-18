(function() {
  if (window._POWERED_BY_QIANKUN_) {
    if (process.env.NODE_ENV === 'development') {
      // eslint-disable-next-line
      _webpack_public_path = `//localhost:${process.env.VUE_APP_PORT}/`
      return
    }
    // eslint-disable-next-line
    _webpack_public_path = window._POWERED_BY_QIANKUN_
  }
})()