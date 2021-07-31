// 同步loader
module.exports = function (content) {
  console.log(content, '哈哈')
  // 同步的loader,两种方法返回值
  this.callback(null,content)
  // return content
}

module.exports.pitch=function(){
  console.log('pitch')
}