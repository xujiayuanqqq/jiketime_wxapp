//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    currentTab: 0,
    num: 1
  },
  swiperTab: function(e) {
    // console.log(e);
    let number = e.detail.current + 1;    
    this.setData({
      currentTab: e.detail.current,
      num: number
    });
  }
})
