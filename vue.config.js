const path = require("path");
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  configureWebpack: {
    resolve: {
      alias: {
        globalize$: path.resolve(__dirname, "node_modules/globalize/dist/globalize.js"),
        globalize: path.resolve(__dirname, "node_modules/globalize/dist/globalize"),
        cldr$: path.resolve(__dirname, "node_modules/cldrjs/dist/cldr.js"),
        cldr: path.resolve(__dirname, "node_modules/cldrjs/dist/cldr")
      },
      extensions: [".ts", ".js", ".json"]
    }
  },

  transpileDependencies: true,
  css: {sourceMap: true},
  // publicPath: "/cuba-vue/"
})
