"use strict";

var _regeneratorRuntime2 = _interopRequireDefault(require('./../vendor.js')(2));

var _core = _interopRequireDefault(require('./../vendor.js')(0));

var _goods = _interopRequireDefault(require('./../api/goods.js'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

_core["default"].page({
  data: {
    goodsId: null,
    goodsDetail: {},
    activeTab: 'gDetail',
    imgUrls: [],
    cartGoodsList: [],
    goodsNum: 1
  },
  onLoad: function onLoad(e) {
    this.goodsId = +e.id;
    this.getGoodsDetail();
    this.cartGoodsList = wx.getStorageSync('cartGoodsList') || [];
  },
  methods: {
    getGoodsDetail: function () {
      var _getGoodsDetail = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee() {
        var _this = this;

        var _ref, res;

        return _regeneratorRuntime2["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _goods["default"].goodsDetail(this.goodsId);

              case 2:
                _ref = _context.sent;
                res = _ref.data;

                if (!(res.meta.status !== 200)) {
                  _context.next = 6;
                  break;
                }

                return _context.abrupt("return", _core["default"].baseToast());

              case 6:
                res.message.goods_introduce = res.message.goods_introduce.replace(/<img/gi, '<img style="display: block"');
                this.goodsDetail = res.message;
                this.goodsDetail.pics.map(function (item) {
                  _this.imgUrls.push(item.pics_big_url);
                });

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getGoodsDetail() {
        return _getGoodsDetail.apply(this, arguments);
      }

      return getGoodsDetail;
    }(),
    previewImg: function previewImg(imgUrl) {
      wx.previewImage({
        current: imgUrl,
        // 当前显示图片的http链接
        urls: this.imgUrls // 需要预览的图片http链接列表

      });
    },
    changeNum: function changeNum(e) {
      // console.log(e)
      this.goodsNum = e.$wx.detail; // console.log(this.goodsNum)
    },
    addCart: function addCart() {
      var goodsInfo = {
        goodsId: this.goodsDetail.goods_id,
        selectStatus: true,
        smallImg: this.goodsDetail.goods_small_logo,
        goodsTitle: this.goodsDetail.goods_name,
        goodsPrice: this.goodsDetail.goods_price,
        goodsNum: this.goodsNum
      };
      this.cartGoodsList = wx.getStorageSync('cartGoodsList') || [];
      var idx = this.cartGoodsList.findIndex(function (item) {
        return item.goodsId === goodsInfo.goodsId;
      });

      if (idx !== -1) {
        this.cartGoodsList[idx].goodsNum += this.goodsNum;
      } else {
        this.cartGoodsList.push(goodsInfo);
      }

      wx.setStorageSync('cartGoodsList', this.cartGoodsList);
      this.goodsNum = 1;
      wx.showToast({
        title: '加入购物车成功',
        icon: 'success',
        duration: 2000,
        mask: true
      });
    }
  },
  computed: {
    totalNum: function totalNum() {
      var total = 0;
      this.cartGoodsList.map(function (item) {
        total += item.goodsNum;
      });
      return total;
    }
  }
}, {info: {"components":{"van-stepper":{"path":"..\\static\\vant\\stepper\\index"},"van-tabs":{"path":"..\\static\\vant\\tabs\\index"},"van-tab":{"path":"..\\static\\vant\\tab\\index"},"van-goods-action":{"path":"..\\static\\vant\\goods-action\\index"},"van-goods-action-icon":{"path":"..\\static\\vant\\goods-action-icon\\index"},"van-goods-action-button":{"path":"..\\static\\vant\\goods-action-button\\index"},"van-row":{"path":"..\\static\\vant\\row\\index"},"van-col":{"path":"..\\static\\vant\\col\\index"}},"on":{"8-1":["change"],"8-2":["tap"]}}, handlers: {'8-0': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.previewImg(item.pics_big_url);
      })();
    
  }},'8-1': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.changeNum($event);
      })();
    
  }},'8-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.addCart($event);
      })();
    
  }}}, models: {}, refs: undefined }, {info: {"components":{"van-stepper":{"path":"..\\static\\vant\\stepper\\index"},"van-tabs":{"path":"..\\static\\vant\\tabs\\index"},"van-tab":{"path":"..\\static\\vant\\tab\\index"},"van-goods-action":{"path":"..\\static\\vant\\goods-action\\index"},"van-goods-action-icon":{"path":"..\\static\\vant\\goods-action-icon\\index"},"van-goods-action-button":{"path":"..\\static\\vant\\goods-action-button\\index"},"van-row":{"path":"..\\static\\vant\\row\\index"},"van-col":{"path":"..\\static\\vant\\col\\index"}},"on":{"8-1":["change"],"8-2":["tap"]}}, handlers: {'8-0': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.previewImg(item.pics_big_url);
      })();
    
  }},'8-1': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.changeNum($event);
      })();
    
  }},'8-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.addCart($event);
      })();
    
  }}}, models: {}, refs: undefined }, {info: {"components":{"van-stepper":{"path":"..\\static\\vant\\stepper\\index"},"van-tabs":{"path":"..\\static\\vant\\tabs\\index"},"van-tab":{"path":"..\\static\\vant\\tab\\index"},"van-goods-action":{"path":"..\\static\\vant\\goods-action\\index"},"van-goods-action-icon":{"path":"..\\static\\vant\\goods-action-icon\\index"},"van-goods-action-button":{"path":"..\\static\\vant\\goods-action-button\\index"},"van-row":{"path":"..\\static\\vant\\row\\index"},"van-col":{"path":"..\\static\\vant\\col\\index"}},"on":{"8-1":["change"],"8-2":["tap"]}}, handlers: {'8-0': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.previewImg(item.pics_big_url);
      })();
    
  }},'8-1': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.changeNum($event);
      })();
    
  }},'8-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.addCart($event);
      })();
    
  }}}, models: {}, refs: undefined });