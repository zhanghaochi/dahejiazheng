import request from '@/utils/request'

export function sendjoin(obj) {
    const data = {
        name: obj.name,
        phone: obj.phone,
        company_card: obj.companycard,
        item: obj.item
    }
    return request({
        url: '/index/join_helper/doJoin',
        method: 'post',
        data
    })
}

export function sendjob(obj) {
    const data = {
        name: obj.name,
        phone: obj.phone,
        idcard: obj.idcard,
        sex: obj.sex,
        jobscopes: obj.jobscopes
    }
    return request({
        url: '/index/join_helper/doJoin',
        method: 'post',
        data
    })
}

export function sendpeixun(obj) {
    const data = {
        name: obj.name,
        phone: obj.phone,
        idcard: obj.idcard,
        sex: obj.sex,
        major: obj.major
    }
    return request({
        url: '/index/join_helper/doJoin',
        method: 'post',
        data
    })
}