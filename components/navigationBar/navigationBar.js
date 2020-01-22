// components/navigationBar/navigationBar.js
const app = getApp()
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    text: {
      type: String,
      value: 'The First Generation'
    },
    back: {
      type: Boolean,
      value: true
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    statusBarHeight: app.globalData.statusBarHeight + 'px',
    navigationBarHeight: (app.globalData.statusBarHeight + 44) + 'px'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    back() {
      wx.navigateBack({
        delta: 1
      })
    },
    show() {
      this.triggerEvent('showmenu')
    }
  }
})
