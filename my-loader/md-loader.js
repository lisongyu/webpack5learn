const marked =require('marked')

module.exports = function (content) {
  console.log('md-loader被执行')
  const htmlContent = marked(content)
  console.log(htmlContent)
  return htmlContent
}