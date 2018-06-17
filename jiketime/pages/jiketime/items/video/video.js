const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTab: 0,
    actionSheetHidden: true,
    videopages: [],
    menu: '',
  },
  clickTab: function (e) {
    var index = e.currentTarget.dataset.index
    this.setData({
      currentTab: index
    });
  },
  actionSheetTap: function () {
    this.setData({
      actionSheetHidden: !this.data.actionSheetHidden
    })
  },
  actionSheetbindchange: function () {
    this.setData({
      actionSheetHidden: !this.data.actionSheetHidden
    })
  },
  bindMenu1: function () {
    this.setData({
      menu: 1,
      actionSheetHidden: !this.data.actionSheetHidden
    })
  },
  bindMenu2: function () {
    this.setData({
      menu: 2,
      actionSheetHidden: !this.data.actionSheetHidden
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(this);
    var videopages = app.globalData.videopages;
    this.setData({
      // videopages: videopages[decodeURIComponent(options.index)]
      videopages: videopages[options.index]
      
    })
  },
  clickInto: function(e) {
    wx.showToast({
      title: "暂未开放",
      icon: "none",
      duration: 2000
    })
  }
})