//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    currentTab: 0,
  },
  // bindViewTap: function() {
  //   wx.navigateTo({

  //   })
  // },
  swiperTab: function() {
    this.setData({
      currentTab: e.detail.current,
    })
  }
})
