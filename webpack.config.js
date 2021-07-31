
import HtmlWebpackPlugin from 'html-webpack-plugin'
const path = require('path')
module.exports = {
  mode: 'development',
  entry: './src/main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './build')
  },
  module: {
    rules: [
      {
        test: /\.js$/i,
        use: {
          loader: 'mybabel-loader',
          options: {
            presets: [
              "@babel/preset-env"
            ]
          }
        }
        // use: [
        //   '01',
        //   '02',
        //   '03'
        // ]
        // use: {
        //   loader: '01',
        //   options: {
        //     name: 'lsy',
        //     age:30
        //   }
        // }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin()
  ],
  resolveLoader:{
    modules:['node_modules','./my-loader']
  }

}