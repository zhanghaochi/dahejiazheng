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

export function getjoinlist(data) {
  return request({
    url: '/index/join_helper/selectJoiner',
    method: 'post',
    data
  })
}

export function getjoindetail(id) {
  return request({
    url: '/index/join_helper/findJoiner',
    method: 'get',
    params: { id }
  })
}


export function getjoblist(data) {
  return request({
    url: '/index/recruit_helper/selectRecruiter',
    method: 'post',
    data
  })
}

export function getjobdetail(id) {
  return request({
    url: '/index/recruit_helper/findRecruiter',
    method: 'get',
    params: { id }
  })
}



export function getpeixunlist(data) {
  return request({
    url: '/index/train_helper/selectTrainer',
    method: 'post',
    data
  })
}

export function getpeixundetail(id) {
  return request({
    url: '/index/train_helper/findTrainer',
    method: 'get',
    params: { id }
  })
}