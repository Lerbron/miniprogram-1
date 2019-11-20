//index.js
//获取应用实例
const app = getApp()
const { get }= require('./../../utils/http')


Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    movieList: [],
    page: 1,
    a: 1,
    b: 2,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    nodes: `<div>我是html <img src='https://res.wx.qq.com/wxdoc/dist/assets/img/0.4cb08bb4.jpg' /> <i>我是i</i></div>`.replace(/<img/, '<img style="max-width:90%; margin:0 5%; "')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }

    // this.getData(1)

    // console.log('getCurrentPages:', getCurrentPages())
  },

  goDetail() {
    wx.navigateTo({
      url: './../detail/detail',
    })
  },

  fn(data) {
    // console.log('fn:', data)
    this.setData({a: this.data.a + 1})
  },

  setB() {
    this.setData({b: this.data.b + 1})
  },

  onTabItemTap(item) {
    console.log('onTabItemTap', item.index)
    console.log('onTabItemTap', item.pagePath)
    console.log('onTabItemTap', item.text)
  },

  getData() {

    let data= {
      pageNo: this.data.page
    }

    
    get('https://mip.yesky.com/fishVideo/video/movieList.json', data, (res) => {
      console.log(res)
      let newMovieList= res.movieList,
        movieList= this.data.movieList
        newMovieList= [...movieList, ...newMovieList]
        console.log('newMovieList:', newMovieList)
      this.setData({
        movieList: newMovieList,
        page: this.data.page + 1
      })

    }, () => {
      wx.showLoading({
        title: '服务异常！',
        duration: 1500
      })
    })
  },
  getUserInfo: function(e) {
    
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  onPullDownRefresh(){
    console.log('onPullDownRefresh()')
    // wx.startPullDownRefresh()
    wx.showNavigationBarLoading();
    setTimeout(() => {
      wx.hideNavigationBarLoading();
      wx.stopPullDownRefresh();

    }, 3000)
  },
  onReachBottom: function () {
    var that = this;
        
    // 页数+1
    // this.data.page= this.data.page + 1

    // this.getData()


    // setTimeout(() => {
    //   wx.hideLoading();
    // }, 2000)
    
 
  },
  onShareAppMessage: function (res) {
    return {
      title: '哈根达斯冰激凌5折特惠',
      path: '/pages/index/index?goods_id=' + wx.getStorageSync("goods_id"),
      imageUrl: 'http://static.e-mallchina.com/pic/product/brand/detail/hgds.jpg'//自定义图片路径，可以是本地文件路径、代码包文件路径或者网络图片路径。支持PNG及JPG。显示图片长宽比是 5:4。
    }
  }

})
