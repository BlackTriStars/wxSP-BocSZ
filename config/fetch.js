import config from './constant';
let baseUrl = config.apiPrefix;

export default (url = '', data = {}, type = 'POST', header = {}) => {
  return new Promise(function (resolve, reject) {
    type = type.toUpperCase();
    let urlprefix = url;
    if (!/http/.test(url)) {
      url = baseUrl + url;
    }
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

      }, header),
      method: type,
      success: function (res) {
        resolve(res.data);
        console.log('request success' + res.data);
      },
      fail: function (e) {
        reject('调用接口失败');
      },
      complete: function (e) {
        console.log('request end' + urlprefix);
      }
    }
    console.log('request start');
    wx.request(requestConfig);
  })

}
