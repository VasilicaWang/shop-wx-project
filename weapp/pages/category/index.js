"use strict";

var _regeneratorRuntime2 = _interopRequireDefault(require('./../../vendor.js')(2));

var _core = _interopRequireDefault(require('./../../vendor.js')(0));

var _cateReq = _interopRequireDefault(require('./../../api/cateReq.js'));

var _commonFun = require('./../../common/commonFun.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

_core["default"].page({
  data: {
    cateList: [],
    activeKey: 0,
    sideList: []
  },
  onLoad: function onLoad() {
    this.getCateList();
  },
  onShow: function onShow() {
    (0, _commonFun.getGoodsNum)();
  },
  methods: {
    getCateList: function () {
      var _getCateList = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee() {
        var _ref, res;

        return _regeneratorRuntime2["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _cateReq["default"].getCate();

              case 2:
                _ref = _context.sent;
                res = _ref.data;

                if (!(res.meta.status !== 200)) {
                  _context.next = 6;
                  break;
                }

                return _context.abrupt("return", _core["default"].baseToast());

              case 6:
                this.cateList = res.message;
                this.sideList = res.message[0].children;

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getCateList() {
        return _getCateList.apply(this, arguments);
      }

      return getCateList;
    }(),
    getIndex: function getIndex(i) {
      this.sideList = this.cateList[i].children;
      this.activeKey = i;
    },
    jumpToList: function jumpToList(query) {
      wx.navigateTo({
        url: "/pages/goods_list?query=".concat(query)
      });
    }
  }
}, {info: {"components":{"searchCom":{"path":"..\\..\\components\\searchCom"},"van-sidebar":{"path":"..\\..\\static\\vant\\sidebar\\index"},"van-sidebar-item":{"path":"..\\..\\static\\vant\\sidebar-item\\index"}},"on":{"3-0":["tap"]}}, handlers: {'3-0': {"tap": function proxy (index) {
    
    var _vm=this;
      return (function () {
        _vm.getIndex(index);
      })();
    
  }},'3-1': {"tap": function proxy (miniItem) {
    
    var _vm=this;
      return (function () {
        _vm.jumpToList(miniItem.cat_name);
      })();
    
  }}}, models: {}, refs: undefined }, {info: {"components":{"searchCom":{"path":"..\\..\\components\\searchCom"},"van-sidebar":{"path":"..\\..\\static\\vant\\sidebar\\index"},"van-sidebar-item":{"path":"..\\..\\static\\vant\\sidebar-item\\index"}},"on":{"3-0":["tap"]}}, handlers: {'3-0': {"tap": function proxy (index) {
    
    var _vm=this;
      return (function () {
        _vm.getIndex(index);
      })();
    
  }},'3-1': {"tap": function proxy (miniItem) {
    
    var _vm=this;
      return (function () {
        _vm.jumpToList(miniItem.cat_name);
      })();
    
  }}}, models: {}, refs: undefined }, {info: {"components":{"searchCom":{"path":"..\\..\\components\\searchCom"},"van-sidebar":{"path":"..\\..\\static\\vant\\sidebar\\index"},"van-sidebar-item":{"path":"..\\..\\static\\vant\\sidebar-item\\index"}},"on":{"3-0":["tap"]}}, handlers: {'3-0': {"tap": function proxy (index) {
    
    var _vm=this;
      return (function () {
        _vm.getIndex(index);
      })();
    
  }},'3-1': {"tap": function proxy (miniItem) {
    
    var _vm=this;
      return (function () {
        _vm.jumpToList(miniItem.cat_name);
      })();
    
  }}}, models: {}, refs: undefined });