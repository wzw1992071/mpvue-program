require("./common/manifest.js")
require("./common/vendor.js")
require("./common/manifest.js")
require("./common/vendor.js")
global.webpackJsonpMpvue([2],{

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__store_index__ = __webpack_require__(48);




__WEBPACK_IMPORTED_MODULE_0_vue___default.a.prototype.$store = __WEBPACK_IMPORTED_MODULE_2__store_index__["a" /* default */];
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.config.productionTip = false;
__WEBPACK_IMPORTED_MODULE_1__App__["a" /* default */].mpType = 'app';

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__App__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_1_2_0_mpvue_loader_lib_selector_type_script_index_0_App_vue__ = __webpack_require__(47);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(46)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */
var __vue_template__ = null
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_1_2_0_mpvue_loader_lib_selector_type_script_index_0_App_vue__["a" /* default */],
  __vue_template__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\App.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1872f1be", Component.options)
  } else {
    hotAPI.reload("data-v-1872f1be", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 46:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

/* harmony default export */ __webpack_exports__["a"] = ({
  created: function created() {
    console.log('app created and cache logs by setStorageSync');
  }
});

/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__state__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mutations__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__actions__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__getters__ = __webpack_require__(52);







__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_1_vuex__["a" /* default */]);

var store = new __WEBPACK_IMPORTED_MODULE_1_vuex__["a" /* default */].Store({
    state: __WEBPACK_IMPORTED_MODULE_2__state__["a" /* default */],
    getters: __WEBPACK_IMPORTED_MODULE_5__getters__["a" /* default */],
    mutations: __WEBPACK_IMPORTED_MODULE_3__mutations__["a" /* default */],
    actions: __WEBPACK_IMPORTED_MODULE_4__actions__["a" /* default */]
});

/* harmony default export */ __webpack_exports__["a"] = (store);

/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var state = {
    // 用户信息
    userInfo: {},
    // 订单按钮信息
    buttontype: [{
        btnName: "联系卖家",
        fn: function fn(item) {
            wx.makePhoneCall({
                phoneNumber: item.phone //仅为示例，并非真实的电话号码
            });
        },
        className: "defaultBtn"
    }, {
        btnName: "修改地址",
        fn: function fn(item) {
            wx.navigateTo({
                url: "/pages/update/main?id=" + item.orderNumber
            });
        },
        className: "blueBtn"
    }, {
        btnName: "取消订单",
        fn: function fn(item, that) {
            try {
                that.openCarcle();
            } catch (err) {
                that.$emit("openCarcle", item.orderNumber);
            }
        },
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

/* harmony default export */ __webpack_exports__["a"] = (state);

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var mutations = {
    LOGIN: function LOGIN(state, info) {
        // 保存授权信息
        state.userInfo = info;
    }

};

/* harmony default export */ __webpack_exports__["a"] = (mutations);

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var actions = {
    login: function login(_ref, userInfo) {
        var commit = _ref.commit;

        commit('LOGIN', userInfo);
    }
};

/* harmony default export */ __webpack_exports__["a"] = (actions);

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var getters = {
    baseUrl: function baseUrl() {
        return 'http://api.schehuoren.com/';
    },
    userInfo: function userInfo(state) {
        return state.userInfo;
    },
    buttontype: function buttontype(state) {
        return state.buttontype;
    }
};

/* harmony default export */ __webpack_exports__["a"] = (getters);

/***/ })

},[43]);
//# sourceMappingURL=app.js.map