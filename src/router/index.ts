// import { getCookie } from '@/tools'
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: '',
    component: () => import("../views/Home.vue")
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import("../views/Login.vue")
  }, {
    path: '/home',
    name: 'Home',
    component: () => import("../views/Home.vue")
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem("userInfo")

  if (!token && to.path !== '/login') {
    next({ path: 'login' })
  } else {
    if (to.path === '/login' && token) {
      next('/home')
    } else {
      next()
    }
  }
})
export default router
