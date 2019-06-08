// pages/index/index.js
var util = require('../../utils/util.js');//引用外部的js文件

const app = getApp()
Page({
  data: {
    plain: true,
    loading: false,
    selects: ['培训', '培训2', '敬请期待'],
    clickId: 0,
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
   /*二级tab开始 */
    ips: [
      { id: "1", title: "全部", isSelect: true },
      { id: "2", title: "新手上路", isSelect: false },
      { id: "3", title: "骑行技巧", isSelect: false },
      { id: "4", title: "零件改装", isSelect: false },
      { id: "5", title: "理论知识", isSelect: false },
      { id: "6", title: "互联网", isSelect: false },
      { id: "7", title: "大数据", isSelect: false },
      { id: "8", title: "比特币", isSelect: false },
      { id: "9", title: "宅基地三权分置", isSelect: false },
    ],
    content: "全部",
    /*二级tab结束 */
    trainingBase: [
      '上海市摩托车培训中心',
      '北京市摩托车培训中心',
      '上海宝山摩托车培训中心',
      '上海市徐汇培训中心',
      '上海市摩托车培训中心',
      '上海市摩托车培训中心',
      '上海市摩托车培训中心',
      '上海市摩托车培训中心',
      '上海市摩托车培训中心',
      '上海市摩托车培训中心',
      '上海市摩托车培训中心',
      '上海市摩托车培训中心',
      '上海市摩托车培训中心',
      '上海市摩托车培训中心',
      '上海市摩托车培训中心',
      '上海市摩托车培训中心',
      '上海市摩托车培训中心',
      '上海市摩托车培训中心',
    ],
    curTrainingBase: "",
    isShowTrainingBase: false,
    isShowTrainingTime: false,
    dateEarliest: util.getNowFormatDate(),
    dateLatest: util.getNowFormatDate(),
    trainingCards:[
      {
        img:"../../images/index/新手骑士_看图王.png",
        bigTitle: '"BMW首届培训"来了',
        SecondTitle:'上海摩托车培训中心',
        StartDate:'2019/03/21',
        EndDate:'2019/03/29',
        peopleCount:10,
        praiseCount:20
      },
      {
        img: "../../images/index/黄金骑士_看图王.png",
        bigTitle: 'aaaaaaaaaaaa',
        SecondTitle: 'aaaaaaaaaa',
        StartDate: '2019/03/29',
        EndDate: '2019/03/29',
        peopleCount: 10,
        praiseCount: 60
      },
      {
        img: "../../images/index/新手骑士_看图王.png",
        bigTitle: 'bbbbbbbbbbb',
        SecondTitle: 'bbbbbbbbbbb',
        StartDate: '2019/03/29',
        EndDate: '2019/03/29',
        peopleCount: 40,
        praiseCount: 60
      },
      {
        img: "../../images/index/黄金骑士_看图王.png",
        bigTitle: '"bbbbbbbbbbb',
        SecondTitle: 'bbbbbbbbbbb',
        StartDate: '2019/03/29',
        EndDate: '2019/03/29',
        peopleCount: 20,
        praiseCount: 40,
        animationBase:''
      }
    ]
  },
  //二级tab
  onIpItemClick: function (event) {
    console.log(event);
    var id = event.currentTarget.dataset.item.id;
    var curIndex = 0;
    for (var i = 0; i < this.data.ips.length; i++) {
      if (id == this.data.ips[i].id) {
        this.data.ips[i].isSelect = true;
        curIndex = i;
      } else {
        this.data.ips[i].isSelect = false;
      }
    }

    this.setData({
      content: this.data.ips[curIndex].title,
      ips: this.data.ips,
    });
  },
  onLoad: function (options) {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
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
    wx.getSystemInfo({
      success: (res) => {
        this.setData({
          pixelRatio: res.pixelRatio,
          windowHeight: res.windowHeight,
          windowWidth: res.windowWidth
        })
      },
    })
  },
  onReady: function () {

  },
  //改变头部tab
  changeHeaderTab: function (res) {
    if (this.data.clickId == res.currentTarget.id) {
      this.setData({
        clickId: 0
      })
      return;
    }
    this.setData({
      clickId: res.currentTarget.id
    })
    //this.getTabContents(id);
  },
  //根据头部tab的id获取对应的内容


  //二级tab
  
  //显示培训基地
  showTrainingBase: function (event) {
    if (this.data.isShowTrainingTime) {
      this.setData({
        isShowTrainingTime: !this.data.isShowTrainingTime
      })
    }
      this.setData({
        isShowTrainingBase: !this.data.isShowTrainingBase
      })
   console.log(10);
    
  },
  //显示培训时间
  ShowTrainingTime:function(){
   console.log()
    if (this.data.isShowTrainingBase) {
      this.setData({
        isShowTrainingBase: !this.data.isShowTrainingBase
      })
    }
      this.setData({
        isShowTrainingTime: !this.data.isShowTrainingTime
      })
  },
  //选择培训基地
  chooseTrainingBase: function (event) {
    var cur = event.currentTarget.dataset.current;
    console.log(cur);
    if (this.data.curTrainingBase == cur) {
      return false;
    } else {
      this.setData({
        curTrainingBase: cur
      })
    }
  },
  
  //选择培训时间
  EarliestDateChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      dateEarliest: e.detail.value
    })
  },
  LatestDateChange:function(e){
    this.setData({
      dateLatest: e.detail.value
    })
  }

})