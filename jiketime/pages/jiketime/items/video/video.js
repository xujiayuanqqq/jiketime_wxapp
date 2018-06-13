// pages/jiketime/items/video/video.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTab: 0,
    actionSheetHidden: true,
    actionSheetItems: [
      { bindtap: 'Menu1', txt: '分享给好友' },
      { bindtap: 'Menu2', txt: '生成分享卡片' },
    ],
    menu: '',
    courseCatalog: [
      {id: "1", num: "01", chapter: "Python语言的特点"},
      {id: "2", num: "02", chapter: "Python的发者历史与版本"},
      {id: "3", num: "03", chapter: "Python的安装" },
      {id: "4", num: "04", chapter: "Python程序的书写规则"},
      {id: "5", num: "05", chapter: "基础数据类型"},
      {id: "6", num: "06", chapter: "变量的定义和常用操作"},
      {id: "7", num: "07", chapter: "序列的概念"},
      {id: "8", num: "08", chapter: "字符串的定义和使用"},
      {id: "9", num: "09", chapter: "字符串的常用操作"},
      {id: "10", num: "10", chapter: "元组的定义和常用操作"},      
    ],
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
    // var that = this;
    console.log(this);
    this.setData({
      courseCatalog: this.data.courseCatalog
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})