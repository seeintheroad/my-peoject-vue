
export const loginRouter = {
  path: '/',
  name: 'login',
  title: '登录页',
  component: () => import('@/components/login')
}

export const appRouter = [
  {
    path: '/index',
    name: 'index',
    component: () => import('@/components/index')
  }
]

export const routers = [
  loginRouter,
  ...appRouter
]
