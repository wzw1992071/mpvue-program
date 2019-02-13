require("../../common/manifest.js")
require("../../common/vendor.js")
require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([6],{

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(131);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 131:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_1_2_0_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_1_2_0_mpvue_loader_lib_template_compiler_index_id_data_v_319c26b4_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_1_2_0_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(134);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(132)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-319c26b4"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_1_2_0_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_1_2_0_mpvue_loader_lib_template_compiler_index_id_data_v_319c26b4_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_1_2_0_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\orderDetail\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-319c26b4", Component.options)
  } else {
    hotAPI.reload("data-v-319c26b4", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 132:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_orderCarcle__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vuex__ = __webpack_require__(11);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      orderNum: "", // 订单编号
      firstStatusName: "订单已完成", //订单状态
      order_type: null, // 订单状态
      appraise: null, // 评价状态
      // 订单退款退货状态
      refund_order_type: null,
      orderData: {},
      sellerPhone: "123456789", //卖家电话
      carcleShow: false //是否显示
    };
  },

  computed: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_2_vuex__["b" /* mapGetters */])(["buttontype"]), {
    buttonList: function buttonList() {
      // return [0,1,2]
      return [{
        type: 0,
        phone: this.sellerPhone
      }, {
        type: 1,
        orderNumber: this.orderNum
      }, {
        type: 2,
        orderNumber: this.orderNum
      }];
    }
  }),
  methods: {
    // 复制到剪切板
    copyOrderNo: function copyOrderNo() {
      var that = this;
      wx.setClipboardData({
        data: that.orderNum,
        success: function success(res) {
          wx.getClipboardData({
            success: function success(res) {
              wx.showToast({
                title: "复制成功",
                icon: "success",
                duration: 500
              });
            }
          });
        }
      });
    },
    handleClick: function handleClick(item) {
      this.buttontype[item.type].fn(item, this);
    },
    openCarcle: function openCarcle() {
      wx.hideTabBar();
      this.carcleShow = true;
    },
    commitCarcle: function commitCarcle() {},
    closeCarcle: function closeCarcle() {
      this.carcleShow = false;
      wx.showTabBar();
    }
  },
  components: {
    OrderCarcle: __WEBPACK_IMPORTED_MODULE_1__components_orderCarcle__["a" /* default */]
  },
  onLoad: function onLoad(option) {
    wx.hideTabBar();
    this.orderNum = option.orderNum;
  }
});

/***/ }),

/***/ 134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "mainBox"
  }, [_c('div', {
    staticClass: "body-content"
  }, [_c('div', {
    staticClass: "top-status"
  }, [_c('div', {
    staticClass: "status-item"
  }, [_c('div', {
    staticClass: "orderLine"
  }, [_c('div', [_vm._v("\n            订单编号: " + _vm._s(_vm.orderNum) + "\n          ")]), _vm._v(" "), _c('div', {
    staticClass: "copy",
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": _vm.copyOrderNo
    }
  }, [_vm._v("\n            复制编号\n          ")])]), _vm._v(" "), _c('div', [_vm._v("\n          " + _vm._s(_vm.firstStatusName) + "\n        ")])])]), _vm._v(" "), _c('div', {
    staticClass: "buttonsArea"
  }, [_c('div', {
    staticClass: "buttonGroup"
  }, _vm._l((_vm.buttonList), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: "button",
      class: _vm.buttontype[item.type].className,
      attrs: {
        "eventid": '1_' + index
      },
      on: {
        "click": function($event) {
          _vm.handleClick(item)
        }
      }
    }, [_vm._v("\n          " + _vm._s(_vm.buttontype[item.type].btnName) + "\n        ")])
  }))])]), _vm._v(" "), (_vm.carcleShow) ? _c('OrderCarcle', {
    attrs: {
      "eventid": '2',
      "mpcomid": '0'
    },
    on: {
      "commitCarcle": _vm.commitCarcle,
      "closeCarcle": _vm.closeCarcle
    }
  }) : _vm._e()], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-319c26b4", esExports)
  }
}

/***/ })

},[130]);
//# sourceMappingURL=main.js.map