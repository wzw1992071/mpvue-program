global.webpackJsonp([2],{

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__store_index__ = __webpack_require__(47);




__WEBPACK_IMPORTED_MODULE_0_vue___default.a.prototype.$store = __WEBPACK_IMPORTED_MODULE_2__store_index__["a" /* default */];
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.config.productionTip = false;
__WEBPACK_IMPORTED_MODULE_1__App__["a" /* default */].mpType = 'app';

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__App__["a" /* default */]);
app.$mount();

/* harmony default export */ __webpack_exports__["default"] = ({
  // 这个字段走 app.json
  config: {
    // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
    pages: ['^pages/login/main', //登陆授权页
    'pages/index/main', //首页
    'pages/shopCar/main', //购物车
    'pages/order/main', //订单
    'pages/oftenBuy/main', //常购
    'pages/me/main'],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#000',
      navigationBarTitleText: '找冻品网',
      navigationBarTextStyle: '#fff'
    },
    tabBar: {
      color: '#8A8A8A',
      selectedColor: '#3c91f4',
      list: [{
        pagePath: 'pages/index/main',
        text: '首页',
        iconPath: '/static/images/shouye.png',
        selectedIconPath: '/static/images/shouyeSelect.png'
      }, {
        pagePath: 'pages/shopCar/main',
        text: '购物车',
        iconPath: '/static/images/shopCar.png',
        selectedIconPath: '/static/images/shopCarSelect.png'
      }, {
        pagePath: 'pages/order/main',
        text: '订单',
        iconPath: '/static/images/order.png',
        selectedIconPath: '/static/images/orderSelect.png'
      }, {
        pagePath: 'pages/oftenBuy/main',
        text: '常购',
        iconPath: '/static/images/often.png',
        selectedIconPath: '/static/images/oftenSelect.png'
      }, {
        pagePath: 'pages/me/main',
        text: '我的',
        iconPath: '/static/images/me.png',
        selectedIconPath: '/static/images/meSelect.png'
      }]
    }
  }
});

/***/ }),

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_App_vue__ = __webpack_require__(46);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(44)
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_App_vue__["a" /* default */],
  __vue_template__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\App.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-626b297c", Component.options)
  } else {
    hotAPI.reload("data-v-626b297c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 44:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

/* harmony default export */ __webpack_exports__["a"] = ({
  created: function created() {
    // 调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || [];
    logs.unshift(Date.now());
    wx.setStorageSync('logs', logs);

    console.log('app created and cache logs by setStorageSync');
  }
});

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__state__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mutations__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__actions__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__getters__ = __webpack_require__(51);







__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_1_vuex__["a" /* default */]);

var store = new __WEBPACK_IMPORTED_MODULE_1_vuex__["a" /* default */].Store({
    state: __WEBPACK_IMPORTED_MODULE_2__state__["a" /* default */],
    getters: __WEBPACK_IMPORTED_MODULE_5__getters__["a" /* default */],
    mutations: __WEBPACK_IMPORTED_MODULE_3__mutations__["a" /* default */],
    actions: __WEBPACK_IMPORTED_MODULE_4__actions__["a" /* default */]
});

/* harmony default export */ __webpack_exports__["a"] = (store);

/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var state = {
    userInfo: {}
};

/* harmony default export */ __webpack_exports__["a"] = (state);

/***/ }),

/***/ 49:
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

/***/ 50:
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

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var getters = {
    baseUrl: function baseUrl() {
        return 'http://api.schehuoren.com/';
    },
    userInfo: function userInfo(state) {
        return state.userInfo;
    }
};

/* harmony default export */ __webpack_exports__["a"] = (getters);

/***/ })

},[41]);
//# sourceMappingURL=app.js.map