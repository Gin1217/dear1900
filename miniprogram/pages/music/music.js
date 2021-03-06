const MAX_LIMIT=15
const db=wx.cloud.database()


Page({

  /**
   * 页面的初始数据
   */
  data: {
      imgUrls:[{
        url:'http://p1.music.126.net/q5rKcBx9Y0V37DsUSaQKXg==/109951165664695730.jpg?imageView&quality=89'
      },
      {
        url:'http://p1.music.126.net/WOoIZuva_umxxzYOvWINLA==/109951165664707565.jpg?imageView&quality=89'
      },
      {
        url:'http://p1.music.126.net/UdSM2BmqY_h_t9HAOzb5dQ==/109951165664710664.jpg?imageView&quality=89'
      },
      {
        url:'http://p1.music.126.net/9Ayx-EeCnuLRWKTcIhGB6g==/109951165664742856.jpg?imageView&quality=89'
      },
      {
        url:'http://p1.music.126.net/Z90NF2dHuBYrV6x-U9jJJQ==/109951165664719544.jpg?imageView&quality=89'
      },
      {
        url:'http://p1.music.126.net/j0gp3gBDRRoqIXxAs0v7oA==/109951165664720877.jpg?imageView&quality=89'
      },
      {
        url:'http://p1.music.126.net/C9I9GxpvRX7nCZyXNBeqOw==/109951165664694558.jpg?imageView&quality=89'
      },
      {
        url:'http://p1.music.126.net/qGmEr900RHhdTCTUxSXc_A==/109951165672845446.jpg?imageView&quality=89'
      }
    ],
      playlist:[]
    //playlist:[
    //   {
    //   "id":"1001",
    //   "playCount":"35000000000",
    //   "name":"你可以永远Believe in Sodagreen",
    //   "picUrl":"http://p4.music.126.net/g-dOmqfNwYLZhMIfN-pi8w==/3200678348535086.jpg?param=140y140"
    // },

    // {
    //   "id":"1002",
    //   "playCount":"180000000",
    //   "name":"Light the Night",
    //   "picUrl":"http://p4.music.126.net/WmfWKnTbZJasIn59BJMPLA==/109951165324021457.jpg?param=140y140"
    // },

    // {
    //   "id":"1003",
    //   "playCount":"24000",
    //   "name":"孤寡孤寡孤寡",
    //   "picUrl":"http://p4.music.126.net/4jKPv-lCyBbejFXb6-ypug==/109951165426754855.jpg?param=140y140"
    // },

    // {
    //   "id":"1004",
    //   "playCount":"1380543320",
    //   "name":"Take me OuterSpace",
    //   "picUrl":"http://p4.music.126.net/g7XhdPwotR4_jk1YIPc_tg==/109951165510465517.jpg?param=140y140"
    // },

    // {
    //   "id":"1005",
    //   "playCount":"200432234282",
    //   "name":"于是你不停散落",
    //   "picUrl":"http://p2.music.126.net/PJylNWy_2-jI7LRgQ2Cm6w==/109951165649129522.jpg?param=140y140"
    // },

    // {
    //   "id":"1006",
    //   "playCount":"1604326763",
    //   "name":"今天也要加油鸭",
    //   "picUrl":"http://p3.music.126.net/H1hHRAXzXQC0aKncahC-jw==/109951165420834103.jpg?param=140y140"
    // }
  //]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this._getPlaylist()
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
    this.setData({
      playlist:[]
    })
    this._getPlaylist()
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    this._getPlaylist()
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {},

  _getPlaylist(){
    wx.showLoading({
      title: '加载中',
    })
    wx.cloud.callFunction({
      name:'music',
      data:{
        start:this.data.playlist.length,
        count:MAX_LIMIT,
        $url:'playlist'
      }
    }).then((res)=>{
      console.log(res)
      this.setData({
        playlist:this.data.playlist.concat(res.result.data)
      })
      wx.stopPullDownRefresh()
      wx.hideLoading()
    })
  },

})