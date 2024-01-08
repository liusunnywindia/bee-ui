import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import BeeButton from '../views/Button.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/bee-ui',
    name: 'Home',
    component: Home
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // },
  {
    path: '/BeeButton',
    name: 'BeeButton',
    component: BeeButton
  },
  {
    path: '/BeeRadio',
    name: 'BeeRadio',
    component: () => import('../views/Radio.vue')
  },
  {
    path: '/BeeMessage',
    name: 'BeeMessage',
    component: () => import('../views/Message.vue')
  },
  {
    path: '/BeeInput',
    name: 'BeeInput',
    component: () => import('../views/Input.vue')
  },
  {
    path: '/test',
    name: 'test',
    component: () => import('../views/test.vue')
  },
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.NODE_ENV === 'production' ? '/bee-ui/' : '/',
  routes
})

export default router
