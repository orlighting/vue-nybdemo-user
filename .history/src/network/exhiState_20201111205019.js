import {request} from "./request";

export function getExhiState(userId) {
  return request({
    url: '/message/detailState',
    data: {
      userId: userId
  }
  })
}