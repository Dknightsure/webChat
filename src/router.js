import Chats from './components/Chats'
import Contacts from './components/Contacts'
import Discover from './components/Discover'
import Me from './components/Me'
import Conversation from './components/Conversation'
import Main from './components/Main'
import Profile from './components/Profile'
import Login from './components/Login'
import VueRouter from 'vue-router'

const routes = [
  { path: '/', redirect: '/Login' },
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
  },
  {
    path: '/Login',
    component: Login
  }
]

const router = new VueRouter({
  routes: routes,
  linkActiveClass: 'active'
})

export default router
