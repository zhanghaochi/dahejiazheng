import axios from 'axios'
import { Message } from 'element-ui'

const service = axios.create({
  baseURL:'https://www.jiejingbaifenbai.top/tp5/public',
  timeout: 5000 // request timeout
})

service.interceptors.response.use(
  response => response,
  error => {
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default service
