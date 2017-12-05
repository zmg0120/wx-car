// pages/type/type.js
const parseToQuery = require("../../utils/ToQuery.js");

Page({
  data: {
    productInfo: [
      {
        "id": "001",
        "type" :"718",
        "url": "/public/cars/1.jpg"
      },
      {
        "id": "002",
        "type": "911",
        "url": "/public/cars/2.jpg"
      },
      {
        "id": "003",
        "type": "520",
        "url": "/public/cars/3.jpg"
      },
    ],
    productInfos: []
  },

  toProductDetail: function(event){
    console.log(event); 
    const data = event.currentTarget.dataset;
    console.log(data);
    const query = parseToQuery(data);
    console.log(query);
    
    wx.navigateTo({
      url: "../productDetail/car?" + query 
    })
  },
  

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: "http://192.168.1.210:3000/manage/product",
      success: (res) => {
        if (res.data.OK) {
          this.setData({
            productInfos: res.data.docs 
          })
        }
      }
    });
    console.log("type onLoad");
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log("type onReady");
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log("type onShow");
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log("type onHide");
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log("type onUnload");
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