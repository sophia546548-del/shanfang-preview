Page({
  data: { statusPad: 44 },

  onLoad() {
    try {
      const info = wx.getWindowInfo ? wx.getWindowInfo() : wx.getSystemInfoSync()
      this.setData({ statusPad: info.statusBarHeight })
    } catch (e) {
      this.setData({ statusPad: 44 })
    }
  }
})
