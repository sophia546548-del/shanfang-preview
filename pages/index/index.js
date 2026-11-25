const app = getApp()

Page({
  data: {
    // 状态栏 + 胶囊按钮避让高度（px）
    navPad: 88,
    // 千年一味手卷：当前页
    rollIdx: 0,

    // 五养系列：首页宫格 = 分类页 Tab，同一数据源
    scenes: [
      {
        key: 'daily', num: '壹', name: '日养', sub: '每日随饮',
        note: '日常轻调理，开盖即饮', quote: '食饮有节',
        icon: 'icon-leaf', img: 'huangqi-leaf',
        color: '#4A5A49'
      },
      {
        key: 'season', num: '贰', name: '时养', sub: '顺时而食',
        note: '节气汤包与膏方，应季而食', quote: '司岁备物',
        icon: 'icon-root', img: 'huangqi-root',
        color: '#8C7A52'
      },
      {
        key: 'recover', num: '叁', name: '复元', sub: '病后调元',
        note: '病后术后的温和回补', quote: '形不足者，温之以气',
        icon: 'icon-flower', img: 'dangshen-mid',
        color: '#2E3532'
      },
      {
        key: 'tea', num: '肆', name: '清饮', sub: '茶叙一刻',
        note: '办公、会议、独处的一杯', quote: '豆蔻连梢煎熟水',
        icon: 'icon-bell', img: 'dangshen-flower',
        color: '#6E7B6C'
      },
      {
        key: 'gift', num: '伍', name: '致礼', sub: '体面之赠',
        note: '节庆、商务、探病送礼', quote: '为补者之长',
        icon: 'icon-seal', img: 'huangqi-full',
        color: '#7A5C3E'
      }
    ],

    // 千年一味立轴：四页，各带茶烟背景
    rollPages: [
      {
        key: 'head', head: true,
        title: '千年一味', sub: '今日食养，山房的回答',
        video: '/images/tea.mp4'
      },
      {
        key: 'm1', time: '一千四百年前', title: '立食治之法',
        text: '孙思邈立食治之论，主张先食后药。黄芪党参皆在其列，性味平和，可日日入馔。这一法，我们沿用至今。',
        video: '/images/tea-2.mp4'
      },
      {
        key: 'm2', time: '山野之间', title: '两处基地',
        text: '大同的黄芪，陇西的党参，皆出自我们自有的两处基地。仿野生种植，不施农药化肥，任它们在山野之间自在生长，根条紧实，味厚气足。',
        video: '/images/tea-3.mp4'
      },
      {
        key: 'm3', time: '今日', title: '药食同源，一味食养',
        text: '丽珠做药四十年，参芪扶正乃我们承守之方。黄芪补气，党参健脾。自一千四百年前的食治之论，到今日的一方食养，方准相承，我们做成日常食养，药之严谨，食之温和。',
        video: '/images/tea-4.mp4'
      }
    ],

    // 明星单品
    featured: [
      {
        name: '参芪浓缩液', img: 'huangqi-full',
        desc: '恒山正北芪 × 陇西白条党参，高倍凝萃',
        spec: '10mL × 10瓶，黑金礼盒'
      },
      {
        name: '黄芪党参植物饮', img: 'dangshen-mid',
        desc: '配方干净无添加，一撕即饮',
        spec: '30mL × 10袋，便携装'
      }
    ]
  },

  onLoad() {
    this.computeNavPad()
  },

  // 手卷翻页（仅当前页挂载视频，autoplay 自动起播，翻页即换景）
  onRollChange(e) {
    this.setData({ rollIdx: e.detail.current })
  },
  goRoll(e) {
    this.setData({ rollIdx: Number(e.currentTarget.dataset.i) })
  },

  // 视频加载失败时给出提示（调试用）
  onVideoErr(e) {
    console.error('roll video error:', e.detail)
  },

  // 自定义导航下，内容避开右上角胶囊按钮
  computeNavPad() {
    try {
      const menu = wx.getMenuButtonBoundingClientRect()
      this.setData({ navPad: menu.bottom + 12 })
    } catch (e) {
      this.setData({ navPad: 96 })
    }
  },

  // 宫格点击：暂存系列索引，switchTab 跳分类页
  goScene(e) {
    app.globalData.pendingScene = e.currentTarget.dataset.index
    wx.switchTab({ url: '/pages/category/category' })
  },

  goGift() {
    wx.switchTab({ url: '/pages/gift/gift' })
  },

  toastSoon() {
    wx.showToast({ title: '详情页待接入', icon: 'none' })
  }
})
