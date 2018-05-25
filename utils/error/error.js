class Error{
  constructor(){
    this.instance =null;
    console.log('error obj init complete');
  }

  static getInstance(){
    if(!this.instance){
      this.instance = new Error();
    }
    return this.instance;
  }

  hide(){
    let pages = getCurrentPages()
    let currentPage = pages[pages.length - 1]
    console.log(currentPage.data.error);
    currentPage.setData({
      error: false
    })  
  }
  
  //  全局异常处理
  show (str) {

  }

  tip (str){
    wx.hideLoading();
    wx.showModal({
      title: '提示',
      content: str,
      showCancel: false
    })
  }

  refresh () {
    wx.hideLoading();
    let pages = getCurrentPages()
    let currentPage = pages[pages.length - 1]
    console.log(currentPage.data.error);
    currentPage.setData({
      error: true
    })
  }
}