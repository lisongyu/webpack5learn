function FileListPlugin (options) {
  this.options = options || {};
  this.filename = this.options.filename || 'fileList.md'
}

FileListPlugin.prototype.apply = function (compiler) {
  // 第三种 await/async
  compiler.hooks.emit.tapPromise('FileListPlugin', async (compilation) => {
    await new Promise(resolve => {
      setTimeout(() => {
        resolve()
      }, 1000)
    })
    const fileListName = this.filename;
    let len = Object.keys(compilation.assets).length;
    let content = `# 一共有${len}个文件\n\n`;
    for (let filename in compilation.assets) {
      content += `- ${filename}\n`;
    }
    compilation.assets[fileListName] = {
      source: function () {
        return content;
      },
      size: function () {
        return content.length;
      }
    }
  })
}
module.exports = FileListPlugin;
