import { asyncRouterMap, constantRouterMap } from '@/router'

function hasPermission(roles, route) {
  if (route.meta && route.meta.roles) {
    return roles.some(role => route.meta.roles.includes(role))
  } else {
    return true
  }
}

function filterAsyncRouter(routers, roles) {
  const res = []
  routers.forEach(route => {
    const tmp = { ...route }
    if (hasPermission(roles, tmp)) {
      if (tmp.children) {
        tmp.children = filterAsyncRouter(tmp.children, roles)
      }
      res.push(tmp)
    }
  })
  return res
}


const permission = {
  state: {
    routers: constantRouterMap,
    addRouters: []
  },
  mutations: {
    SET_ROUTERS: (state, routers) => {
      state.addRouters = routers
      state.routers = constantRouterMap.concat(routers)
    }
  },
  actions: {
    GenerateRouters({ commit }, data) {
      return new Promise(resolve => {
        const { roles } = data
        let accessedrouters
        if (roles.includes('admin')) {
          accessedrouters = asyncRouterMap
        } else {
          accessedrouters = filterAsyncRouter(asyncRouterMap, roles)
        }
        commit('SET_ROUTERS', accessedrouters)
        resolve()
      })
    }
  }
}


export default permission