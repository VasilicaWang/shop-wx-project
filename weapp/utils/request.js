"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// Http这个类主要是用来存放发送请求的基本函数
var Http =
/*#__PURE__*/
function () {
  function Http() {
    _classCallCheck(this, Http);
  }

  _createClass(Http, null, [{
    key: "request",
    // 设置默认参数值（ES6）
    value: function request(url) {
      var method = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'GET';
      var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return new Promise(function (resolve, reject) {
        wx.showLoading({
          title: '加载中...',
          mask: true
        });
        wx.request({
          url: url,
          method: method,
          data: data,
          success: function success(res) {
            wx.hideLoading();
            resolve(res);
          },
          fail: function fail(err) {
            wx.showToast({
              title: '请求失败',
              icon: 'none',
              duration: 2000
            });
            reject(err);
          }
        });
      });
    }
  }, {
    key: "get",
    value: function get(url, data) {
      return this.request(url, 'GET', data);
    }
  }]);

  return Http;
}();

exports["default"] = Http;