import {request} from "./request";

export function setPassword(meetAddr,name,Password) {
  return request({
    url: '/handin/detail',
    method: "post",
    data: {
    meetAddr: meetAddr,
    //老密码 6002状态码说明老密码错误
      name: name,
      Password: Password
  }
  })
}