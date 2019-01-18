global.webpackJsonp([1],{

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_headTab_vue__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_587005eb_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_headTab_vue__ = __webpack_require__(121);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(119)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_headTab_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_587005eb_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_headTab_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\components\\headTab.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] headTab.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-587005eb", Component.options)
  } else {
    hotAPI.reload("data-v-587005eb", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 119:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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
    name: "HeadTab",
    props: ['tabInfo', "choiceTab"],

    data: function data() {
        return {};
    },

    methods: {
        tabChange: function tabChange(value, index) {
            if (index == this.choiceTab) {
                return false;
            }
            this.$emit("changeTab", index);
        }
    },
    onLoad: function onLoad() {}
});

/***/ }),

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('ul', {
    staticClass: "tabBox"
  }, _vm._l((_vm.tabInfo), function(item, index) {
    return _c('li', {
      key: index,
      class: {
        active: (index == _vm.choiceTab)
      },
      attrs: {
        "eventid": '0-' + index
      },
      on: {
        "click": function($event) {
          _vm.tabChange(item.value, index)
        }
      }
    }, [_vm._v(_vm._s(item.title))])
  }))], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-587005eb", esExports)
  }
}

/***/ }),

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_orderItem_vue__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_516d0a57_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_orderItem_vue__ = __webpack_require__(129);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(123)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-516d0a57"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_orderItem_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_516d0a57_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_orderItem_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\components\\orderItem.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] orderItem.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-516d0a57", Component.options)
  } else {
    hotAPI.reload("data-v-516d0a57", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 123:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_buttonGroup__ = __webpack_require__(125);
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
//



/* harmony default export */ __webpack_exports__["a"] = ({
  name: "OrderItem",
  props: ["goods", //商品列表
  "orderTime", //下单时间
  "orderNum", //订单编号
  "shopName", //店铺名称
  "status", //订单状态
  "payStatus", //订单支付状态
  "allMoney", //订单总金额
  "otherStatus", //订单子状态
  "appraise", //订单评价状态
  "shopId"],
  components: {
    ButtonGroup: __WEBPACK_IMPORTED_MODULE_0__components_buttonGroup__["a" /* default */]
  },
  computed: {
    buttonList: function buttonList() {
      return [0, 1, 2];
    }
  },
  data: function data() {
    return {
      orderMainStatus: {
        1: '待付款',
        2: '待发货',
        3: '待收货',
        4: '交易完成',
        6: '退款',
        8: '交易完成',
        11: '退货',
        13: '交易关闭'
      },
      otherOtherStatus: {
        14: '申请退款',
        15: '卖家拒绝退款',
        16: '申请退货',
        17: '卖家拒绝退货',
        18: '等待卖家退款',
        19: '等待退货',
        20: '卖家取消订单',
        21: '拒绝取消订单',
        22: '集采-等待卖家报价',
        23: '集采-待付款',
        24: '未付款-调货',
        25: '未付款-自行协商'
      }
    };
  },

  methods: {
    // 去店铺详情
    goShopDetail: function goShopDetail(shopId) {
      wx.navigateTo({
        url: "/pages/shopDetail/main?shopId=" + shopId
      });
    },
    goOrderDetail: function goOrderDetail() {
      wx.navigateTo({
        url: "/pages/orderDetail/main?orderNum=" + this.orderNum
      });
    }
  }
});

/***/ }),

/***/ 125:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_buttonGroup_vue__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_778e287a_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_buttonGroup_vue__ = __webpack_require__(128);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(126)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-778e287a"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_buttonGroup_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_778e287a_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_buttonGroup_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\components\\buttonGroup.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] buttonGroup.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-778e287a", Component.options)
  } else {
    hotAPI.reload("data-v-778e287a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 126:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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
    name: "ButtonGroup",
    props: ['buttonList'],
    data: function data() {
        return {
            buttontype: [{
                btnName: "联系卖家",
                fn: function fn() {},
                className: "defaultBtn"
            }, {
                btnName: "修改地址",
                fn: function fn() {},
                className: "defaultBtn"
            }, {
                btnName: "取消订单",
                fn: function fn() {},
                className: "defaultBtn"
            }, {
                btnName: "立即支付",
                fn: function fn() {},
                className: "defaultBtn"
            }, {
                btnName: "确认发货",
                fn: function fn() {},
                className: "defaultBtn"
            }]
        };
    },
    onLoad: function onLoad() {
        console.log(this.buttonList);
    }
});

/***/ }),

