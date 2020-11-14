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
export function getNotLook() {
    return request({
      url: '/message/notLookCount',
    })
  }
  export function getLooked() {
    return request({
      url: '/message/notLookCount',
    })
  }