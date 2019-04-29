import Mock from 'mockjs'
import loginapi from './login'

//登陆
Mock.mock(/\/login\/login/, 'post', loginapi.loginbyusername)
Mock.mock(/\/login\/logout/, 'post', loginapi.logout)
Mock.mock(/\/user\/info\.*/, 'get', loginapi.getuserinfo)

export default Mock