/***/ 128:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "buttonGroup"
  }, _vm._l((_vm.buttonList), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: "button",
      attrs: {
        "eventid": '0-' + index
      },
      on: {
        "click": _vm.buttontype[item].fn
      }
    }, [_vm._v("\n      " + _vm._s(_vm.buttontype[item].btnName) + "\n  ")])
  }))
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-778e287a", esExports)
  }
}

/***/ }),

/***/ 129:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "item"
  }, [_c('div', {
    staticClass: "title"
  }, [_c('div', {
    staticClass: "shopName",
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": _vm.goShopDetail
    }
  }, [_c('span', {
    staticClass: "iconfont icon-mendian"
  }), _vm._v(" "), _c('p', [_vm._v(_vm._s(_vm.shopName))])], 1), _vm._v(" "), _vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "status"
  }, [(_vm.otherStatus !== 24 && _vm.otherStatus !== 25) ? _c('div', {
    staticClass: "status"
  }, [_vm._v(_vm._s(_vm.orderMainStatus[_vm.status]))]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "action"
  }, [_vm._v(_vm._s(_vm.otherOtherStatus[_vm.otherStatus]))])])]), _vm._v(" "), _c('div', {
    staticClass: "createTime"
  }, [_vm._v("\n    下单时间:   " + _vm._s(_vm.orderTime) + "\n  ")]), _vm._v(" "), (_vm.goods.length > 3) ? _c('div', {
    staticClass: "show-more",
    attrs: {
      "eventid": '1'
    },
    on: {
      "click": function($event) {
        _vm.goOrderDetail()
      }
    }
  }, [_vm._l((_vm.goods), function(item, idx) {
    return _c('div', {
      key: idx
    }, [(idx < 3) ? _c('div', {
      staticClass: "goods"
    }, [_c('div', {
      staticClass: "thumb"
    }), _vm._v(" "), _c('div', {
      staticClass: "info"
    }, [_vm._v(_vm._s(item.goods_name))]), _vm._v(" "), _c('div', {
      staticClass: "data"
    }, [_c('div', {
      staticClass: "price"
    }, [_vm._v("￥" + _vm._s(item.unit_price))]), _vm._v(" "), _c('div', {
      staticClass: "numbers"
    }, [_vm._v("×" + _vm._s(item.num))])])]) : _vm._e()])
  }), _vm._v(" "), _vm._m(1)], 2) : _vm._e(), _vm._v(" "), (_vm.goods.length < 3) ? _c('div', {
    staticClass: "show-more",
    attrs: {
      "eventid": '2'
    },
    on: {
      "click": function($event) {
        _vm.goOrderDetail()
      }
    }
  }, _vm._l((_vm.goods), function(item, idx) {
    return _c('div', {
      key: idx
    }, [_c('div', {
      staticClass: "goods"
    }, [_c('div', {
      staticClass: "thumb"
    }), _vm._v(" "), _c('div', {
      staticClass: "info"
    }, [_vm._v(_vm._s(item.goods_name))]), _vm._v(" "), _c('div', {
      staticClass: "data"
    }, [_c('div', {
      staticClass: "price"
    }, [_vm._v("￥" + _vm._s(item.unit_price))]), _vm._v(" "), _c('div', {
      staticClass: "numbers"
    }, [_vm._v("×" + _vm._s(item.num))])])])])
  })) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "statistics-bar"
  }, [_c('span', [_vm._v("共" + _vm._s(_vm.goods.length) + "种商品 合计:")]), _vm._v(" "), _c('span', {
    staticClass: "price"
  }, [_vm._v("￥" + _vm._s(_vm.allMoney))]), _vm._v(" "), _c('span', {
    staticClass: "sub"
  }, [_vm._v("（不含运费）")])]), _vm._v(" "), _c('div', {
    staticClass: "buttonsArea"
  }, [_c('ButtonGroup', {
    attrs: {
      "buttonList": _vm.buttonList,
      "mpcomid": '0'
    }
  })], 1)])
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('span', {
    staticClass: "icon iconfont icon-jiantou"
  })])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "showMoreOrder"
  }, [_c('div', {
    staticClass: "show-more-text"
  }, [_vm._v("查看更多")]), _vm._v(" "), _c('span', {
    staticClass: "icon iconfont icon-jiantou"
  })])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-516d0a57", esExports)
  }
}

