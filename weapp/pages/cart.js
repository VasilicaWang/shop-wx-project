"use strict";

var _core = _interopRequireDefault(require('./../vendor.js')(0));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_core["default"].page({
  data: {
    addressInfo: {},
    cartGoodsList: []
  },
  onShow: function onShow() {
    this.cartGoodsList = wx.getStorageSync('cartGoodsList');
    /* 自：页面跳转
      let addressInfoList = wx.getStorageSync('addressInfo') || []
      if (addressInfoList.length > 0) {
        let idx = addressInfoList.findIndex(item => item.defaultAddress === true)
        if (idx !== -1) {
          this.addressInfo = addressInfoList[idx]
        } else {
          this.addressInfo = addressInfoList[0]
        }
    } */

    this.addressInfo = wx.getStorageSync('userAddressInfo') || {};
  },
  watch: {
    cartGoodsList: {
      handler: function handler(newval) {
        wx.setStorageSync('cartGoodsList', newval);
        wx.setTabBarBadge({
          index: 2,
          text: this.totalGoodsNum + ''
        });
      },
      deep: true
    }
  },
  methods: {
    changeNum: function changeNum(e, id) {
      // console.log(e.$wx.detail)
      // console.log(id)
      var idx = this.cartGoodsList.findIndex(function (item) {
        return item.goodsId === id;
      });

      if (idx !== -1) {
        this.cartGoodsList[idx].goodsNum = +e.$wx.detail;
      }
    },
    addAddress: function addAddress() {
      var _this = this;

      /* 自：页面跳转
      wx.navigateTo({
        url: '/pages/address'
      }) */
      wx.chooseAddress({
        success: function success(res) {
          var userAddressInfo = {
            uname: res.userName,
            mobile: res.telNumber,
            address: res.provinceName + res.cityName + res.countyName + res.detailInfo
          };
          wx.setStorageSync('userAddressInfo', userAddressInfo);
          _this.addressInfo = userAddressInfo;
        }
      });
    },
    goToCategory: function goToCategory() {
      wx.switchTab({
        url: "/pages/category/index"
      });
    },
    changeStatus: function changeStatus(index) {
      this.cartGoodsList[index].selectStatus = !this.cartGoodsList[index].selectStatus;
    },
    checkAll: function checkAll(flag) {
      this.cartGoodsList.map(function (item) {
        item.selectStatus = !flag;
      });
    },
    delGoods: function delGoods(i) {
      var _this2 = this;

      wx.showModal({
        title: '提示',
        content: '确认删除该商品吗？',
        success: function success(res) {
          if (res.confirm) {
            _this2.cartGoodsList.splice(i, 1);
          } else if (res.cancel) {
            wx.showToast({
              title: '已取消',
              icon: 'none',
              duration: 1000
            });
          }
        }
      });
    },
    addStatement: function addStatement() {
      var orderList = this.cartGoodsList.filter(function (item) {
        return item.selectStatus;
      });
      orderList.map(function (item) {
        item.isOrder = false;
      });
      wx.setStorageSync('orderList', orderList);
      wx.navigateTo({
        url: '/pages/order'
      });
    }
  },
  computed: {
    isAddressEmpty: function isAddressEmpty() {
      return Object.keys(this.addressInfo).length === 0;
    },
    isAllChoose: function isAllChoose() {
      return this.cartGoodsList.every(function (item) {
        return item.selectStatus;
      });
    },
    subPrice: function subPrice() {
      var subprice = 0;
      this.cartGoodsList.map(function (item) {
        if (item.selectStatus) {
          subprice += item.goodsNum * item.goodsPrice;
        }
      });
      return subprice.toFixed(2);
    },
    totalGoodsNum: function totalGoodsNum() {
      var total = 0;
      this.cartGoodsList.map(function (item) {
        if (item.selectStatus) {
          total += item.goodsNum;
        }
      });
      return total;
    }
  }
}, {info: {"components":{"van-icon":{"path":"..\\static\\vant\\icon\\index"},"van-stepper":{"path":"..\\static\\vant\\stepper\\index"},"van-swipe-cell":{"path":"..\\static\\vant\\swipe-cell\\index"}},"on":{"4-33":["tap"],"4-35":["change"]}}, handlers: {'4-31': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.goToCategory($event);
      })();
    
  }},'4-32': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.addAddress($event);
      })();
    
  }},'4-33': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.addAddress($event);
      })();
    
  }},'4-34': {"tap": function proxy (index) {
    
    var _vm=this;
      return (function () {
        _vm.changeStatus(index);
      })();
    
  }},'4-35': {"change": function proxy (item) {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.changeNum($event, item.goodsId);
      })();
    
  }},'4-36': {"tap": function proxy (index) {
    
    var _vm=this;
      return (function () {
        _vm.delGoods(index);
      })();
    
  }},'4-37': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.checkAll(_vm.isAllChoose);
      })();
    
  }},'4-38': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.addStatement($event);
      })();
    
  }}}, models: {}, refs: undefined }, {info: {"components":{"van-icon":{"path":"..\\static\\vant\\icon\\index"},"van-stepper":{"path":"..\\static\\vant\\stepper\\index"},"van-swipe-cell":{"path":"..\\static\\vant\\swipe-cell\\index"}},"on":{"4-33":["tap"],"4-35":["change"]}}, handlers: {'4-31': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.goToCategory($event);
      })();
    
  }},'4-32': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.addAddress($event);
      })();
    
  }},'4-33': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.addAddress($event);
      })();
    
  }},'4-34': {"tap": function proxy (index) {
    
    var _vm=this;
      return (function () {
        _vm.changeStatus(index);
      })();
    
  }},'4-35': {"change": function proxy (item) {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.changeNum($event, item.goodsId);
      })();
    
  }},'4-36': {"tap": function proxy (index) {
    
    var _vm=this;
      return (function () {
        _vm.delGoods(index);
      })();
    
  }},'4-37': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.checkAll(_vm.isAllChoose);
      })();
    
  }},'4-38': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.addStatement($event);
      })();
    
  }}}, models: {}, refs: undefined });