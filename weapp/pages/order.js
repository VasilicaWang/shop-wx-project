"use strict";

var _core = _interopRequireDefault(require('./../vendor.js')(0));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_core["default"].page({
  data: {
    active: 'allOrder',
    orderList: [],
    activeOrderList: []
  },
  onLoad: function onLoad() {
    this.orderList = wx.getStorageSync('orderList') || [];
    this.activeOrderList = this.orderList;
  },
  methods: {
    onChange: function onChange(e) {
      switch (e.$wx.detail.name) {
        case 'allOrder':
          this.activeOrderList = this.orderList;
          break;

        case 'unOrder':
          this.activeOrderList = this.orderList.filter(function (item) {
            return !item.isOrder;
          });
          break;

        case 'doneOrder':
          this.activeOrderList = this.orderList.filter(function (item) {
            return item.isOrder;
          });
          break;

        default:
          this.activeOrderList = [];
          break;
      }
    },
    delOrder: function delOrder(i) {
      console.log(i);
    }
  }
}, {info: {"components":{"van-tabs":{"path":"..\\static\\vant\\tabs\\index"},"van-tab":{"path":"..\\static\\vant\\tab\\index"},"van-swipe-cell":{"path":"..\\static\\vant\\swipe-cell\\index"},"van-icon":{"path":"..\\static\\vant\\icon\\index"},"van-divider":{"path":"..\\static\\vant\\divider\\index"}},"on":{"10-49":["change"]}}, handlers: {'10-49': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onChange($event);
      })();
    
  }},'10-50': {"tap": function proxy (index) {
    
    var _vm=this;
      return (function () {
        _vm.delOrder(index);
      })();
    
  }}}, models: {}, refs: undefined });