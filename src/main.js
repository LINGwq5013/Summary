/*
 * @Author: your name
 * @Date: 2021-08-12 11:13:59
 * @LastEditTime: 2021-10-19 19:27:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \official-website-master\src\main.js
 */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import $ from 'jquery'
Vue.prototype.$ = $
import ElementUI from 'element-ui';
import Vant from 'vant';
// 解决ie,360使用ES6 promise对象
require('es6-promise').polyfill()
// 这里是解决浏览器兼容，设置在webpack.config.js
import 'babel-polyfill'
Vue.use(Vant)
Vue.use(ElementUI);
import resource from 'vue-resource'
Vue.use(resource)
import VueAwesomeSwiper from 'vue-awesome-swiper';
Vue.use(VueAwesomeSwiper)
import 'swiper/dist/css/swiper.css';
import 'element-ui/lib/theme-chalk/index.css';
/* 路由 */
import router from './router'
import store from './store'
/* axios */
import axios from 'axios'
import 'font-awesome/css/font-awesome.min.css'
Vue.prototype.$axios = axios;
import 'swiper/dist/css/swiper.min.css';

// import "bootstrap/dist/css/bootstrap.min.css"
import './assets/css/bootstrap.min.css'
import './assets/css/reset.min.css'
import './assets/js/bootstrap.min'
import './assets/stylus/icon.styl'
// import './assets/stylus/index.styl';
// 这里是网上下载的bootstrap

// 全局注册 $

import 'animate.css'
import AMap from 'vue-amap';
Vue.use(AMap)
AMap.initAMapApiLoader({

  key: 'cfa87b97f9be63bbe53fac563524f28b',

  plugin: ['AMap.Geolocation','AMap.PlaceSearch','AMap.Geocoder','AMap.ToolBar','AMap.Weather',]
});
/* 头部组件 */
Vue.filter('dateFormat', (dataStr) => {
  var time = new Date(dataStr);
  function timeAdd0(str) {
    if (str < 10) {
      str = '0' + str;
    }
    return str;
  }
  var y = time.getFullYear();
  var m = time.getMonth() + 1;
  var d = time.getDate();
  var h = time.getHours();
  var mm = time.getMinutes();
  var s = time.getSeconds();
  return y + '-' + timeAdd0(m) + '-' + timeAdd0(d) + ' ' + timeAdd0(h) + ':' + timeAdd0(mm) + ':' + timeAdd0(s);
});
import Header from './components/Header.vue'
Vue.component(Header.name, Header)
/* 尾部组件 */
import Footer from './components/Footer'
Vue.component(Footer.name, Footer)

/* 回到顶部 */
import GoTop from './components/GoTop'
Vue.component(GoTop.name, GoTop)
Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  const loginUser = store.state.user;
 if (to.meta.requireAuth) {
    if (loginUser) {
      next();
    } else {
      next("/login");
    }
  }else{
    next();
  } 

 if (to.meta.title) {
    document.title = to.meta.title
  } else {
    next();
  }
});


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
