import { createRouter, createWebHashHistory } from 'vue-router'
import layout from '../components/layout.vue'

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */'../views/home/index.vue'),
    meta: {
      title: '首页',
      layout: layout
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../views/login/index.vue'),
    meta: {
      title: '登录'
    }
  },
  {
    path: '/404',
    name: '404',
    component: () => import(/* webpackChunkName: "404" */ '../views/notFound/index.vue'),
    meta: {
      title: '404'
    }
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router