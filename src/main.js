import Vue from 'vue'
import App from './App'
import store from './store/index'


Vue.prototype.$store = store
Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()

export default {
  // 这个字段走 app.json
  config: {
    // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
    pages: [
      '^pages/login/main',//登陆授权页
      'pages/index/main',//首页
      'pages/shopCar/main',//购物车
      'pages/order/main',//订单
      'pages/oftenBuy/main',//常购
      'pages/me/main',//我的
      'pages/update/main',//修改订单资料
    ],
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
      },{
        pagePath: 'pages/shopCar/main',
        text: '购物车',
        iconPath: '/static/images/shopCar.png',
        selectedIconPath: '/static/images/shopCarSelect.png'
      },{
        pagePath: 'pages/order/main',
        text: '订单',
        iconPath: '/static/images/order.png',
        selectedIconPath: '/static/images/orderSelect.png'
      },{
        pagePath: 'pages/oftenBuy/main',
        text: '常购',
        iconPath: '/static/images/often.png',
        selectedIconPath: '/static/images/oftenSelect.png'
      },{
        pagePath: 'pages/me/main',
        text: '我的',
        iconPath: '/static/images/me.png',
        selectedIconPath: '/static/images/meSelect.png'
      }]
    }
  }
}
