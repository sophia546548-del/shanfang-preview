const app = getApp()

Page({
  data: {
    statusPad: 44,
    active: 0,

    // 五养系列：与首页宫格同源；products 为折页全量 SKU
    scenes: [
      {
        key: 'daily', name: '日养', sub: '每日随饮',
        note: '日常轻调理，开盖即饮',
        quote: '食饮有节', quoteFrom: '《素问 上古天真论》',
        color: '#4A5A49', img: 'huangqi-leaf', banner: 'banner-daily.jpg',
        products: [
          { name: '参芪露', desc: '日常轻养，全家早晚一盏', spec: '250mL × 2瓶' },
          { name: '参芪草本饮 黑金', desc: '开盖即饮，每日一至两瓶', spec: '10mL × 20瓶' },
          { name: '参芪草本饮 金', desc: '多规格多浓度，自用馈赠两宜', spec: '30mL × 15瓶 / 30mL × 7瓶' },
          { name: '黄芪党参植物饮', desc: '配方干净无添加，一撕即饮', spec: '30mL × 10袋' },
          { name: '黄芪党参植物饮 条装', desc: '随身一条，早晚一袋', spec: '10mL × 30袋' },
          { name: '参芪固体饮料', desc: '参芪本味，温润回甘', spec: '6g × 10袋' }
        ]
      },
      {
        key: 'season', name: '时养', sub: '顺时而食',
        note: '节气汤包与膏方，应季而食',
        quote: '司岁备物', quoteFrom: '《素问 至真要大论》',
        color: '#8C7A52', img: 'huangqi-root', banner: 'banner-season.jpg',
        products: [
          { name: '黄芪四神汤', desc: '顺应节气食补，煲汤煮茶两用', spec: '12g × 10袋' },
          { name: '黄芪五指毛桃汤', desc: '煲汤煮茶两用，顺应节气', spec: '15g × 8袋' },
          { name: '党参佛手汤', desc: '煲汤煮茶两用，温和本草', spec: '15g × 8袋' },
          { name: '黄芪党参膏', desc: '非遗熬膏工艺，开盖即食', spec: '200g / 瓶' },
          { name: '黄芪秋梨膏', desc: '非遗熬膏工艺，温水冲调', spec: '200g / 瓶' }
        ]
      },
      {
        key: 'recover', name: '复元', sub: '病后调元',
        note: '病后术后的温和回补',
        quote: '形不足者，温之以气', quoteFrom: '《素问 阴阳应象大论》',
        color: '#2E3532', img: 'dangshen-mid', banner: 'banner-recover.jpg',
        products: [
          { name: '参芪浓缩液', desc: '恒山正北芪 × 陇西白条党参，高倍凝萃', spec: '10mL × 10瓶，黑金' },
          { name: '参芪臻品', desc: '黄芪党参切片礼盒，可煲汤煮水', spec: '6g × 15袋 × 2' },
          { name: '浑源正北芪', desc: '六年以上正北芪切片，古韵礼盒', spec: '200g × 2罐' }
        ]
      },
      {
        key: 'tea', name: '清饮', sub: '茶叙一刻',
        note: '办公、会议、独处的一杯',
        quote: '豆蔻连梢煎熟水，莫分茶', quoteFrom: '李清照《摊破浣溪沙》',
        color: '#6E7B6C', img: 'dangshen-flower', banner: 'herb.jpg',
        products: [
          { name: '养元茶', desc: '科学配比草本食材，独立小罐', spec: '10g × 20罐' },
          { name: '金泉红叶', desc: '独立小罐，可反复续泡', spec: '10g × 20罐' },
          { name: '黄芪茉莉花茶', desc: '古方非遗，即泡即饮', spec: '3g × 10杯' },
          { name: '仙草汇', desc: '黄芪、西洋参、石斛，精制馈赠', spec: '12袋 × 3' }
        ]
      },
      {
        key: 'gift', name: '致礼', sub: '体面之赠',
        note: '节庆、商务、探病送礼',
        quote: '黄耆色黄，为补者之长', quoteFrom: '《本草纲目》',
        color: '#7A5C3E', img: 'huangqi-full', banner: 'banner-gift.jpg',
        products: [
          { name: '丽珠正北 弘毅', desc: '一等黄芪，昔为东方御贡之品', spec: '8g × 30袋' },
          { name: '丽珠正北 恬淡', desc: '二等黄芪，沉稳之选', spec: '8g × 30袋' },
          { name: '丽珠正北 行健', desc: '三等黄芪，日常之赠', spec: '8g × 30袋' },
          { name: '黑金参芪浓缩液', desc: '开盖即饮的体面', spec: '10mL × 10瓶' },
          { name: '仙草汇礼盒', desc: '黄芪、西洋参、石斛三味相赠', spec: '12袋 × 3' },
          { name: '浑源正北芪礼盒', desc: '古韵高端礼盒，自用送礼皆宜', spec: '200g × 2罐' },
          { name: '参芪臻品礼盒', desc: '适配多种食补场景，轻松解锁本草滋养', spec: '6g × 15袋 × 2' }
        ]
      }
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

  // 首页宫格带索引进来（switchTab 无法带参，走 globalData）
  onShow() {
    const pending = app.globalData.pendingScene
    if (typeof pending === 'number' && pending !== this.data.active) {
      this.setData({ active: pending })
    }
    app.globalData.pendingScene = 0
  },

  switchTab(e) {
    this.setData({ active: e.currentTarget.dataset.index })
  },

  onSwiperChange(e) {
    this.setData({ active: e.detail.current })
  },

  toastSoon() {
    wx.showToast({ title: '详情页待接入', icon: 'none' })
  }
})
