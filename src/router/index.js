import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import('@/views/index')
    },
    {
      path: '/layout',
      name: 'layout',
      component: () => import('@/views/layout')
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
      // path: '/detail',
      name: 'detail',
      component: () => import('@/views/detail')
    },    
    {
      path: '/orderlist',
      // path: '/orderlist',
      name: 'orderlist',
      component: () => import('@/views/orderlist')
    }
  ]
})
