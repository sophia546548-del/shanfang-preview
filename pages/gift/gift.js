Page({
  data: {
    statusPad: 44,
    gifts: [
      { name: '丽珠正北 弘毅', word: '弘毅', desc: '一等黄芪，昔为东方御贡之品', spec: '8g × 30袋', bg: 'linear-gradient(120deg,#5C4630,#7A5C3E)' },
      { name: '丽珠正北 恬淡', word: '恬淡', desc: '二等黄芪，沉稳之选', spec: '8g × 30袋', bg: 'linear-gradient(120deg,#3E4A57,#55636E)' },
      { name: '丽珠正北 行健', word: '行健', desc: '三等黄芪，日常之赠', spec: '8g × 30袋', bg: 'linear-gradient(120deg,#6E6334,#8C7A52)' },
      { name: '黑金参芪浓缩液', word: '浓缩', desc: '开盖即饮的体面', spec: '10mL × 10瓶', bg: 'linear-gradient(120deg,#23282B,#3A4038)' },
      { name: '仙草汇礼盒', word: '仙草', desc: '黄芪、西洋参、石斛三味相赠', spec: '12袋 × 3', bg: 'linear-gradient(120deg,#4A5A49,#6E7B6C)' },
      { name: '浑源正北芪礼盒', word: '正北', desc: '六年以上正北芪切片，古韵礼盒', spec: '200g × 2罐', bg: 'linear-gradient(120deg,#5A4A3A,#8A6E4E)' },
      { name: '参芪臻品礼盒', word: '臻品', desc: '黄芪党参切片，适配多种食补场景', spec: '6g × 15袋 × 2', bg: 'linear-gradient(120deg,#6B3A34,#8C5248)' }
    ]
  },

  onLoad() {
    try {
      const info = wx.getWindowInfo ? wx.getWindowInfo() : wx.getSystemInfoSync()
      this.setData({ statusPad: info.statusBarHeight })
    } catch (e) {
      this.setData({ statusPad: 44 })
    }
  },

  toastSoon() {
    wx.showToast({ title: '详情页待接入', icon: 'none' })
  }
})
