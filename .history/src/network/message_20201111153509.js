import {request} from "./request";

export function getNotLookCount() {
  return request({
    url: '/message/notLookCount',
  })
}