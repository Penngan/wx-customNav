// components/navbar.js
const app = getApp()
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    navTitle: {
      type: String,
      value: '主页'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    statusBarHeight: app.globalData.statusBarHeight + 'px',
    titleBarHeight: app.globalData.titleBarHeight + 'px',
    capsuleTop: app.globalData.capsuleTop + 'px', //胶囊离状态栏距离 
    capsuleRight: app.globalData.capsuleRight + 'px', //胶囊离右边屏幕的距离
    capsuleWidth: app.globalData.capsuleWidth + 'px', //胶囊的宽度
    capsuleHeight: app.globalData.capsuleHeight + 'px', //胶囊的高度
  },
  /**
   * 组件的方法列表
   */
  methods: {

  }
})
