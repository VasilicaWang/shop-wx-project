"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getGoodsNum = getGoodsNum;

function getGoodsNum() {
  var num = 0;
  var cartGoodsList = wx.getStorageSync('cartGoodsList') || [];
  cartGoodsList && cartGoodsList.map(function (item) {
    if (item.selectStatus) num += item.goodsNum;
  });
  wx.setTabBarBadge({
    index: 2,
    text: num + ''
  });
}