import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/table',
    component: () => import(/* webpackChunkName: "table" */'../views/table/index.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  base: window.__POWERED_BY_QIANKUN__ ? '/sub-vue' : '/'
})

export default router

