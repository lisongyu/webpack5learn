
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
        use: [
          '01',
          '02',
          '03'
        ]
      }
    ]
  },
  resolveLoader:{
    modules:['node_modules','./my-loader']
  }

}