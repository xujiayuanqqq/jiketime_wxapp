const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTab: 0,
    chooseClass: [],
    videoClass: [],
    weClass: []
  },
  clickTab: function(e) {
    var index = e.currentTarget.dataset.index
    // console.log(index);
    this.setData({
      currentTab: index
    });
  },
  learnMore: function(e) {
    var index = e.currentTarget.dataset.index;
    // console.log(index);
    wx.navigateTo({
      url: '../items/detail/detail?index=' + index,
    })
  },
  watchMore: function(e) {
    var index = e.currentTarget.dataset.index;    
    wx.navigateTo({
      url: '../items/video/video?index=' + index,
    })
  },
  readMore: function(e) {
    var index = e.currentTarget.dataset.index + 16;
    wx.navigateTo({
      url: '../items/detail/detail?index=' + index,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      currentTab: 0,
      chooseClass: app.globalData.chooseClass,
      videoClass: app.globalData.videoClass,
      weClass: app.globalData.weClass
    })
  },    

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    wx.request({
      complete: function(res) {
        wx.stopPullDownRefresh();
      }
    })
  }
})