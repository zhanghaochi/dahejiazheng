import { loginByUsername, logout, getUserInfo } from '@/api/login'
import { getToken, setToken, removeToken } from '@/utils/auth'

const user = {
    state: {
      status: '',
      code: '',
      token: getToken(),
      name: '',
      avatar: '',
      introduction: '',
      roles: []
    },
    mutations: {
      SET_CODE: (state, code) => {
        state.code = code
      },
      SET_TOKEN: (state, token) => {
        state.token = token
      },
      SET_INTRODUCTION: (state, introduction) => {
        state.introduction = introduction
      },
      SET_STATUS: (state, status) => {
        state.status = status
      },
      SET_NAME: (state, name) => {
        state.name = name
      },
      SET_AVATAR: (state, avatar) => {
        state.avatar = avatar
      },
      SET_ROLES: (state, roles) => {
        state.roles = roles
      }
    },
    actions: {
      LoginByUsername({ commit }, userInfo) {
        const username = userInfo.username.trim()
        return new Promise((resolve, reject) => {
          loginByUsername(username, userInfo.password).then(response => {
            const data = response.data
            if(data==101){
              reject('密码错误')
            }else if(data==102){
              reject('用户不存在')
            }else{
              commit('SET_TOKEN', data.token)
              setToken(data.token)
              resolve("登陆成功")
            }
          }).catch(error => {
            reject(error)
          })
        })
      },
      //获取用户信息
      GetUserInfo({ commit, state }) {
        return new Promise((resolve, reject) => {
          getUserInfo(state.token)
            .then(response => {
              const data = response.data
              if (!data) {
                reject('无数据')
              }
              commit('SET_NAME', data.name)
              commit('SET_AVATAR', data.avatar)
              commit('SET_INTRODUCTION', data.introduction)
  
              if (data.roles.length > 0) {
                commit('SET_ROLES', data.roles)
              } else {
                reject('获取角色失败')
              }
              resolve(response)
            })
            .catch(error => {
              reject('获取用户信息失败')
              // reject(error)
              console.log(error)
            })
        })
      },
      //登出  
      LoginOut({ commit }) {
        return new Promise((resolve, reject) => {
          logout()
            .then(() => {
              commit('SET_TOKEN', '')
              commit('SET_ROLES', [])
              removeToken()
              resolve()
            })
            .catch(error => {
              reject(error)
            })
        })
      }
    },
  
  }
  export default user