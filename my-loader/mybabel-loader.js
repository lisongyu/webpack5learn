// 这就是babel-loader

const babel = require("@babel/core")
const {getOptions}=require('loader-utils')
module.exports = function (content) {

  const calllback =this.async()
  const options = getOptions(this)
  
  // 2.对源代码进行转化
  babel.transform(content, options, (err, result) => {
    if (err) {
      calllback(err)
    } else {
      calllback(null,result.code)
    }
  })
 
}
