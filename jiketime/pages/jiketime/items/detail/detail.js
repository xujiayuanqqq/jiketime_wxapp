const app = getApp();
Page({
  data: {
    currentTab: 0,
    actionSheetHidden: true,
    fullpage: [],
    menu: '',
  },
  clickTab: function (e) {
    var index = e.currentTarget.dataset.index
    this.setData({
      currentTab: index
    });
  },
  actionSheetTap: function () {
    console.log(this);
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
    // console.log(app);
    var fullpage = app.globalData.fullpage;
    this.setData({
      fullpage: fullpage[decodeURIComponent(options.index)]
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