App({
  onLaunch: function () {
    const capsuleStyle = wx.getMenuButtonBoundingClientRect()
    wx.getSystemInfo({
      success: res => {
        let isIOS = res.system.indexOf('iOS') > -1
        this.globalData.statusBarHeight = res.statusBarHeight
        this.globalData.capsuleTop = capsuleStyle.top - res.statusBarHeight
        if (this.globalData.capsuleTop < 1 || this.globalData.capsuleTop > 10) {
          this.globalData.capsuleTop = isIOS ? 4 : 8
        }
        this.globalData.capsuleRight = res.screenWidth - capsuleStyle.right
        if (this.globalData.capsuleRight < 5 || this.globalData.capsuleRight > 11) {
          this.globalData.capsuleRight = isIOS ? 7 : 10
        }
        this.globalData.capsuleWidth = capsuleStyle.width
        if (this.globalData.capsuleWidth < 80 || this.globalData.capsuleWidth > 100) {
          this.globalData.capsuleWidth = isIOS ? 87 : 95
        }
        this.globalData.capsuleHeight = capsuleStyle.height
        if (this.globalData.capsuleHeight < 32 || this.globalData.capsuleHeight > 32) {
          this.globalData.capsuleHeight = 32
        }
        this.globalData.titleBarHeight = this.globalData.capsuleTop * 2 + this.globalData.capsuleHeight
      }
    })
  },
  globalData: {
    statusBarHeight: '', //状态栏高度
    titleBarHeight: '', //标题栏高度
    capsuleTop: '', //胶囊离状态栏距离 
    capsuleRight: '', //胶囊离右边屏幕的距离
    capsuleWidth: '', //胶囊的宽度
    capsuleHeight: '', //胶囊的高度
  }
})
