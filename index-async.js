const {
  AsyncSeriesHook,
  AsyncParallelHook
  // SyncBailHook,
  // SyncLoopHook,
  // SyncWaterfallHook

}=require('tapable')

class LearnTapable{
  constructor() {
    this.hooks = {
      // 串行执行一个之后再执行另外一个
      //  asyncHook:new AsyncSeriesHook(['name','age'])
      // 并行同时执行
      asyncHook:new AsyncParallelHook(['name','age'])
     
    }

    // this.hooks.asyncHook.tapAsync('event1', (name, age, callback) => {
    //   setTimeout(() => {
    //       console.log('event1', name, age)
    //       callback()
    //   },2000)
    // })
    // this.hooks.asyncHook.tapAsync('event2', (name, age, callback) => {
    //   setTimeout(() => {
    //       console.log('event2', name, age)
    //       callback()
    //   },2000)
    // })

    this.hooks.asyncHook.tapPromise('event1', (name, age) => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          console.log('event1', name, age)
          resolve()
        },2000)
      })
    })
    this.hooks.asyncHook.tapPromise('event2', (name, age) => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          console.log('event2', name, age)
          resolve()
        },2000)
      })
    })
  }
  emit() {
    // this.hooks.asyncHook.callAsync('why', '18', () => {
    //   console.log('第一次事件执行完成')
    // })
    // this.hooks.asyncHook.callAsync('keb','30', () => {
    //   console.log('第二次事件执行完成')
    // })
    this.hooks.asyncHook.promise("james", 33).then(() => {
      console.log('事件监听完成')
    })
  }
}

const lt = new LearnTapable();
lt.emit()