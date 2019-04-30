import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import router from './router'
import store from './store'
import { Message } from 'element-ui'
import { getToken } from '@/utils/auth'

NProgress.configure({ showSpinner: false })

const myrouter=['login','index','join','job','peixun','field','detail','jobdetail','joindetail','peixundetail']

router.beforeEach((to, from, next) => {
  NProgress.start()
  if (getToken()) {
    if (to.path === '/login') {
      next('/orderlist')
      NProgress.done()
    } else {
      if (store.getters.roles.length === 0) {
        store.dispatch('GetUserInfo').then(res => {
          const roles = res.data.roles
          store.dispatch('GenerateRouters', { roles }).then(() => {
            router.addRoutes(store.getters.addRouters)
            next({ ...to, replace: true })
          })
        }).catch((err) => {
          store.dispatch('LoginOut').then(() => {
            Message.error(err || '身份验证失败，请重新登陆')
            next({ path: '/orderlist' })
          })
        })
      } else {
        next()
      }
      next()
    }
  } else {
    //没有token
    if (myrouter.indexOf(to.name)!==-1) {
      next()
    } else {
      next('/login')
    }
    NProgress.done()
  }
})

router.afterEach(() => {
  NProgress.done() // finish progress bar
})