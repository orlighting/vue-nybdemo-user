import {request} from "./request";

export function getNotLookCount(userId) {
  return request({
    url: '/message/notLookCount',
    method: "post",
    data: {
        userId: userId
    }
  })
}
export function getNotLook(userId) {
    return request({
      url: '/message/notlook',
      method: "post",
      data: {
          userId: userId
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