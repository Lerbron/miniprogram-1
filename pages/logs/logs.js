//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: [],
    tabs: ['前沿', '科技', '活动']
  },
  onLoad: function () {
    // this.setData({
    //   logs: (wx.getStorageSync('logs') || []).map(log => {
    //     return util.formatTime(new Date(log))
    //   })
    // })

    console.log('getCurrentPages: logs', getCurrentPages())

    // wx.showShareMenu({
    //   withShareTicket: true
    // })
    // wx.hideShareMenu()
  },
  onTabItemTap(item) {
    console.log('onTabItemTap', item.index)
    console.log('onTabItemTap', item.pagePath)
    console.log('onTabItemTap', item.text)
  },
  goHome() {
    // wx.switchTab({
    //   url: 'index',
    // })
  },
  callback(data) {
    console.log('callback:', data)
  },

})
