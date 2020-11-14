<template>
<div class="notRead">
  <my-table :data1='this.msgList'></my-table>
</div>


</template>

<script>
import myTable from "../../components/table/myTable"
import { getNotLook } from 'network/message.js';
export default {
  name: "notread",
  components:{
    myTable
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
