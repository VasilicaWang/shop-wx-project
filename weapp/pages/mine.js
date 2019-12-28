"use strict";

var _regeneratorRuntime2 = _interopRequireDefault(require('./../vendor.js')(2));

var _core = _interopRequireDefault(require('./../vendor.js')(0));

var _login = _interopRequireDefault(require('./../api/login.js'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

_core["default"].page({
  data: {
    userInfo: {
      'user_id': 12,
      'user_email_code': null,
      'is_active': null,
      'user_sex': '男',
      'user_qq': '',
      'user_tel': '',
      'user_xueli': '本科',
      'user_hobby': '',
      'user_introduce': null,
      'create_time': 1525402223,
      'update_time': 1525402223,
      'token': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjEyLCJpYXQiOjE1MjU0MDIyMjMsImV4cCI6MTUyNTQ4ODYyM30.g-4GtEQNPwT_Xs0Pq7Lrco_9DfHQQsBiOKZerkO-O-o'
    }
  },
  methods: {
    bindGetUserInfo: function bindGetUserInfo() {
      wx.getUserInfo({
        success: function success(res) {
          wx.login({
            success: function () {
              var _success = _asyncToGenerator(
              /*#__PURE__*/
              _regeneratorRuntime2["default"].mark(function _callee(arg) {
                var params, _ref, data;

                return _regeneratorRuntime2["default"].wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        console.log(arg);

                        if (!arg.code) {
                          _context.next = 11;
                          break;
                        }

                        params = {
                          code: arg.code,
                          encryptedData: res.encryptedData,
                          iv: res.iv,
                          rawData: res.rawData,
                          signature: res.signature
                        };
                        console.log(params);
                        _context.next = 6;
                        return _login["default"].login(params);

                      case 6:
                        _ref = _context.sent;
                        data = _ref.data;
                        console.log(data);
                        _context.next = 12;
                        break;

                      case 11:
                        console.log('登录失败！' + res.errMsg);

                      case 12:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee);
              }));

              function success(_x) {
                return _success.apply(this, arguments);
              }

              return success;
            }()
          });
        },
        fail: function fail(err) {
          console.log(err);
        }
      });
    }
  },
  computed: {
    isLogin: function isLogin() {
      return Object.keys(this.userInfo).length !== 0;
    }
  }
}, {info: {"components":{"van-icon":{"path":"..\\static\\vant\\icon\\index"}},"on":{}}, handlers: {'5-1': {"getuserinfo": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindGetUserInfo($event);
      })();
    
  }}}, models: {}, refs: undefined });