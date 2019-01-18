const path = require('path');

function resolve (dir) {
  return path.resolve(__dirname, dir)
}

module.exports = {
  entry: {
    page1: './src/js/page1.js',
    page2: './src/js/page2.js',
    page3: './src/js/page3.js'
    // common: './src/js/common.js'
  },
  output: {
    path: resolve('dist'),
    filename: 'assets/js/[name].js'
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        swiper: {
          test: /[\\/]node_modules[\\/]/,
          minChunks: 2,
          name: 'swiper'
        }
        /*vendor: {
          name: 'vendor',
          chunks: (chunk) => chunk.name === 'common',
          test: /[\\/]node_modules[\\/]/,
          priority: 10
        }*/
      }
    },
    minimize: false,
    runtimeChunk: {
      name: 'manifest'
    },
  }
};