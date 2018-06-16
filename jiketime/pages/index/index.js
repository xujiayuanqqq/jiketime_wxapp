//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    currentTab: 0,
    num: 1,
    pages: []
  },
  swiperTab: function(e) {
    // console.log(e);
    let number = e.detail.current + 1;  
    this.setData({
      currentTab: e.detail.current,
      num: number
    });
  },
  goTo: function(e) {
    var index = 20;
    wx.navigateTo({
      url: '../jiketime/items/detail/detail?index=' + index,
    })
  },
  goFor: function(e) {
    var index = 21;
    wx.navigateTo({
      url: '../jiketime/items/detail/detail?index=' + index,
    })
  },
  click: function(e) {
    var index = 0;
    wx.navigateTo({
      url: '../jiketime/items/detail/detail?index=' + index,
    })
  },
  clickTo: function(e) {
    var index = 0;
    wx.navigateTo({
      url: '../jiketime/items/video/video?index=' + index,
    })
  },
  readMore: function(e) {
    var index = e.currentTarget.dataset.index;
    if(index == 2 || index == 3) {
      index = index + 1;
    }
    wx.navigateTo({
      url: '../jiketime/items/detail/detail?index=' + index,
    })
  },
  onLoad: function(options) {
    this.setData({
      pages: app.globalData.pages
    })
  }
})
