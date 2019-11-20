// components/tabs/tabs.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    tabs: Array,
    activeIdx: {
      type: Number,
      value: 0
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    // activeIdx: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    toggle(e) {
      if (e.currentTarget.dataset.index == this.data.activeIdx) return null;
      this.setData({ activeIdx: e.currentTarget.dataset.index}, () => {
        this.triggerEvent('callback', e.currentTarget.dataset.index)
      })
    },
  }
})
