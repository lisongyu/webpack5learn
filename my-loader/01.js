
// 异步loader:this.async()
module.exports = function (content) {
  console.log(content, '哈哈')
  // 获取传入的参数
  const options = this.getOptions()
  console.log('传入的参数是',options)
  const callback = this.async();
  setTimeout(() => {
    callback(null,content)
  },2000)
 
  // return content
}

module.exports.pitch=function(){
  console.log('pitch')
}