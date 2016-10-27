import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import App from './App'
import Chats from './components/Chats'
import Contacts from './components/Contacts'
import Discover from './components/Discover'
import Me from './components/Me'
import Conversation from './components/Conversation'
import Main from './components/Main'
import Profile from './components/Profile'
import 'font-awesome/css/font-awesome.css'

Vue.use(VueRouter)
Vue.use(Vuex)

const routes = [
  { path: '/', redirect: '/Main/Chats' },
  { path: '/Main',
    component: Main,
    children: [
      {
        path: 'Chats',
        component: Chats
      },
      {
        path: 'Contacts',
        component: Contacts
      },
      {
        path: 'Discover',
        component: Discover
      },
      {
        path: 'Me',
        component: Me
      }
    ]
  },
  {
    path: '/Conversation/:conversationId',
    name: 'conversationPage',
    component: Conversation
  },
  {
    path: '/Profile/:userId',
    name: 'profilePage',
    component: Profile
  }
]

const router = new VueRouter({
  routes: routes,
  linkActiveClass: 'active'
})

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
export { router }
