Page({

  data: {
    // --------二级分类---------
    first_names: [
      {
        "id": 1,
        "goods_name": "食品土特产"
      },
      {
        "id": 2,
        "goods_name": "健康器械"                                  
      },
      {
        "id": 3,
        "goods_name": "营养保健"

      },
      {
        "id": 4,
        "goods_name": "健康调理"

      },
      {
        "id": 5,
        "goods_name": "保护眼睛"

      },
      {
        "id": 6,
        "goods_name": "骨骼健康"

      },
      {
        "id": 7,
        "goods_name": "滋补养生"

      },
      {
        "id": 8,
        "goods_name": "增强免疫"

      },
      {
        "id": 9,
        "goods_name": "国内旅游"

      },
    ],
    first_id: 0,//用于判断是否是当前选中的


  },
  // -------动态切换class---------
  menuClick: function (e) {
    var that = this;
    var index = e.currentTarget.dataset.index;//获取当前点击的元素下标
    console.log(index);
    that.setData({
      first_id: index
    })
  }
})