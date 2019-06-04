const WXAPI = require('wxapi/main')
App({
  onLaunch:function(){
    //刚打开程序时执行
    //调用API从本地缓存中读取数据
    var logs = wx.getStorageInfoSync('logs')  || []
    console.log( logs.keys);
    logs.keys.unshift(Date.now())
    wx.setStorageSync('logs',logs);
  },
  onShow:function(){
    //程序显示时执行，从后台进入前台
  },
  onHide: function () {
    //程序进入后台时执行，按home键，不是程序退出时
  },
  getUserInfo:function(cb){
    var that = this
    if(this.globalData.userInfo) {
      typeof cb == "function" && cb(this.globalData.userInfo)
    } else {
      //调用登录接口
      wx.login({
        success:function(){
          wx.getUserInfo({
            success:function(res){
              that.globalData.userInfo = res.userInfo
              typeof cb == "function" && cb(this.globalData.userInfo)
            }
          })
        }
      })
    }
  },
  //全局参数
  globalData:{
    userInfo:null
  }
})