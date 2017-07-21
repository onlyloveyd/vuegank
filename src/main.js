import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import NotFound from './components/404'
import Gank from './components/Gank.vue'
import Bonus from './components/Bonus.vue'
import VueParticles from 'vue-particles'
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
Vue.use(VueParticles)

axios.defaults.timeout = 5000
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
axios.defaults.baseURL = 'http://gank.io/api'

const routes = [{
  path: '/',
  component: Gank
}, {
  path: '*',
  component: NotFound
}, {
  path: '/gank/:id',
  component: Gank
}, {
  path: '/bonus',
  component: Bonus
}]

const router = new VueRouter({
  routes
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  ...App
})
