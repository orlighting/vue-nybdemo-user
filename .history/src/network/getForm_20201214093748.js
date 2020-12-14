import {request} from "./request";

export function getDetail(meetAddr) {
  return request({
    url: '/search/detail',
    method: "post",
    data: {
      meetAddr: meetAddr
  }
  })
}
export function getEasy(meetAddr) {
  return request({
    url: '/search/easy',
    method: "post",
    data: {
      meetAddr: meetAddr
  }
  })
}