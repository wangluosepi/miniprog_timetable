const app = getApp()
Page({
  data: {
    nowWeek:1,//定义当前周数为1
    TotalWeek:20,//定义总共的周数为20周
    StartDate:'2023/08/28',//开学日期
    ShowSwitchWeek: false,//显示选择周数弹窗默认为false
    WeekDayCount:7 ,//定义一周有七天
    NowMonth:1,//当前周的月份，默认值设定为1
    //周数
    WeekDays: [
      { day: "一" },
      { day: "二" },
      { day: "三" },
      { day: "四" },
      { day: "五" },
      { day: "六" },
      { day: "日" },
    ],
    //课程时间
    ClassTimeA: [
      { 
        section: '1', 
        start: '8:00', 
        end: '8:45' 
      },
      { 
        section: '2', 
        start: '8:55', 
        end: '9:40' 
      },
      { 
        section: '3', 
        start: '10:00', 
        end: '10:45' 
      },
      { 
        section: '4', 
        start: '10:55', 
        end: '11:40' 
      },
      { 
        section: '5', 
        start: '14:00', 
        end: '14:45' 
      },
      { 
        section: '6', 
        start: '14:55', 
        end: '15:40' 
      },
      { 
        section: '7', 
        start: '16:00', 
        end: '16:45' 
      },
      { 
        section: '8', 
        start: '16:55', 
        end: '17:40' 
      },
      { 
        section: '9', 
        start: '19:00', 
        end: '19:45' 
      },
      { 
        section: '10', 
        start: '19:55', 
        end: '20:40' 
      },
    ],
    /*左侧栏显示内容（第一版）
    ClassTime: [
      { time: "8:00" },
      { time: "一" },
      { time: "9:40" },
      { time: "10:00" },
      { time: "二" },
      { time: "11:40" },
      { time: "14:00" },
      { time: "三" },
      { time: "15:40" },
      { time: "16:00" },
      { time: "四" },
      { time: "17:40" },
      { time: "19:00" },
      { time: "五" },
      { time: "20:40" },
    ],
    */
    //课程内容
    courseList: [
      {
        name: '网络工程',
        week: 1,
        section: 1,
        sectionCount: 2,
        address: '博雅楼302',
        color: '#D06969'
      },
      {
        name: '大学体育1',
        week: 2,
        section: 5,
        sectionCount: 2,
        address: '篮球场',
        color: '#86D069'
      },
      {
        name: '马克思主义原理',
        week: 3,
        section: 5,
        sectionCount: 2,
        address: '信达楼392',
        color: '#AE69D0'
      },
    ]
  },
    /**
   * 生命周期函数--监听页面加载
   */
    onLoad(options) {
    const {windowWidth}= wx.getSystemInfoSync()
    this.setData({
      windowWidth
    })
    this.getWeekDates()
    this.GetNowWeek()
  },
  getWeekDate(){
  },
  SelectWeek(){
    this.setData({
      ShowSwitchWeek:true
    })
  },
  SwitchWeek(e){
    const week = e.currentTarget.dataset.week
    this.setData({
      nowWeek:week,
      ShowSwitchWeek:false
    })
    this.getWeekDates()
  },
  HindSwitchWeek(){
    this.setData({
      ShowSwitchWeek:false
    })
  },
  getWeekDates(){
    const StartDate = new Date (this.data.StartDate)
    const AddTime = (this.data.nowWeek - 1) * 7 *24 * 60 * 60 * 1000
    const FirstDate = StartDate.getTime() + AddTime
    const{ month : NowMonth } = this.GetDateObject(new Date(FirstDate))
    const Weekcalendar = []
    for(let i = 0; i < this.data.WeekDayCount; i++){
      const date = new Date(FirstDate + i * 24 * 60 * 60 * 1000)
      const { month, day } = this.GetDateObject(date) //将month和day数据给写入到calendar数组当中
      Weekcalendar.push({month,day})
    }
    this.setData({
      NowMonth,
      Weekcalendar
    })
  },
  GetDateObject(date = new Date()){
    const year = date.getFullYear()
    const month = date.getMonth() + 1 //因为month的初始值是0，所以我们应该加一
    const day = date.getDate()
    return {
      year,
      month,
      day
    }
  },
  GetNowWeek(){
    const NowDate = new Date()
    const StartDate = new Date(this.data.StartDate)
    const time = NowDate - StartDate
    const nowWeek = Math.ceil( time / 1000 / 60 / 60 / 24 / 7 )
    this.setData({
      nowWeek
    })
    this.getWeekDates()
  }
})