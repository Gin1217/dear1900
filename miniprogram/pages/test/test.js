// pages/test/test.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      openid:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
//var let const
//for(var i=0;i<5;i++){

//}
// console.log(i)
// const a=3

//对象、数组、字符串
//const obj={}
//const arr=[]
//const str=''

//const name='gin'
//const person={
//  name:name,
  //属性值和属性名一样时可以简写为name
  //属性可以简写的话，按照编码规范要放到上面
 // age:30,
  //最后一个属性后面也加,
// }

    wx.cloud.callFunction( {
        name:'login'
      }).then((res) =>{
        this.setData({
openid:res.result.openid
        })
        console.log(JSON.stringify(res.result))
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