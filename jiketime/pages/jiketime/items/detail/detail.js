const app = getApp();
Page({
  data: {
    currentTab: 0,
    actionSheetHidden: true,
    actionSheetItems: [
      { bindtap: 'Menu1', txt: '分享给好友' },
      { bindtap: 'Menu2', txt: '生成分享卡片' },
    ],
    menu: '',
    courseCatalog: []
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
    // console.log(app);
    this.setData({
      courseCatalog: app.globalData.courseCatalog
    })
  },

})