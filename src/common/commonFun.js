export function getGoodsNum() {
  let num = 0
  let cartGoodsList = wx.getStorageSync('cartGoodsList') || []
  cartGoodsList && cartGoodsList.map(item => {
    if (item.selectStatus) num += item.goodsNum
  })
  wx.setTabBarBadge({
    index: 2,
    text: num + ''
  })
}
