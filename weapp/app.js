"use strict";

var _core = _interopRequireDefault(require('./vendor.js')(0));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_core["default"].app({
  onShow: function onShow() {
    // wx38d8faffac4d34d2
    var num = 0;
    var cartGoodsList = wx.getStorageSync('cartGoodsList') || [];
    cartGoodsList && cartGoodsList.map(function (item) {
      num += item.goodsNum;
    });
    wx.setTabBarBadge({
      index: 2,
      text: num + ''
    });
  }
}, {info: {"noPromiseAPI":["createSelectorQuery"]}, handlers: {}, models: {}, refs: undefined }, {info: {"noPromiseAPI":["createSelectorQuery"]}, handlers: {}, models: {}, refs: undefined });