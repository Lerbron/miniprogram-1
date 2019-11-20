// components/testCom/testCom.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    a: {
      type: Number,
      observer: 'observerNumber'
    },
    b: {
      type: Number,
      observer: 'observerNumber'

    }
  },

  observers: {
    
  },

  /**
   * 组件的初始数据
   */
  data: {
    sum: 0,

  },

  /**
   * 组件的方法列表
   */
  methods: {
    fn1() {
      this.triggerEvent('fn', 11)

    },

    observerNumber(newVal, oldVal) {
      this.setData({sum: ( Number(this.data.a) + Number(this.data.b))})
    },

  },

  attached() {
    console.log('attached')
  },

  lifetimes: {
    attached() {
      // 在组件实例进入页面节点树时执行
      console.log('attached', this.data.a)
      console.log('attached', this.data.b)
    },
    ready() {
      // 在组件在视图层布局完成后执行
      console.log('ready', this.data.a)
      console.log('ready', this.data.b)
    }
  },

  pageLifetimes: {
    show: function() {
      // 页面被展示
      console.log('show')
    },
  }

})