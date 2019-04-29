import Vue from 'vue'
import Router from 'vue-router'
import layout from '@/views/layout/layout'

Vue.use(Router)


export const constantRouterMap = [
  {
    path: '/',
    name: 'index',
    component: () => import('@/views/index')
  },

  {
    path: '/test',
    name: 'test',
    component: () => import('@/views/test')
  },
  {
    path: '/join',
    name: 'join',
    component: () => import('@/views/join')
  },
  {
    path: '/job',
    name: 'job',
    component: () => import('@/views/job')
  },
  {
    path: '/peixun',
    name: 'peixun',
    component: () => import('@/views/peixun')
  },
  {
    path: '/field',
    name: 'field',
    component: () => import('@/views/field')
  },
  {
    path: '/detail',
    name: 'detail',
    component: () => import('@/views/detail')
  },
  // {
  //   path: '/orderlist',
  //   name: 'orderlist',
  //   component: () => import('@/views/orderlist')
  // },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login')
  }
]


export const asyncRouterMap = [
  {
    path: '/orderlist',
    component: layout,
    redirect: '/orderlist/index',
    meta: { title: '订单', icon: 'orderlist', roles: ['admin'] },
    children: [
      {
        path: 'index',
        component: () => import('@/views/orderlist'),
        name: 'orderlist',
        meta: { title: '订单', icon: 'orderlist', roles: ['admin'] }
      }
    ]
  },
  {
    path: '/joblist',
    component: layout,
    redirect: '/joblist/index',
    meta: { title: '招聘', icon: 'joblist', roles: ['admin'] },
    children: [
      {
        path: 'index',
        component: () => import('@/views/joblist'),
        name: 'joblist',
        meta: { title: '招聘', icon: 'joblist', roles: ['admin'] }
      }
    ]
  },
  {
    path: '/joinlist',
    component: layout,
    redirect: '/joinlist/index',
    meta: { title: '加盟', icon: 'joinlist', roles: ['admin'] },
    children: [
      {
        path: 'index',
        component: () => import('@/views/joinlist'),
        name: 'joinlist',
        meta: { title: '加盟', icon: 'joinlist', roles: ['admin'] }
      }
    ]
  },
  {
    path: '/peixunlist',
    component: layout,
    redirect: '/peixunlist/index',
    meta: { title: '培训', icon: 'peixunlist', roles: ['admin'] },
    children: [
      {
        path: 'index',
        component: () => import('@/views/peixunlist'),
        name: 'peixunlist',
        meta: { title: '培训', icon: 'peixunlist', roles: ['admin'] }
      }
    ]
  },
]


export default new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})
