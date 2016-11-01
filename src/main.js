import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import App from './App'
import router from './router.js'
import 'font-awesome/css/font-awesome.css'

Vue.use(VueRouter)
Vue.use(Vuex)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   template: '<App/>',
//   components: { App }
// })