/***/ }),

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "mainBox"
  }, [_c('HeadTab', {
    attrs: {
      "tabInfo": _vm.tabInfo,
      "choiceTab": _vm.choiceTab,
      "eventid": '0',
      "mpcomid": '0'
    },
    on: {
      "changeTab": _vm.changeTab
    }
  }, [_vm._v("\n      头部")]), _vm._v(" "), _c('scroll-view', {
    staticClass: "orderBox",
    staticStyle: {
      "height": "100%"
    },
    attrs: {
      "scroll-y": "",
      "eventid": '1'
    },
    on: {
      "scrolltolower": _vm.loadmore
    }
  }, _vm._l((_vm.orderList), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: "orderItem"
    }, [_c('OrderItem', {
      key: item.shop_id,
      attrs: {
        "order-num": item.order_num,
        "shop-name": item.seller_shop_name,
        "status": item.main_status,
        "payStatus": item.buy_status,
        "goods": item.goods_info,
        "appraise": item.appraise,
        "shop-id": item.shop_id,
        "order-time": item.order_time,
        "other-status": item.other_status,
        "allMoney": item.all_money,
        "mpcomid": '1-' + index
      }
    })], 1)
  }))], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-66132c07", esExports)
  }
}

/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(85);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_66132c07_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(130);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(86)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-66132c07"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_66132c07_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\order\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-66132c07", Component.options)
  } else {
    hotAPI.reload("data-v-66132c07", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 86:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__http_http__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_headTab__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_orderItem__ = __webpack_require__(122);
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
      isMore: false, //是否可以加载更多(默认不允许以免滚动条滚动加载太多)
      page: 0, //默认加载页数
      choiceTab: 0, //选中的页签
      pageSize: 10, //每次请求加载数量
      // 订单列表
      orderList: [],
      // 页签信息
      tabInfo: [{
        title: "全部",
        value: null,
        name: "all"
      }, {
        title: "待付款",
        value: 1,
        name: "pending_payment"
      }, {
        title: "待发货",
        value: 2,
        name: "shipment_pending"
      }, {
        title: "待收货",
        value: 3,
        name: "waiting_for_delivery"
      }, {
        title: "待评价",
        value: 4,
        name: "waiting_for_evaluation"
      }]
    };
  },

  computed: {},
  methods: {
    // 切换页签
    changeTab: function changeTab(index) {
      this.choiceTab = index;
      this.page = 0;
      this.goods = [];
      this.getData();
    },

    // 加载更多
    loadmore: function loadmore() {
      if (this.isMore) {
        this.goods = this.goods.concat([{ name: "小吃11" }, { name: "小吃12" }, { name: "小吃13" }, { name: "小吃14" }, { name: "小吃15" }]);
        this.isMore = false;
      }
    },

    // 获取数据
    getData: function getData() {
      // console.log(order)
      // order.getItems({
      //   user_id:"1111",
      //   status:this.tabInfo[this.choiceTab].value,
      //   value:this.page,
      //   size:this.pageSize
      // }).then(res=>{
      var res = {
        code: 0,
        data: {
          order_infos: [{
            'shop_id': 12,
            order_time: '2017-11-11 12:21',
            'order_num': '2-1452958295-Ucey8XJF',
            'seller_shop_name': '测试号杨氏冷冻1111',
            'seller_phone': '18280933708',
            'main_status': 1,
            'buy_status': 0,
            'other_status': null,
            'appraise': 3,
            'goods_kind': 1,
            'all_money': '6000.00',
            'goods_info': [{
              'goods_name': '测试冻品',
              'unit_price': '200.00',
              'num': 5,
              'goods_img': '',
              'refund_num': 1
            }, {
              'goods_name': '测试冻品',
              'unit_price': '500.00',
              'num': 5,
              'goods_img': '',
              'refund_num': 1
            }, {
              'goods_name': '测试冻品',
              'unit_price': '500.00',
              'num': 5,
              'goods_img': '',
              'refund_num': 1
            }, {
              'goods_name': '测试冻品',
              'unit_price': '500.00',
              'num': 5,
              'goods_img': '',
              'refund_num': 1
            }],
            'refund': {
              'buyer_apply_reason': '321',
              'seller_refuse_reason': '陈浩州',
              'money': '0.00',
              'evidence': ['dada/saddsada.jpg', 'deda.jpg', 'dadsd.jpg']
            }
          }, {
            shop_id: 2,
            order_time: '2017-11-11 12:21',
            'order_num': '2-1452958295-Ucey8XJF',
            'seller_shop_name': '测试号杨氏冷冻',
            'seller_phone': '18280933708',
            'main_status': 2,
            'buy_status': 10,
            'other_status': 16,
            'appraise': 3,
            'goods_kind': 1,
            'all_money': '6000.00',
            'goods_info': [{
              'goods_name': '测试冻品',
              'unit_price': '500.00',
              'num': 5,
              'goods_img': '',
              'refund_num': 1
            }],
            'refund': {
              'buyer_apply_reason': '321',
              'seller_refuse_reason': '陈浩州',
              'money': '0.00',
              'evidence': ['dada/saddsada.jpg', 'deda.jpg', 'dadsd.jpg']
            }
          }, {
            shop_id: 9,
            order_time: '2017-11-11 12:21',
            'order_num': '2-1452958295-Ucey8XJF',
            'seller_shop_name': '测试号杨氏冷冻',
            'seller_phone': '18280933708',
            'main_status': 4,
            'buy_status': 10,
            'other_status': 16,
            'appraise': 2,
            'goods_kind': 1,
            'all_money': '6000.00',
            'goods_info': [{
              'goods_name': '测试冻品',
              'unit_price': '500.00',
              'num': 5,
              'goods_img': '',
              'refund_num': 1
            }],
            'refund': {
              'buyer_apply_reason': '321',
              'seller_refuse_reason': '陈浩州',
              'money': '0.00',
              'evidence': ['dada/saddsada.jpg', 'deda.jpg', 'dadsd.jpg']
            }
          }, {
            shop_id: 8,
            order_time: '2017-11-11 12:21',
            'order_num': '2-1452958295-Ucey8XJF',
            'seller_shop_name': '测试号杨氏冷冻',
            'seller_phone': '18280933708',
            'main_status': 4,
            'buy_status': 1,
            'other_status': 16,
            'appraise': 4,
            'goods_kind': 1,
            'all_money': '6000.00',
            'goods_info': [{
              'goods_name': '测试冻品',
              'unit_price': '500.00',
              'num': 5,
              'goods_img': '',
              'refund_num': 1
            }],
            'refund': {
              'buyer_apply_reason': '321',
              'seller_refuse_reason': '陈浩州',
              'money': '0.00',
              'evidence': ['dada/saddsada.jpg', 'deda.jpg', 'dadsd.jpg']
            }
          }, {
            shop_id: 89,
            order_time: '2017-11-11 12:21',
            'order_num': '2-1452958295-Ucey8XJF',
            'seller_shop_name': '测试号杨氏冷冻',
            'seller_phone': '18280933708',
            'main_status': 3,
            'buy_status': 2,
            'other_status': 16,
            'appraise': 3,
            'goods_kind': 1,
            'all_money': '6000.00',
            'goods_info': [{
              'goods_name': '测试冻品',
              'unit_price': '500.00',
              'num': 5,
              'goods_img': '',
              'refund_num': 1
            }],
            'refund': {
              'buyer_apply_reason': '321',
              'seller_refuse_reason': '陈浩州',
              'money': '0.00',
              'evidence': ['dada/saddsada.jpg', 'deda.jpg', 'dadsd.jpg']
            }
          }],
          page: 1,
          total_count: 50,
          diff_count: {
            waitPayCount: 0,
            waitSendCount: 0,
            waitGetCount: 3,
            waitAppraiseCount: 1
          }
        },
        message: '获取成功'
      };
      this.orderList = this.orderList.concat(res.data.order_infos);
      // }).catch(err=>{
      // console.log("请求订单列表错误",err)
      // })
    }
  },
  components: {
    OrderItem: __WEBPACK_IMPORTED_MODULE_2__components_orderItem__["a" /* default */],
    HeadTab: __WEBPACK_IMPORTED_MODULE_1__components_headTab__["a" /* default */]
  },
  onLoad: function onLoad() {
    wx.showTabBar();
    this.getData();
  }
});

