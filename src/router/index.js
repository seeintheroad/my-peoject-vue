import Vue from 'vue'
import Router from 'vue-router'
import {routers} from './router'

Vue.use(Router)

const RouterConfig = {
  mode: 'history',
  routes: routers
}

export const router = new Router(RouterConfig)

// 前端控制是否能进去
router.beforeEach((to, form, next) => {
  // 判断加载地址是否为 /login开头的
  if (to.path === '/') {
    next()
  } else {
    if (sessionStorage.getItem('Authorization')) {
      next()
    } else {
      next('/')
    }

  }
})
