import cookies from 'js-cookie'

const app = {
  state: {
    sidebar: cookies.get('sidebarStatus') ? !!+cookies.get('sidebarStatus') : false,
  },
  mutations: {
    TOGGLE_SIDEBAR: state => {
      state.sidebar = !state.sidebar
      if (state.sidebar) {
        cookies.set('sidebarStatus', 1)
      } else {
        cookies.set('sidebarStatus', 0)
      }
    },
    CLOSE_SIDEBAR: state => {
      cookies.set('sidebarStatus', 0)
      state.sidebar = false
    },
  },
  actions: {
    togglesidebar({ commit }) {
      commit('TOGGLE_SIDEBAR')
    },
    closesidebar({ commit }){
      commit('CLOSE_SIDEBAR')
    }
  }
}

export default app
