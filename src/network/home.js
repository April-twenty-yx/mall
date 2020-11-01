import { request } from './request'

// 将所有与 Home 视图相关的网络请求封装在 home.js文件中，方便管理
export function getHomeMultidata () {
  return request({
    url: '/home/multidata'
  })
}