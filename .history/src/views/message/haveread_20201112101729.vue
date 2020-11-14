<template>
<div class="haveRead">
<!-- style="height:100px;width:1000px;background-color: blue;" -->
  <my-table class="myTable"></my-table>
  <ul>
    <li >
      <span>标题</span>
      <span >日期</span>
      <span>内容</span>
      </li>
    <li v-for="(item,index) in msgList" :key="index">
      <span class="title">{{item.title}}</span>
      <span class="createTime">{{item.createTime}}</span>
      <span class="content">{{item.content}}</span>
      </li>
  </ul>

</div>


</template>

<script>

import { getLooked } from 'network/message.js';
import myTable from "../../components/table/myTable";
export default {
  name: "haveread",
  components : {
    myTable
  },
  data(){
    return{
      msgList: [],
      //                columns: [
      //               {
      //                   title: '消息标题',
      //                   key: 'title'
      //               },
      //                                   {
      //                   title: '消息内容',
      //                   key: 'content'
      //               },
      //               {
      //                   title: '消息发送时间',
      //                   key: 'createTime'
      //               },
      //           ],
    }
  },
  created(){
    getLooked(this.$store.getters.token).then(res => {
      console.log(res)
      this.msgList = res.data
      console.log(this.msgList.data)
      

    })
  }
}
</script>

<style lang='scss' scoped>
.myTable{
  width: 50px;
  height: 50px;
}
</style>
