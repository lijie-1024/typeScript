import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'

import Component from 'vue-class-component'

import axios from 'axios'
Vue.prototype.$axios = axios;

Vue.config.productionTip = false
// 路由守卫
Component.registerHooks([
  'beforeRouteEnter',//进入路由之前
  'beforeRouteLeave',//离开路由之前
  'beforeRouteUpdate'
])

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
