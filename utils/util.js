/*获取当前页url*/
const getCurrentPageUrl=()=> {
  var pages = getCurrentPages() 
  var currentPage = pages[pages.length - 1]
  var url = currentPage.route
  return url
}

/*获取当前页带参数的url*/
const getCurrentPageUrlWithArgs=()=> {
  var pages = getCurrentPages()
  var currentPage = pages[pages.length - 1]
  var url = currentPage.route
  var options = currentPage.options

  //拼接url的参数
  var urlWithArgs = url + '?'
  for (var key in options) {
    var value = options[key]
    urlWithArgs += key + '=' + value + '&'
  }
  urlWithArgs = urlWithArgs.substring(0, urlWithArgs.length - 1)

  return urlWithArgs
}


module.exports = {
  getCurrentPageUrl,
  getCurrentPageUrlWithArgs
}