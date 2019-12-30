"use strict";

var _regeneratorRuntime2 = _interopRequireDefault(require('./../vendor.js')(2));

var _core = _interopRequireDefault(require('./../vendor.js')(0));

var _goods = _interopRequireDefault(require('./../api/goods.js'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

_core["default"].page({
  data: {
    obj: {
      query: '',
      cid: '',
      pagenum: 1,
      pagesize: 10
    },
    goodsList: [],
    total: 0,
    floorstatus: false,
    hasMore: true
  },
  onLoad: function onLoad(e) {
    console.log(e);
    this.obj.query = e.query || '';
    this.obj.cid = e.cid || '';
    this.getGoodsList();
  },
  methods: {
    getGoodsList: function () {
      var _getGoodsList = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee() {
        var _ref, res;

        return _regeneratorRuntime2["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _goods["default"].getGoods(this.obj);

              case 2:
                _ref = _context.sent;
                res = _ref.data;

                if (!(res.meta.status !== 200)) {
                  _context.next = 6;
                  break;
                }

                return _context.abrupt("return", _core["default"].baseToast());

              case 6:
                this.goodsList = [].concat(_toConsumableArray(this.goodsList), _toConsumableArray(res.message.goods));
                this.obj.pagenum++;
                this.total = res.message.total;
                wx.stopPullDownRefresh();

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getGoodsList() {
        return _getGoodsList.apply(this, arguments);
      }

      return getGoodsList;
    }(),
    goTop: function goTop(e) {
      // 一键回到顶部
      if (wx.pageScrollTo) {
        wx.pageScrollTo({
          scrollTop: 0
        });
      } else {
        wx.showModal({
          title: '提示',
          content: '当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。'
        });
      }
    },
    jumpToDetail: function jumpToDetail(id) {
      wx.navigateTo({
        url: "/pages/goodsDetail?id=".concat(id)
      });
    }
  },
  onPullDownRefresh: function onPullDownRefresh() {
    this.obj.pagenum = 1;
    this.goodsList = [];
    this.hasMore = true;
    this.getGoodsList();
  },
  onReachBottom: function onReachBottom() {
    if (this.goodsList.length < this.total) {
      this.getGoodsList();
    } else {
      this.hasMore = false;
      wx.showToast({
        title: '你已经触碰到我的底线了',
        icon: 'none',
        duration: 2000
      });
    }
  },
  onPageScroll: function onPageScroll(e) {
    // console.log(e)
    if (e.scrollTop > 100) {
      this.floorstatus = true;
    } else {
      this.floorstatus = false;
    }
  }
}, {info: {"components":{"van-icon":{"path":"..\\static\\vant\\icon\\index"},"van-divider":{"path":"..\\static\\vant\\divider\\index"},"van-card":{"path":"..\\static\\vant\\card\\index"}},"on":{"7-0":["tap"]}}, handlers: {'7-0': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.jumpToDetail(item.goods_id);
      })();
    
  }},'7-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.goTop($event);
      })();
    
  }}}, models: {}, refs: undefined });