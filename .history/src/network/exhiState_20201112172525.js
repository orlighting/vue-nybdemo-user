import {request} from "./request";

export function getDetailExhiState(userId) {
  return request({
    url: '/message/detailState',
    method: "post",
    data: {
      userId: userId
  }
  })
}
export function getEasyExhiState(userId) {
  return request({
    url: '/message/easyState ',
    method: "post",
    data: {
      userId: userId
  }
  })
}
