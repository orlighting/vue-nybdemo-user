import {request} from "./request";

export function getExhiState() {
  return request({
    url: '/message/detailState',
  })
}