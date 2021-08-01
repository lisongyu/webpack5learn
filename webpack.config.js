const path =require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// const AutoUploadPlugin=require('./plugins/AutoUploadPlugin')
const No2WebpackPlugin = require('./plugins/No2-webpack-plugin')
const FileListPlugin = require('./plugins/fileListPlugin');
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
    // new AutoUploadPlugin()
    new No2WebpackPlugin({ msg: 'bad boy!' }),
    new FileListPlugin({
      filename: 'fileList.md'
    })
  ]
};