// pages/jiketime/class/class.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTab: 0
  },
  clickTab: function(e) {
    var index = e.currentTarget.dataset.index
    // console.log(index);
    this.setData({
      currentTab: index
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      currentTab: 0
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
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    wx.request({
      url: '',
      data: {},
      method: 'GET',
      success: function(res) {

      },
      fail: function(res) {

      },
      complete: function(res) {
        wx.stopPullDownRefresh();
      }
    })
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