"use strict";

var _regeneratorRuntime2 = _interopRequireDefault(require('./../vendor.js')(2));

var _core = _interopRequireDefault(require('./../vendor.js')(0));

var _searchReq = _interopRequireDefault(require('./../api/searchReq.js'));

var _dialog = _interopRequireDefault(require('./../static/vant/dialog/dialog.js'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

_core["default"].page({
  data: {
    // 推荐列表
    qsearch: [],
    searchValue: '',
    pageHistList: [],
    timer: null
  },
  onLoad: function onLoad() {
    this.pageHistList = wx.getStorageSync('histList') || [];
  },
  methods: {
    getQsearchList: function () {
      var _getQsearchList = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee() {
        var _ref, res;

        return _regeneratorRuntime2["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _searchReq["default"].getQsearch(this.searchValue);

              case 2:
                _ref = _context.sent;
                res = _ref.data;

                if (!(res.meta.status !== 200)) {
                  _context.next = 6;
                  break;
                }

                return _context.abrupt("return", _core["default"].baseToast());

              case 6:
                this.qsearch = res.message;

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getQsearchList() {
        return _getQsearchList.apply(this, arguments);
      }

      return getQsearchList;
    }(),
    onChange: function onChange(event) {
      var _this = this;

      clearTimeout(this.timer);
      this.timer = setTimeout(function () {
        _this.searchValue = event.$wx.detail.trim();

        if (_this.searchValue) {
          _this.getQsearchList();
        } else {
          _this.qsearch = [];
          _this.searchValue = '';
        }
      }, 800);
    },
    onSearch: function onSearch() {
      if (this.searchValue.trim().length !== 0) {
        this.pageHistList = wx.getStorageSync('histList') || [];

        if (!this.pageHistList.includes(this.searchValue)) {
          this.pageHistList.unshift(this.searchValue);
          wx.setStorageSync('histList', this.pageHistList);
        }

        wx.navigateTo({
          url: "/pages/goods_list?query=".concat(this.searchValue)
        });
        this.searchValue = '';
        this.qsearch = [];
      }
    },
    onCancel: function onCancel() {
      this.searchValue = '';
      this.qsearch = [];
    },
    clearHistory: function clearHistory() {
      var _this2 = this;

      console.log('object');

      _dialog["default"].confirm({
        title: '确认',
        message: '确认删除历史记录吗？'
      }).then(function () {
        wx.removeStorageSync('histList');
        _this2.pageHistList = [];
      });
    },
    histJump: function histJump(arg) {
      wx.navigateTo({
        url: "/pages/goods_list?query=".concat(arg)
      });
    },
    jumpDetail: function jumpDetail(id) {
      wx.navigateTo({
        url: "/pages/goodsDetail?id=".concat(id)
      });
      this.searchValue = '';
      this.qsearch = [];
    }
  },
  computed: {
    showHis: function showHis() {
      return this.searchValue.trim().length === 0;
    }
  }
}, {info: {"components":{"van-icon":{"path":"..\\static\\vant\\icon\\index"},"van-search":{"path":"..\\static\\vant\\search\\index"},"van-cell":{"path":"..\\static\\vant\\cell\\index"},"van-cell-group":{"path":"..\\static\\vant\\cell-group\\index"},"van-divider":{"path":"..\\static\\vant\\divider\\index"},"van-tag":{"path":"..\\static\\vant\\tag\\index"},"van-dialog":{"path":"..\\static\\vant\\dialog\\index"}},"on":{"6-0":["change","search","cancel"],"6-3":["tap"],"6-4":["tap"],"6-5":["tap"]}}, handlers: {'6-0': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onChange($event);
      })();
    
  }, "search": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onSearch($event);
      })();
    
  }, "cancel": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onCancel($event);
      })();
    
  }},'6-3': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.clearHistory($event);
      })();
    
  }},'6-4': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.histJump(item);
      })();
    
  }},'6-5': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.jumpDetail(item.goods_id);
      })();
    
  }}}, models: {}, refs: undefined }, {info: {"components":{"van-icon":{"path":"..\\static\\vant\\icon\\index"},"van-search":{"path":"..\\static\\vant\\search\\index"},"van-cell":{"path":"..\\static\\vant\\cell\\index"},"van-cell-group":{"path":"..\\static\\vant\\cell-group\\index"},"van-divider":{"path":"..\\static\\vant\\divider\\index"},"van-tag":{"path":"..\\static\\vant\\tag\\index"},"van-dialog":{"path":"..\\static\\vant\\dialog\\index"}},"on":{"6-0":["change","search","cancel"],"6-3":["tap"],"6-4":["tap"],"6-5":["tap"]}}, handlers: {'6-0': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onChange($event);
      })();
    
  }, "search": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onSearch($event);
      })();
    
  }, "cancel": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onCancel($event);
      })();
    
  }},'6-3': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.clearHistory($event);
      })();
    
  }},'6-4': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.histJump(item);
      })();
    
  }},'6-5': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.jumpDetail(item.goods_id);
      })();
    
  }}}, models: {}, refs: undefined }, {info: {"components":{"van-icon":{"path":"..\\static\\vant\\icon\\index"},"van-search":{"path":"..\\static\\vant\\search\\index"},"van-cell":{"path":"..\\static\\vant\\cell\\index"},"van-cell-group":{"path":"..\\static\\vant\\cell-group\\index"},"van-divider":{"path":"..\\static\\vant\\divider\\index"},"van-tag":{"path":"..\\static\\vant\\tag\\index"},"van-dialog":{"path":"..\\static\\vant\\dialog\\index"}},"on":{"6-0":["change","search","cancel"],"6-3":["tap"],"6-4":["tap"],"6-5":["tap"]}}, handlers: {'6-0': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onChange($event);
      })();
    
  }, "search": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onSearch($event);
      })();
    
  }, "cancel": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onCancel($event);
      })();
    
  }},'6-3': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.clearHistory($event);
      })();
    
  }},'6-4': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.histJump(item);
      })();
    
  }},'6-5': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.jumpDetail(item.goods_id);
      })();
    
  }}}, models: {}, refs: undefined });