module.exports = {
  productionSourceMap: false,
  chainWebpack: config => {
    // const svgRule = config.module.rule('svg');
    // svgRule.uses.clear();
    // svgRule.use('vue-svg-icon-loader').loader('vue-svg-icon-loader');
    // // config.plugin('html').tap((args) => {
    // //   args[0].title = 'test';
    // //   return args;
    // // });
    // config.module.
    //   rule('fonts').
    //   test(/.(ttf|otf|eot|woff|woff2)$/).
    //   use('url-loader').
    //   loader('url-loader').
    //   tap((options) => {
    //     options = {
    //       limit: 10000,
    //       name: 'fonts/[name].[ext]'
    //     };
    //     return options;
    //   }).
    //   end();
    console.log(config)
  },
  css: {
    extract: false,
    loaderOptions: {
      sass: {
        prependData: `@import "./src/assets/css/common.scss";`
      },
      less: {
        lessOptions: {
          javascriptEnabled: true
        }
      }
    }
  },
  devServer: {
    port: 9999,
    disableHostCheck: true
    // proxy: {
    //   '/api/': {
    //     target: 'https://netease-cloud-music-api-daodaolee.vercel.app/',
    //     pathRewrite: {
    //       '^/api/': ''
    //     }
    //   }
    // }
  }
}
