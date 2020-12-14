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