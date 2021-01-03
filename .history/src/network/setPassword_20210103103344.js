import {request} from "./request";

export function setPassword(name,formdata) {
  return request({
    url: '/handin/detail',
    method: "post",
    data: {
    meetAddr: meetAddr,
    //老密码
      name: name,
      Password: Password
  }
  })
}