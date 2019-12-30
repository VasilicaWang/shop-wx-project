"use strict";

var _core = _interopRequireDefault(require('./../vendor.js')(0));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_core["default"].component({
  methods: {
    jumpToSearch: function jumpToSearch() {
      wx.navigateTo({
        url: '/pages/search'
      });
    }
  }
}, {info: {"components":{},"on":{}}, handlers: {'28-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.jumpToSearch($event);
      })();
    
  }}}, models: {}, refs: undefined });