/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export login */
/* unused harmony export order */
/* unused harmony export me */
/* unused harmony export oftenBuy */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_request__ = __webpack_require__(89);

var login = {};

var order = {
    // 获取订单列表
    getItems: function getItems(data) {
        return Object(__WEBPACK_IMPORTED_MODULE_0__utils_request__["a" /* default */])({
            url: '/?m=Buyers&c=BuyOrderMain&a=orderList',
            data: data,
            method: 'GET'
        });
    }
};

var me = {};
var oftenBuy = {};


/***/ }),

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__);

// 使用微信request
var uri = 'http://test.m.zdongpin.com/';
var request = function request(_ref) {
  var url = _ref.url,
      method = _ref.method,
      data = _ref.data;

  return new __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
    wx.showLoading();
    wx.request({
      url: uri + url,
      data: data,
      method: method,
      header: { 'content-type': 'application/x-www-form-urlencoded;charset=utf-8' },
      success: function success(response) {
        wx.hideLoading();
        var res = response.data;
        if (response.statusCode !== 200) {
          // 请求失败
          console.log('请求失败');
          return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a.reject('error');
        } else {
          resolve(res);
        }
      },
      fail: function fail(error) {
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a.reject(error);
      }
    });
  });
};

/* harmony default export */ __webpack_exports__["a"] = (request);

/***/ })

},[84]);
//# sourceMappingURL=main.js.map