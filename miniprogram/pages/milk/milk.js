// miniprogram/pages/milk/milk.js
const {
  $Message
} = require('../../lib/iview/dist/base/index');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: '',
    address: '',
    phoneNumber: ''
  },
  commitForm() {
    $Message({
      type: 'success',
      content: '恭喜您中奖失败'
    })
    setTimeout(() => {
      wx.navigateBack({
        url: '../../pages/index/index',
      })
    }, 2000)


  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})