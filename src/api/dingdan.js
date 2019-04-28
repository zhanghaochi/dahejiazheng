import request from '@/utils/request'

export function getlist(data) {
  return request({
    url: '/index/order_helper/selectAllFinishedOrder',
    method: 'post',
    data
  })
}

export function getdetail(order_id) {
  return request({
    url: '/index/order_helper/findOrder',
    method: 'get',
    params: { order_id }
  })
}