"use strict";

var _regeneratorRuntime2 = _interopRequireDefault(require('./../vendor.js')(2));

var _core = _interopRequireDefault(require('./../vendor.js')(0));

var _HomeReq = _interopRequireDefault(require('./../api/HomeReq.js'));

var _commonFun = require('./../common/commonFun.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

_core["default"].page({
  data: {
    swiperList: [],
    cateList: [],
    floorList: []
  },
  onLoad: function onLoad() {
    // wx.request({
    //   url: 'https://www.uinav.com/api/public/v1/home/swiperdata',
    //   success: (res) => {
    //     this.swiperList = res.data.message
    //   }
    // })
    this.getSwipeList();
    this.getCateList();
    this.getFloorData();
  },
  onShow: function onShow() {
    (0, _commonFun.getGoodsNum)();
  },
  methods: {
    getSwipeList: function () {
      var _getSwipeList = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee() {
        var _ref, res;

        return _regeneratorRuntime2["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _HomeReq["default"].getSwiper();

              case 2:
                _ref = _context.sent;
                res = _ref.data;

                if (!(res.meta.status !== 200)) {
                  _context.next = 6;
                  break;
                }

                return _context.abrupt("return", _core["default"].baseToast());

              case 6:
                this.swiperList = res.message;

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getSwipeList() {
        return _getSwipeList.apply(this, arguments);
      }

      return getSwipeList;
    }(),
    getCateList: function () {
      var _getCateList = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee2() {
        var _ref2, res;

        return _regeneratorRuntime2["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _HomeReq["default"].getCate();

              case 2:
                _ref2 = _context2.sent;
                res = _ref2.data;

                if (!(res.meta.status !== 200)) {
                  _context2.next = 6;
                  break;
                }

                return _context2.abrupt("return", _core["default"].baseToast());

              case 6:
                this.cateList = res.message;

              case 7:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getCateList() {
        return _getCateList.apply(this, arguments);
      }

      return getCateList;
    }(),
    getFloorData: function () {
      var _getFloorData = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee3() {
        var _ref3, res;

        return _regeneratorRuntime2["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return _HomeReq["default"].getFloor();

              case 2:
                _ref3 = _context3.sent;
                res = _ref3.data;

                if (!(res.meta.status !== 200)) {
                  _context3.next = 6;
                  break;
                }

                return _context3.abrupt("return", _core["default"].baseToast());

              case 6:
                this.floorList = res.message;

              case 7:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function getFloorData() {
        return _getFloorData.apply(this, arguments);
      }

      return getFloorData;
    }()
  }
}, {info: {"components":{"searchCom":{"path":"..\\components\\searchCom"}},"on":{}}, handlers: {}, models: {}, refs: undefined });