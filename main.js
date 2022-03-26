import App from './App'
// #ifndef VUE3
import Vue from 'vue'
import store from './store'
import request from './utils/request.js'
import lib from 'utils/network/lib.js'
// import dropdown from 'components/dt-dropdown/dt-dropdown.vue'
// Vue.component('dropdown', dropdown)
Vue.prototype.$store = store
Vue.prototype.request = request
Vue.prototype.lib = lib
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
    ...App,
	store,
	request,
	lib,
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif