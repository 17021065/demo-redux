const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const ESLintPlugin = require('eslint-webpack-plugin'); 

module.exports = merge(common, {
  mode: "development",
  devtool: 'inline-source-map',
  devServer: {
    static: './public',
    historyApiFallback: true,
    compress: true,
    port: 3000,
    open: true,
    client: {
      logging: 'info',
      overlay: {
        errors: true,
        warnings: false,
      },
      progress: true,
    },
  },
  plugins: [
    new ESLintPlugin(),
  ],
});