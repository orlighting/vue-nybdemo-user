import {request} from "./request";

export function setPassword(name,formdata) {
  return request({
    url: '/handin/detail',
    method: "post",
    data: {
      name: name,
      formdata: formdata
  }
  })
}