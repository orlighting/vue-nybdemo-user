import {request} from "./request";

export function getNotLookCount() {
  return request({
    url: '/message/notLookCount',
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