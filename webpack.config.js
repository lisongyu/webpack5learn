const path =require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const AutoUploadPlugin=require('./plugins/AutoUploadPlugin')
module.exports = {
  entry: './src/main.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new HtmlWebpackPlugin({
      template:'./src/index.html'
    }),
    new AutoUploadPlugin()
  ]
};