
const HtmlWebpackPlugin = require('html-webpack-plugin');
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
        // use: {
        //   loader: 'mybabel-loader',
        //   options: {
        //     presets: [
        //       "@babel/preset-env"
        //     ]
        //   }
        // }
        // use: [
        //   '01',
        //   '02',
        //   '03'
        // ]
        use: {
          loader: '01',
          options: {
            name: 'lsy',
            age:30
          }
        }
      },
      {
        test: /\.css$/i,
        use: [
          "style-loader",
          "css-loader"
        ]
      },
      {
        test: /\.md$/i,
        use: [
          'html-loader',
          'md-loader'
        ]

      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './src/index.html' })
 
  ],
  resolveLoader:{
    modules:['node_modules','./my-loader']
  }

}