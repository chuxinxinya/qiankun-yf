import NProgress from '../utils/progress'

export const useRoute = (router) => {
  router.beforeEach((to, _form, next) => {
    NProgress.start()
    if (to.path === '/login') {
      next()
      return false
    }

    if (!localStorage.getItem('token')) {
      next('/login')
      return false
    }

    if (to.name) {
      next()
      return false
    }

    // 如果找不到路由跳转到404
    next()
    return false
  })

  router.afterEach(() => {
    NProgress.done()
  })
}