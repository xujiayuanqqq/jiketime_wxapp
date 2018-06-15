//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    currentTab: 0,
    num: 1,
    pages: [
      {id: 1, picture: "../image/avatar1.png", name: "王天一", introduce: "工学博士，副教授", instr: "机器学习40讲", content: "帮你打通机器学习的任督二脉", price: "￥45/40期", learn: "7510 人与你共同学习"},
      {id: 2, picture: "../image/avatar2.png", name: "蔡能", introduce: "原网易游戏引擎架构师，资深游...", instr: "从0开始学游戏开发", content: "你的游戏开发入门第一课", price: "￥68/36期", learn: "3157 人与你共同学习"},
      {id: 3, picture: "../image/avatar3.png", name: "杨晓峰", introduce: "Oracle首席工程师", instr: "Java核心技术36讲", content: "Oracle首席工程师带你修炼Java内功", price: "￥68/36期", learn: "15756 人与你共同学习"},
      {id: 4, picture: "../image/avatar4.png", name: "李运华", introduce: "资深技术专家", instr: "从0开始学架构", content: "资深技术专家的实战架构心法", price: "￥99/50期", learn: "20706 人与你共同学习"},
    ]
  },
  swiperTab: function(e) {
    // console.log(e);
    let number = e.detail.current + 1;    
    this.setData({
      currentTab: e.detail.current,
      num: number
    });
  },
  readMore: function() {
    // console.log(this);
    wx.navigateTo({
      url: '../jiketime/items/detail/detail',
      success: function(res){
        // success
        // console.log(res);
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
  }
})
