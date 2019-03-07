import request from '@/request'
export function getTest(apiRoute) {
    return request({
      url: apiRoute,
      method: 'get'
    })
  }