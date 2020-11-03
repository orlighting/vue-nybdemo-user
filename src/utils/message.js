import { Message } from 'element-ui';
 
export const  warningOpen=(msg)=>{
    Message({
        showClose: true,
        message:msg,
        type: msg,
        center: true,
        duration:3000
     })
}
 
export const  errorOpen=(msg)=>{
    Message({
        showClose: true,
        message:msg,
        type: "提交失败！",
        center: true,
        duration:3000
     })
}
 
export const  successOpen=(msg)=>{
    Message({
        showClose: true,
        message:msg,
        type: "提交成功！",
        center: true,
        duration:3000
     })
}
 
 export function warningClose(){
    Message.closeAll();//全局删除Message语句的方法
  }