// pages/jiketime/items/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTab: 0,
    actionSheetHidden: true,
    actionSheetItems: [
      {bindtap:'Menu1',txt:'分享给好友'},
      {bindtap:'Menu2',txt:'生成分享卡片'},
    ],
    menu: ''
  },
  clickTab: function(e) {
    var index = e.currentTarget.dataset.index 
    this.setData({
      currentTab: index
    });
  },
  actionSheetTap: function() {
    this.setData({
      actionSheetHidden:!this.data.actionSheetHidden
    })
  },
  actionSheetbindchange: function() {
    this.setData({
      actionSheetHidden:!this.data.actionSheetHidden
    })
  },
  bindMenu1: function() {
    this.setData({
      menu:1,
      actionSheetHidden:!this.data.actionSheetHidden
    })
  },
  bindMenu2: function() {
    this.setData({
      menu:2,
      actionSheetHidden:!this.data.actionSheetHidden
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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