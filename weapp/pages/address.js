"use strict";

var _core = _interopRequireDefault(require('./../vendor.js')(0));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_core["default"].page({
  data: {
    addressInfo: [],
    showField: false,
    addressField: {
      uname: '',
      mobile: '',
      address: '',
      defaultAddress: false,
      addressId: +new Date()
    }
  },
  onLoad: function onLoad() {
    this.addressInfo = wx.getStorageSync('addressInfo') || [];
  },
  methods: {
    addAddress: function addAddress() {
      this.showField = true;
    },
    onConfirm: function onConfirm() {
      if (this.addressField.uname.trim().length !== 0 && this.addressField.mobile.trim().length !== 0 && this.addressField.address.trim().length !== 0) {
        if (this.addressInfo.length === 0) {
          this.addressField.defaultAddress = true;
        }

        this.addressInfo.push(this.addressField);
        wx.setStorageSync('addressInfo', this.addressInfo);
        this.showField = false;
        return false;
      }

      wx.showToast({
        title: '以上三项为必填项，请填写完整',
        icon: 'none',
        duration: 2000
      });
      this.showField = false;
    },
    onClose: function onClose() {
      this.showField = false;
    },
    // input框双向数据绑定  好麻烦
    changeName: function changeName(e) {
      this.addressField.uname = e.$wx.detail;
    },
    changeMobile: function changeMobile(e) {
      this.addressField.mobile = e.$wx.detail;
    },
    changeAddress: function changeAddress(e) {
      this.addressField.address = e.$wx.detail;
    },
    delAddress: function delAddress(id) {
      var _this = this;

      var idx = this.addressInfo.findIndex(function (item) {
        return item.addressId === id;
      });

      if (idx !== -1) {
        wx.showModal({
          title: '提示',
          content: '确认删除地址吗？',
          success: function success(res) {
            if (res.confirm) {
              _this.addressInfo.splice(idx, 1);

              wx.setStorageSync('addressInfo', _this.addressInfo);
            }
          }
        });
      }
    },
    getAddressId: function getAddressId(e) {
      console.log(e.$wx.detail);
      this.addressInfo.map(function (item) {
        item.defaultAddress = false;
      });
      var idx = this.addressInfo.findIndex(function (item) {
        return item.addressId === +e.$wx.detail.value;
      });
      console.log(idx);
      this.addressInfo[idx].defaultAddress = true;
      wx.setStorageSync('addressInfo', this.addressInfo);
    }
  }
}, {info: {"components":{"van-icon":{"path":"..\\static\\vant\\icon\\index"},"van-divider":{"path":"..\\static\\vant\\divider\\index"},"van-dialog":{"path":"..\\static\\vant\\dialog\\index"},"van-field":{"path":"..\\static\\vant\\field\\index"}},"on":{"9-1":["tap"],"9-3":["cancel","confirm"],"9-5":["input"],"9-6":["input"],"9-7":["input"]}}, handlers: {'9-0': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.getAddressId($event);
      })();
    
  }},'9-1': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.delAddress(item.addressId);
      })();
    
  }},'9-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.addAddress($event);
      })();
    
  }},'9-3': {"cancel": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onClose($event);
      })();
    
  }, "confirm": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onConfirm($event);
      })();
    
  }},'9-5': {"input": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.changeName($event);
      })();
    
  }},'9-6': {"input": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.changeMobile($event);
      })();
    
  }},'9-7': {"input": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.changeAddress($event);
      })();
    
  }}}, models: {}, refs: undefined }, {info: {"components":{"van-icon":{"path":"..\\static\\vant\\icon\\index"},"van-divider":{"path":"..\\static\\vant\\divider\\index"},"van-dialog":{"path":"..\\static\\vant\\dialog\\index"},"van-field":{"path":"..\\static\\vant\\field\\index"}},"on":{"9-1":["tap"],"9-3":["cancel","confirm"],"9-5":["input"],"9-6":["input"],"9-7":["input"]}}, handlers: {'9-0': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.getAddressId($event);
      })();
    
  }},'9-1': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.delAddress(item.addressId);
      })();
    
  }},'9-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.addAddress($event);
      })();
    
  }},'9-3': {"cancel": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onClose($event);
      })();
    
  }, "confirm": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onConfirm($event);
      })();
    
  }},'9-5': {"input": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.changeName($event);
      })();
    
  }},'9-6': {"input": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.changeMobile($event);
      })();
    
  }},'9-7': {"input": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.changeAddress($event);
      })();
    
  }}}, models: {}, refs: undefined }, {info: {"components":{"van-icon":{"path":"..\\static\\vant\\icon\\index"},"van-divider":{"path":"..\\static\\vant\\divider\\index"},"van-dialog":{"path":"..\\static\\vant\\dialog\\index"},"van-field":{"path":"..\\static\\vant\\field\\index"}},"on":{"9-1":["tap"],"9-3":["cancel","confirm"],"9-5":["input"],"9-6":["input"],"9-7":["input"]}}, handlers: {'9-0': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.getAddressId($event);
      })();
    
  }},'9-1': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.delAddress(item.addressId);
      })();
    
  }},'9-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.addAddress($event);
      })();
    
  }},'9-3': {"cancel": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onClose($event);
      })();
    
  }, "confirm": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onConfirm($event);
      })();
    
  }},'9-5': {"input": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.changeName($event);
      })();
    
  }},'9-6': {"input": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.changeMobile($event);
      })();
    
  }},'9-7': {"input": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.changeAddress($event);
      })();
    
  }}}, models: {}, refs: undefined });