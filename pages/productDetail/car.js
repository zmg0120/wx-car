// pages/productDetail/car.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    car: {},
    indicatorDots: true,
    autoplay: true,
    interval: 1000,
    duration: 1000
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: "http://192.168.1.210:3000/manage/product/" + options.productId,
      success: (res) => {
        if (res.data.OK) {
          this.setData({
            id: options.productId,
            car: res.data.doc
          })
        }
      }      
    })
  },     
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log("car onReady");
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log("car onShow");
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log("car onHide");
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log("car onUnload");
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