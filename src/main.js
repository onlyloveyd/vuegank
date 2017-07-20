import Vue from 'vue'
import VueRouter from 'vue-router'
import store from './store'
import App from './App'
import NotFound from './components/404'
import Android from './components/Android.vue'
import iOS from './components/iOS.vue'
import Video from './components/Video.vue'
import Res from './components/Res.vue'
import Bonus from './components/Bonus.vue'
import Js from './components/JS.vue'
import Element from 'element-ui'

import VueResource from 'vue-resource'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.css'
import '../src/base.css'
import 'element-ui/lib/theme-default/index.css'

Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(axios)
Vue.use(Element)

axios.defaults.timeout = 5000
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
axios.defaults.baseURL = 'http://gank.io/api'

const routes = [{
  path: '/',
  component: Android
}, {
  path: '*',
  component: NotFound
}, {
  path: '/android',
  component: Android
}, {
  path: '/ios',
  component: iOS
}, {
  path: '/video',
  component: Video
}, {
  path: '/bonus',
  component: Bonus
}, {
  path: '/res',
  component: Res
}, {
  path: '/js',
  component: Js
}]

const router = new VueRouter({
  routes
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  ...App
})
