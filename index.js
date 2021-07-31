const {
  SyncHook,
  SyncBailHook,
  SyncLoopHook,
  SyncWaterfallHook

}=require('tapable')

class LearnTapable{
  constructor() {
    this.hooks = {
      // syncHook:new SyncHook(['name','age'])
      // bail:在某一个事件监听的函数中，如果有返回值，那么监听的事件就不会再执行了
      // syncHook:new SyncBailHook(['name','age'])
      // loop: 在某个监听的函数中，如果为ture则循环执行
      // syncHook:new SyncLoopHook(['name','age'])
      syncHook:new SyncWaterfallHook(['name','age'])
    }

    this.hooks.syncHook.tap('event1',(name,age)=>{
      console.log('event1', name, age)
      return 'event1'
    })
    this.hooks.syncHook.tap('event2',(name,age)=>{
      console.log('event2',name,age)
    })
  }
  emit() {
    this.hooks.syncHook.call('why', '18')
    this.hooks.syncHook.call('keb','30')
  }
}

const lt = new LearnTapable();
lt.emit()