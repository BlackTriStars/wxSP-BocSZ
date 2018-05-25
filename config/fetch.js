import error from '../utils/error/error.js'

let baseUrl = config.apiPrefix;

function sleep(time) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      resolve();
    }, time)
  })
}

export default (url = '', data = {}, type = 'POST', header = {}) => {
  return new Promise(function (resolve, reject) {
    type = type.toUpperCase();
    let urlprefix = url;
    if (!/http/.test(url)) {
      url = baseUrl + url;
    }
    // console.log(config);
    //测试异常
    // if (urlprefix == "/common/text2speech"){
    //   reject('调用接口失败');
    //   error.show(urlprefix);
    //   return;
    // }
    let requestConfig = {
      url: url,
      data: data,
      header: Object.assign({
        'content-type': 'application/x-www-form-urlencoded',
        'authtoken': wx.getStorageSync('authtoken')
      }, header),
      method: type,
      success: function (res) {
        console.log('request success' + res.data);
        if (res.data.code == CODE.TIMEOUT) {
          wx.showToast({
            title: res.data.message,
            icon: 'none',
            duration: 1000,
            mask: true
          })
          sleep(1000).then(() => {
            wx.redirectTo({
              url: '/pages/login/login'
            });
          });
        } else {
          resolve(res.data);
          error.hide();
        }

      },
      fail: function (e) {
        reject('调用接口失败');
        error.show(urlprefix);
      },
      complete: function (e) {
        console.log('request end' + urlprefix);
        wx.hideLoading()
      }
    }
    console.log('request start');
    wx.request(requestConfig);
  })

}