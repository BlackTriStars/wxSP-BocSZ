// components/header/header.js
import { getCurrentPageUrl } from '../../utils/util.js'
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    bgColor: {
      type: String,
      value: '#0181ca'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },
  /**
   * 组件的方法列表
   */
  methods: {
    goHome(){
      wx.redirectTo({
        url: '/'
      })
    },
    reload(){
      wx.redirectTo({
        url: getCurrentPageUrl()
      })
    }
  }
})
