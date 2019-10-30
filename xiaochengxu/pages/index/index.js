var order = ['green', 'red', 'yellow', 'blue']

Page({

  /**
   * 页面的初始数据
   */
  data: {
    toView: "green",
    scrollTop: 0,
    startTouchs: {
      x: 0,
      y: 0
    }
  },

  upper: function (e) {
    console.log(e),
      console.log("在深圳只有不断的向前跑才能看见自己的出路")
  },

  lower: function (e) {
    console.log(e),
      console.log("你不努力谁替你坚强")


  },

  scroll: function (e) {
    console.log(e),
      console.log("可是回家又能做些什么呢")
  },

  tap: function (e) {
    for (var i = 0; i < order.length; i++) {
      if (order[i] === this.data.toView) {
        this.setData({
          toView: order[i + 1]
        })
        break
      }
    }
  },
  tapMove: function (e) {
    this.setData({
      scrollTop: this.data.scrollTop + 10
    })
  }
})