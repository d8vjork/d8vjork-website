// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// Addons
import meta from 'markdown-it-meta'
import moment from 'moment'

Vue.prototype.$md = require('markdown-it')({
  html: true,
  xhtmlOut: true
}).use(meta)
Vue.prototype.$moment = moment
Vue.prototype.$env = process.env

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
