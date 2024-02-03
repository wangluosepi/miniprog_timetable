// pages/mine/mine.js
Page({
  data: {
    show: false,
  },
  showPopup() {
    this.setData({ show: true });
  },
  onClose() {
    this.setData({ show: false });
  },
  login(){
    var that = this;
    wx.getUserProfile({
      desc: '用于信息完善',
      success(res){
        console.log(res.userInfo)
        var user = res.userInfo //定义user变量保存userinfo
        that.setData({
          userInfo: user
        })
      }
    })

  }
  

})