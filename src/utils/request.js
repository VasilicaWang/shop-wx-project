
// Http这个类主要是用来存放发送请求的基本函数
export default class Http {
  // 设置默认参数值（ES6）
  static request(url, method = 'GET', data = {}) {
    return new Promise((resolve, reject) => {
      wx.showLoading({
        title: '加载中...',
        mask: true
      })
      wx.request({
        url: url,
        method: method,
        data: data,
        success: (res) => {
          wx.hideLoading()
          resolve(res)
        },
        fail: (err) => {
          wx.showToast({
            title: '请求失败',
            icon: 'none',
            duration: 2000
          })
          reject(err)
        }
      })
    })
  }
  static get(url, data) {
    return this.request(url, 'GET', data)
  }
}
