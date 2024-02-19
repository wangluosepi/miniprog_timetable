// pages/searchclass/searchclass.js
Page({
  data: {
    itrmTitle:'周数',
    changeState:true,
    option1: [
      { text: '第一周', value: 1 },
      { text: '第二周', value: 2 },
      { text: '第三周', value: 3 },
      { text: '第四周', value: 4 },
      { text: '第五周', value: 5 },
      { text: '第六周', value: 6 },
      { text: '第七周', value: 7 },
      { text: '第八周', value: 8 },
      { text: '第九周', value: 9 },
      { text: '第十周', value: 10 },
      { text: '第十一周', value: 11 },
      { text: '第十二周', value: 12 },
      { text: '第十三周', value: 13 },
      { text: '第十四周', value: 14 },
      { text: '第十五周', value: 15 },
      { text: '第十七周', value: 16 },
      { text: '第十八周', value: 17 },
      { text: '第十九周', value: 18 },
      { text: '第二十周', value: 19 }
    ],
    option2: [
      { text: '星期一', value: 1 },
      { text: '星期二', value: 2 },
      { text: '星期三', value: 3 },
      { text: '星期四', value: 4 },
      { text: '星期五', value: 5 },
      { text: '星期六', value: 6 },
      { text: '星期日', value: 7 },
    ],
    option3: [
      { text: '1小节', value: 1 },
      { text: '2小节', value: 2 },
      { text: '3小节', value: 3 },
      { text: '4小节', value: 4 },
      { text: '5小节', value: 5 },
      { text: '6小节', value: 6 },
      { text: '7小节', value: 7 },
      { text: '8小节', value: 8 },
      { text: '9小节', value: 9 },
      { text: '10小节', value: 10 },
    ],
    option4: [
      {text:'一学期',value:1},
      {text:'二学期',value:2}
    ],
    option5: [
      { text: '2小节', value: 2 },
      { text: '3小节', value: 3 },
      { text: '4小节', value: 4 },
      { text: '5小节', value: 5 },
      { text: '6小节', value: 6 },
      { text: '7小节', value: 7 },
      { text: '8小节', value: 8 },
      { text: '9小节', value: 9 },
      { text: '10小节', value: 10 },
      { text: '11小节', value: 11 },
    ],
    value1: 1,//周数
    value2: 1,//星期
    value3: 1,//开始节数
    value4: 1,//学期
    value5: 2,//结束节数
    /*value5:value2-29,//星期数修改
    value6:value3-20,//开始节数
    value7:value3-19,//结束节数
    value8:value4-26,//学期数修改
    optObj:{
      value1: value1,
      value2: value2,
      value3: value3,
      value4: value4,
      value5: value5,
      value6: value6,
      value7: value7,
      value8: value8
    },*/
    //nickName:"",
    //department:"",
    dataArray:[]
  },
  goto:function(){
    var that=this;
    wx.request({
      //url: 'http://127.0.0.1:8081/users/free/?term=%E4%B8%80&week=2&day=2&start_lesson=1&end_lesson=5',
      url: 'http://127.0.0.1:8081/users/free/?term='+that.data.value4+'&week='+that.data.value1+'&day='+that.data.value2+'&start_lesson='+that.data.value3+'&end_lesson='+that.data.value5,
      method:'GET',
      success:function(res){
        //console.log(res)
        that.setData({
          //nickName:res.data[1].nickname,
          //department:res.data[1].department,
          dataArray:res.data
        })
        wx.navigateTo({
          //url: '/pages/index/index?name='+that.data.nickName+'&college='+that.data.department
          url:'/pages/index/index?myData='+JSON.stringify(that.data.dataArray)
        })
      },
      fail: function(err) {
        // 异步操作失败后的回调函数
        wx.showToast({
          title: '数据获取失败',
          icon: 'error',
          duration: 2000
        })
        //console.error('数据获取失败', err);
      }
    })
}
})
