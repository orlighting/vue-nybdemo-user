import {request} from "./request";

export function setPassword(meetAddr,name,password) {
  return request({
    url: '/manage/changePassword',
    method: "post",
    data: {
    meetAddr: meetAddr,
    //老密码 6002状态码说明老密码错误
      name: name,
      password: password
  }
  })
}
