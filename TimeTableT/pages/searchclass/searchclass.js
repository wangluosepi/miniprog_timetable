// pages/searchclass/searchclass.js
Page({
  data: {
    switchTitle1:'周数',
    switchTitle2:'星期',
    switchTitle3:'节数',
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
      { text: '星期一', value: 'b' },
      { text: '星期二', value: 'c' },
      { text: '星期三', value: 'd' },
      { text: '星期四', value: 'e' },
      { text: '星期五', value: 'f' },
      { text: '星期六', value: 'g' },
      { text: '星期日', value: 'h' },
    ],
    option3: [
      { text: '1-2小节', value: 21 },
      { text: '3-4小节', value: 22 },
      { text: '5-6小节', value: 23 },
      { text: '7-8小节', value: 24 },
      { text: '9-10小节', value: 25 },
      { text: '10-11小节', value: 26 },
    ],
    value1: 1,
    value3: 21,
    value2: 'b'
  },
  goto:function(){
      wx.navigateTo({
        url: '/pages/index/index',
      })
  }
})