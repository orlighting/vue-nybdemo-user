import { Message } from 'element-ui';
 
export const  warningOpen=(msg)=>{
    Message({
        showClose: true,
        message:msg,
        type: "warning",
        center: true,
        duration:3000
     })
}
 
export const  errorOpen=(msg)=>{
    Message({
        showClose: true,
        message:msg,
        type: "error",
        center: true,
        duration:3000
     })
}
 
export const  successOpen=(msg)=>{
    Message({
        showClose: true,
        message:msg,
        type: "success",
        center: true,
        duration:3000
     })
}
 
 export function warningClose(){
    Message.closeAll();//全局删除Message语句的方法
  }