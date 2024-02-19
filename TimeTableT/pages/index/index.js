// index.js
// 获取应用实例
Page({
  data: {
    //myName:[],
    //college:[]
    getData:[]
  },
  onLoad: function (options) {
    let that = this
    that.setData({
      //myName:options.myData.nickName,
      //college:options.college
      getData:JSON.parse(options.myData)
    })
    console.log(that.data.getData)
  },
  // 事件处理函数
  onClick:function() {
    wx.switchTab({
      url:'/pages/searchclass/searchclass',
    })
  }
})
