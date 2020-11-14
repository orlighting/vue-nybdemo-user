<template>
<div class="notRead">
  <my-table></my-table>
<ul>
    <li >
      <span>标题</span>
      <span >日期</span>
      <span>内容</span>
      </li>
    <li v-for="item in msgList" :key="item">
      <span class="title">{{item.title}}</span>
      <span class="createTime">{{item.createTime}}</span>
      <span class="content">{{item.content}}</span>
      </li>
  </ul>
</div>


</template>

<script>
import beaTable from "../../components/table/myTable"
import { getNotLook } from 'network/message.js';
export default {
  name: "notread",
  components:{
    beaTable
  },
  data() {
  //这里存放数据
  return {
      // isshow: true,
      msgList: [],

  };
  },
  created(){

    getNotLook(this.$store.getters.token).then(res => {
      this.msgList = res.data

    })

  }
}
</script>

<style lang='scss' scoped>

</style>
