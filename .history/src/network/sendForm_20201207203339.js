import {request} from "./request";

export function sendDetail(formdata) {
  return request({
    url: '/api/handin/detail',
    method: "post",
    data: {
      formdata: formdata
  }
  })
}
export function sendEasy(formdata) {
  return request({
    url: '/api/handin/easy',
    method: "post",
    data: {
      formdata: formdata
  }
  })
}