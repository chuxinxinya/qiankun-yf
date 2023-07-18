// vue.config.js
const { name } = require('../package.json')
const path = require("path");

module.exports = {
  devServer: {
    // 监听端口
    port: process.env.VUE_APP_PORT,
    // 配置跨域请求头，解决开发环境的跨域问题
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
      },
    },
    // 这一块是新增本次新增的
    output: {
      // 子服务的包名，这里与主应用中注册的微应用名称一致
      library: `${name}-[name]`,  // 根据实际情况来
      // 将你的 library 暴露为所有的模块定义下都可运行的方式
      libraryTarget: "umd",
    },
  },
};
 