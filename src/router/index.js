import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import BeeButton from '../views/Button.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
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
    path:'/BeeButton',
    name:'BeeButton',
    component:BeeButton
  },
  {
    path:'/BeeRadio',
    name:'BeeRadio',
    component:()=>import('../views/Radio.vue')
  },
  {
    path:'/BeeMessage',
    name:'BeeMessage',
    component:()=>import('../views/Message.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
