// components/menu/menu.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    pageId: {
      type: String,
      value: 'home'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    menus: [
      {
        name: '发现内容',
        url: '/pages/index/index',
        isLast: false,
        key: 'home'
      },
      {
        name: '前沿深度',
        url: '/pages/edge/edge',
        isLast: false,
        key: 'edge'
      },
      {
        name: '科技哲思',
        url: '/pages/science/science',
        isLast: true,
        key: 'science'
      },
      {
        name: 'TFG专栏',
        url: '/pages/column/column',
        isLast: false,
        key: 'columns'
      },
      {
        name: 'TFG专访',
        url: '/pages/interview/interview',
        isLast: true,
        key: 'interview'
      },
      {
        name: '个人设置',
        url: '/pages/personal/personal',
        isLast: false,
        key: 'personal'
      },
      {
        name: '退出登录',
        url: '',
        isLast: false,
        key: 'login'
      }
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    close() {
      this.triggerEvent('hidemenu')
    },
    jump(e) {
      const menuItem= e.currentTarget.dataset.menuItem
      const pageId= e.currentTarget.dataset.pageId
      if (menuItem.key === 'home') {
        this.triggerEvent('hidemenu')
        if (pageId !== 'home') {
          wx.switchTab({
            url: menuItem.url,
          })
        }

        return null
      }
      if(menuItem.key === 'login') {
        console.log('login out')
        return null
      }
      this.triggerEvent('hidemenu')
      wx.navigateTo({
        url: menuItem.url,
      })
    }
  }
})
