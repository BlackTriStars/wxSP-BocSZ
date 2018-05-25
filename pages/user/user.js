// pages/user/user.js
const app = getApp()
import config from '../../config/constant.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {
      detail: [{
          title: '已学课程:',
          value: 25
        },
        {
          title: '我的解封:',
          value: 36
        },
        {
          title: '我的排名',
          value: 12
        }

      ]
    },
    list: [
      {
      title: '我的收藏',
      name: 'collection',
      img: '',
      num: 12
      }, {
        title: '我的学习',
        name: 'myStudy',
        img: '',
        num: 109
      }, {
        title: '我的积分',
        name: 'integral',
        img: '',
        num: 36
      }, {
        title: '我的问卷',
        name: 'survey',
        img: '',
        num: 1
      }, {
        title: '培训中心介绍',
        name: 'introduce',
        img: '',
        num: 0
      }
    ],
    imgSrc: config.imgSrc,
    user:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (app.globalData.userInfo) {
      this.setData({
        user: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          user: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          console.log(res)
          app.globalData.userInfo = res.userInfo
          this.setData({
            user: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
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