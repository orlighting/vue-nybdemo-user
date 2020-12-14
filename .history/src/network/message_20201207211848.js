import {request} from "./request";

export function getNotLookCount(userId) {
  return request({
    url: '/message/notLookCount',
    method: "post",
    data: {
        meetAddr: userId
    }
  })
}
export function getNotLook(userId) {
    return request({
      url: '/message/notLook',
      method: "post",
      data: {
        meetAddr: userId
      }
    })
  }
  export function getLooked(userId) {
    return request({
      url: '/message/looked',
      method: "post",
      data: {
          userId: userId
      }
    })
  }